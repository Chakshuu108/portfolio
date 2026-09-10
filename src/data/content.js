export const PROFILE = {
  name: 'Chakshu Gupta',
  role: 'AI/ML Engineer & Researcher',
  tagline: 'Machine learning, vision, and agents you can see, trace & trust.',
  subtag:
    'Computer Engineering student at Thapar Institute of Engineering and Technology, building machine learning, computer vision and generative AI projects from research notebook to production.',
  email: 'cgupta_be23@gmail.com',
  emailAlt: 'cguptabe23@thapar.edu',
  phone: '+91 9306433994',
  github: 'https://github.com/Chakshuu108',
  githubHandle: '@chakshugupta',
  linkedin: 'https://www.linkedin.com/in/chakshugupta108',
  location: 'Patiala, Punjab, India',
  resume: '/resume.pdf',
};

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_STATS = [
  { value: '8.4', label: 'CGPA at Thapar Institute' },
  { value: '400+', label: 'DSA problems solved' },
  { value: '6+', label: 'AI/ML specializations' },
  { value: '5+', label: 'Production AI projects shipped' },
];

export const EXPERIENCE = {
  role: 'Data Science Intern',
  company: 'Evoastra Ventures (Remote)',
  period: 'Sept 2025 – Nov 2025',
  points: [
    'Built an end-to-end telecom churn prediction pipeline: web scraping, preprocessing, feature engineering and EDA across 10,000+ records.',
    'Improved data quality by 30% through outlier handling and missing-value imputation before it ever reached the model.',
    'Trained a Gradient Boosting Classifier to 89% accuracy, lifting high-risk customer identification by 25% via hyperparameter tuning and cross-validation.',
  ],
};

export const RESEARCH = {
  title: 'GAN-Based Watermark Removal',
  supervisor: 'Research under Prof. Deep Maan',
  period: 'Aug 2025 – Present',
  status: 'Paper submitted for peer review, 2026',
  points: [
    'Implemented Pix2Pix, Residual GAN and Spatial Pyramid Attention (SPA-GAN) models for automated watermark removal across varying watermark types.',
    'Achieved 44.29 dB PSNR, outperforming baseline approaches.',
    'Held strong generalization across watermark sizes, opacity variations and image resolutions under real-world degraded conditions.',
  ],
};

export const PROJECTS = [
  {
    name: 'MediCure',
    tag: 'Agentic AI · Healthcare',
    period: 'Feb 2026 – Mar 2026',
    description:
      'A multi-agent system that watches patient trends across sessions, flags anomalies in real time, and explains its reasoning instead of hiding it. Symptom NLP feeds a trend-analysis agent, which feeds a report generator clinicians can actually read.',
    stack: ['Multi-Agent Systems', 'LangChain', 'LLMs', 'Explainable AI', 'Streamlit'],
    demo: 'https://medicure.streamlit.app',
    accent: 'coral',
  },
  {
    name: 'TrendyFire',
    tag: 'Forecasting · Commerce Intelligence',
    period: 'Nov 2025 – Dec 2025',
    description:
      'Combines historical sales with live customer-sentiment analysis (scraping + NLP + topic modeling) to forecast demand up to 90 days out, with confidence intervals, a BI dashboard, and automated PDF reporting.',
    stack: ['XGBoost', 'NLP', 'Sentiment Analysis', 'BI Dashboards', 'Pandas'],
    demo: 'https://trendify.streamlit.app',
    accent: 'violet',
  },
  {
    name: 'Car Lane Detection',
    tag: 'Computer Vision · Autonomous Driving',
    period: 'Jan 2026 – Feb 2026',
    description:
      'U-Net based semantic segmentation for real-time lane detection, trained to stay reliable under low light, rain, shadows, occlusion, faded markings and complex multi-lane roads.',
    stack: ['U-Net', 'Segmentation', 'OpenCV', 'PyTorch'],
    demo: 'https://unetcarlane.streamlit.app',
    accent: 'mint',
  },
  {
    name: 'Contextual Search Engine',
    tag: 'Algorithms · Document Retrieval',
    period: 'Sept 2025 – Oct 2025',
    description:
      'A document search engine built on the Knuth-Morris-Pratt algorithm, optimized to O(m+n) time via the failure function — cutting redundant comparisons while scaling across large text corpora.',
    stack: ['KMP Algorithm', 'Python'],
    demo: null,
    accent: 'coral',
  },
];

export const SKILLS_ROW_1 = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'LangChain',
  'Streamlit', 'Pandas', 'NumPy', 'C++', 'SQL', 'Git',
];

export const SKILLS_ROW_2 = [
  'Computer Vision', 'NLP', 'Generative AI', 'Transformers', 'LLMs',
  'Reinforcement Learning', 'Fine-tuning', 'Feature Engineering', 'Model Deployment',
  'Data Structures', 'DBMS', 'Operating Systems',
];

export const CAPABILITIES = [
  {
    title: 'Research that ships',
    body: 'Not just notebooks — the watermark-removal research runs to peer review, and the churn model runs in a real pipeline with real accuracy numbers.',
  },
  {
    title: 'Vision, language, and agents',
    body: 'Comfortable moving between CV (segmentation, detection), NLP (sentiment, retrieval) and agentic LLM systems on the same stack.',
  },
  {
    title: 'End-to-end, not just modeling',
    body: 'Scraping, cleaning, training, evaluating, dashboards, deployment — every project here is live and demoable, not a slide.',
  },
];

export const TIMELINE = [
  { year: '2026', label: 'Research submission — GAN-Based Watermark Removal', sub: 'under Prof. Deep Maan' },
  { year: '2025', label: 'Data Science Intern — Evoastra Ventures', sub: '89% accuracy churn pipeline' },
  { year: '2024–26', label: 'AI project portfolio', sub: 'MediCure, TrendyFire, Lane Detection, Search Engine' },
  { year: '2023', label: 'Started B.E. Computer Engineering', sub: 'Thapar Institute of Engineering and Technology' },
];

export const FLOWS = [
  {
    key: 'medicure',
    name: 'MediCure',
    blurb: 'Catch clinical anomalies before they escalate',
    trigger: { label: 'Patient Session Logged', icon: 'FileText' },
    agent: { label: 'Symptom NLP Agent', sub: 'LangChain · LLM', icon: 'Bot' },
    subA: { label: 'Patient History', icon: 'Database' },
    subB: { label: 'Clinical LLM', icon: 'Cpu' },
    decision: { label: 'Anomaly detected?', icon: 'GitBranch' },
    trueNode: { label: 'Real-time Alert', sub: 'sent to clinician', icon: 'AlertTriangle', accent: 'coral' },
    falseNode: { label: 'XAI Trend Report', sub: 'session logged', icon: 'FileText', accent: 'mint' },
  },
  {
    key: 'trendyfire',
    name: 'TrendyFire',
    blurb: 'Forecast demand up to 90 days out',
    trigger: { label: 'New Sales Batch', icon: 'Upload' },
    agent: { label: 'Sentiment + Feature Engine', sub: 'NLP · Pandas', icon: 'Cpu' },
    subA: { label: 'Review Scraper', icon: 'Globe' },
    subB: { label: 'Historical Sales', icon: 'Database' },
    decision: { label: 'Confidence > 90%?', icon: 'GitBranch' },
    trueNode: { label: 'XGBoost Forecast', sub: 'published to BI', icon: 'TrendingUp', accent: 'mint' },
    falseNode: { label: 'Ensemble Retrain', sub: 'flagged for review', icon: 'RotateCcw', accent: 'coral' },
  },
  {
    key: 'lanedetection',
    name: 'Lane Detection',
    blurb: 'Segment lanes in real time, in any weather',
    trigger: { label: 'Camera Frame In', icon: 'Camera' },
    agent: { label: 'U-Net Segmentation', sub: 'PyTorch · CV', icon: 'ScanLine' },
    subA: { label: 'Rain / Low-light Aug', icon: 'CloudRain' },
    subB: { label: 'Frame Buffer', icon: 'Layers' },
    decision: { label: 'Lane confidence high?', icon: 'GitBranch' },
    trueNode: { label: 'Overlay Lane Markers', sub: 'driver display', icon: 'CheckCircle2', accent: 'mint' },
    falseNode: { label: 'Heuristic Fallback', sub: 'edge detection', icon: 'AlertTriangle', accent: 'coral' },
  },
];
