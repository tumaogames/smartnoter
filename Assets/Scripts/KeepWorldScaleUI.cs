using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KeepWorldScaleUI : MonoBehaviour
{
    public Vector3 desiredWorldScale = Vector3.one;
    Transform _t;

    private void Awake()
    {
        _t = transform;
    }

    private void LateUpdate()
    {
        var parent = _t.parent;
        if (parent == null) return;
        Vector3 pls = parent.lossyScale;
        _t.localScale = new Vector3(
                desiredWorldScale.x / (pls.x == 0 ? 1f : pls.x),
                desiredWorldScale.y / (pls.y == 0 ? 1f : pls.y),
                desiredWorldScale.z / (pls.z == 0 ? 1f : pls.z)
            );
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
