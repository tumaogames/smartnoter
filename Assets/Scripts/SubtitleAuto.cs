// SubtitleAuto.cs
using System;
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
    [SerializeField] Line[] lines = Array.Empty<Line>();

    TMP_Text _label;
    int _idx;
    int _visibleLimit;
    float _t0;
    float _holdUntil;
    bool _holding;
    bool _running;

    void Awake() { if (_label == null) _label = GetComponent<TMP_Text>(); }

    void OnEnable() { StartPlayback(); }

    public void StartPlayback()
    {
        _running = lines != null && lines.Length > 0 && _label != null;
        _label.maxVisibleCharacters = 0;
        if (_running) SetLine(0); else _label.text = string.Empty;
    }

    void SetLine(int i)
    {
        _idx = i;
        _label.text = lines[i].text;
        _label.ForceMeshUpdate();
        _visibleLimit = _label.textInfo.characterCount;
        _label.maxVisibleCharacters = 0;
        _t0 = Time.time;
        _holding = false;
    }

    void Update()
    {
        if (!_running) return;

        if (!_holding)
        {
            int want = (int)((Time.time - _t0) * charsPerSecond + 0.5f);
            if (want >= _visibleLimit)
            {
                _label.maxVisibleCharacters = _visibleLimit;
                _holding = true;
                _holdUntil = Time.time + lines[_idx].holdSeconds;
            }
            else if (want > _label.maxVisibleCharacters)
            {
                _label.maxVisibleCharacters = want;
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
                    ni = 0;
                }
                SetLine(ni);
            }
        }
    }
}
