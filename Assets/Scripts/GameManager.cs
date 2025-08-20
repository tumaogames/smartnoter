using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameObject endPanel;
    public bool end;
    public GameObject hand;
    public bool enableSound;
    public StartClickHandler startClickHandler;
    public enum GameState { MainMenu, Playing, Paused, GameOver }
    public GameState CurrentState { get; private set; }
    public int currentScore;
    public int CurrentScore {
        get { return currentScore; }
        set {
            currentScore = value;
        }
    }

    public GameObject BodyToSummarize;
    public GameObject SummarizedText;

    public GameObject transcriptBtnBlue;
    public GameObject transcriptBtn;
    public GameObject summaryBtn;
    public GameObject summaryBtnBlue;
    public GameObject mainPanel;
    public GameObject handle1;
    public Animator animator;
    public GameObject maskA;
    public GameObject filter;
    public GameObject arrow;
    public GameObject toTap;

    private void Awake()
    {
        // Singleton setup
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    private void Start()
    {
        ChangeState(GameState.MainMenu);
        animator = maskA.GetComponent<Animator>();
    }

    public IEnumerator Win()
    {
        yield return new WaitForSeconds(1);
        endPanel.SetActive(true);
        end = true;
    }


    private IEnumerator DestroyHandObj()
    {
        yield return new WaitForSeconds(1f);
        Destroy(hand.gameObject);
    }

    public void CTAClicked()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/smart-noter-ai-note-taker/id6739575916", "https://play.google.com/store/apps/details?id=com.codespaceapps.meetingtranscriber&hl=en");
        Debug.Log("CTA Clicked");
    }

    public void ChangeState(GameState newState)
    {
        CurrentState = newState;

        switch (newState)
        {
            case GameState.MainMenu:
                Time.timeScale = 1f;
                break;
            case GameState.Playing:
                Time.timeScale = 1f;
                break;
            case GameState.Paused:
                Time.timeScale = 0f;
                break;
            case GameState.GameOver:
                Time.timeScale = 1f;
                break;
        }

        Debug.Log("Game State changed to: " + newState);
    }
    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        ChangeState(GameState.Playing);
    }

    public void SummarizeText()
    {
        startClickHandler.EnableSound();
        if (hand.gameObject.activeInHierarchy)
        {
            hand.gameObject.SetActive(false);
        }
        AudioManager.Instance.PlaySFX("OnClick");
        BodyToSummarize.GetComponent<CanvasGroupAnimator>().TriggerAnimateOut();
        TaskManager.Instance.RunAfter(1f, () =>
        {
            toTap.GetComponent<Canvas>().sortingOrder = 40;
            SummarizedText.SetActive(true);
            SummarizedText.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
            //summaryBtn.SetActive(false);
            //summaryBtnBlue.SetActive(true);
            //transcriptBtn.SetActive(true);
            //transcriptBtnBlue.SetActive(false);
        });

        TaskManager.Instance.RunAfter(2f, () =>
        {
            //mainPanel.GetComponent<CanvasGroupAnimator>().TriggerAnimateOut();
            handle1.SetActive(true);
            handle1.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
            BodyToSummarize.gameObject.SetActive(true);
            BodyToSummarize.GetComponent<CanvasGroupAnimator>().TriggerAnimateIn();
            filter.gameObject.SetActive(true);
            filter.GetComponent<CanvasGroupAnimator>().TriggerAnimateIn();
            TaskManager.Instance.RunAfter(1f, () =>
            {
                AudioManager.Instance.PlaySFX("OnDrag");
                //animator.SetTrigger("StartMaskAnimate");
            });

            TaskManager.Instance.RunAfter(35f, () =>
            {
                endPanel.gameObject.SetActive(true);
                endPanel.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
            });
        });
    }
    public void StartMusic()
    {
        AudioManager.Instance.PlayMusic("BGM");
    }
}