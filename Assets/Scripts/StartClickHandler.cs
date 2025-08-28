using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class StartClickHandler : MonoBehaviour, IPointerDownHandler
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        EnableSound();
    }

    public void EnableSound()
    {
        //AudioManager.Instance.PlayMusic("OnZoom");
        this.GetComponent<Image>().raycastTarget = false;
        //GameManager.Instance.StartMusic();
        if (transform.parent != null)
        {
           //transform.parent.gameObject.SetActive(false);
        }
        GameManager.Instance.hand.gameObject.SetActive(false);
        //gameObject.SetActive(false);
        //GameManager.Instance.enableSound = true;
        GameManager.Instance.CTAClicked();
        StartCoroutine(GameManager.Instance.Win());
    }
}
