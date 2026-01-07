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
          description: "My posters, papers and publications in peer-reviewed conferences.",
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
        },{id: "news-started-working-as-a-research-assistant-at-the-center-for-cloud-computing-amp-amp-big-data-at-pes-university-and-was-advised-by-dr-kv-subramaniam",
          title: 'Started working as a Research Assistant at the Center for Cloud Computing &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-started-working-as-an-applied-research-scientist-intern-at-intel-vsg-research-india-i-was-advised-by-dr-anbumani-subramanian-and-anay-majee",
          title: 'Started working as an Applied Research Scientist Intern at Intel (VSG) Research, India....',
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
          section: "News",},{id: "news-started-interning-as-a-big-data-engineering-intern-at-cisco-webex-as-part-of-the-videomesh-analytics-team",
          title: 'Started interning as a Big Data Engineering Intern at Cisco Webex as part...',
          description: "",
          section: "News",},{id: "news-paper-titled-calbert-code-mixed-adaptive-language-representations-using-bert-accepted-at-aaai-2022-make-symposium",
          title: 'Paper titled “CalBERT – Code-Mixed Adaptive Language Representations Using BERT” accepted at AAAI...',
          description: "",
          section: "News",},{id: "news-started-working-full-time-as-a-big-data-and-applied-ai-engineer-at-cisco-webex-as-part-of-the-media-quality-analytics-team",
          title: 'Started working full-time as a Big Data and Applied AI Engineer at Cisco...',
          description: "",
          section: "News",},{id: "news-paper-titled-chatbert-multi-task-approach-to-pre-training-for-structured-conversations-published-internally-at-cisco-webex-ai-research",
          title: 'Paper titled “ChatBERT - Multi-task approach to Pre-Training for Structured Conversations” published internally...',
          description: "",
          section: "News",},{id: "news-started-my-masters-in-computer-science-at-new-york-university-s-courant-institute-of-mathematics-computing-and-data-science",
          title: 'Started my Masters in Computer Science at New York University’s Courant Institute of...',
          description: "",
          section: "News",},{id: "news-started-working-as-a-research-assistant-at-the-computational-intelligence-vision-and-robotics-lab-at-new-york-university-where-i-am-advised-by-shauli-ravfogel-and-tal-linzen",
          title: 'Started working as a Research Assistant at the Computational Intelligence, Vision, and Robotics...',
          description: "",
          section: "News",},{id: "news-started-working-as-a-research-assistant-at-the-computation-and-psycholinguistics-lab-at-new-york-university-where-i-am-advised-by-jackson-petty-and-tal-linzen",
          title: 'Started working as a Research Assistant at the Computation and Psycholinguistics lab at...',
          description: "",
          section: "News",},{id: "news-poster-titled-patch-and-control-steering-behavior-of-large-vision-language-models-via-latent-activations-presented-at-nyu",
          title: 'Poster titled “Patch and Control: Steering Behavior of Large Vision-Language Models via Latent...',
          description: "",
          section: "News",},{id: "news-preprint-titled-cmlformer-a-dual-decoder-transformer-with-switching-point-learning-for-code-mixed-language-modeling-released-on-arxiv",
          title: 'Preprint titled “CMLFormer: A Dual Decoder Transformer with Switching Point Learning for Code-Mixed...',
          description: "",
          section: "News",},{id: "news-preprint-titled-can-llms-understand-math-exploring-the-pitfalls-in-mathematical-reasoning-released-on-arxiv",
          title: 'Preprint titled “Can LLMs understand Math? – Exploring the Pitfalls in Mathematical Reasoning”...',
          description: "",
          section: "News",},{id: "news-started-interning-as-an-applied-research-scientist-intern-at-redis-as-part-of-the-redis-langcache-team",
          title: 'Started interning as an Applied Research Scientist Intern at Redis as part of...',
          description: "",
          section: "News",},{id: "news-poster-titled-when-means-probing-arithmetic-circuits-under-symbol-redefinition-presented-at-nyu",
          title: 'Poster titled “When ‘+’ Means ‘-’ – Probing Arithmetic Circuits Under Symbol Redefinition”...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%64%69%74%65%79%61%62%61%72%61%6C@%6E%79%75.%65%64%75", "_blank");
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
