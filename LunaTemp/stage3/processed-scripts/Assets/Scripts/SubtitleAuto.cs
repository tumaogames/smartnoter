// SubtitleAuto.cs
using System;
using System.Text;
using UnityEngine;
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

    [Header("Playback")]
    [SerializeField, Min(1f)] float charsPerSecond = 45f;
    [SerializeField] bool loop = false;
    [SerializeField] Line[] lines; // assign in Inspector

    TMP_Text _label;
    string _fullText = string.Empty;
    int[] _lineEnd; // cumulative visible-char ends per line

    int _idx;
    float _t0;
    float _holdUntil;
    bool _holding;
    bool _running;

    void Awake() { if (_label == null) _label = GetComponent<TMP_Text>(); }

    void OnEnable() { StartPlayback(); }

    public void StartPlayback()
    {
        _running = _label != null && lines != null && lines.Length > 0;
        if (!_running)
        {
            if (_label != null) { _label.text = string.Empty; _label.maxVisibleCharacters = 0; }
            return;
        }

        BuildFullTextAndBoundaries();
        _label.text = _fullText;          // set once; only reveal more characters
        _label.ForceMeshUpdate();
        _label.maxVisibleCharacters = 0;

        _idx = 0;
        _t0 = Time.time;
        _holding = false;
    }

    void Update()
    {
        if (!_running) return;

        int baseCount = _idx == 0 ? 0 : _lineEnd[_idx - 1];
        int target = _lineEnd[_idx];

        if (!_holding)
        {
            int typed = (int)((Time.time - _t0) * charsPerSecond + 0.5f);
            int remain = target - baseCount;
            int want = baseCount + (typed >= remain ? remain : typed);
            if (want > _label.maxVisibleCharacters) _label.maxVisibleCharacters = want;

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
                    _label.maxVisibleCharacters = 0; // restart
                    _idx = 0;
                    _t0 = Time.time;
                    _holding = false;
                    return;
                }
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
}

