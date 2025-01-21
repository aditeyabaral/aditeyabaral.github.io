// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "My internal whitepapers and publications in peer-reviewed conferences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I taught and assisted with as an Assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-working-as-a-research-assistant-at-the-center-for-cloud-computing-amp-amp-big-data-pes-university-and-was-advised-by-dr-kv-subramanium",
          title: 'Started working as a Research Assistant at the Center for Cloud Computing &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-started-working-as-an-applied-research-scientist-intern-at-intel-research-india-i-was-advised-by-dr-anbumani-subramanian-and-anay-majee",
          title: 'Started working as an Applied Research Scientist Intern at Intel Research, India. I...',
          description: "",
          section: "News",},{id: "news-paper-titled-analysis-of-kepler-objects-of-interest-using-machine-learning-for-exoplanet-identification-accepted-at-ieee-conit-2021",
          title: 'Paper titled “Analysis of Kepler Objects of Interest using Machine Learning for Exoplanet...',
          description: "",
          section: "News",},{id: "news-paper-titled-maple-masking-words-to-generate-blackout-poetry-using-sequence-to-sequence-learning-accepted-at-acl-icnlsp-2021",
          title: 'Paper titled “MAPLE – MAsking words to generate blackout Poetry using sequence-to-sequence LEarning”...',
          description: "",
          section: "News",},{id: "news-paper-titled-information-maximization-to-overcome-catastrophic-forgetting-in-few-shot-object-detection-published-internally-at-intel-vsg-research",
          title: 'Paper titled “Information Maximization to Overcome Catastrophic Forgetting in Few-Shot Object Detection” published...',
          description: "",
          section: "News",},{id: "news-started-interning-as-a-big-data-analytics-engineering-intern-at-cisco-webex-as-part-of-the-videomesh-analytics-amp-amp-api-team",
          title: 'Started interning as a Big Data Analytics Engineering Intern at Cisco Webex as...',
          description: "",
          section: "News",},{id: "news-paper-titled-calbert-code-mixed-adaptive-language-representations-using-bert-accepted-at-aaai-2022-make-symposium",
          title: 'Paper titled “CalBERT – Code-Mixed Adaptive Language Representations Using BERT” accepted at AAAI...',
          description: "",
          section: "News",},{id: "news-started-working-full-time-as-a-big-data-analytics-engineer-at-cisco-webex-as-part-of-the-media-quality-analytics-team",
          title: 'Started working full-time as a Big Data Analytics Engineer at Cisco Webex as...',
          description: "",
          section: "News",},{id: "news-started-working-as-an-applied-researcher-at-cisco-webex-as-part-of-the-webex-message-ai-research-team",
          title: 'Started working as an Applied Researcher at Cisco Webex as part of the...',
          description: "",
          section: "News",},{id: "news-paper-titled-chatbert-multi-task-approach-to-pre-training-for-structured-conversations-published-internally-at-cisco-webex-ai-research",
          title: 'Paper titled “ChatBERT - Multi-task approach to Pre-Training for Structured Conversations” published internally...',
          description: "",
          section: "News",},{id: "news-started-my-masters-in-computer-science-at-new-york-university-s-courant-institute-of-mathematical-sciences",
          title: 'Started my Masters in Computer Science at New York University’s Courant Institute of...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%64%69%74%65%79%61%62%61%72%61%6C [@] %6E%79%75 [%64%6F%74] %65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=n5tqnzUAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2122681176", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Aditeya-Baral-2/", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37088925575/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aditeyabaral", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aditeyabaral", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
