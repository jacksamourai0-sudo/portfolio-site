'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Boxes,
  Database,
  ShieldCheck,
  LayoutGrid,
  Compass,
  Download,
  Terminal,
  Bot,
  MessageSquare,
  Languages,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  BookOpen,
  Film,
  Waves,
  Puzzle,
  Trophy,
  GraduationCap,
  Radar,
  Sparkle,
  Send,
  RotateCcw,
  ExternalLink,
  Mail as MailIcon,
} from 'lucide-react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiSharp,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiClaude,
  SiGooglegemini,
  SiGithub,
  SiInstagram,
  SiDiscord,
  SiFacebook,
  SiPhp,
} from 'react-icons/si';
import { Boxes as AccessIcon, AppWindow } from 'lucide-react';

type Lang = 'en' | 'fr' | 'ar';
type TimelineItem = {
  year: string;
  title: string;
  place: string;
};

const translations = {
  en: {
    heroTitle: "Hi, my name is Ilyass — I'm an IT student",
    getStarted: "Let's get started",
    quote: '"Nothing is promised in life except death. So be it — I will make what\'s between count."',
    bio: "I'm Ilyass Elharzli, holding a diploma in Software Development (2024–2026) and about to continue into an engineering program. I enjoy building full web applications end to end — from the database up to the interface — and I like taking on things I don't fully know yet and figuring them out along the way.",
    skillsTitle: 'Skills',
    toolsTitle: 'Tools & tech',
    coreLabel: 'Core',
    devToolsLabel: 'Dev tools',
    aiLabel: 'AI-assisted development',
    aiBlurb: "I use AI tools for code generation, debugging, and exploring unfamiliar APIs — but I review and understand everything before it ships.",
    officeLabel: 'Also familiar with',
    downloadCv: 'Download my resume',
    skills: [
      'Full-stack web development (frontend + backend)',
      'Building & consuming REST APIs',
      'Database design & modeling (MCD/MLD)',
      'Authentication & role-based access control',
      'Responsive UI/UX design',
      'Structured problem analysis & solution design',
    ],
    sidebar: {
      languageLabel: 'Language',
      moreInfoLabel: 'More info',
      closeLabel: 'Close',
      panelBioTitle: 'About me',
      panelBio: "I'm Ilyass Elharzli, born in Fès on December 18, 2005. I finished a two-year diploma in Software Development at ETEC (2024–2026), where I built full web applications from scratch — databases, APIs, and interfaces — while also picking up some 3D design tools along the way. I care about making things that actually look and feel finished, not just technically functional, whether that's a website, a game, or a small tool. Right now I'm getting ready to continue into an engineering program, aiming for a stable, well-paid role where I can put everything I know into real work rather than sit on it.",
      timelineTitle: 'Education & experience',
      timeline: [
        { year: '2024 – 2026', title: 'Technicien Spécialisé en Développement Informatique', place: 'ETEC, Fès' },
        { year: '2025', title: 'IT development internship', place: 'NewDev Maroc' },
        { year: '2026', title: 'Internship', place: 'ONEE — Direction Régionale de Production' },
      ],
      hobbiesTitle: 'Hobbies',
      hobbies: [
        { icon: Trophy, label: 'Football', color: '#22C55E' },
        { icon: Gamepad2, label: 'Gaming', color: '#8B5CF6' },
        { icon: Radar, label: 'Scouting new tech & games', color: '#F97316' },
        { icon: BookOpen, label: 'Comics & manga', color: '#EC4899' },
        { icon: Film, label: 'Anime, movies & series', color: '#EF4444' },
        { icon: Waves, label: 'Swimming', color: '#38BDF8' },
        { icon: Puzzle, label: 'Puzzles', color: '#FACC15' },
      ],
      cvAbstractTitle: 'CV at a glance',
      cvAbstract: "Full-stack developer with a Laravel/React skillset, comfortable across the whole stack from database design to responsive UI. Trained at ETEC (2024–2026), with two short internships in IT support and web development. Fluent in French and English, native Arabic.",
    },
    projects: {
      arrowBack: 'Back',
      title: 'Projects',
      name: 'STOCKIFY',
      tagline: 'Smart Stock Management',
      problemTitle: 'Problem',
      problem:
        "The IT department tracked consumables with paper request forms and a local spreadsheet — no real-time stock visibility, no traceability on who requested what, and no official record of what was handed out.",
      solutionTitle: 'Solution',
      solution:
        "I designed and built STOCKIFY end to end: a Laravel + MySQL REST API paired with a React + Tailwind frontend, with two role-based spaces — admin and employee — covering the full lifecycle of a request, from submission to approval to a printable proof of delivery.",
      roleTitle: 'My role',
      role: 'Solo full-stack developer — database design, REST API, authentication, and the entire frontend.',
      featuresTitle: 'Key features',
      features: [
        'Role-based access control (admin vs. employee)',
        'Real-time stock levels with low-stock alerts',
        'Request submission → approval workflow with admin comments',
        'Auto-generated printable discharge & delivery documents',
        'Fully responsive across mobile, tablet, and desktop',
      ],
      stackTitle: 'Built with',
      statusNote: 'Currently local — polishing before public deployment',
    },
    contact: {
      arrowBack: 'Back',
      title: 'Contact',
      subtitle: "Have a project in mind, or just want to say hi?",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject (optional)',
      subjectPlaceholder: "What's this about?",
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me what you have in mind...',
      sendButton: 'Send message',
      sendNote: 'Opens your email app with this pre-filled — nothing is sent from here directly.',
      gameTitle: 'While you type — a quick memory game',
      gameSubtitle: 'Match all the pairs',
      gameMoves: 'Moves',
      gameBest: 'Best',
      gameWin: 'Solved it!',
      gameReset: 'Reset',
    },
    lab: {
      arrowBack: 'Back',
      feedTitle: "What I've been reading",
      readMore: 'Read the article',
      motto: 'i adore pixel art',
      footerRole: 'IT Student & Full-Stack Developer',
      footerNav: 'Navigate',
      footerConnect: 'Connect',
      footerCopyright: '© 2026 Ilyass Elharzli. Built with Next.js & Tailwind CSS.',
      navHero: 'Home',
      navBio: 'About',
      navProjects: 'Projects',
      navContact: 'Contact',
      navLab: 'Lab',
    },
    articles: [
      {
        title: 'A new era of intelligence with Gemini 3',
        source: 'Google',
        blurb: "Google's most intelligent model yet — state-of-the-art reasoning, agentic coding, and a real step toward AGI.",
        url: 'https://blog.google/products-and-platforms/products/gemini/gemini-3/',
      },
      {
        title: 'Gemini 3 Deep Think: Advancing science, research and engineering',
        source: 'Google DeepMind',
        blurb: 'A specialized reasoning mode already helping researchers catch flaws that passed peer review.',
        url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/',
      },
      {
        title: 'How Will AI Affect the US Labor Market?',
        source: 'Goldman Sachs',
        blurb: '300 million jobs globally exposed to automation — but also new ones created around AI infrastructure.',
        url: 'https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market',
      },
      {
        title: 'The Most Exciting Gaming Tech to Try in 2026',
        source: 'Root-Nation',
        blurb: 'AI-generated environments, adaptive story paths, and NPCs that react like real people.',
        url: 'https://root-nation.com/en/articles-en/analytics-en/en-the-most-exciting-gaming-tech-to-try-in-2026/',
      },
      {
        title: 'Superconductivity breakthrough could unlock ultra-efficient electronics',
        source: 'ScienceDaily',
        blurb: 'A subtle nanoscale redesign keeps superconductors stable at higher temperatures and stronger fields.',
        url: 'https://www.sciencedaily.com/releases/2026/06/260617032211.htm',
      },
      {
        title: 'The trends that will shape AI and tech in 2026',
        source: 'IBM',
        blurb: 'Robotics, physical AI, and open-source models — 18 expert predictions on where things are headed.',
        url: 'https://www.ibm.com/think/news/ai-tech-trends-predictions-2026',
      },
    ],
  },
  fr: {
    heroTitle: 'Salut, je m\'appelle Ilyass — je suis étudiant en informatique',
    getStarted: 'Commençons',
    quote: '"Rien n\'est promis dans la vie sauf la mort. Alors soit — je ferai compter ce qu\'il y a entre les deux."',
    bio: "Je suis Ilyass Elharzli, titulaire d'un diplôme en développement logiciel (2024–2026) et je vais bientôt poursuivre un cursus d'ingénieur. J'aime construire des applications web complètes de bout en bout — de la base de données jusqu'à l'interface — et j'aime aborder des choses que je ne maîtrise pas encore pour les comprendre en avançant.",
    skillsTitle: 'Compétences',
    toolsTitle: 'Outils & technologies',
    coreLabel: 'Cœur de compétences',
    devToolsLabel: 'Outils de dev',
    aiLabel: 'Développement assisté par IA',
    aiBlurb: "J'utilise des outils IA pour la génération de code, le débogage et l'exploration d'API que je ne connais pas encore — mais je relis et comprends tout avant de l'utiliser.",
    officeLabel: 'Également familier avec',
    downloadCv: 'Télécharger mon CV',
    skills: [
      'Développement web full-stack (frontend + backend)',
      "Création & consommation d'API REST",
      'Conception & modélisation de bases de données (MCD/MLD)',
      "Authentification & contrôle d'accès basé sur les rôles",
      'Design UI/UX responsive',
      'Analyse structurée de problèmes & conception de solutions',
    ],
    sidebar: {
      languageLabel: 'Langue',
      moreInfoLabel: 'Plus d\'infos',
      closeLabel: 'Fermer',
      panelBioTitle: 'À propos de moi',
      panelBio: "Je suis Ilyass Elharzli, né à Fès le 18 décembre 2005. J'ai terminé un diplôme de technicien spécialisé en développement informatique à l'ETEC (2024–2026), où j'ai construit des applications web complètes — bases de données, API et interfaces — tout en apprenant quelques outils de design 3D en parallèle. Ce qui compte pour moi, c'est de créer des choses qui ont vraiment l'air finies, pas seulement fonctionnelles — que ce soit un site, un jeu ou un petit outil. Je me prépare actuellement à poursuivre un cursus d'ingénieur, avec l'objectif d'un poste stable et bien rémunéré où je peux vraiment mettre à profit ce que je sais faire.",
      timelineTitle: 'Formation & expérience',
      timeline: [
        { year: '2024 – 2026', title: 'Technicien Spécialisé en Développement Informatique', place: 'ETEC, Fès' },
        { year: '2025', title: 'Stage en développement informatique', place: 'NewDev Maroc' },
        { year: '2026', title: 'Stage', place: 'ONEE — Direction Régionale de Production' },
      ],
      hobbiesTitle: 'Loisirs',
      hobbies: [
        { icon: Trophy, label: 'Football', color: '#22C55E' },
        { icon: Gamepad2, label: 'Jeux vidéo', color: '#8B5CF6' },
        { icon: Radar, label: 'Repérer les nouvelles technos & jeux', color: '#F97316' },
        { icon: BookOpen, label: 'BD & manga', color: '#EC4899' },
        { icon: Film, label: 'Anime, films & séries', color: '#EF4444' },
        { icon: Waves, label: 'Natation', color: '#38BDF8' },
        { icon: Puzzle, label: 'Puzzles', color: '#FACC15' },
      ],
      cvAbstractTitle: 'CV en bref',
      cvAbstract: "Développeur full-stack avec des compétences Laravel/React, à l'aise sur toute la chaîne, de la conception de bases de données à l'interface responsive. Formé à l'ETEC (2024–2026), avec deux stages courts en support informatique et développement web. Français et anglais courants, arabe langue maternelle.",
    },
    projects: {
      arrowBack: 'Retour',
      title: 'Projets',
      name: 'STOCKIFY',
      tagline: 'Gestion Intelligente des Stocks',
      problemTitle: 'Problème',
      problem:
        "Le service informatique suivait les consommables avec des formulaires papier et un fichier Excel local — aucune visibilité en temps réel sur le stock, aucune traçabilité sur qui demandait quoi, et aucun registre officiel de ce qui était remis.",
      solutionTitle: 'Solution',
      solution:
        "J'ai conçu et développé STOCKIFY de bout en bout : une API REST Laravel + MySQL couplée à un frontend React + Tailwind, avec deux espaces selon le rôle — admin et employé — couvrant tout le cycle de vie d'une demande, de la soumission à l'approbation jusqu'au justificatif de livraison imprimable.",
      roleTitle: 'Mon rôle',
      role: 'Développeur full-stack solo — conception de la base de données, API REST, authentification, et tout le frontend.',
      featuresTitle: 'Fonctionnalités clés',
      features: [
        'Contrôle d\'accès basé sur les rôles (admin vs. employé)',
        'Suivi du stock en temps réel avec alertes de seuil bas',
        'Soumission de demande → workflow d\'approbation avec commentaires admin',
        'Génération automatique de décharges et bons de livraison imprimables',
        'Interface entièrement responsive (mobile, tablette, desktop)',
      ],
      stackTitle: 'Construit avec',
      statusNote: 'Actuellement en local — en cours de finition avant déploiement public',
    },
    contact: {
      arrowBack: 'Retour',
      title: 'Contact',
      subtitle: 'Un projet en tête, ou juste envie de dire bonjour ?',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      subjectLabel: 'Sujet (optionnel)',
      subjectPlaceholder: 'De quoi s\'agit-il ?',
      messageLabel: 'Message',
      messagePlaceholder: 'Dites-moi ce que vous avez en tête...',
      sendButton: 'Envoyer',
      sendNote: 'Ouvre votre application email avec ce contenu pré-rempli — rien n\'est envoyé directement d\'ici.',
      gameTitle: 'Pendant que vous écrivez — un petit jeu de mémoire',
      gameSubtitle: 'Trouvez toutes les paires',
      gameMoves: 'Coups',
      gameBest: 'Meilleur score',
      gameWin: 'Résolu !',
      gameReset: 'Recommencer',
    },
    lab: {
      arrowBack: 'Retour',
      feedTitle: 'Ce que j\'ai lu récemment',
      readMore: 'Lire l\'article',
      motto: "j'adore le pixel art",
      footerRole: 'Étudiant en informatique & Développeur Full-Stack',
      footerNav: 'Navigation',
      footerConnect: 'Suivez-moi',
      footerCopyright: '© 2026 Ilyass Elharzli. Construit avec Next.js & Tailwind CSS.',
      navHero: 'Accueil',
      navBio: 'À propos',
      navProjects: 'Projets',
      navContact: 'Contact',
      navLab: 'Labo',
    },
    articles: [
      {
        title: 'A new era of intelligence with Gemini 3',
        source: 'Google',
        blurb: "Le modèle le plus intelligent de Google à ce jour — raisonnement de pointe et codage agentique.",
        url: 'https://blog.google/products-and-platforms/products/gemini/gemini-3/',
      },
      {
        title: 'Gemini 3 Deep Think: Advancing science, research and engineering',
        source: 'Google DeepMind',
        blurb: 'Un mode de raisonnement spécialisé qui aide déjà des chercheurs à détecter des erreurs passées inaperçues.',
        url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/',
      },
      {
        title: 'How Will AI Affect the US Labor Market?',
        source: 'Goldman Sachs',
        blurb: '300 millions d\'emplois exposés à l\'automatisation dans le monde — mais aussi de nouveaux emplois créés.',
        url: 'https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market',
      },
      {
        title: 'The Most Exciting Gaming Tech to Try in 2026',
        source: 'Root-Nation',
        blurb: 'Environnements générés par IA, histoires adaptatives, et PNJ qui réagissent comme de vraies personnes.',
        url: 'https://root-nation.com/en/articles-en/analytics-en/en-the-most-exciting-gaming-tech-to-try-in-2026/',
      },
      {
        title: 'Superconductivity breakthrough could unlock ultra-efficient electronics',
        source: 'ScienceDaily',
        blurb: 'Une refonte à l\'échelle nanométrique stabilise les supraconducteurs à des températures plus élevées.',
        url: 'https://www.sciencedaily.com/releases/2026/06/260617032211.htm',
      },
      {
        title: 'The trends that will shape AI and tech in 2026',
        source: 'IBM',
        blurb: 'Robotique, IA physique et modèles open-source — 18 prédictions d\'experts.',
        url: 'https://www.ibm.com/think/news/ai-tech-trends-predictions-2026',
      },
    ],
  },
  ar: {
    heroTitle: 'مرحباً، اسمي إلياس — أنا طالب في تكنولوجيا المعلومات',
    getStarted: 'لنبدأ',
    quote: '"لا شيء موعود في الحياة سوى الموت. فليكن — سأجعل ما بينهما ذا قيمة."',
    bio: 'أنا إلياس الحرزلي، حاصل على دبلوم في تطوير البرمجيات (2024–2026) وعلى وشك متابعة برنامج هندسي. أستمتع ببناء تطبيقات ويب متكاملة من الألف إلى الياء — من قاعدة البيانات إلى الواجهة — وأحب خوض أشياء لا أتقنها بعد واكتشافها في الطريق.',
    skillsTitle: 'المهارات',
    toolsTitle: 'الأدوات والتقنيات',
    coreLabel: 'الأساسيات',
    devToolsLabel: 'أدوات التطوير',
    aiLabel: 'التطوير بمساعدة الذكاء الاصطناعي',
    aiBlurb: 'أستخدم أدوات الذكاء الاصطناعي لتوليد الكود، تصحيح الأخطاء، واستكشاف واجهات برمجية غير مألوفة — لكنني أراجع وأفهم كل شيء قبل استخدامه.',
    officeLabel: 'أعرف أيضاً استخدام',
    downloadCv: 'تحميل سيرتي الذاتية',
    skills: [
      'تطوير ويب متكامل (واجهة أمامية وخلفية)',
      'بناء واستخدام واجهات REST API',
      'تصميم ونمذجة قواعد البيانات',
      'المصادقة والتحكم في الوصول حسب الأدوار',
      'تصميم واجهات مستخدم متجاوبة',
      'تحليل المشكلات وتصميم الحلول بشكل منهجي',
    ],
    sidebar: {
      languageLabel: 'اللغة',
      moreInfoLabel: 'معلومات إضافية',
      closeLabel: 'إغلاق',
      panelBioTitle: 'نبذة عني',
      panelBio: 'أنا إلياس الحرزلي، من مواليد فاس بتاريخ 18 دجنبر 2005. أنهيت تكويناً في تطوير البرمجيات مدته سنتان في ETEC (2024–2026)، حيث بنيت تطبيقات ويب كاملة من الصفر — قواعد البيانات والواجهات البرمجية والواجهات الأمامية — مع تعلم بعض أدوات التصميم ثلاثي الأبعاد في الطريق. ما يهمني هو صنع أشياء تبدو فعلاً منجزة، لا مجرد أدوات تعمل تقنياً فقط، سواء كان موقعاً أو لعبة أو أداة صغيرة. أستعد حالياً لمتابعة برنامج هندسي، بهدف الوصول إلى عمل مستقر وبأجر جيد أستطيع فيه استثمار كل ما أعرفه.',
      timelineTitle: 'التكوين والخبرة',
      timeline: [
        { year: '2024 – 2026', title: 'تقني متخصص في التطوير المعلوماتي', place: 'ETEC، فاس' },
        { year: '2025', title: 'تدريب في التطوير المعلوماتي', place: 'NewDev Maroc' },
        { year: '2026', title: 'تدريب', place: 'المكتب الوطني للكهرباء — المديرية الجهوية للإنتاج' },
      ],
      hobbiesTitle: 'الهوايات',
      hobbies: [
        { icon: Trophy, label: 'كرة القدم', color: '#22C55E' },
        { icon: Gamepad2, label: 'ألعاب الفيديو', color: '#8B5CF6' },
        { icon: Radar, label: 'اكتشاف التقنيات والألعاب الجديدة', color: '#F97316' },
        { icon: BookOpen, label: 'القصص المصورة والمانغا', color: '#EC4899' },
        { icon: Film, label: 'الأنمي والأفلام والمسلسلات', color: '#EF4444' },
        { icon: Waves, label: 'السباحة', color: '#38BDF8' },
        { icon: Puzzle, label: 'الألغاز', color: '#FACC15' },
      ],
      cvAbstractTitle: 'نظرة سريعة على سيرتي الذاتية',
      cvAbstract: 'مطور full-stack بمهارات Laravel و React، مرتاح على كامل السلسلة من تصميم قواعد البيانات إلى الواجهات المتجاوبة. تكوّن في ETEC (2024–2026)، مع تدريبين قصيرين في الدعم المعلوماتي وتطوير الويب. أتقن الفرنسية والإنجليزية، والعربية لغتي الأم.',
    },
    projects: {
      arrowBack: 'رجوع',
      title: 'المشاريع',
      name: 'STOCKIFY',
      tagline: 'إدارة ذكية للمخزون',
      problemTitle: 'المشكلة',
      problem:
        'كان قسم المعلوميات يتتبع المستلزمات عبر نماذج ورقية وملف Excel محلي — بدون رؤية فورية للمخزون، بدون تتبع لمن طلب ماذا، وبدون سجل رسمي لما تم تسليمه.',
      solutionTitle: 'الحل',
      solution:
        'صممت وطورت STOCKIFY من الألف إلى الياء: واجهة REST API بلغة Laravel وقاعدة بيانات MySQL، مقترنة بواجهة أمامية React و Tailwind، مع مساحتين حسب الدور — مشرف وموظف — تغطيان دورة حياة الطلب كاملة، من التقديم إلى الموافقة وصولاً إلى إثبات تسليم قابل للطباعة.',
      roleTitle: 'دوري',
      role: 'مطور full-stack منفرد — تصميم قاعدة البيانات، واجهة REST API، المصادقة، وكامل الواجهة الأمامية.',
      featuresTitle: 'أبرز المزايا',
      features: [
        'التحكم في الوصول حسب الأدوار (مشرف مقابل موظف)',
        'تتبع المخزون في الوقت الفعلي مع تنبيهات انخفاض المخزون',
        'تقديم الطلب ← سير عمل الموافقة مع تعليقات المشرف',
        'توليد تلقائي لمستندات التسليم القابلة للطباعة',
        'واجهة متجاوبة بالكامل عبر الهاتف والجهاز اللوحي وسطح المكتب',
      ],
      stackTitle: 'بُني باستخدام',
      statusNote: 'يعمل حالياً محلياً — قيد التحسين قبل النشر العام',
    },
    contact: {
      arrowBack: 'رجوع',
      title: 'تواصل معي',
      subtitle: 'لديك فكرة مشروع، أو فقط تريد أن تقول مرحباً؟',
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'بريدك@الإلكتروني.com',
      subjectLabel: 'الموضوع (اختياري)',
      subjectPlaceholder: 'ما الموضوع؟',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'أخبرني بما تفكر فيه...',
      sendButton: 'إرسال الرسالة',
      sendNote: 'يفتح تطبيق البريد الخاص بك مع تعبئة هذا المحتوى مسبقاً — لا يُرسل شيء مباشرة من هنا.',
      gameTitle: 'بينما تكتب — لعبة ذاكرة سريعة',
      gameSubtitle: 'طابق جميع الأزواج',
      gameMoves: 'المحاولات',
      gameBest: 'الأفضل',
      gameWin: 'تم الحل!',
      gameReset: 'إعادة',
    },
    lab: {
      arrowBack: 'رجوع',
      feedTitle: 'ما كنت أقرأه مؤخراً',
      readMore: 'اقرأ المقال',
      motto: 'أعشق فن البكسل',
      footerRole: 'طالب تكنولوجيا المعلومات ومطور Full-Stack',
      footerNav: 'التنقل',
      footerConnect: 'تواصل',
      footerCopyright: '© 2026 إلياس الحرزلي. بُني باستخدام Next.js و Tailwind CSS.',
      navHero: 'الرئيسية',
      navBio: 'نبذة عني',
      navProjects: 'المشاريع',
      navContact: 'تواصل',
      navLab: 'المختبر',
    },
    articles: [
      {
        title: 'A new era of intelligence with Gemini 3',
        source: 'Google',
        blurb: 'أذكى نموذج أطلقته Google حتى الآن — تفكير متقدم وبرمجة وكيلية.',
        url: 'https://blog.google/products-and-platforms/products/gemini/gemini-3/',
      },
      {
        title: 'Gemini 3 Deep Think: Advancing science, research and engineering',
        source: 'Google DeepMind',
        blurb: 'وضع تفكير متخصص يساعد الباحثين بالفعل على اكتشاف أخطاء لم تُلاحظ سابقاً.',
        url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/',
      },
      {
        title: 'How Will AI Affect the US Labor Market?',
        source: 'Goldman Sachs',
        blurb: '300 مليون وظيفة معرضة للأتمتة عالمياً — لكن أيضاً وظائف جديدة قيد الإنشاء.',
        url: 'https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market',
      },
      {
        title: 'The Most Exciting Gaming Tech to Try in 2026',
        source: 'Root-Nation',
        blurb: 'بيئات مولّدة بالذكاء الاصطناعي وشخصيات تتفاعل بشكل واقعي أكثر من أي وقت مضى.',
        url: 'https://root-nation.com/en/articles-en/analytics-en/en-the-most-exciting-gaming-tech-to-try-in-2026/',
      },
      {
        title: 'Superconductivity breakthrough could unlock ultra-efficient electronics',
        source: 'ScienceDaily',
        blurb: 'إعادة تصميم على المستوى النانوي تجعل الموصلات الفائقة أكثر استقراراً.',
        url: 'https://www.sciencedaily.com/releases/2026/06/260617032211.htm',
      },
      {
        title: 'The trends that will shape AI and tech in 2026',
        source: 'IBM',
        blurb: 'الروبوتات، الذكاء الاصطناعي المادي، والنماذج مفتوحة المصدر — 18 توقعاً من الخبراء.',
        url: 'https://www.ibm.com/think/news/ai-tech-trends-predictions-2026',
      },
    ],
  },
} as const;

const projectScreenshots = [
  { file: 'stockify-logo.png', alt: 'STOCKIFY logo' },
  { file: '01-login.png', alt: 'STOCKIFY login screen' },
  { file: '01b-register.png', alt: 'STOCKIFY registration screen' },
  { file: '02-dashboard.png', alt: 'STOCKIFY admin dashboard' },
  { file: '03-consommables.png', alt: 'STOCKIFY consumables management' },
  { file: '03b-add-consommable-modal.png', alt: 'STOCKIFY add consumable modal' },
  { file: '04-demandes.png', alt: 'STOCKIFY requests management' },
  { file: '04b-decharge-imprimable.png', alt: 'STOCKIFY printable administrative discharge' },
  { file: '04c-utilisateurs.png', alt: 'STOCKIFY user management' },
  { file: '04d-utilisateurs-approbation.png', alt: 'STOCKIFY user approval screen' },
  { file: '04e-signalements-admin.png', alt: 'STOCKIFY admin signalements' },
  { file: '04f-historique.png', alt: 'STOCKIFY request history' },
  { file: '04g-consommable-detail-admin.png', alt: 'STOCKIFY admin consumable details' },
  { file: '05-catalogue-employe.png', alt: 'STOCKIFY employee catalogue' },
  { file: '05b-catalogue-detail-employe.png', alt: 'STOCKIFY employee consumable details' },
  { file: '06-mes-demandes.png', alt: 'STOCKIFY employee requests' },
  { file: '06b-bon-reception.png', alt: 'STOCKIFY printable delivery receipt' },
  { file: '06c-signalement-form-manquant.png', alt: 'STOCKIFY missing item report form' },
  { file: '06d-signalement-form-reparer.png', alt: 'STOCKIFY repair or replacement report form' },
  { file: '07-inventaire-personnel.png', alt: 'STOCKIFY personal inventory' },
  { file: '08-mobile-responsive.png', alt: 'STOCKIFY mobile responsive interface' },
];

// Memory game card icons — small, generic, on-brand symbol set
const MEMORY_ICONS = ['💻', '🎮', '🧠', '⚡', '🚀', '🔧'];

function buildInitialDeck() {
  const pairs = [...MEMORY_ICONS, ...MEMORY_ICONS];
  return pairs.map((icon, i) => ({ id: i, icon, flipped: false, matched: false }));
}

function buildShuffledDeck() {
  const deck = buildInitialDeck();

  // Fisher-Yates shuffle runs only in client-side interactions/effects,
  // never during the initial server render, avoiding hydration mismatches.
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
}

const TERMINAL_SCRIPT = [
  'const stack = [',
  "  'React', 'Laravel', 'MySQL', 'Tailwind',",
  '];',
  '',
  "const mindset = 'build → test → improve';",
  '// AI helps me move faster.',
  '// I still own the result.',
].join('\n');

function TerminalTyper() {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    let timer: number | null = null;
    let cancelled = false;

    const schedule = (delay: number) => {
      if (cancelled) return;
      timer = window.setTimeout(tick, delay);
    };

    const tick = () => {
      if (cancelled) return;
      if (document.hidden) {
        schedule(500);
        return;
      }

      if (index <= TERMINAL_SCRIPT.length) {
        setText(TERMINAL_SCRIPT.slice(0, index));
        index += 1;
        schedule(index < TERMINAL_SCRIPT.length * 0.72 ? 28 : 22);
        return;
      }

      schedule(1500);
      if (timer !== null) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout(() => {
        if (cancelled) return;
        index = 0;
        setText('');
        tick();
      }, 1500);
    };

    const handleVisibility = () => {
      if (document.hidden && timer !== null) {
        window.clearTimeout(timer);
        timer = null;
        return;
      }
      if (!document.hidden && timer === null) {
        schedule(0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    tick();

    return () => {
      cancelled = true;
      if (timer !== null) window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <pre className="terminal-code font-mono text-xs leading-6 text-white/65">
      <code>{text}<span className="terminal-caret">▌</span></code>
    </pre>
  );
}

export default function Home() {
  const [page, setPage] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [lang, setLang] = useState<Lang>('en');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<'none' | 'language' | 'info'>('none');
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [toggleVisible, setToggleVisible] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const projectHeroGalleryRef = useRef<HTMLDivElement | null>(null);
  const projectHeroHoverRef = useRef(false);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Keep the first render deterministic for SSR/hydration. The first real
  // shuffle happens after hydration on the client.
  const [deck, setDeck] = useState(buildInitialDeck);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [bestMoves, setBestMoves] = useState<number | null>(null);
  const [gameWon, setGameWon] = useState(false);
  const [lockBoard, setLockBoard] = useState(false);

  const t = translations[lang];
  const timelineItems = t.sidebar.timeline as readonly TimelineItem[];
  const isRtl = lang === 'ar';
  const heroNameParts = isRtl ? ['إلياس', 'الحرزلي'] : ['Ilyass', 'Elharzli'];
  const heroNameAriaLabel = heroNameParts.join(' ');

  const goToPage = (nextPage: 0 | 1 | 2 | 3 | 4) => {
    setPage(nextPage);
    setSidebarOpen(false);
    setActivePanel('none');
    setMobileNavOpen(false);
    const ids = ['hero', 'bio', 'projects', 'contact', 'lab'];
    document.getElementById(ids[nextPage])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const sectionIds = ['hero', 'bio', 'projects', 'contact', 'lab'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        const index = sectionIds.indexOf(visible[0].target.id);
        if (index >= 0) {
          setPage((previous) => previous === index ? previous : (index as 0 | 1 | 2 | 3 | 4));
        }
      },
      { threshold: 0.5, rootMargin: '-8% 0px -8% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setActivePanel('none');
  };

  const openProjectModal = () => setProjectModalOpen(true);
  const closeProjectModal = () => {
    setProjectModalOpen(false);
    setLightboxIndex(null);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % projectScreenshots.length));
  const prevLightbox = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + projectScreenshots.length) % projectScreenshots.length,
    );

  const scrollGallery = (direction: 'left' | 'right') => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const amount = gallery.clientWidth * 0.82;
    gallery.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  // Main STOCKIFY card: auto-advance the showcase, while still allowing manual scrolling.
  useEffect(() => {
    const gallery = projectHeroGalleryRef.current;
    if (!gallery || page !== 2) return;

    const interval = window.setInterval(() => {
      if (projectHeroHoverRef.current || document.hidden) return;
      const item = gallery.querySelector<HTMLElement>('[data-project-showcase-item]');
      if (!item) return;
      const gap = parseFloat(window.getComputedStyle(gallery).gap || '0');
      const step = item.getBoundingClientRect().width + gap;
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      if (maxScroll <= 0) return;
      const nextLeft = gallery.scrollLeft + step;
      gallery.scrollTo({
        left: nextLeft >= maxScroll - 4 ? 0 : nextLeft,
        behavior: 'smooth',
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, [page]);



  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(contactSubject || `Message from ${contactName}`);
    const body = encodeURIComponent(`${contactMessage}\n\n— ${contactName} (${contactEmail})`);
    window.location.href = `mailto:jacksamourai0@gmail.com?subject=${subject}&body=${body}`;
  };

  const resetGame = () => {
    setDeck(buildShuffledDeck());
    setFlippedIds([]);
    setMoves(0);
    setGameWon(false);
    setLockBoard(false);
  };

  const handleCardClick = (id: number) => {
    if (lockBoard || flippedIds.length === 2) return;
    const card = deck.find((item) => item.id === id);
    if (!card || card.flipped || card.matched) return;

    const newDeck = deck.map((item) => (item.id === id ? { ...item, flipped: true } : item));
    const newFlipped = [...flippedIds, id];
    setDeck(newDeck);
    setFlippedIds(newFlipped);

    if (newFlipped.length !== 2) return;

    setLockBoard(true);
    setMoves((current) => current + 1);

    const [firstId, secondId] = newFlipped;
    const firstCard = newDeck.find((item) => item.id === firstId)!;
    const secondCard = newDeck.find((item) => item.id === secondId)!;

    if (firstCard.icon === secondCard.icon) {
      setTimeout(() => {
        setDeck((current) =>
          current.map((item) =>
            item.id === firstId || item.id === secondId ? { ...item, matched: true } : item,
          ),
        );
        setFlippedIds([]);
        setLockBoard(false);
      }, 350);
      return;
    }

    setTimeout(() => {
      setDeck((current) =>
        current.map((item) =>
          item.id === firstId || item.id === secondId ? { ...item, flipped: false } : item,
        ),
      );
      setFlippedIds([]);
      setLockBoard(false);
    }, 750);
  };

  useEffect(() => {
    // Randomize only after hydration so the server and client render the same
    // initial deck and React never sees different markup during hydration.
    setDeck(buildShuffledDeck());

    const stored = window.localStorage.getItem('ilyass-memory-best');
    if (stored) setBestMoves(Number(stored));
  }, []);

  useEffect(() => {
    if (!deck.every((card) => card.matched) || gameWon) return;
    setGameWon(true);
    setBestMoves((previous) => {
      const next = previous === null ? moves : Math.min(previous, moves);
      window.localStorage.setItem('ilyass-memory-best', String(next));
      return next;
    });
  }, [deck, gameWon, moves]);

  useEffect(() => {
    if (!projectModalOpen && lightboxIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (lightboxIndex !== null) closeLightbox();
        else closeProjectModal();
      }
      if (lightboxIndex !== null && event.key === 'ArrowRight') nextLightbox();
      if (lightboxIndex !== null && event.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [projectModalOpen, lightboxIndex]);

  useEffect(() => {
    if (activePanel !== 'info') {
      setToggleVisible(true);
      return;
    }

    const panel = document.querySelector('.info-panel');
    if (!panel) return;

    let lastScrollTop = panel.scrollTop;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentScrollTop = panel.scrollTop;
        const visible = currentScrollTop <= lastScrollTop || currentScrollTop <= 36;
        setToggleVisible((previous) => previous === visible ? previous : visible);
        lastScrollTop = currentScrollTop;
        ticking = false;
      });
    };

    panel.addEventListener('scroll', handleScroll, { passive: true });
    return () => panel.removeEventListener('scroll', handleScroll);
  }, [activePanel]);

  const skillIcons = [Code2, Boxes, Database, ShieldCheck, LayoutGrid, Compass];

  const coreTools = [
    { label: 'HTML', icon: SiHtml5, color: '#E44D26' },
    { label: 'CSS', icon: SiCss, color: '#2965F1' },
    { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { label: 'C#', icon: SiSharp, color: '#9B4F96' },
    { label: 'React', icon: SiReact, color: '#61DAFB' },
    { label: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { label: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { label: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { label: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    { label: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  ];

  const devTools = [
    { label: 'Git/GitHub', icon: SiGit, color: '#F05032' },
    { label: 'VS Code', icon: Terminal, color: '#007ACC' },
    { label: 'Microsoft Access', icon: AccessIcon, color: '#A4373A' },
  ];

  const aiTools = [
    { label: 'Claude', icon: SiClaude, color: '#DA7756' },
    { label: 'ChatGPT', icon: MessageSquare, color: '#74AA9C' },
    { label: 'Gemini', icon: SiGooglegemini, color: '#4285F4' },
    { label: 'DeepSeek', icon: Bot, color: '#4D6BFE' },
    { label: 'Copilot', icon: Sparkle, color: '#00A4EF' },
  ];

  const officeTools = [{ label: 'Microsoft Office', icon: AppWindow, color: '#D83B01' }];

  const projectStack = [
    { label: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { label: 'PHP', icon: SiPhp, color: '#777BB4' },
    { label: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { label: 'React', icon: SiReact, color: '#61DAFB' },
    { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  ];

  const languageOptions: { code: Lang; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
  ];

  const socialLinks = [
    { label: 'GitHub', icon: SiGithub, color: '#FFFFFF', href: 'https://github.com/jacksamourai0-sudo' },
    { label: 'Instagram', icon: SiInstagram, color: '#E4405F', href: 'https://www.instagram.com/dimensionel_being?stkn=OHdtcmIzc2hqaXZq' },
    { label: 'Discord', icon: SiDiscord, color: '#5865F2', href: 'discord://discord.com/users/764130518575874108' },
    { label: 'Facebook', icon: SiFacebook, color: '#1877F2', href: 'https://www.facebook.com/share/1JYLY3ppT3/' },
  ];

  const footerNavItems = [
    { label: t.lab.navHero, action: () => goToPage(0) },
    { label: t.lab.navBio, action: () => goToPage(1) },
    { label: t.lab.navProjects, action: () => goToPage(2) },
    { label: t.lab.navContact, action: () => goToPage(3) },
    { label: t.lab.navLab, action: () => goToPage(4) },
  ];

  const pageNames = [t.lab.navHero, t.lab.navBio, t.lab.navProjects, t.lab.navContact, t.lab.navLab];

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="portfolio-root relative min-h-screen overflow-x-hidden bg-[#05050a] text-white selection:bg-fuchsia-500/30"
    >
      <div className="portfolio-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="portfolio-bg-image absolute inset-[-6%]" />
        <div className="portfolio-bg-orbit portfolio-bg-orbit-a absolute inset-[-12%]" />
        <div className="portfolio-bg-orbit portfolio-bg-orbit-b absolute inset-[-14%]" />
        <div className="portfolio-bg-stars absolute inset-[-8%]" />
        <div className="portfolio-bg-grid absolute inset-[-8%]" />
        <div className="portfolio-bg-glow absolute inset-[-12%]" />
        <div className="portfolio-bg-vignette absolute inset-0" />
      </div>
      <div className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 md:block">
        <nav className="nav-shell flex items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1.5 backdrop-blur-md">
          {footerNavItems.map((item, index) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`nav-pill rounded-full px-4 py-2 font-space-grotesk text-sm transition-all ${
                page === index ? 'nav-pill-active' : 'text-white/50 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className={`fixed left-4 top-4 z-40 hidden items-center gap-2 md:flex ${page === 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div className="page-index rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
          <span className="font-space-grotesk text-xs text-white/55">0{page + 1}</span>
          <span className="mx-1.5 font-space-grotesk text-xs text-white/20">/</span>
          <span className="font-space-grotesk text-xs text-white/35">05</span>
        </div>
      </div>

      <div className="fixed right-4 top-4 z-[70] flex items-center gap-2">
        <button
          onClick={() => setMobileNavOpen((open) => !open)}
          className="mobile-menu-btn flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-label="Open navigation"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>

        <div className={`flex-row-reverse items-center gap-2 transition-all duration-300 ${toggleVisible ? 'flex' : 'pointer-events-none opacity-0 -translate-y-4'}`}>
          <button
            onClick={() => (sidebarOpen ? closeSidebar() : setSidebarOpen(true))}
            aria-label={sidebarOpen ? t.sidebar.closeLabel : 'Open menu'}
            className="toggle-icon-btn flex h-11 w-11 items-center justify-center rounded-full"
          >
            <ChevronLeft className={`h-5 w-5 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
          </button>

          <div className={`sidebar-action-group flex flex-shrink-0 items-center gap-2 transition-all duration-300 ${sidebarOpen ? 'pointer-events-auto max-w-[6.5rem] opacity-100' : 'pointer-events-none max-w-0 opacity-0'}`}>
            <button
              onClick={() => setActivePanel(activePanel === 'language' ? 'none' : 'language')}
              aria-label={t.sidebar.languageLabel}
              className={`lang-icon-btn flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${activePanel === 'language' ? 'lang-icon-btn-active' : ''}`}
            >
              <Languages className="sidebar-icon-svg h-5 w-5" />
            </button>
            <button
              onClick={() => setActivePanel(activePanel === 'info' ? 'none' : 'info')}
              aria-label={t.sidebar.moreInfoLabel}
              className={`info-icon-btn flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${activePanel === 'info' ? 'info-icon-btn-active' : ''}`}
            >
              <Info className="sidebar-icon-svg h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-20 md:hidden">
          <button aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} className="absolute inset-0 bg-black/70" />
          <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-[#09090f]/95 p-3 shadow-2xl backdrop-blur-lg">
            <div className="grid grid-cols-2 gap-2">
              {footerNavItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`rounded-2xl px-4 py-3 text-left font-space-grotesk text-base transition-all ${
                    page === index ? 'nav-mobile-active' : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  <span className="mr-2 text-xs text-white/30">0{index + 1}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activePanel === 'language' && (
        <div className="fixed right-4 top-20 z-[70] lang-flyout rounded-2xl p-2 shadow-2xl backdrop-blur-md md:right-24 md:top-4">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLang(option.code);
                setActivePanel('none');
              }}
              className={`lang-flyout-btn block w-full rounded-xl px-4 py-2 text-left font-space-grotesk text-sm ${lang === option.code ? 'lang-flyout-btn-active' : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <div
        className={`info-panel-outer fixed right-0 top-0 z-[65] h-screen w-full transition-[width,opacity] duration-500 md:w-[44vw] ${activePanel === 'info' ? 'opacity-100' : 'pointer-events-none w-0 opacity-0'}`}
      >
        <div className="info-panel relative h-full overflow-y-auto border-l border-white/10 bg-[#07070c]/90 shadow-2xl backdrop-blur-lg">
          <div className="info-panel-dynamic-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative z-10">
          <div className="relative px-7 py-8 md:px-10 md:py-12">
            <button
              onClick={closeSidebar}
              className={`info-close-button mb-10 flex w-fit items-center gap-2 font-space-grotesk text-sm text-white/50 transition-colors hover:text-white ${isRtl ? 'mr-auto' : ''}`}
            >
              <X className="h-4 w-4" />
              {t.sidebar.closeLabel}
            </button>

            <div className="mb-12">
              <div className="eyebrow mb-3">01 / PROFILE</div>
              <h2 className="font-space-grotesk text-3xl font-bold text-white md:text-4xl">{t.sidebar.panelBioTitle}</h2>
              <p className="mt-5 font-space-grotesk text-base leading-7 text-white/70 md:text-lg">{t.sidebar.panelBio}</p>
            </div>

            <div className="mb-12">
              <div className="mb-5 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-white/60" />
                <h3 className="font-space-grotesk text-xl font-bold">{t.sidebar.timelineTitle}</h3>
              </div>
              <div className="space-y-5 border-l border-white/10 pl-5">
                {timelineItems.map((item, index) => (
                  <div key={`${item.year}-${item.title}`} className="relative" style={{ '--timeline-accent': ['#64c8ff','#a78bfa','#f08ac7'][index % 3] } as React.CSSProperties}>
                    <span className="timeline-dot" />
                    <div className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/35">{item.year}</div>
                    <div className="mt-1 font-space-grotesk text-base font-semibold text-white">{item.title}</div>
                    <div className="font-space-grotesk text-sm text-white/50">{item.place}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="mb-5 font-space-grotesk text-xl font-bold">{t.sidebar.hobbiesTitle}</h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.sidebar.hobbies.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="hobby-chip flex items-center gap-3 rounded-2xl px-4 py-3" style={{ '--hobby-color': color, '--hobby-soft': `${color}26` } as React.CSSProperties}>
                    <Icon className="h-5 w-5" style={{ color }} />
                    <span className="font-space-grotesk text-sm text-white/75">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-7">
              <div className="mb-4 font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/30">{t.sidebar.cvAbstractTitle}</div>
              <p className="font-space-grotesk text-sm leading-6 text-white/55">{t.sidebar.cvAbstract}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, icon: Icon, color, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon-btn flex items-center justify-center rounded-full" style={{ '--social-color': color } as React.CSSProperties}>
                  <Icon className="h-5 w-5" style={{ color }} />
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 w-full">
        <div className="w-full">
          <section id="hero" className="flex min-h-screen w-full items-center justify-center scroll-mt-24 px-5 md:px-10">
            <div className="hero-grid w-full max-w-6xl">
              <div className="max-w-4xl">
                <div className="eyebrow mb-5">FULL-STACK / WEB / AI-ASSISTED</div>
                <h1
                  className={`hero-name-heading font-space-grotesk text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl md:text-8xl ${isRtl ? 'text-right' : 'text-left'}`}
                  dir={isRtl ? 'rtl' : 'ltr'}
                  aria-label={heroNameAriaLabel}
                >
                  {heroNameParts.map((part, partIndex) => (
                    <span key={part} className="hero-name-line text-gradient-animated" aria-hidden="true">
                      {Array.from(part).map((letter, index) => (
                        <span
                          key={`${part}-${index}`}
                          className="hero-name-letter"
                          style={{ animationDelay: `${partIndex === 0 ? index * 80 : 420 + index * 70}ms` }}
                        >
                          {letter}
                        </span>
                      ))}
                      {partIndex === 0 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="mt-7 max-w-2xl font-space-grotesk text-lg leading-8 text-white/60 md:text-xl">
                  {t.heroTitle}. {t.bio.split('. ')[0]}.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={() => goToPage(1)} className="cta-button rounded-full px-6 py-3 font-space-grotesk text-sm font-bold text-white">
                    {t.getStarted}
                  </button>
                  <button onClick={() => goToPage(2)} className="secondary-button rounded-full px-6 py-3 font-space-grotesk text-sm text-white/80">
                    {t.lab.navProjects}
                  </button>
                </div>
              </div>

              <div className="hero-side hidden lg:block">
                <div className="terminal-card rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="terminal-dot" />
                    <span className="terminal-dot terminal-dot-2" />
                    <span className="terminal-dot terminal-dot-3" />
                    <span className="ml-auto font-space-grotesk text-[10px] uppercase tracking-[0.22em] text-white/30">developer.exe</span>
                  </div>
                  <TerminalTyper />
                </div>
              </div>
            </div>

          </section>

          <section id="bio" className="min-h-screen w-full scroll-mt-24 px-5 py-24 md:px-10 md:py-28">
            <div className="mx-auto max-w-6xl pr-1">
              <div className="page-heading about-heading">
                <div className="about-title-block">
                  <div className="eyebrow">02 / ABOUT</div>
                  <h2 className="page-title">{t.lab.navBio}</h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="glass-card rounded-3xl p-7 md:p-9">
                  <blockquote className="quote-glow font-space-grotesk text-xl font-bold leading-tight md:text-3xl">{t.quote}</blockquote>
                  <p className="mt-8 max-w-3xl font-space-grotesk text-base leading-7 text-white/65 md:text-lg">{t.bio}</p>

                  <div className="mt-10">
                    <div className="section-label mb-4">{t.skillsTitle}</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {t.skills.map((skill, index) => {
                        const Icon = skillIcons[index];
                        return (
                          <div key={skill} className="skill-row skill-highlight rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3" style={{ '--skill-accent': ['#64b5ff','#b18cff','#34e7ff','#ff78c8','#45e6ad','#ffd166'][index] } as React.CSSProperties}>
                            <Icon className="h-4 w-4" style={{ color: ['#64b5ff','#b18cff','#34e7ff','#ff78c8','#45e6ad','#ffd166'][index] }} />
                            <span className="font-space-grotesk text-sm text-white/70">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="section-label mb-4">{t.sidebar.timelineTitle}</div>
                    <div className="grid gap-3 md:grid-cols-3">
                      {timelineItems.map((item, index) => (
                        <div key={`${item.year}-${item.title}`} className="experience-card rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3" style={{ '--experience-accent': ['#64c8ff','#a78bfa','#f08ac7'][index % 3] } as React.CSSProperties}>
                          <div className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/30">{item.year}</div>
                          <div className="mt-1 font-space-grotesk text-sm font-semibold text-white/80">{item.title}</div>
                          <div className="mt-1 font-space-grotesk text-xs text-white/40">{item.place}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="about-summary-bubble glass-card rounded-3xl p-7 md:p-9">
                    <div className="section-label mb-3">CV at a glance</div>
                    <div className="font-space-grotesk text-sm leading-6 text-white/55 md:text-base">{t.sidebar.cvAbstract}</div>
                  </div>

                  <div className="glass-card rounded-3xl p-7 md:p-9">
                  <div className="section-label">{t.toolsTitle}</div>
                  <div className="mt-4 space-y-5">
                    {[{ label: t.coreLabel, items: coreTools }, { label: t.devToolsLabel, items: devTools }, { label: t.aiLabel, items: aiTools }, { label: t.officeLabel, items: officeTools }].map((group) => (
                      <div key={group.label}>
                        <div className="mb-2 font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/30">{group.label}</div>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map(({ label, icon: Icon, color }) => (
                            <span key={label} className="tech-pill inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-black/25 px-3 py-2 font-space-grotesk text-xs text-white/70" style={{ '--pill-color': color } as React.CSSProperties}>
                              <Icon className="h-4 w-4" style={{ color }} />
                              {label}
                            </span>
                          ))}
                        </div>
                        {group.label === t.aiLabel && <p className="mt-3 font-space-grotesk text-xs leading-5 text-white/40">{t.aiBlurb}</p>}
                      </div>
                    ))}
                  </div>

                  <a href="/cv.pdf" download className="download-button mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 font-space-grotesk text-sm font-bold text-white">
                    <Download className="h-4 w-4" />
                    {t.downloadCv}
                  </a>
                </div>
                </div>
              </div>

              <div className="section-next mt-8 flex justify-center pb-12">
                <button onClick={() => goToPage(2)} aria-label="Next page" className="arrow-bubble flex items-center justify-center rounded-full">
                  <ChevronRight className="h-5 w-5 rotate-90" />
                </button>
              </div>
            </div>
          </section>

          <section id="projects" className="projects-section min-h-screen w-full min-w-0 max-w-full overflow-x-clip scroll-mt-24 px-5 py-24 md:px-10 md:py-28">
            <div className="mx-auto max-w-6xl min-w-0 pr-1">
              <div className="page-heading">
                <div>
                  <div className="eyebrow">03 / SELECTED WORK</div>
                  <h2 className="page-title">{t.projects.title}</h2>
                </div>
                <div className="hidden font-space-grotesk text-sm text-white/35 md:block">{t.projects.statusNote}</div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
                <button onClick={openProjectModal} className="project-hero-card group w-full min-w-0 rounded-3xl border border-white/10 bg-black/30 p-5 text-left backdrop-blur-md md:p-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <div
                      ref={projectHeroGalleryRef}
                      className="project-showcase flex w-full min-w-0 gap-3 overflow-x-auto"
                      aria-label="STOCKIFY screenshot showcase"
                      onMouseEnter={() => { projectHeroHoverRef.current = true; }}
                      onMouseLeave={() => { projectHeroHoverRef.current = false; }}
                    >
                      {projectScreenshots.map((shot, index) => (
                        <div
                          key={shot.file}
                          data-project-showcase-item
                          className={`project-showcase-item relative flex-shrink-0 overflow-hidden rounded-xl ${index === 0 ? 'project-showcase-logo' : ''}`}
                        >
                          <img
                            src={`/screenshots/${shot.file}`}
                            alt={shot.alt}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            draggable={false}
                            className={`h-full w-full ${index === 0 ? 'object-contain' : 'object-cover'}`}
                          />
                          <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 font-space-grotesk text-[10px] text-white/70 backdrop-blur-md">
                            {String(index + 1).padStart(2, '0')} / {projectScreenshots.length}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="mt-5">
                    <div className="mb-2 font-space-grotesk text-xs uppercase tracking-[0.2em] text-sky-300/80">PFE / FULL-STACK WEB APP</div>
                    <div className="font-space-grotesk text-3xl font-bold text-white md:text-5xl">STOCKIFY</div>
                    <div className="mt-1 font-space-grotesk text-sm text-white/55 md:text-base">{t.projects.tagline}</div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {projectStack.map(({ label, icon: Icon, color }) => (
                      <span key={label} className="tech-pill inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-2 font-space-grotesk text-xs text-white/65" style={{ '--pill-color': color } as React.CSSProperties}>
                        <Icon className="h-4 w-4" style={{ color }} />
                        {label}
                      </span>
                    ))}
                  </div>
                </button>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <button
                    type="button"
                    onClick={openProjectModal}
                    className="project-detail-card glass-card rounded-3xl p-6 text-left"
                    style={{ '--detail-accent': '#60a5fa' } as React.CSSProperties}
                  >
                    <div className="section-label">Problem → solution</div>
                    <p className="mt-3 font-space-grotesk text-sm leading-6 text-white/55">{t.projects.problem}</p>
                  </button>
                  <button
                    type="button"
                    onClick={openProjectModal}
                    className="project-detail-card glass-card rounded-3xl p-6 text-left"
                    style={{ '--detail-accent': '#a78bfa' } as React.CSSProperties}
                  >
                    <div className="section-label">What I built</div>
                    <p className="mt-3 font-space-grotesk text-sm leading-6 text-white/55">{t.projects.solution}</p>
                  </button>
                  <button
                    type="button"
                    onClick={openProjectModal}
                    className="project-detail-card glass-card rounded-3xl p-6 text-left sm:col-span-2 lg:col-span-1"
                    style={{ '--detail-accent': '#ec4899' } as React.CSSProperties}
                  >
                    <div className="section-label">More work</div>
                    <p className="mt-3 font-space-grotesk text-sm leading-6 text-white/45">Other projects are being built and will be added here as they reach a level worth presenting publicly.</p>
                  </button>
                </div>
              </div>

              <div className="mt-8 flex justify-center pb-12">
                <button onClick={() => goToPage(3)} aria-label="Next page" className="arrow-bubble flex items-center justify-center rounded-full">
                  <ChevronRight className="h-5 w-5 rotate-90" />
                </button>
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section min-h-screen w-full min-w-0 max-w-full overflow-x-clip scroll-mt-24 px-5 py-24 md:px-10 md:py-28">
            <div className="mx-auto max-w-6xl pr-1">
              <div className="page-heading">
                <div>
                  <div className="eyebrow">04 / CONTACT</div>
                  <h2 className="page-title">{t.contact.title}</h2>
                </div>
                <div className="hidden max-w-md font-space-grotesk text-sm leading-6 text-white/40 md:block">{t.contact.subtitle}</div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="glass-card rounded-3xl p-6 md:p-8">
                  <div className="mb-4">
                    <div className="section-label">Start a conversation</div>
                    <p className="mt-2 font-space-grotesk text-sm text-white/40">Fill this out and your email app will open with the message prepared.</p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="field-label">{t.contact.nameLabel}</span>
                        <input required value={contactName} onChange={(event) => setContactName(event.target.value)} placeholder={t.contact.namePlaceholder} className="contact-input" />
                      </label>
                      <label className="block">
                        <span className="field-label">{t.contact.emailLabel}</span>
                        <input required type="email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} placeholder={t.contact.emailPlaceholder} className="contact-input" />
                      </label>
                    </div>
                    <label className="block">
                      <span className="field-label">{t.contact.subjectLabel}</span>
                      <input value={contactSubject} onChange={(event) => setContactSubject(event.target.value)} placeholder={t.contact.subjectPlaceholder} className="contact-input" />
                    </label>
                    <label className="block">
                      <span className="field-label">{t.contact.messageLabel}</span>
                      <textarea required rows={7} value={contactMessage} onChange={(event) => setContactMessage(event.target.value)} placeholder={t.contact.messagePlaceholder} className="contact-input resize-none" />
                    </label>
                    <button type="submit" className="cta-button flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-space-grotesk text-sm font-bold text-white">
                      <Send className="h-4 w-4" />
                      {t.contact.sendButton}
                    </button>
                    <p className="font-space-grotesk text-xs leading-5 text-white/30">{t.contact.sendNote}</p>
                  </form>
                </div>

                <div className="glass-card rounded-3xl p-6 md:p-8">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="section-label">{t.contact.gameTitle}</div>
                      <p className="mt-2 font-space-grotesk text-sm text-white/40">{t.contact.gameSubtitle}</p>
                    </div>
                    <button onClick={resetGame} className="game-reset-btn inline-flex items-center gap-2 rounded-full px-3 py-2 font-space-grotesk text-xs text-white/60">
                      <RotateCcw className="h-3.5 w-3.5" />
                      {t.contact.gameReset}
                    </button>
                  </div>

                  <div className="mb-5 grid grid-cols-2 gap-3">
                    <div className="stat-chip rounded-2xl px-4 py-3">
                      <div className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/25">{t.contact.gameMoves}</div>
                      <div className="mt-1 font-space-grotesk text-2xl font-bold text-white">{moves}</div>
                    </div>
                    <div className="stat-chip rounded-2xl px-4 py-3">
                      <div className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/25">{t.contact.gameBest}</div>
                      <div className="mt-1 font-space-grotesk text-2xl font-bold text-white">{bestMoves ?? '—'}</div>
                    </div>
                  </div>

                  <div className="memory-board mx-auto grid w-full grid-cols-4 gap-2 sm:gap-3">
                    {deck.map((card) => (
                      <button
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        disabled={card.matched}
                        aria-label={card.flipped || card.matched ? `Card ${card.icon}` : 'Hidden card'}
                        className={`memory-card aspect-square rounded-2xl font-space-grotesk text-2xl sm:text-3xl ${card.flipped || card.matched ? 'memory-card-open' : 'memory-card-hidden'} ${card.matched ? 'memory-card-matched' : ''}`}
                        style={{ '--card-accent': ['#64b5ff','#b18cff','#34e7ff','#ff78c8','#45e6ad','#ffd166'][card.id % 6] } as React.CSSProperties}
                      >
                        <span className="block transition-transform duration-300">{card.flipped || card.matched ? card.icon : '?'}</span>
                      </button>
                    ))}
                  </div>

                  {gameWon && <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-center font-space-grotesk text-sm text-emerald-200 game-win-text">{t.contact.gameWin}</div>}
                </div>
              </div>

              <div className="mt-8 flex justify-center pb-12">
                <button onClick={() => goToPage(4)} aria-label="Next page" className="arrow-bubble flex items-center justify-center rounded-full">
                  <ChevronRight className="h-5 w-5 rotate-90" />
                </button>
              </div>
            </div>
          </section>

          <section id="lab" className="flex min-h-screen w-full flex-col scroll-mt-24 pt-24 md:pt-28">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 md:px-10">
              <div className="pr-1">
                <div className="page-heading">
                <div>
                  <div className="eyebrow">05 / LAB</div>
                  <h2 className="page-title">{t.lab.navLab}</h2>
                </div>
                <div className="hidden max-w-md font-space-grotesk text-sm leading-6 text-white/40 md:block">Small experiments, ideas and things worth keeping an eye on.</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.articles.map((article, index) => (
                  <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="article-card glass-card group rounded-3xl p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-sky-300/70">0{index + 1}</span>
                      <ExternalLink className="h-4 w-4 text-white/20 transition-colors group-hover:text-white/60" />
                    </div>
                    <div className="font-space-grotesk text-[10px] uppercase tracking-[0.18em] text-white/30">{article.source}</div>
                    <h3 className="mt-2 font-space-grotesk text-lg font-bold leading-snug text-white">{article.title}</h3>
                    <p className="mt-3 line-clamp-4 font-space-grotesk text-sm leading-6 text-white/45">{article.blurb}</p>
                    <div className="mt-7 font-space-grotesk text-xs text-sky-300">{t.lab.readMore} →</div>
                  </a>
                ))}
              </div>

            </div>

              <div className="footer-scroll-hint-wrap flex justify-center pb-10 pt-12 md:pb-12 md:pt-16">
                <div className="footer-scroll-hint flex items-center gap-3" aria-hidden="true">
                  <span className="h-px w-12 bg-white/15" />
                  <span className="font-space-grotesk text-[10px] uppercase tracking-[0.24em] text-white/30">scroll / explore</span>
                  <span className="h-px w-12 bg-white/15" />
                </div>
              </div>
            </div>

            <footer className="site-footer w-full px-5 pb-8 pt-8 md:px-10 md:pb-9 md:pt-10">
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 md:grid-cols-[1.1fr_0.7fr_0.7fr]">
                  <div>
                    <div className="font-space-grotesk text-xl font-bold">Ilyass Elharzli</div>
                    <div className="mt-1 font-space-grotesk text-sm text-white/35">{t.lab.footerRole}</div>
                  </div>

                  <div>
                    <div className="section-label mb-3">{t.lab.footerNav}</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {footerNavItems.map((item) => (
                        <button key={item.label} onClick={item.action} className="footer-nav-link text-left font-space-grotesk text-sm text-white/45">{item.label}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="section-label mb-3">{t.lab.footerConnect}</div>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map(({ label, icon: Icon, color, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-social-btn flex items-center justify-center rounded-full" style={{ '--social-color': color } as React.CSSProperties}>
                          <Icon className="h-4 w-4" style={{ color }} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-7 border-t border-white/10 pt-5 text-center font-space-grotesk text-xs text-white/25">{t.lab.footerCopyright}</div>
              </div>
            </footer>
          </section>
        </div>
      </main>

      {projectModalOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8" onClick={closeProjectModal}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="project-modal relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#09090f]/95 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="project-modal-dynamic-bg pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#09090f]/95 p-5 md:p-8 md:pb-6">
              <div>
                <div className="eyebrow">CASE STUDY / PFE</div>
                <h3 className="mt-1 font-space-grotesk text-3xl font-bold md:text-4xl">{t.projects.name}</h3>
                <p className="font-space-grotesk text-sm text-white/40">{t.projects.tagline}</p>
              </div>
              <button onClick={closeProjectModal} aria-label={t.sidebar.closeLabel} className="modal-close flex h-11 w-11 items-center justify-center rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 pt-4 md:p-8 md:pt-5">
              <div className="relative">
              <button onClick={() => scrollGallery('left')} aria-label="Scroll left" className="gallery-nav-btn absolute left-1 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div ref={galleryRef} className="gallery-scroll flex gap-4 overflow-x-auto px-10 py-2" style={{ scrollSnapType: 'x mandatory' }}>
                {projectScreenshots.map((shot, index) => (
                  <button key={shot.file} onClick={() => openLightbox(index)} className="gallery-item group relative flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-left" style={{ scrollSnapAlign: 'center', width: 'min(82vw, 520px)' }}>
                    <img
                      src={`/screenshots/${shot.file}`}
                      alt={shot.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 font-space-grotesk text-[10px] text-white/70 backdrop-blur-md">{String(index + 1).padStart(2, '0')} / {projectScreenshots.length}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => scrollGallery('right')} aria-label="Scroll right" className="gallery-nav-btn absolute right-1 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div
                className="modal-info-card modal-detail-card rounded-2xl p-5"
                style={{ '--detail-accent': '#64b5ff' } as React.CSSProperties}
              >
                <div className="section-label">{t.projects.problemTitle}</div>
                <p className="mt-3 font-space-grotesk text-sm leading-6 text-white/60">{t.projects.problem}</p>
              </div>
              <div
                className="modal-info-card modal-detail-card rounded-2xl p-5"
                style={{ '--detail-accent': '#45e6ad' } as React.CSSProperties}
              >
                <div className="section-label">{t.projects.solutionTitle}</div>
                <p className="mt-3 font-space-grotesk text-sm leading-6 text-white/60">{t.projects.solution}</p>
              </div>
              <div
                className="modal-info-card modal-detail-card rounded-2xl p-5"
                style={{ '--detail-accent': '#b18cff' } as React.CSSProperties}
              >
                <div className="section-label">{t.projects.roleTitle}</div>
                <p className="mt-3 font-space-grotesk text-sm leading-6 text-white/60">{t.projects.role}</p>
              </div>
              <div
                className="modal-info-card modal-detail-card rounded-2xl p-5"
                style={{ '--detail-accent': '#ff78c8' } as React.CSSProperties}
              >
                <div className="section-label">{t.projects.featuresTitle}</div>
                <ul className="mt-3 space-y-2">
                  {t.projects.features.map((feature) => <li key={feature} className="font-space-grotesk text-sm leading-5 text-white/60">• {feature}</li>)}
                </ul>
              </div>
            </div>

            <div className="modal-stack-card mt-6 rounded-2xl border p-5">
              <div className="section-label mb-3">{t.projects.stackTitle}</div>
              <div className="flex flex-wrap gap-2">
                {projectStack.map(({ label, icon: Icon, color }) => (
                  <span key={label} className="tech-pill inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-2 font-space-grotesk text-xs text-white/70" style={{ '--pill-color': color } as React.CSSProperties}>
                    <Icon className="h-4 w-4" style={{ color }} />
                    {label}
                  </span>
                ))}
              </div>
                <p className="mt-5 font-space-grotesk text-xs italic text-white/30">{t.projects.statusNote}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8" onClick={closeLightbox}>
          <button onClick={closeLightbox} aria-label={t.sidebar.closeLabel} className="lightbox-close-btn absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full">
            <X className="h-5 w-5" />
          </button>
          <button onClick={(event) => { event.stopPropagation(); prevLightbox(); }} aria-label="Previous image" className="lightbox-nav-btn absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full md:left-8">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={`/screenshots/${projectScreenshots[lightboxIndex].file}`}
            alt={projectScreenshots[lightboxIndex].alt}
            onClick={(event) => event.stopPropagation()}
            decoding="async"
            className="max-h-[90vh] max-w-[92vw] rounded-2xl object-contain"
          />
          <button onClick={(event) => { event.stopPropagation(); nextLightbox(); }} aria-label="Next image" className="lightbox-nav-btn absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full md:right-8">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-space-grotesk text-xs text-white/50 backdrop-blur-md">
            {lightboxIndex + 1} / {projectScreenshots.length}
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        :global(html) {
          font-size: 100%;
        }

        :global(body) {
          margin: 0;
          background: #05050a;
          overflow-x: hidden;
        }

        :global(html) {
          scrollbar-width: thin;
          scrollbar-color: #8b5cf6 #08080f;
        }

        :global(*),
        :global(*::before),
        :global(*::after) {
          box-sizing: border-box;
        }

        :global(::-webkit-scrollbar) {
          width: 10px;
          height: 10px;
        }

        :global(::-webkit-scrollbar-track) {
          background: rgba(8,8,15,0.95);
        }

        :global(::-webkit-scrollbar-thumb) {
          border-radius: 999px;
          border: 2px solid #08080f;
          background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 52%, #ec4899 100%);
        }

        :global(::-webkit-scrollbar-thumb:hover) {
          background: linear-gradient(180deg, #60a5fa 0%, #a78bfa 52%, #f472b6 100%);
        }

        .font-space-grotesk {
          font-family: 'VT323', monospace;
          letter-spacing: 0.02em;
        }

        .eyebrow,
        .section-label,
        .field-label {
          font-family: 'VT323', monospace;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .eyebrow {
          color: rgba(147, 197, 253, 0.72);
          font-size: 0.72rem;
        }

        .section-label {
          color: rgba(255,255,255,0.32);
          font-size: 0.68rem;
        }

        .field-label {
          display: block;
          margin-bottom: 0.4rem;
          color: rgba(255,255,255,0.35);
          font-size: 0.66rem;
        }

        .page-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }

        .about-heading {
          align-items: center;
        }
        .about-title-block {
          flex-shrink: 0;
        }
        .about-summary-bubble {
          border-color: rgba(255,255,255,0.1);
        }

        .text-gradient-animated {
          background: linear-gradient(100deg, #60a5fa, #a78bfa 28%, #f472b6 52%, #22d3ee 76%, #60a5fa);
          background-size: 280% 280%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: neon-gradient 26s ease-in-out infinite;
          text-shadow: none;
        }

        .hero-name-heading {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          padding-inline: .10em;
          overflow: visible;
          direction: ltr;
          unicode-bidi: isolate;
        }
        .hero-name-line {
          display: inline-flex;
          max-width: 100%;
          white-space: nowrap;
          transform-origin: center;
          overflow: visible;
        }
        .hero-name-letter {
          display: inline-block;
          transform-origin: 50% 72%;
          animation: hero-letter-pulse 2.8s ease-in-out infinite;
          will-change: transform;
        }

        .terminal-code {
          min-height: 154px;
          margin: 0;
          white-space: pre-wrap;
          color: rgba(255,255,255,.7);
        }
        .terminal-caret {
          display: inline-block;
          margin-left: .12rem;
          color: #67e8f9;
          animation: caret-blink .85s steps(1,end) infinite;
          text-shadow: none;
        }

        .sidebar-action-group {
          overflow: visible;
          position: relative;
          z-index: 2;
          padding: 4px;
          margin: -4px;
        }

        .sidebar-icon-svg {
          color: #e0f2fe;
          filter: drop-shadow(0 0 6px rgba(96,165,250,.30));
          transition: color .24s ease, filter .24s ease, transform .24s ease;
        }
        .lang-icon-btn:hover .sidebar-icon-svg {
          color: #67e8f9;
          filter: drop-shadow(0 0 8px rgba(34,211,238,.42));
          transform: scale(1.05);
        }
        .info-icon-btn:hover .sidebar-icon-svg {
          color: #c4b5fd;
          filter: drop-shadow(0 0 8px rgba(167,139,250,.42));
          transform: scale(1.05);
        }


        .project-detail-card {
          text-align: left;
          cursor: pointer;
          transition: transform .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .project-detail-card:hover,
        .project-detail-card:focus-visible {
          transform: translateY(-3px) scale(1.01);
          border-color: var(--detail-accent);
          background: color-mix(in srgb, var(--detail-accent) 14%, rgba(5,5,10,.92));
          box-shadow: 0 0 14px -10px var(--detail-accent);
          outline: none;
        }
        .project-detail-card:active {
          transform: translateY(-1px) scale(.995);
          border-color: var(--detail-accent);
        }

        .page-title {
          margin-top: 0.25rem;
          font-family: 'VT323', monospace;
          font-size: clamp(2.5rem, 5vw, 4.7rem);
          font-weight: 700;
          line-height: 0.95;
        }

        .text-gradient {
          background: linear-gradient(90deg, #93c5fd, #c084fc 48%, #f9a8d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: 4rem;
          align-items: center;
        }

        .hero-side {
          transform: translateY(1rem);
        }

        .portfolio-bg-image {
          background-image: url('/cyberpunk-background.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: .42;
          filter: saturate(1.5) contrast(1.06) brightness(1.1);
        }

        .portfolio-bg-orbit {
          border-radius: 50%;
          mix-blend-mode: normal;
          transform-origin: 50% 50%;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        .portfolio-bg-orbit-a {
          background:
            radial-gradient(ellipse at 24% 34%, rgba(72,148,255,.24) 0 10%, transparent 48%),
            radial-gradient(ellipse at 76% 28%, rgba(174,105,255,.22) 0 12%, transparent 50%);
          filter: none;
          opacity: .74;
          animation: bg-orbit-a 120s linear infinite;
        }
        .portfolio-bg-orbit-b {
          background:
            radial-gradient(circle at 18% 62%, rgba(43,221,255,.14) 0 7%, transparent 36%),
            radial-gradient(circle at 82% 60%, rgba(255,109,201,.14) 0 8%, transparent 38%);
          filter: none;
          opacity: .60;
          animation: bg-orbit-b 150s linear infinite reverse;
        }

        .portfolio-bg-stars {
          background-image:
            radial-gradient(circle at 20% 30%, rgba(110,210,255,.72) 0 1px, transparent 1.7px),
            radial-gradient(circle at 68% 24%, rgba(255,134,216,.66) 0 1px, transparent 1.7px),
            radial-gradient(circle at 82% 74%, rgba(174,128,255,.64) 0 1px, transparent 1.8px),
            radial-gradient(circle at 34% 78%, rgba(67,235,255,.48) 0 1px, transparent 1.8px);
          background-size: 150px 150px, 190px 190px, 230px 230px, 170px 170px;
          opacity: .40;
          mix-blend-mode: normal;
          animation: bg-stars-loop 160s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .portfolio-bg-grid {
          background-image:
            linear-gradient(rgba(112,156,255,.075) 1px, transparent 1px),
            linear-gradient(90deg, rgba(112,156,255,.075) 1px, transparent 1px);
          background-size: 84px 84px;
          opacity: .20;
          transform: rotate(-3deg) translateZ(0);
          animation: bg-grid-loop 90s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .portfolio-bg-glow {
          background:
            radial-gradient(circle at 16% 24%, rgba(76,146,255,.18), transparent 26%),
            radial-gradient(circle at 84% 30%, rgba(173,105,255,.19), transparent 28%),
            radial-gradient(circle at 58% 82%, rgba(255,111,198,.14), transparent 25%),
            radial-gradient(circle at 30% 70%, rgba(50,220,255,.10), transparent 22%);
          mix-blend-mode: normal;
          opacity: .76;
          animation: bg-glow-loop 120s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .portfolio-bg-vignette {
          background: radial-gradient(circle at center, transparent 28%, rgba(2,3,10,.16) 65%, rgba(2,3,10,.54) 100%);
        }

        .info-close-button {
          width: fit-content;
          flex: 0 0 auto;
        }

        .info-panel-dynamic-bg {
          background:
            linear-gradient(135deg, rgba(7,10,24,.96), rgba(19,8,43,.93)),
            radial-gradient(circle at 18% 24%, rgba(64,196,255,.22), transparent 30%),
            radial-gradient(circle at 82% 34%, rgba(181,119,255,.24), transparent 31%),
            radial-gradient(circle at 52% 80%, rgba(255,109,196,.16), transparent 30%);
          opacity: .98;
          overflow: hidden;
          transform: translateZ(0);
          isolation: isolate;
        }
        .info-panel-dynamic-bg::before,
        .info-panel-dynamic-bg::after {
          content: '';
          position: absolute;
          inset: -12%;
          pointer-events: none;
          will-change: transform;
          backface-visibility: hidden;
        }
        .info-panel-dynamic-bg::before {
          background:
            radial-gradient(ellipse at 26% 30%, rgba(57,212,255,.20) 0 9%, transparent 40%),
            radial-gradient(ellipse at 76% 68%, rgba(183,112,255,.18) 0 10%, transparent 42%);
          filter: none;
          mix-blend-mode: normal;
          animation: info-orbit-loop 120s linear infinite;
        }
        .info-panel-dynamic-bg::after {
          background-image:
            radial-gradient(circle at 20% 25%, rgba(108,227,255,.44) 0 1px, transparent 1.7px),
            radial-gradient(circle at 78% 48%, rgba(226,156,255,.40) 0 1px, transparent 1.7px),
            radial-gradient(circle at 42% 78%, rgba(74,238,255,.34) 0 1px, transparent 1.8px);
          background-size: 120px 120px, 160px 160px, 200px 200px;
          opacity: .20;
          mix-blend-mode: normal;
          animation: info-stars-loop 120s linear infinite;
        }

        .project-modal-dynamic-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 18% 22%, rgba(72,157,255,.20), transparent 32%),
            radial-gradient(ellipse at 80% 24%, rgba(182,112,255,.21), transparent 34%),
            radial-gradient(ellipse at 56% 78%, rgba(255,109,196,.16), transparent 32%),
            linear-gradient(125deg, rgba(7,10,27,.18), rgba(25,7,38,.34));
          mix-blend-mode: normal;
          opacity: .88;
          overflow: hidden;
          transform: translateZ(0);
          animation: modal-bg-drift 36s ease-in-out infinite alternate;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .project-modal-dynamic-bg::before,
        .project-modal-dynamic-bg::after {
          content: '';
          position: absolute;
          inset: -8%;
          pointer-events: none;
          will-change: transform;
          backface-visibility: hidden;
        }
        .project-modal-dynamic-bg::before {
          background:
            radial-gradient(ellipse at 24% 30%, rgba(61,210,255,.18) 0 9%, transparent 38%),
            radial-gradient(ellipse at 74% 62%, rgba(190,113,255,.17) 0 10%, transparent 40%),
            linear-gradient(rgba(255,255,255,.016) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.012) 1px, transparent 1px);
          background-size: 180% 180%, 190% 190%, 56px 56px, 56px 56px;
          opacity: .54;
          filter: none;
          mix-blend-mode: normal;
          animation: project-orbit-loop 64s linear infinite;
        }
        .project-modal-dynamic-bg::after {
          background:
            radial-gradient(circle, rgba(107,224,255,.38) 0 1px, transparent 1.5px),
            radial-gradient(circle, rgba(228,151,255,.34) 0 1px, transparent 1.5px);
          background-size: 84px 84px, 126px 126px;
          opacity: .22;
          mix-blend-mode: normal;
          animation: project-stars-loop 72s linear infinite;
        }

        @keyframes bg-orbit-a {
          from { transform: rotate(0deg) scale(1.02); }
          to { transform: rotate(360deg) scale(1.02); }
        }
        @keyframes bg-orbit-b {
          from { transform: rotate(0deg) scale(1.04); }
          to { transform: rotate(-360deg) scale(1.04); }
        }
        @keyframes bg-stars-loop {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-150px, -150px, 0); }
        }
        @keyframes bg-grid-loop {
          from { transform: translate3d(0, 0, 0) rotate(-3deg); }
          to { transform: translate3d(-84px, -84px, 0) rotate(-3deg); }
        }
        @keyframes bg-glow-loop {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1); }
        }

        .terminal-card,
        .glass-card,
        .project-hero-card,
        .article-card,
        .nav-shell,
        .page-index,
        .site-footer,
        .secondary-button,
        .stat-chip,
        .modal-info-card,
        .contact-input,
        .game-reset-btn,
        .mobile-menu-btn {
          box-shadow: 0 18px 60px rgba(0,0,0,0.22);
        }

        .glass-card {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .terminal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 12px rgba(96,165,250,0.45);
        }
        .terminal-dot-2 { background: #a78bfa; box-shadow: 0 0 12px rgba(167,139,250,0.45); }
        .terminal-dot-3 { background: #f9a8d4; box-shadow: 0 0 12px rgba(249,168,212,0.45); }

        .nav-pill-active,
        .nav-mobile-active {
          color: white;
          background: linear-gradient(90deg, rgba(59,130,246,0.22), rgba(168,85,247,0.24));
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
        }

        .mobile-menu-btn,
        .toggle-icon-btn,
        .lang-icon-btn,
        .info-icon-btn,
        .cta-button,
        .download-button {
          background: linear-gradient(100deg, #3b82f6, #8b5cf6 34%, #ec4899 58%, #22d3ee 82%, #3b82f6);
          background-size: 220% 220%;
          box-shadow: 0 0 16px rgba(124,58,237,0.15);
          animation: neon-gradient 26s ease-in-out infinite;
        }

        .cta-button,
        .download-button,
        .secondary-button,
        .game-reset-btn {
          transition: transform .28s cubic-bezier(.22,1,.36,1), filter .28s ease, box-shadow .28s ease, background-position 10s ease;
          transform-origin: center;
        }

        .cta-button:hover,
        .download-button:hover,
        .secondary-button:hover,
        .game-reset-btn:hover {
          transform: translateY(-1px) scale(1.045);
          filter: brightness(1.035) saturate(1.05);
          box-shadow: 0 0 20px rgba(139,92,246,.18);
        }

        .toggle-icon-btn,
        .lang-icon-btn,
        .info-icon-btn,
        .mobile-menu-btn {
          color: white;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .toggle-icon-btn:hover,
        .lang-icon-btn:hover,
        .info-icon-btn:hover,
        .mobile-menu-btn:hover {
          transform: translateY(-1px) scale(1.045);
          box-shadow: 0 0 18px rgba(124,58,237,0.18);
        }

        .secondary-button {
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(110deg, rgba(59,130,246,.14), rgba(139,92,246,.18), rgba(236,72,153,.14), rgba(59,130,246,.14));
          background-size: 260% 260%;
          backdrop-filter: blur(6px);
          animation: neon-gradient 24s ease-in-out infinite;
        }

        .arrow-bubble {
          width: 44px;
          height: 44px;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(6px);
          transition: transform .2s ease, color .2s ease, background .2s ease;
        }
        .arrow-bubble:hover {
          transform: translateY(-2px);
          color: white;
          background: rgba(255,255,255,0.08);
        }

        .secondary-button { backdrop-filter: none; }
        .arrow-bubble { backdrop-filter: none; background: rgba(0,0,0,0.42); }

        .quote-glow {
          color: #ffd166;
          text-shadow: 0 0 18px rgba(255,209,102,0.24);
        }

        .skill-row {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
        }
        .skill-highlight,
        .experience-card {
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, border-color .3s ease, background .3s ease, box-shadow .3s ease;
        }
        .skill-highlight::before,
        .experience-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, color-mix(in srgb, var(--skill-accent, #60a5fa) 10%, transparent), transparent 55%);
          opacity: .45;
          pointer-events: none;
        }
        .experience-card::before {
          background: linear-gradient(120deg, color-mix(in srgb, var(--experience-accent, #a78bfa) 10%, transparent), transparent 60%);
        }
        .skill-highlight:hover {
          transform: translateY(-1px) scale(1.01);
          border-color: var(--skill-accent);
          background: color-mix(in srgb, var(--skill-accent) 14%, rgba(5,5,10,.90));
          box-shadow: 0 0 14px -10px var(--skill-accent);
        }
        .experience-card:hover {
          transform: translateY(-1px) scale(1.01);
          border-color: var(--experience-accent);
          background: color-mix(in srgb, var(--experience-accent) 14%, rgba(5,5,10,.90));
          box-shadow: 0 0 14px -10px var(--experience-accent);
        }

        .tech-pill {
          transition: border-color .25s ease, background .25s ease, box-shadow .25s ease, transform .25s ease;
        }
        .tech-pill:hover {
          transform: translateY(-1px) scale(1.02);
          border-color: var(--pill-color, rgba(255,255,255,0.25));
          background: color-mix(in srgb, var(--pill-color, #60a5fa) 14%, rgba(5,5,10,.92));
          box-shadow: 0 0 12px -9px var(--pill-color, transparent);
        }

        .hobby-chip {
          border: 1px solid color-mix(in srgb, var(--hobby-color, #64c8ff) 22%, rgba(255,255,255,0.08));
          background: linear-gradient(135deg, color-mix(in srgb, var(--hobby-color, #64c8ff) 7%, rgba(5,5,10,0.92)), rgba(5,5,10,0.70));
          transition: border-color .22s ease, background .22s ease, transform .22s ease, box-shadow .22s ease;
        }
        .hobby-chip:hover {
          transform: translateY(-1px) scale(1.01);
          border-color: color-mix(in srgb, var(--hobby-color, #64c8ff) 72%, white 28%);
          background: linear-gradient(135deg, color-mix(in srgb, var(--hobby-color, #64c8ff) 13%, rgba(5,5,10,0.94)), rgba(5,5,10,0.72));
          box-shadow: 0 0 14px -10px var(--hobby-color, transparent);
        }

        .timeline-dot {
          position: absolute;
          left: -1.83rem;
          top: .35rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--timeline-accent, #a78bfa);
          box-shadow: 0 0 10px -2px var(--timeline-accent, #a78bfa);
        }

        .social-icon-btn,
        .footer-social-btn {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .social-icon-btn { width: 46px; height: 46px; }
        .social-icon-btn:hover,
        .footer-social-btn:hover {
          transform: scale(1.035);
          border-color: color-mix(in srgb, var(--social-color, rgba(255,255,255,0.3)) 55%, white 45%);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 0 12px -6px var(--social-color, transparent);
        }

        .project-hero-card,
        .article-card {
          transition: transform .25s ease, border-color .25s ease, background .25s ease;
        }
        .project-hero-card:hover,
        .article-card:hover {
          transform: translateY(-2px);
          border-color: rgba(129,140,248,0.24);
          background: rgba(255,255,255,0.04);
        }

        .contact-input {
          width: 100%;
          border-radius: 0.95rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.24);
          padding: .82rem 1rem;
          color: white;
          outline: none;
          font-family: 'VT323', monospace;
          font-size: .95rem;
          transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.2); }
        .contact-input:focus {
          border-color: rgba(96,165,250,0.55);
          background: rgba(0,0,0,0.35);
          box-shadow: 0 0 0 3px rgba(96,165,250,0.08);
        }

        .stat-chip {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .memory-board {
          flex-shrink: 1;
        }

        .memory-card {
          border: 1px solid rgba(255,255,255,0.09);
          transition: transform .2s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .memory-card:hover:not(:disabled) { transform: translateY(-2px); }
        .memory-card-hidden {
          background: linear-gradient(145deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08));
          color: rgba(255,255,255,0.25);
        }
        .memory-card-open {
          background: linear-gradient(145deg, rgba(59,130,246,0.15), rgba(236,72,153,0.11));
          border-color: rgba(129,140,248,0.32);
          box-shadow: 0 0 14px -9px rgba(129,140,248,0.48);
        }
        .memory-card-matched {
          background: rgba(34,197,94,0.075);
          border-color: rgba(34,197,94,0.24);
          box-shadow: 0 0 12px -10px rgba(34,197,94,0.5);
        }

        .game-reset-btn {
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(110deg, rgba(59,130,246,.12), rgba(139,92,246,.16), rgba(236,72,153,.12));
          background-size: 240% 240%;
          animation: none;
          transition: background .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease;
        }
        .game-reset-btn:hover { color: white; }
        .game-win-text { text-shadow: 0 0 16px rgba(134,239,172,.25); }

        .lang-flyout {
          background: rgba(7,7,12,0.92);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .lang-flyout-btn { color: rgba(255,255,255,0.55); transition: background .2s ease, color .2s ease; }
        .lang-flyout-btn:hover { color: white; background: rgba(255,255,255,0.05); }
        .lang-flyout-btn-active { color: white; background: linear-gradient(100deg, rgba(59,130,246,.28), rgba(168,85,247,.28)); }

        .modal-close,
        .lightbox-close-btn,
        .lightbox-nav-btn,
        .gallery-nav-btn {
          border: 1px solid rgba(255,255,255,0.16);
          background: linear-gradient(100deg, #3b82f6, #8b5cf6 52%, #ec4899);
          color: white;
          transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
          backdrop-filter: none;
          box-shadow: 0 0 24px rgba(124,58,237,0.18);
        }
        .modal-close:hover,
        .lightbox-close-btn:hover,
        .lightbox-nav-btn:hover,
        .gallery-nav-btn:hover {
          transform: scale(1.035);
          filter: brightness(1.025);
          box-shadow: 0 0 18px rgba(124,58,237,0.16);
        }
        .gallery-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .gallery-scroll::-webkit-scrollbar { display: none; }
        .gallery-item { aspect-ratio: 16 / 10; }

        .project-showcase {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          overscroll-behavior-x: contain;
          touch-action: pan-x;
          cursor: grab;
        }
        .project-showcase:active { cursor: grabbing; }
        .project-showcase::-webkit-scrollbar { display: none; }
        .project-showcase-item {
          width: 100%;
          aspect-ratio: 16 / 9;
          scroll-snap-align: start;
          flex: 0 0 100%;
        }


        .project-showcase-logo {
          background: radial-gradient(circle at 50% 50%, rgba(96,165,250,.14), rgba(139,92,246,.08) 40%, rgba(0,0,0,.24));
        }
        .project-showcase-logo img {
          padding: 3.5rem;
          transform: scale(.72);
          filter: drop-shadow(0 0 18px rgba(139,92,246,.22));
        }

        .project-modal {
          background-image: radial-gradient(circle at 14% 10%, rgba(59,130,246,.09), transparent 28%), radial-gradient(circle at 86% 16%, rgba(168,85,247,.1), transparent 30%), linear-gradient(rgba(9,9,15,.96), rgba(9,9,15,.98));
          isolation: isolate;
        }
        .contact-section .section-label { color: rgba(191,219,254,.72); text-shadow: 0 0 14px rgba(96,165,250,.18); }
        .contact-section .field-label { color: rgba(165,180,252,.7); }
        .contact-section .contact-input {
          border-color: rgba(167,139,250,.18);
          background: rgba(7,7,14,.34);
        }
        .contact-section .contact-input:hover {
          border-color: rgba(96,165,250,.42);
          background: rgba(96,165,250,.07);
          box-shadow: 0 0 14px -10px rgba(96,165,250,.42);
        }

        .memory-card-hidden {
          background: linear-gradient(145deg, rgba(59,130,246,.075), rgba(139,92,246,.075), rgba(236,72,153,.06));
        }
        .memory-card:hover:not(:disabled) {
          transform: translateY(-1px) scale(1.015);
          border-color: var(--card-accent, rgba(167,139,250,.32));
          background: color-mix(in srgb, var(--card-accent, #a78bfa) 12%, rgba(5,5,10,.92));
          box-shadow: 0 0 14px -10px var(--card-accent, rgba(167,139,250,.42));
          filter: none;
        }

        .modal-info-card {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
        }

        .modal-detail-card,
        .modal-stack-card {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,.018);
          border: 1px solid rgba(255,255,255,.08);
          transition: transform .28s ease, border-color .28s ease, background .28s ease, box-shadow .28s ease;
        }
        .modal-detail-card::before,
        .modal-stack-card::before {
          content: '';
          position: absolute;
          inset: -18% -10%;
          background:
            radial-gradient(circle at 18% 25%, rgba(255,255,255,.07), transparent 28%),
            radial-gradient(circle at 82% 74%, rgba(255,255,255,.04), transparent 30%);
          opacity: .58;
          pointer-events: none;
          transform: translate3d(-2%, 0, 0);
          transition: opacity .35s ease, transform .7s ease;
        }
        .modal-detail-card > *,
        .modal-stack-card > * {
          position: relative;
          z-index: 1;
        }

        .modal-detail-card {
          border-color: color-mix(in srgb, var(--detail-accent, #64b5ff) 16%, rgba(255,255,255,.08));
        }
        .modal-detail-card:hover,
        .modal-detail-card:focus-visible {
          transform: translateY(-2px) scale(1.005);
          border-color: color-mix(in srgb, var(--detail-accent, #64b5ff) 46%, rgba(255,255,255,.18));
          background: color-mix(in srgb, var(--detail-accent, #64b5ff) 6%, rgba(255,255,255,.02));
          box-shadow: 0 0 16px -12px var(--detail-accent, #64b5ff);
          outline: none;
        }
        .modal-detail-card:hover::before,
        .modal-stack-card:hover::before {
          opacity: .86;
          transform: translate3d(3%, -2%, 0);
        }
        .modal-detail-card:hover .section-label {
          color: color-mix(in srgb, var(--detail-accent, #64b5ff) 58%, white 42%);
        }
        .modal-stack-card {
          border-color: rgba(255,255,255,.08);
          background: rgba(255,255,255,.018);
        }
        .modal-stack-card:hover {
          transform: translateY(-2px) scale(1.002);
          border-color: rgba(255,255,255,.16);
          background: rgba(255,255,255,.026);
          box-shadow: 0 0 16px -14px rgba(255,255,255,.3);
        }

        .site-footer { background: rgba(0,0,0,0.22); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); border-top: 1px solid rgba(255,255,255,0.08); }
        .footer-nav-link { transition: color .2s ease; }
        .footer-nav-link:hover { color: white; }
        .footer-social-btn { width: 36px; height: 36px; }

        .project-modal { animation: modal-pop .22s ease-out; }
        .project-modal { scrollbar-color: #8b5cf6 #08080f; scrollbar-width: thin; }
        .project-modal::-webkit-scrollbar { width: 10px; }
        .project-modal::-webkit-scrollbar-track { background: rgba(8,8,15,.9); }
        .project-modal::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#3b82f6,#8b5cf6,#ec4899); border-radius: 999px; border: 2px solid #08080f; }


        @keyframes neon-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes hero-letter-pulse {
          0%, 100% { transform: translateY(0) scale(1); }
          20% { transform: translateY(-2px) scale(1.06); }
          40% { transform: translateY(1px) scale(.97); }
          60% { transform: translateY(-1px) scale(1.035); }
          80% { transform: translateY(0) scale(.99); }
        }
        @keyframes info-orbit-loop {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1); }
        }
        @keyframes info-stars-loop {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-120px, -120px, 0); }
        }
        @keyframes project-orbit-loop {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1); }
        }
        @keyframes project-stars-loop {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-126px, -126px, 0); }
        }
        @keyframes caret-blink { 0%, 48% { opacity: 1; } 49%, 100% { opacity: 0; } }
        @keyframes modal-bg-drift {
          0% { transform: translate3d(-1.5%, -1%, 0) scale(1); opacity: .72; }
          100% { transform: translate3d(1.5%, 1.2%, 0) scale(1.06); opacity: 1; }
        }

        @keyframes modal-pop {
          from { opacity: 0; transform: translateY(10px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        #bio,
        #projects,
        #contact {
          contain: layout paint;
          content-visibility: auto;
          contain-intrinsic-size: 1px 900px;
        }

        #projects,
        #contact {
          overflow-x: clip;
        }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
          .about-heading { align-items: flex-start; }
        }

        @media (max-width: 640px) {
          .page-heading { align-items: flex-start; }
        }

        @media (max-width: 640px) {
          .hero-name-heading {
            font-size: clamp(3rem, 15vw, 4.8rem);
            padding-inline: .12em;
          }
          .hero-name-letter { will-change: auto; }
        }

        .info-panel-outer:not(.opacity-100) .info-panel-dynamic-bg::before,
        .info-panel-outer:not(.opacity-100) .info-panel-dynamic-bg::after {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .projects-section,
          #projects,
          #projects > div,
          .project-hero-card,
          .project-showcase,
          .project-showcase-item {
            min-width: 0;
            max-width: 100%;
          }
          .project-showcase { overscroll-behavior-x: contain; max-width: 100%; }
          .project-showcase-item { flex-basis: 100%; width: 100%; }
          .project-hero-card { padding: 1rem; }
          .project-hero-card .project-showcase-logo img { padding: 2.25rem; }
          .glass-card { backdrop-filter: blur(5px); }
          .portfolio-bg-orbit-a { opacity: .56; animation-duration: 150s; }
          .portfolio-bg-orbit-b { opacity: .42; animation-duration: 180s; }
          .portfolio-bg-stars { opacity: .30; animation-duration: 180s; }
          .portfolio-bg-grid { opacity: .10; animation: none; }
          .portfolio-bg-glow { opacity: .56; animation: none; }
          .project-modal-dynamic-bg { animation-duration: 48s; }
          .info-panel-dynamic-bg::before { animation-duration: 150s; }
          .info-panel-dynamic-bg::after { animation-duration: 150s; }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-bg-image, .portfolio-bg-orbit, .portfolio-bg-stars, .portfolio-bg-grid, .portfolio-bg-glow, .text-gradient-animated, .hero-name-letter, .cta-button, .download-button, .secondary-button, .game-reset-btn, .terminal-caret, .project-detail-card, .project-modal-dynamic-bg, .info-panel-dynamic-bg { animation: none !important; }
          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
