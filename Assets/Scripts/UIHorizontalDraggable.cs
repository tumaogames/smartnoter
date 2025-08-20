// UIHorizontalDraggable.cs
using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class UIHorizontalDraggable : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] bool clampToParent = true;   // keep inside parent/canvas
    [SerializeField] float leftPadding = 0f;      // optional inner padding
    [SerializeField] float rightPadding = 0f;

    RectTransform rect;           // this element
    RectTransform parentRect;     // parent (usually Canvas or a container)
    float startY;                 // fixed Y while dragging
    float pointerOffsetX;         // cursor offset within the element

    void Awake()
    {
        rect = GetComponent<RectTransform>();
        parentRect = rect.parent as RectTransform;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        GameManager.Instance.arrow.SetActive(false);
        // Remember Y to lock vertical movement
        startY = rect.anchoredPosition.y;

        // Get local pointer position relative to this rect to preserve grab offset
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rect, eventData.position, eventData.pressEventCamera, out var localPoint))
        {
            // distance from pivot to pointer along X
            var pivotToLeft = rect.pivot.x * rect.rect.width;
            pointerOffsetX = pivotToLeft - localPoint.x;
        }
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(
            parentRect, eventData.position, eventData.pressEventCamera, out var parentLocal))
            return;

        // Desired X inside parent space
        float targetX = parentLocal.x + pointerOffsetX;

        if (clampToParent)
        {
            // Compute horizontal limits inside parent
            float elemWidth = rect.rect.width;
            float leftLimit = parentRect.rect.xMin + leftPadding + (rect.pivot.x * elemWidth);
            float rightLimit = parentRect.rect.xMax - rightPadding - ((1f - rect.pivot.x) * elemWidth);
            targetX = Mathf.Clamp(targetX, leftLimit, rightLimit);
        }

        rect.anchoredPosition = new Vector2(targetX, startY); // lock Y
    }

    public void OnEndDrag(PointerEventData eventData) { }
}

