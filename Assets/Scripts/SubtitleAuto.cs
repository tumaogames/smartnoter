// SubtitleAuto.cs
using System;
using System.Text;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

[DisallowMultipleComponent]
[RequireComponent(typeof(TMP_Text))]
public sealed class SubtitleAuto : MonoBehaviour
{
    [Serializable]
    public struct Line
    {
        [TextArea(2, 4)] public string text;
        [Min(0f)] public float holdSeconds;
    }

    public enum ScrollMotion { Instant, Duration, Speed }

    [Header("Playback")]
    [SerializeField, Min(1f)] float charsPerSecond = 45f;
    [SerializeField] bool loop = false;
    [SerializeField] Line[] lines;

    [Header("Auto-Scroll")]
    [SerializeField] ScrollRect scroll;
    [SerializeField] Scrollbar externalScrollbar;
    [SerializeField] ScrollMotion scrollMotion = ScrollMotion.Duration;
    [SerializeField, Min(0f)] float scrollSnapTime = 0.15f;
    [SerializeField, Min(0f)] float scrollSpeed = 6f;
    [SerializeField, Range(0.25f, 5f)] float linesPerStep = 1f;
    [SerializeField, Range(0f, 0.5f)] float topSafeMargin = 0.06f;
    [SerializeField, Min(0)] int startAutoScrollAtLine = 0; // 0-based: auto-scroll begins when this line STARTS

    [Header("Inspector Control")]
    [SerializeField] bool manualScroll = false;
    [SerializeField, Range(0f, 1f)] float manualScrollValue = 1f; // 1=top, 0=bottom

    TMP_Text _label;
    string _fullText = string.Empty;
    int[] _lineEnd;

    int _idx;
    float _t0;
    float _holdUntil;
    bool _holding;
    bool _running;
    int _lastVisible;

    bool _scrolling;
    float _scrollFrom;
    float _scrollTo;
    float _scrollT;
    float _scrollDur;

    void Awake()
    {
        if (_label == null) _label = GetComponent<TMP_Text>();
        if (scroll == null) scroll = GetComponentInParent<ScrollRect>();
    }

    void OnEnable() { StartPlayback(); }

    public void StartPlayback()
    {
        _running = _label != null && lines != null && lines.Length > 0;
        if (!_running)
        {
            if (_label != null) { _label.text = string.Empty; _label.maxVisibleCharacters = 0; }
            return;
        }

        if (startAutoScrollAtLine < 0) startAutoScrollAtLine = 0;
        if (startAutoScrollAtLine >= lines.Length) startAutoScrollAtLine = lines.Length - 1;

        BuildFullTextAndBoundaries();
        _label.text = _fullText;
        RebuildLayout();
        _label.maxVisibleCharacters = 0;
        _lastVisible = 0;

        _idx = 0;
        _t0 = Time.time;
        _holding = false;
        _scrolling = false;

        SetScrollNormalized(1f); // start at top
    }

    void Update()
    {
        if (!_running) { if (manualScroll) ApplyManualScroll(); return; }
        if (manualScroll) { ApplyManualScroll(); return; }

        if (_scrolling)
        {
            _scrollT += Time.unscaledDeltaTime;
            float u = _scrollDur > 0f ? Mathf.Clamp01(_scrollT / _scrollDur) : 1f;
            float n = Mathf.Lerp(_scrollFrom, _scrollTo, u);
            SetScrollNormalized(n);
            if (u >= 1f) _scrolling = false;
        }

        int baseCount = _idx == 0 ? 0 : _lineEnd[_idx - 1];
        int target = _lineEnd[_idx];

        if (!_holding)
        {
            int typed = (int)((Time.time - _t0) * charsPerSecond + 0.5f);
            int remain = target - baseCount;
            int want = baseCount + (typed >= remain ? remain : typed);

            if (want > _label.maxVisibleCharacters)
            {
                _label.maxVisibleCharacters = want;
                if (want > _lastVisible) _lastVisible = want;
            }

            if (want >= target)
            {
                _holding = true;
                _holdUntil = Time.time + lines[_idx].holdSeconds;
            }
        }
        else
        {
            if (Time.time >= _holdUntil)
            {
                int ni = _idx + 1;
                if (ni >= lines.Length)
                {
                    if (!loop) { _running = false; return; }
                    _label.maxVisibleCharacters = 0;
                    _lastVisible = 0;
                    _idx = 0;
                    _t0 = Time.time;
                    _holding = false;
                    SetScrollNormalized(1f);
                    return;
                }

                if (ni >= startAutoScrollAtLine) ScrollFromNextLineBySteps(ni, linesPerStep);

                _idx = ni;
                _t0 = Time.time;
                _holding = false;
            }
        }
    }

    void BuildFullTextAndBoundaries()
    {
        var sb = new StringBuilder(256);
        _lineEnd = new int[lines.Length];

        int acc = 0;
        for (int i = 0; i < lines.Length; i++)
        {
            if (i != 0) { sb.Append('\n'); acc += 1; }
            string t = lines[i].text ?? string.Empty;
            sb.Append(t);
            acc += CountVisible(t);
            _lineEnd[i] = acc;
        }
        _fullText = sb.ToString();
    }

    static int CountVisible(string s)
    {
        int c = 0; bool tag = false;
        for (int i = 0; i < s.Length; i++)
        {
            char ch = s[i];
            if (tag) { if (ch == '>') tag = false; continue; }
            if (ch == '<') { tag = true; continue; }
            c++;
        }
        return c;
    }

    void ScrollFromNextLineBySteps(int nextIndex, float stepLines)
    {
        if (scroll == null) return;

        RebuildLayout();
        _label.ForceMeshUpdate();

        var ti = _label.textInfo;
        int totalLines = ti.lineCount;
        if (totalLines <= 1) { SetScrollNormalized(1f); return; }

        int totalVis = ti.characterCount;
        if (totalVis <= 0) return;

        int startChar = nextIndex == 0 ? 0 : _lineEnd[nextIndex - 1];
        if (startChar >= totalVis) startChar = totalVis - 1;

        int nextStartLine = ti.characterInfo[startChar].lineNumber;

        float targetLineF = nextStartLine + (stepLines - 1f);
        if (targetLineF < 0f) targetLineF = 0f;
        float maxIdx = totalLines - 1;
        if (targetLineF > maxIdx) targetLineF = maxIdx;

        float frac = (maxIdx > 0f) ? (targetLineF / maxIdx) : 1f;
        float target = 1f - frac;
        target = Mathf.Clamp01(target - topSafeMargin);

        BeginScrollTo(target);
    }

    void BeginScrollTo(float target)
    {
        if (scroll == null) return;
        float current = scroll.verticalNormalizedPosition;
        target = Mathf.Clamp01(target);

        if (scrollMotion == ScrollMotion.Instant)
        {
            _scrolling = false;
            SetScrollNormalized(target);
            return;
        }

        if (scrollMotion == ScrollMotion.Speed)
        {
            float dist = Mathf.Abs(target - current);
            _scrollDur = (scrollSpeed > 0f) ? (dist / scrollSpeed) : 0f;
        }
        else
        {
            _scrollDur = scrollSnapTime;
        }

        _scrollFrom = current;
        _scrollTo = target;
        _scrollT = 0f;
        _scrolling = _scrollDur > 0f && _scrollFrom != _scrollTo;
        if (!_scrolling) SetScrollNormalized(_scrollTo);
    }

    void ApplyManualScroll()
    {
        SetScrollNormalized(manualScrollValue);
    }

    void RebuildLayout()
    {
        if (scroll != null && scroll.content != null) LayoutRebuilder.ForceRebuildLayoutImmediate(scroll.content);
        Canvas.ForceUpdateCanvases();
    }

    void SetScrollNormalized(float n)
    {
        if (scroll == null) return;
        n = (n < 0f) ? 0f : (n > 1f ? 1f : n);
        scroll.verticalNormalizedPosition = n;

        if (externalScrollbar != null)
        {
            externalScrollbar.value = (externalScrollbar.direction == Scrollbar.Direction.BottomToTop) ? n : (1f - n);
        }
    }
}
