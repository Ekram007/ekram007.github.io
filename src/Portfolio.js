import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Menu, X, ArrowRight, Code, BookOpen, Briefcase, GraduationCap, Linkedin, Award, Calendar } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState("about");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [typeIndex, setTypeIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const textsToType = ["Machine Learning Engineer", "AI Researcher", "NLP Expert"];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTexts = 2000;

    // Typing effect loop
    useEffect(() => {
        let timeout;
        if (deleting) {
            if (typedText.length > 0) {
                timeout = setTimeout(() => {
                    setTypedText((prev) => prev.slice(0, -1));
                }, deletingSpeed);
            } else {
                setDeleting(false);
                setTypeIndex((prev) => (prev + 1) % textsToType.length);
            }
        } else {
            if (typedText.length < textsToType[typeIndex].length) {
                timeout = setTimeout(() => {
                    setTypedText((prev) => prev + textsToType[typeIndex][prev.length]);
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => setDeleting(true), delayBetweenTexts);
            }
        }
        return () => clearTimeout(timeout);
    }, [typedText, deleting, typeIndex]);

    // Modified combined scroll handler
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Section tracking logic
            const sections = ['about', 'experience', 'publications', 'academic-research', 'personal-projects', 'skills', 'education', 'linguistic-proficiency', 'extracurricular'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section?.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll with offset
    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    // Data arrays
    const experiences = [
        {
            title: "Machine Learning Engineer",
            company: "IQVIA (A Fortune 500 Company), North Carolina, US",
            period: "Aug 2024 – Present | Remote",
            responsibilities: [
                <>
                                    <div className="space-y-2 text-darkslate-200">
                                        <div>• Developed a conversational marketing co-planner agent with <strong>LangGraph</strong> tool-calling capabilities to automate complex ML workflows. This agent enables dynamic clustering of over 2,000 Healthcare Professionals by allowing users to select features, filter datasets, and generate personalized marketing campaigns while providing answers to any query from the dataset. <strong>Recognized with Impact Award</strong>.</div>
                                        <div>• Deployed open-source LLMs (e.g., DeepSeek, Qwen) on <strong>AWS SageMaker DJL Serving</strong> with vLLM backends, achieving first-token latency as low as <strong>90ms</strong>.</div>
                                        <div>• Collaborated with cross-functional teams to develop data-exploration-agent using <strong>LangGraph</strong>, where agent parse user queries, generate SQL Query, retrieved data and generate final answers with visualizations.</div>
                                    </div>
                </>
            ]
        },
        {
            title: "Machine Learning Engineer",
            company: "Giga Tech Limited, Dhaka, Bangladesh",
            period: "Jan 2022 – Jul 2024 | Hybrid",
            responsibilities: [
                <>
                    <div className="text-darkslate-200">
                    Involved in the entire ML life cycle including data collection, preprocessing, model selection, training, evaluation, tuning deployment, monitoring and finally documenting the outcome in a manuscript. The projects I was involved in:                  
                    </div>
                </>,
                <>
                    <div className="mt-4">
                        <div className="font-semibold text-white mb-2">Corpus Project (Bangla):</div>
                        <div className="text-darkslate-200 mb-3">Aim was to develop a complete ecosystem for Bangla NLP filed, where deliverables include corpora, language models, downstream models, packages/api, applications etc. Some of my key contributions are: </div>
                        <div className="ml-4 space-y-4">
                            <div>
                                <div className="font-semibold text-white mb-2">Shallow and Deep Parsing (Core Component Lead):</div>
                                <div className="ml-4 space-y-2 text-darkslate-200">
                                    <div>• <strong>Led development</strong> of separate and <strong>joint modeling pipelines</strong> for simultaneous training of shallow and deep parsing tasks, utilizing State-of-the-Art (SOTA) architectures.</div>
                                    <div>• Engineered the complete <strong>inference pipeline</strong>, including a <strong>PyPI package</strong>, a <strong>FastAPI</strong> service endpoint, and a <strong>Docker container</strong> for seamless deployment.</div>
                                    <div>• Achieved <strong>SOTA results</strong> on the Penn Treebank (English) for both tasks (Shallow Parsing: <strong>96.47 FScore</strong>; Deep Parsing: UAS: <strong>97.49%</strong>, LAS: <strong>96.36%</strong>).</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-2">Named Entity Recognition (NER):</div>
                                <div className="ml-4 space-y-2 text-darkslate-200">
                                    <div>• Developed the baseline NER model using <strong>BERT, BiLSTM, and CRF</strong> architectures.</div>
                                    <div>• <strong>Improved performance</strong> by experimenting with advanced class imbalance handling techniques, including <strong>curricular-face loss</strong> (achieving a <strong>1.93% increase in macro F1</strong> over the previous SOTA).</div>
                                    <div>• Created and integrated a <strong>Bangla gazetteer</strong> with neural networks to enhance overall NER performance.</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-2">Lemmatization (BanLemma):</div>
                                <div className="ml-4 space-y-2 text-darkslate-200">
                                    <div>• <strong>Collaborated with linguists</strong> to develop a novel <strong>rule-based lemmatizer</strong> for Bangla, with rules derived from analysis of concatenation patterns and dictionary insights. (Resulting work <strong>accepted to EMNLP '23</strong> with <strong>98.17% accuracy</strong> on the internal test set).</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-2">Language Model Training & Classification:</div>
                                <div className="ml-4 space-y-2 text-darkslate-200">
                                    <div>• Prepared the initial <strong>pre-training boilerplate</strong> for <strong>BERT, XLNet, and Word2Vec</strong> using Hugging Face's <em>transformers</em> and <em>datasets</em> libraries.</div>
                                    <div>• Implemented a <strong>CNN model</strong> to accurately classify text as Romanized Bangla (Banglish), achieving <strong>0.93 macro F1</strong>, which was then used to develop a specialized corpus.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                <>
                    <div className="mt-4">
                        <div className="font-semibold text-white mb-2">Sentiment Analysis and Research (SentiGOLD):</div>
                        <div className="ml-4 space-y-2 text-darkslate-200">
                            <div>• <strong>First-authored</strong> the paper, <strong>"SentiGOLD: A Large Bangla Gold Standard Multi-Domain Sentiment Analysis Dataset and its Evaluation," published at KDD '23</strong> (a top-ranked data science conference).</div>
                            <div>• Conducted extensive <strong>transformer-based model experimentation</strong>, <strong>cross-dataset analysis</strong>, and rigorous <strong>statistical significance tests</strong> to develop the benchmarking model and contribute to manuscript crafting.</div>
                            <div>• Developed a comprehensive <strong>live sentiment analysis platform</strong> with 70,000 samples across 30 domains, achieving <strong>0.62 macro F1 score</strong> and <strong>0.88 IAA score</strong> with government-approved linguistic framework.</div>
                                            <div className="mt-3">
                                                <a
                                                    href="https://sentiment.bangla.gov.bd/sentiment-emotion-analysis"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-softteal-500 text-white rounded-lg hover:bg-softteal-600 transition-colors text-sm"
                                                >
                                                    <span>View Live</span>
                                                    <ArrowRight size={14} />
                                                </a>
                                            </div>
                        </div>
                    </div>
                </>,
                <>
                    <div className="mt-4">
                        <div className="font-semibold text-white mb-2">Computer Vision Systems:</div>
                        <div className="ml-4 space-y-4">
                            <div>
                                <div className="font-semibold text-white mb-2">Human Monitoring Live System:</div>
                                <div className="ml-4 space-y-2 text-darkslate-200">
                                    <div>• Developed a production-ready live system for monitoring people using office lobby cameras.</div>
                                    <div>• Utilized <strong>YOLOv8</strong> for accurate human detection and <strong>DeepSORT</strong> for consistent, multi-frame tracking.</div>
                                    <div>• Implemented <strong>ArcFace</strong> for extracting distinct face embeddings and <strong>cosine similarity</strong> for accurate facial recognition and matching.</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-2">Face Anti-Spoofing:</div>
                                <div className="ml-4 space-y-2 text-darkslate-200">
                                    <div>• Created a multi-model system to identify spoof attempts (vs. live humans) using models for <strong>smile detection, eye blink detection, hand gestures detection, and head movements detection</strong>.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                <>
                    <div className="mt-6 pt-4 border-t border-darkslate-800">
                        <div className="font-semibold text-white mb-2">Key Achievements:</div>
                        <div className="ml-4 space-y-2 text-darkslate-200">
                            <div>• <strong>Published Sentiment Analysis research work in KDD '23</strong> (Ranked 1 conference in data science).</div>
                            <div>• <strong>Solely responsible for the two most complex Corpus components (Shallow and Deep Parsing)</strong>, achieving <strong>SOTA results</strong> on the Penn Treebank.</div>
                            <div>• <strong>Led development of a core Corpus component (Lemmatizer)</strong>, with research accepted to EMNLP '23.</div>
                        </div>
                    </div>
                </>
            ]
        }
    ];

    const skillsData = [
        { name: "Programming", icon: Code, level: 95, technologies: ['Python'] },
        { name: "ML Libraries", icon: BookOpen, level: 90, technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'OpenCV', 'LangGraph', 'Pandas', 'Numpy'] },
        { name: "Cloud & DevOps", icon: Briefcase, level: 85, technologies: ['AWS SageMaker', 'Bedrock', 'Docker', 'PyPI'] },
        { name: "Databases", icon: GraduationCap, level: 80, technologies: ['MongoDB', 'MySQL', 'Chroma', 'Elasticsearch'] },
        { name: "APIs & Tools", icon: Code, level: 85, technologies: ['FastAPI', 'Git/GitHub'] }
    ];

    const educationData = [
        {
            degree: "BSc in Computer Science & Engineering (CSE)",
            institution: "Shahjalal University of Science and Technology",
            location: "Sylhet, Bangladesh", // Added location
            duration: "2017 – 2021",
            gpa: "CGPA: 3.18/4.00"
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Dhaka College",
            location: "Dhaka, Bangladesh", // Added location
            duration: "2014 – 2016",
            gpa: "GPA: 5.00/5.00"
        }
    ];

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-darkslate-900">
            {/* Toptal Badge - Fixed Top Right */}
            <div className="fixed top-20 right-20 z-50 hidden md:block transform hover:scale-105 transition-transform duration-300">
                <style>
                    {`
                        @import url("https://use.typekit.net/kmj5qkr.css");
                        :root { --toptal-h: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%); }
                        .toptal-hex-outer { display: inline-block; background: #25a9ef; padding: 4px; clip-path: var(--toptal-h); }
                        .toptal-hex-inner { width: 140px; padding: 16px 0 28px; display: flex; flex-direction: column; align-items: center; gap: 5px; color: #204ecf; text-align: center; background: radial-gradient(circle at 20% -10%, #00c3ff -80%, #fff 30%), radial-gradient(circle at -20% 20%, #00c3ff -80%, #fff 30%), radial-gradient(circle at 70% 100%, #00c3ff -80%, #fff 30%), radial-gradient(circle at 120% 80%, #00c3ff -80%, #fff 30%); background-blend-mode: multiply; clip-path: var(--toptal-h); box-shadow: 0 20px 40px rgba(6, 30, 96, 0.35); }
                        .toptal-badge-container { font-family: proxima-nova, Arial, sans-serif; }
                        .toptal-title { margin: 0; font-size: 13px; font-weight: 700; line-height: 1; }
                        .toptal-divider { width: 80px; height: 1px; background: #25a9ef; }
                        .toptal-subtext { font-size: 11px; margin-bottom: -4px; }
                        .toptal-hire-btn { display: inline-flex; align-items: center; justify-content: center; padding: 3px 14px; border-radius: 4px; background: #296bff; color: #fff; font-size: 12px; font-weight: 500; text-decoration: none; }
                        .toptal-hire-btn:hover { background: #1a5ad9; }
                    `}
                </style>
                <div className="toptal-badge-container">
                    <div className="toptal-hex-outer">
                        <div className="toptal-hex-inner">
                            <svg width="44" viewBox="0 0 60 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="m20.85 6.38 6.06-.89 2.72-5.49 2.71 5.49 6.06.89-4.39 4.28 1.04 6.03-5.42-2.85-5.43 2.85 1.04-6.03zm33.06 7.17 1.85-.27.82-1.67.83 1.67 1.84.27-1.33 1.31.31 1.83-1.65-.87-1.66.87.32-1.83zm-3.38-3.01-3.61-.52-1.61-3.26-1.62 3.26-3.6.52 2.6 2.55-.61 3.59 3.23-1.69 3.21 1.69-.61-3.59zm-45.19 3.01-1.85-.27-.82-1.67-.83 1.67-1.84.27 1.33 1.31-.31 1.83 1.65-.87 1.65.87-.31-1.83zm3.38-3.01 3.61-.52 1.61-3.26 1.61 3.26 3.61.52-2.6 2.55.61 3.59-3.23-1.69-3.22 1.69.62-3.59z" fill="#00c3ff"/>
                            </svg>
                            <h3 className="toptal-title">TOP 3% TALENT</h3>
                            <div className="toptal-divider"></div>
                            <span className="toptal-subtext">Vetted by</span>
                            <svg style={{width: '70px'}} viewBox="0 0 108 30" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.11 0L14.82 6.7C14.87 6.75 14.91 6.8 14.97 6.85L20.82 12.7L11.31 22.16L15.66 26.52L12.75 29.41L6.09 22.75C6.01 22.68 5.93 22.6 5.85 22.52L0 16.68L9.48 7.25L5.16 2.94L8.11 0ZM12.36 10.5C12.27 10.48 12.18 10.48 12.1 10.5C12.01 10.53 11.94 10.57 11.78 10.72L6.37 16.11C6.21 16.27 6.17 16.34 6.15 16.42C6.12 16.51 6.12 16.6 6.15 16.68C6.17 16.77 6.22 16.85 6.37 17L8.09 18.72C8.24 18.87 8.31 18.91 8.4 18.94C8.49 18.96 8.57 18.96 8.66 18.94C8.75 18.91 8.82 18.87 8.97 18.72L14.38 13.33C14.54 13.18 14.58 13.1 14.61 13.02C14.63 12.93 14.63 12.85 14.61 12.76C14.59 12.67 14.54 12.6 14.39 12.45L12.67 10.73C12.52 10.57 12.44 10.53 12.36 10.5Z" fill="#204ecf"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M62.65 7.76C64.76 7.76 66.56 8.58 67.99 10.16C69.45 11.69 70.18 13.8 70.17 16.42C70.17 18.98 69.42 21.22 67.93 22.8C66.46 24.37 64.59 25.17 62.35 25.17C60.42 25.16 58.67 24.47 57.51 23.28L57.35 23.11L57.34 29.86L53.52 29.85V29.57L53.56 7.96L57.36 7.96L57.35 10.6C58.6 9.19 60.61 7.76 62.65 7.76ZM87.1 7.82C89.28 7.82 90.78 8.31 91.94 9.26C93.05 10.18 93.64 11.82 93.69 13.55L93.69 13.81L93.67 24.95H89.8L89.8 24.49C89.8 24.01 89.8 23.52 89.8 23.02C88.68 24.57 87.12 25.32 85.04 25.32C83.39 25.32 81.99 24.82 80.97 23.9C79.94 22.95 79.39 21.66 79.39 20.16C79.41 17.33 81.41 15.37 84.91 14.76L85.18 14.71L89.82 13.98V13.61C89.82 12.83 89.59 11.89 89.13 11.5C88.66 11.1 88.09 10.77 87.1 10.77C84.37 10.77 83.81 12.78 83.78 13.79L83.78 13.88L80.36 13.92C80.36 12.43 81.05 10.5 82.44 9.29C83.56 8.32 85.19 7.87 86.77 7.82L87.07 7.82H87.1ZM72.12 3.46L75.93 3.46L75.92 8.02L79.45 8.02L79.45 11.2L75.91 11.19L75.9 19.73C75.9 20.67 76.09 21.29 76.5 21.58C76.93 21.88 77.8 21.6 77.8 21.6L78.14 24.92C78.14 24.92 76.94 25.23 76.18 25.23C75.19 25.23 74.34 24.98 73.69 24.48C72.63 23.68 72.09 22.28 72.09 20.31L72.11 11.19L68.92 8L72.12 8.01L72.12 3.46ZM49.66 10.26C50.76 11.39 52.07 13.4 52.06 16.52C52.05 19.63 50.74 21.63 49.65 22.76C48.15 24.3 46.11 25.18 44.06 25.18C43.98 25.18 43.9 25.18 43.81 25.17C41.62 25.16 39.68 24.38 38.06 22.84C36.43 21.29 35.6 19.16 35.6 16.48C35.6 13.8 36.44 11.66 38.07 10.12C39.69 8.59 41.62 7.82 43.82 7.82C45.99 7.75 48.11 8.65 49.66 10.26ZM40.85 3.22V6.99L33.49 7L33.51 24.97L29.54 24.96V24.62L29.57 6.99H22.06L22.07 3.22H40.85ZM95.53 3.47L98.95 3.48V3.57L98.92 24.95L95.5 24.94V24.84L95.53 3.47ZM89.82 17.05L86.01 17.69C84.15 18.01 83.29 18.73 83.28 19.99C83.27 21.14 84.09 21.91 85.37 21.98L85.53 21.98H85.55C87.99 21.98 89.72 20.08 89.81 17.31L89.82 17.09V17.05ZM43.8 11.21C42.52 11.21 41.41 11.7 40.51 12.68C39.63 13.64 39.18 14.92 39.18 16.49C39.18 18.07 39.63 19.35 40.51 20.31C41.4 21.29 42.51 21.78 43.79 21.79C45.09 21.79 46.21 21.3 47.1 20.32C48 19.34 48.45 18.06 48.46 16.51C48.47 14.95 48.01 13.67 47.11 12.69C46.21 11.71 45.1 11.21 43.8 11.21ZM61.74 11.33H61.72C60.44 11.33 59.38 11.79 58.48 12.76C57.58 13.7 57.13 14.92 57.12 16.39C57.12 17.88 57.57 19.22 58.47 20.2C59.39 21.14 60.45 21.61 61.72 21.61C63.01 21.61 64.1 21.13 64.97 20.2C65.88 19.23 66.32 17.9 66.33 16.41C66.33 14.93 65.87 13.71 64.99 12.78C64.12 11.82 63.03 11.33 61.74 11.33Z" fill="#262d3d"/>
                            </svg>
                            <a className="toptal-hire-btn" href="https://www.toptal.com/developers/resume/ekramul-islam#M53LWb" target="_blank" rel="noopener noreferrer">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Navigation - Desktop */}
            <nav className={`hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 shadow-xl z-50 transition-all duration-300 ${isScrolled ? 'bg-darkslate-800 bg-opacity-95 backdrop-blur-sm' : 'bg-gradient-to-b from-darkslate-800 to-darkslate-900'}`}>
                {/* Header Section - Fixed height */}
                <div className="p-6 border-b border-darkslate-700 flex-shrink-0">
                    <div className="flex justify-center mb-4">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-softteal-500 shadow-lg shadow-softteal-500/30 transform transition-transform hover:scale-110">
                            <img
                                src="/profile.jpg"
                                alt="Ekramul Islam"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">Ekramul Islam</div>
                        <p className="text-darkslate-300 text-sm">ML Engineer & Researcher</p>
                    </div>
                </div>

                {/* Navigation Menu - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {[
                        { id: 'about', label: 'About Me', icon: <MapPin size={18} /> },
                        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                        { id: 'publications', label: 'Publications', icon: <BookOpen size={18} /> },
                        { id: 'academic-research', label: 'Research', icon: <BookOpen size={18} /> },
                        { id: 'personal-projects', label: 'Projects', icon: <Code size={18} /> },
                        { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
                        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
                        { id: 'linguistic-proficiency', label: 'Languages', icon: <BookOpen size={18} /> },
                        { id: 'extracurricular', label: 'Activities', icon: <Award size={18} /> }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 w-full text-left
                                ${activeSection === item.id
                                    ? 'bg-softteal-600 text-white shadow-md shadow-softteal-600/30'
                                    : 'text-darkslate-300 hover:bg-softteal-600 hover:text-white hover:translate-x-2'}`
                            }
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Footer Section - Fixed height */}
                <div className="p-6 border-t border-darkslate-700 flex-shrink-0">
                    <div className="flex justify-center space-x-3">
                        <a href="https://www.linkedin.com/in/ekramul-islam-b824a1176/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-softteal-600 flex items-center justify-center hover:bg-softteal-500 hover:text-white transition-all">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://github.com/Ekram007" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-softteal-600 flex items-center justify-center hover:bg-softteal-500 hover:text-white transition-all">
                            <Github size={16} />
                        </a>
                        <a href="https://scholar.google.com/citations?user=TmiwxJwAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-softteal-600 flex items-center justify-center hover:bg-softteal-500 hover:text-white transition-all" title="Google Scholar">
                            <GraduationCap size={16} />
                        </a>
                        <a href="mailto:ei.ekramul.islam@gmail.com" className="w-9 h-9 rounded-full bg-softteal-600 flex items-center justify-center hover:bg-softteal-500 hover:text-white transition-all">
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Header */}
            <div className={`md:hidden fixed top-0 left-0 right-0 shadow-md z-50 p-4 transition-all duration-300 ${isScrolled ? 'bg-darkslate-800 bg-opacity-95 backdrop-blur-sm' : 'bg-darkslate-800'}`}>
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-softteal-400">Ekramul Islam</div>
                    <button
                        className="text-darkslate-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="mt-4 pb-4 border-t border-darkslate-700 pt-4">
                        <div className="flex flex-col space-y-4">
                            {[
                                { id: 'about', label: 'About Me', icon: <MapPin size={18} /> },
                                { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                                { id: 'publications', label: 'Publications', icon: <BookOpen size={18} /> },
                                { id: 'academic-research', label: 'Research', icon: <BookOpen size={18} /> },
                                { id: 'personal-projects', label: 'Projects', icon: <Code size={18} /> },
                                { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
                                { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
                                { id: 'linguistic-proficiency', label: 'Languages', icon: <BookOpen size={18} /> },
                                { id: 'extracurricular', label: 'Activities', icon: <Award size={18} /> }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-colors duration-300 ${activeSection === item.id
                                        ? 'bg-softteal-600 text-white font-medium'
                                        : 'text-darkslate-300 hover:bg-darkslate-700'
                                        }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 pt-16 md:pt-0">
                {/* Enhanced About Me Section */}
                <header id="about" className="min-h-[100dvh] md:h-screen bg-gradient-to-br from-darkslate-900 via-darkslate-800 to-darkslate-900 text-white pt-20 md:pt-0 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* ... existing background elements ... */}

                    {/* Profile Image for Mobile */}
                    <div className="md:hidden w-28 h-28 rounded-full overflow-hidden border-4 border-softteal-500 shadow-xl shadow-softteal-500/30 mb-6 transform hover:scale-105 transition-transform">
                        <img
                            src="/profile.jpg"
                            alt="Ekramul Islam"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-4 md:gap-6 relative text-center">
                        <h1 className="text-3xl md:text-7xl font-bold drop-shadow-lg space-y-2 md:space-y-4">
                            <div className="bg-gradient-to-r from-softteal-400 to-white bg-clip-text text-transparent">
                                Hi, I'm Ekram
                            </div>
                            <div className="text-xl md:text-4xl font-medium text-darkslate-300 mt-2 md:mt-4">
                                Passionate about life, AI, and discovery.
                            </div>
                        </h1>

                        {/* Typed Text Container */}
                        <div className="mt-4 md:mt-6 relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-softteal-500 to-softteal-400 rounded-lg blur opacity-30 animate-pulse"></div>
                            <div className="relative text-lg md:text-3xl font-mono px-4 py-2 md:px-6 md:py-3 bg-darkslate-800 bg-opacity-80 rounded-lg border border-softteal-600/30">
                                {typedText}
                                <span className="border-r-2 border-softteal-400 animate-pulse ml-1"></span>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-2 md:gap-8 text-sm md:text-xl gap-4 md:gap-8 text-base md:text-xl mt-4 md:mt-8 text-darkslate-200">
                            <div className="space-y-2 md:space-y-4 relative px-4">
                                <p className="relative z-10">
                                    Specializing in NLP and Machine Learning, I bridge the gap between
                                    theoretical research and practical implementation.
                                </p>
                            </div>
                            <div className="space-y-2 md:space-y-4 relative px-4">
                                <p className="relative z-10">
                                    Passionate about low-resource language processing, I've pioneered
                                    multiple NLP frameworks for Bangla language.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-wrap items-center gap-3 items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
                            <a href="/Md._Ekramul_Islam_CV.pdf" download className="relative group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-softteal-600 rounded-full hover:bg-softteal-500 transition-all shadow-xl shadow-softteal-600/30 hover:shadow-2xl hover:shadow-softteal-500/40">
                                <ArrowRight className="animate-bounce-horizontal" size={18} />
                                <span className="text-sm md:text-lg font-medium">Download CV</span>
                            </a>

                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                {[
                                    { icon: MapPin, text: "Dhaka, Bangladesh" },
                                    { icon: Phone, text: "(+880) 1521434732" },
                                    { icon: Mail, text: "ei.ekramul.islam@gmail.com" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-darkslate-800 bg-opacity-70 rounded-full hover:bg-opacity-90 border border-darkslate-700 transition-all cursor-pointer group">
                                        <item.icon className="text-softteal-400 group-hover:text-softteal-300 transition-colors" size={16} />
                                        <span className="text-xs md:text-sm group-hover:text-white transition-colors">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Animated Scroll Indicator */}
                        <div className="absolute -bottom-20 md:-bottom-32 animate-bounce-slow">
                            <div className="relative w-8 h-14 md:w-12 md:h-20 scale-150">
                                <div className="absolute inset-0 border-2 border-softteal-400 rounded-full">
                                    <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1 h-3 md:h-4 bg-softteal-400 rounded-full animate-scroll-wheel"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Sections */}
                <main className="max-w-6xl mx-auto px-6 py-16 bg-darkslate-900">
                    {/* Experience Section */}
                    <section id="experience" className="mb-24 pt-16 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-softteal-600 via-softteal-500 to-darkslate-400">
                                    Professional Journey
                                </span>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-darkslate-400 via-softteal-500 to-softteal-600 rounded-full"></div>
                            </h2>
                            <p className="text-lg text-darkslate-300 max-w-2xl mx-auto">
                                A timeline of my professional growth and key achievements in the field of Machine Learning and AI
                            </p>
                        </div>

                        <div className="relative">
                            {/* Animated Timeline Line */}
                            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-darkslate-200 via-softteal-300 to-darkslate-200 rounded-full"></div>
                            
                            <div className="space-y-16">
                                {experiences.map((job, index) => (
                                    <div key={index} className="relative group">
                                        {/* Timeline Dot with Animation */}
                                        <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-softteal-500 to-darkslate-600 rounded-full border-4 border-white shadow-xl z-20 transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl">
                                            <div className="absolute inset-0 bg-darkslate-400 rounded-full animate-ping opacity-20"></div>
                                        </div>

                                        <div className="md:ml-16">
                                            <div className="bg-darkslate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-[1.02] overflow-hidden border border-darkslate-700">
                                                {/* Header with Gradient Background */}
                                                <div className="bg-gradient-to-r from-darkslate-800 to-darkslate-850 p-6 md:p-8 border-b border-darkslate-700">
                                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <div className="w-12 h-12 bg-gradient-to-r from-softteal-500 to-softteal-600 rounded-xl flex items-center justify-center shadow-lg">
                                                                    <Briefcase className="text-white" size={20} />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-softteal-300 transition-colors">
                                                                        {job.title}
                                                                    </h3>
                                                                    <h4 className="text-lg font-semibold text-softteal-300 group-hover:text-softteal-200 transition-colors">
                                                                        {job.company}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start md:items-end gap-2">
                                                            <span className="inline-flex items-center px-4 py-2 bg-softteal-600 text-white rounded-full text-sm font-medium shadow-sm">
                                                                {job.period}
                                                            </span>
                                                            {job.period.includes('Present') && (
                                                                <div className="flex items-center gap-1 text-softteal-300">
                                                                    <div className="w-2 h-2 bg-softteal-400 rounded-full animate-pulse"></div>
                                                                    <span className="text-xs font-medium">Current</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content Area */}
                                                <div className="p-6 md:p-8">
                                                    <div className="space-y-4">
                                                        {job.responsibilities.map((responsibility, i) => (
                                                            <div key={i} className="group/item">
                                                                {responsibility}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Hover Effect Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-darkslate-500/5 to-softteal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-20 left-10 w-20 h-20 bg-softteal-900 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-16 h-16 bg-softteal-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-darkslate-200 rounded-full opacity-30 animate-pulse delay-500"></div>
                    </section>

                    {/* Publications Section */}
                    <section id="publications" className="mb-24 pt-16 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Publications</h2>
                            <div className="w-24 h-1 bg-softteal-500 mx-auto mt-4"></div>
                        </div>

                        {/* Research Impact Metrics */}
                        <div className="bg-gradient-to-r from-darkslate-800 to-darkslate-850 p-6 rounded-xl mb-8 border border-darkslate-700">
                            <h3 className="text-2xl font-bold text-center mb-6 text-white">Research Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-darkslate-800 p-4 rounded-lg shadow-md border border-darkslate-700">
                                    <div className="text-3xl font-bold text-softteal-400">30+</div>
                                    <div className="text-darkslate-300">Total Citations</div>
                                </div>
                                <div className="bg-darkslate-800 p-4 rounded-lg shadow-md border border-darkslate-700">
                                    <div className="text-3xl font-bold text-softteal-400">3</div>
                                    <div className="text-darkslate-300">h-index</div>
                                </div>
                                <div className="bg-darkslate-800 p-4 rounded-lg shadow-md border border-darkslate-700">
                                    <div className="text-3xl font-bold text-softteal-400">2</div>
                                    <div className="text-darkslate-300">i10-index</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "SENTIGOLD: A LARGE BANGLA GOLD STANDARD MULTI-DOMAIN SENTIMENT ANALYSIS DATASET AND ITS EVALUATION",
                                    authors: <><strong>Md. Ekramul Islam</strong>, Labib Chowdhury, Faisal Ahamed Khan, Shazzad Hossain, Md Sourave Hossain, Mohammad Mamun Or Rashid, Nabeel Mohammed, Mohammad Ruhul Amin</>,
                                    publishedDate: "04-08-2023",
                                    doi: "https://doi.org/10.1145/3580305.3599904",
                                    publicationType: <>29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<strong>KDD '23</strong>)</>,
                                    citationCount: 11,
                                    publicationRank: "A*",
                                    overview: "In this study, we present a Bangla multi-domain sentiment analysis dataset, named as SentiGOLD, developed using 70,000 samples, which was compiled from a variety of sources and annotated by a gender-balanced team of linguists. This dataset was created in accordance with a standard set of linguistic conventions that were established after multiple meetings between the Government of Bangladesh and a nationally recognized Bangla linguistics committee. Although there are standard sentiment analysis datasets available for English and other rich languages, there are not any such datasets in Bangla, especially because, there was no standard linguistics framework agreed upon by national stakeholders. Senti-GOLD derives its raw data from online video comments, social media posts and comments, blog posts and comments, news and numerous other sources. Throughout the development of this dataset, domain distribution and class distribution were rigorously maintained. SentiGOLD was created using data from a total of 30 domains (e.g. politics, entertainment, sports, etc.) and was labeled using 5 classes (e.g. strongly negative, weakly negative, neutral, weakly positive, and strongly positive). In order to maintain annotation quality, the national linguistics committee approved an annotation scheme to ensure a rigorous Inter Annotator Agreement (IAA) in a multi-annotator annotation scenario. This procedure yielded an IAA score of 0.88 using Fleiss' kappa method, which is elaborated upon in the paper. A protocol for intra- and cross-dataset evaluation was utilized in our efforts to develop a classification system as a standard. The cross-dataset evaluation was performed on the SentNoB dataset, which contains noisy Bangla text samples, thereby establishing a demanding test scenario. We also performed cross-dataset testing by employing zero-shot experiments, and our best model produced competitive performance, which exemplify our dataset's generalizability. Our top model attained a macro f1 of 0.62 (intra-dataset) for 5 classes establishing the benchmark for SentiGOLD, and 0.61 (cross-dataset from SentNoB) for 3 classes which stands comparable to the current state-of-the-art. Our fine-tuned sentiment analysis model can be accessed online. https://sentiment.bangla.gov.bd"
                                },
                                {
                                    title: "BanNERD: A Benchmark Dataset and Context-Driven Approach for Bangla Named Entity Recognition",
                                    authors: <>Md. Mahtab, Faisal Khan, <strong>Md. Ekramul Islam</strong>, Md. Shahad Mahmud Chowdhury, Labib Chowdhury, Sadia Afrin, Hakim Arif, Mohammad Mamun Or Rashid, Nabeel Mohammed, Mohammad Ruhul Amin</>,
                                    publishedDate: "2025",
                                    doi: "https://aclanthology.org/2025.findings-naacl.380",
                                    publicationType: <>Findings of the Association for Computational Linguistics: <strong>NAACL 2025</strong></>,
                                    citationCount: "Recent",
                                    publicationRank: "A*",
                                    overview: "In this study, we introduce BanNERD, the most extensive human-annotated and validated Bangla Named Entity Recognition Dataset to date, comprising over 85,000 sentences. BanNERD is curated from a diverse array of sources, spanning over 29 domains, thereby offering a comprehensive range of generalized contexts. To ensure the dataset’s quality, expert linguists developed a detailed annotation guideline tailored to the Bangla language. All annotations underwent rigorous validation by a team of validators, with final labels being determined via majority voting, thereby ensuring the highest annotation quality and a high IAA score of 0.88. In a cross-dataset evaluation, models trained on BanNERD consistently outperformed those trained on four existing Bangla NER datasets. Additionally, we propose a method named BanNERCEM (Bangla NER context-ensemble Method) which outperforms existing approaches on Bangla NER datasets and performs competitively on English datasets using lightweight Bangla pretrained LLMs. Our approach passes each context separately to the model instead of previous concatenation-based approaches achieving the highest average macro F1 score of 81.85% across 10 NER classes, outperforming previous approaches and ensuring better context utilization. We are making the code and datasets publicly available at https://github.com/eblict-gigatech/BanNERD in order to contribute to the further advancement of Bangla NLP."
                                },
                                {
                                    title: "BANLEMMA: A WORD FORMATION DEPENDENT RULE AND DICTIONARY BASED BANGLA LEMMATIZER",
                                    authors: <>Sadia Afrin, Md. Shahad Mahmud Chowdhury, <strong>Md. Ekramul Islam</strong>, Faisal Khan, Labib Chowdhury, Md. Mahtab, Nazifa Chowdhury, Massud Forkan, Neelima Kundu, Hakim Arif, Mohammad Mamun Or Rashid, Mohammad Amin, Nabeel Mohammed</>,
                                    publishedDate: "15-12-2023",
                                    doi: "https://doi.org/10.18653/v1/2023.findings-emnlp.240",
                                    publicationType: <>Findings of the Association for Computational Linguistics: <strong>EMNLP 2023</strong></>,
                                    citationCount: 1,
                                    publicationRank: "A*",
                                    overview: "Lemmatization holds significance in both natural language processing (NLP) and linguistics, as it effectively decreases data density and aids in comprehending contextual meaning. However, due to the highly inflected nature and morphological richness, lemmatization in Bangla text poses a complex challenge. In this study, we propose linguistic rules for lemmatization and utilize a dictionary along with the rules to design a lemmatizer specifically for Bangla. Our system aims to lemmatize words based on their parts of speech class within a given sentence. Unlike previous rule-based approaches, we analyzed the suffix marker occurrence according to the morpho-syntactic values and then utilized sequences of suffix markers instead of entire suffixes. To develop our rules, we analyze a large corpus of Bangla text from various domains, sources, and time periods to observe the word formation of inflected words. The lemmatizer achieves an accuracy of 96.36% when tested against a manually annotated test dataset by trained linguists and demonstrates competitive performance on three previously published Bangla lemmatization datasets. We are making the code and datasets publicly available at https://github.com/eblict-gigatech/BanLemma in order to contribute to the further advancement of Bangla NLP."
                                },
                                {
                                    title: "WORD COMPLETION AND SEQUENCE PREDICTION IN BANGLA LANGUAGE USING TRIE AND A HYBRID APPROACH OF SEQUENTIAL LSTM AND N-GRAM",
                                    authors: <>Soumik Sarker, <strong>Md. Ekramul Islam</strong>, Jillur Rahman Saurav, Md Mahadi Hasan Nahid</>,
                                    publishedDate: "28-11-2020",
                                    doi: "https://doi.org/10.1109/ICAICT51780.2020.9333518",
                                    publicationType: <>2nd International Conference on Advanced Information and Communication Technology (<strong>ICAICT</strong>)</>,
                                    citationCount: 13,
                                    publicationRank: "N/A",
                                    overview: "Autocompletion and sequence prediction is the basis of any assistance systems. When we step out to type something, it is much comforting to get a suggestion of the next word or even the full sentence before we type, which saves keystrokes of typing and reduce misspelling. Despite the several promising works in English language, little prior research in Bangla has shed light on this domain. In this paper, we proposed an integrated methodology of trie, sequential LSTM and N-gram for word completion and sequence prediction in Bangla language. The trie data structure was implemented to store Bangla vocabulary and retrieve the word from user-inputted prefix. For sequence prediction, we explored a hybrid approach of neural network and N-gram. This collaboration of sequential LSTM and N-gram reveals a better performance than any single model implementation. We evaluated this model with both small and large-scale Bangla datasets for better efficiency. The experiments show a promising outcome of our hybrid approach for word completion and sequence prediction. We believe that our framework leads to a profound impact on Bangla search engines, keyboards, and further researches based on recommendation systems."
                                },
                            ].map((pub, index) => (
                                <div
                                    key={index}
                                    className="bg-darkslate-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <Award
                                        className="text-softteal-400 mb-4 group-hover:scale-110 transition-transform"
                                        size={28}
                                    />
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-softteal-400 transition-colors">
                                        {pub.title}
                                    </h3>
                                    <p className="text-darkslate-300 text-sm mb-1">
                                        <i>{pub.authors}</i>
                                    </p>
                                    <p className="text-darkslate-300 text-sm mb-1">
                                        {pub.publicationType}
                                    </p>
                                    <p className="text-darkslate-300 text-sm mb-1">
                                        <strong>DOI:</strong>{" "}
                                        <a
                                            href={pub.doi}
                                            target="_blank"
                                            className="text-softteal-400 hover:underline"
                                        >
                                            {pub.doi}
                                        </a>
                                    </p>
                                    <p className="text-darkslate-200 text-sm mb-4">{pub.overview}</p>
                                    {pub.title.includes("SENTIGOLD") && (
                                        <div className="mt-4">
                                            <a
                                                href="https://sentiment.bangla.gov.bd/sentiment-emotion-analysis"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-softteal-600 text-white rounded-lg hover:bg-softteal-700 transition-colors"
                                            >
                                                <span>View Live</span>
                                                <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Academic Research Section */}
                    <section id="academic-research" className="mb-24 pt-16 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Academic Research</h2>
                            <div className="w-24 h-1 bg-softteal-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Handwritten Character Generation",
                                    subtitle: "Undergraduate Thesis",
                                    description: "Experimented with GAN's (Conditional GAN, Auxiliary GAN etc) to synthesize images of Bangla handwritten characters from textual prompts.",
                                    github: "https://github.com/Ekram007/Bangla-Handwritten-Character-Generation-using-GAN",
                                    technologies: ["GAN", "Conditional GAN", "Auxiliary GAN", "Computer Vision"]
                                },
                                {
                                    title: "Bangla Next Sequence Prediction",
                                    subtitle: "Published in IEEE (ICAICT '20)",
                                    description: "Proposed a solution using Trie and a combination of LSTM and N-gram to predict the relevant next sequence list in Bangla.",
                                    github: "https://github.com/Ekram007/Onnesha",
                                    technologies: ["LSTM", "N-gram", "Trie", "NLP"]
                                },
                                {
                                    title: "Music Generation",
                                    subtitle: "Personal Research Project",
                                    description: "Conducted Midi music files collection, notes preparation and utilized BiLSTM GAN for music generation.",
                                    github: "https://github.com/Ekram007/Music-Generation-using-Bidirection-LSTM-GAN",
                                    technologies: ["BiLSTM", "GAN", "MIDI", "Music Generation"]
                                }
                            ].map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-darkslate-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-softteal-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-softteal-400 hover:text-softteal-800 transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    <p className="text-softteal-400 font-medium text-sm mb-3">{project.subtitle}</p>
                                    <p className="text-darkslate-200 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-softteal-900 text-softteal-300 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Personal Projects Section */}
                    <section id="personal-projects" className="mb-24 pt-16 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Personal Projects</h2>
                            <div className="w-24 h-1 bg-softteal-500 mx-auto mt-4"></div>
                        </div>

                        <div className="bg-darkslate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-darkslate-700">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-semibold text-white">CrossPress Digest</h3>
                                <span className="text-sm text-darkslate-400">Jan 2025 – Present</span>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-darkslate-200">
                                    Led backend and ML development for a system that identifies duplicate news stories from multiple sources using semantic search, and summarizes with Gemini.
                                </p>
                                
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                                    <ul className="list-disc pl-5 text-darkslate-200 space-y-1">
                                        <li>Implemented search service using vector database (Chroma) and LLM-based RAG to answer user queries</li>
                                        <li>Duplicate news story identification using semantic search</li>
                                        <li>Automated summarization with Gemini API</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Elasticsearch', 'Sentence Transformers', 'MongoDB', 'Gemini API', 'Chroma', 'Docker', 'FastAPI', 'Python'].map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-softteal-900 text-softteal-300 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <a
                                        href="http://news-agent-ground.s3-website-us-east-1.amazonaws.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-softteal-600 text-white rounded-lg hover:bg-softteal-700 transition-colors"
                                    >
                                        <span>Live Site</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-24 bg-darkslate-850 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                                Technical Expertise
                                <div className="mt-2 w-24 h-1 bg-softteal-500 mx-auto"></div>
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {skillsData.map((skill) => (
                                    <div key={skill.name} className="bg-darkslate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center transform hover:scale-105">
                                        <div className="relative w-20 h-20 mx-auto mb-4">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                                <circle
                                                    className="text-white"
                                                    strokeWidth="8"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="40"
                                                    cx="50"
                                                    cy="50"
                                                />
                                                <circle
                                                    className="text-softteal-500 transition-all duration-500"
                                                    strokeWidth="8"
                                                    strokeLinecap="round"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="40"
                                                    cx="50"
                                                    cy="50"
                                                    strokeDasharray={`${2 * Math.PI * 40}`}
                                                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <skill.icon className="w-8 h-8 text-softteal-400" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                        <p className="text-darkslate-300 text-sm">{skill.technologies.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Enhanced Education Section */}
                    <section id="education" className="py-24 bg-darkslate-900 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-softteal-600 to-darkslate-400">
                                    Academic Journey
                                </span>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-darkslate-400 to-transparent" />
                            </h2>

                            <div className="relative">
                                {/* Animated Timeline */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-darkslate-300 via-softteal-200 to-darkslate-300 transform -translate-x-1/2 animate-pulse-beam" />

                                <div className="space-y-16 md:space-y-24">
                                    {educationData.map((edu, index) => (
                                        <div key={index} className="relative group">
                                            {/* Timeline Dot */}
                                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/4 w-5 h-5 bg-softteal-500 rounded-full border-4 border-white shadow-xl transform transition-all group-hover:scale-125 group-hover:bg-darkslate-400 z-10" />

                                            <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                                                {/* Institution Image */}
                                                <div className="hidden md:block flex-1 transform transition-all duration-500 group-hover:-translate-y-2">
                                                    <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                                        <img
                                                            src={`/institution-${index + 1}.jpg`} // Add your institution images
                                                            alt={edu.institution}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-softteal-600/20 to-transparent" />
                                                    </div>
                                                </div>

                                                {/* Education Card */}
                                                <div className="flex-1 relative">
                                                    <div className="relative bg-darkslate-800 p-8 rounded-3xl shadow-2xl border-l-4 border-softcoral-500 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-3xl">
                                                        <div className="absolute -top-6 left-6 w-14 h-14 bg-softteal-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-45">
                                                            <GraduationCap className="text-white transform -rotate-45" size={24} />
                                                        </div>

                                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                                            <span className="bg-softteal-900 text-softteal-300 px-3 py-1 rounded-full text-sm">🎓 {edu.degree}</span>
                                                        </h3>
                                                        <p className="text-xl font-semibold text-softteal-400 mb-3 flex items-center gap-2">
                                                            <Briefcase size={18} />
                                                            {edu.institution}
                                                        </p>

                                                        <div className="space-y-2 text-darkslate-300">
                                                            <p className="flex items-center gap-2">
                                                                <MapPin size={16} className="text-softteal-500" />
                                                                {edu.location}
                                                            </p>
                                                            <p className="flex items-center gap-2">
                                                                <Calendar size={16} className="text-softteal-500" />
                                                                {edu.duration}
                                                            </p>
                                                            <p className="flex items-center gap-2 font-medium">
                                                                <Award size={16} className="text-softteal-500" />
                                                                {edu.gpa}
                                                            </p>
                                                        </div>

                                                        {/* Hover Effect Decoration */}
                                                        <div className="absolute -inset-2 rounded-3xl border-2 border-darkslate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Linguistic Proficiency Section */}
                    <section id="linguistic-proficiency" className="py-24 bg-darkslate-900 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-softteal-600 to-darkslate-400">
                                    Linguistic Proficiency
                                </span>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-darkslate-400 to-transparent" />
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-darkslate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-softteal-900 rounded-full flex items-center justify-center text-softteal-400 font-bold">E</span>
                                        English
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-darkslate-300">IELTS Overall Score</span>
                                            <span className="text-2xl font-bold text-softteal-400">7.5</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-darkslate-300">Listening</span>
                                                <span className="font-semibold text-softteal-400">8.5</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-darkslate-300">Reading</span>
                                                <span className="font-semibold text-softteal-400">8.0</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-darkslate-300">Writing</span>
                                                <span className="font-semibold text-softteal-400">6.0</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-darkslate-300">Speaking</span>
                                                <span className="font-semibold text-softteal-400">6.5</span>
                                            </div>
                                        </div>
                                        <div className="pt-2 text-sm text-darkslate-400">
                                            <strong>IELTS</strong> - International English Language Testing System
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-darkslate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-softteal-900 rounded-full flex items-center justify-center text-softteal-400 font-bold">ব</span>
                                        Bangla
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-darkslate-300">Proficiency Level</span>
                                            <span className="text-2xl font-bold text-softteal-400">Native</span>
                                        </div>
                                        <p className="text-darkslate-300">
                                            Native language speaker with deep understanding of Bengali literature, 
                                            culture, and linguistic nuances. Extensive experience in Bangla NLP research 
                                            and development.
                                        </p>
                                        <div className="pt-2 text-sm text-darkslate-400">
                                            <strong>Native Language</strong> - Fluent in all aspects
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Extra-curricular Activities Section */}
                    <section id="extracurricular" className="py-24 bg-darkslate-850 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                                Extra-curricular Activities
                                <div className="mt-2 w-24 h-1 bg-softteal-500 mx-auto"></div>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Chess Achievement",
                                        description: "11th in National Junior Chess Championship-2013, Bangladesh",
                                        icon: "♟️",
                                        category: "Sports"
                                    },
                                    {
                                        title: "Musical Club Executive",
                                        description: "Former Executive member (2017-2019) at RIM Musical Club, SUST, Bangladesh",
                                        icon: "🎵",
                                        category: "Leadership"
                                    },
                                    {
                                        title: "Science Club Member",
                                        description: "Active in Dhaka College Science Club (2014-2016)",
                                        icon: "🔬",
                                        category: "Academic"
                                    },
                                    {
                                        title: "MUN & Debating",
                                        description: "Active in NBPSC MUN & Debating Club (2010-2014)",
                                        icon: "💬",
                                        category: "Debate"
                                    },
                                    {
                                        title: "Cultural Events",
                                        description: "Volunteered in different events and performed as a guitarist in cultural events",
                                        icon: "🎸",
                                        category: "Volunteering"
                                    }
                                ].map((activity, index) => (
                                    <div
                                        key={index}
                                        className="bg-darkslate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-3xl">{activity.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white group-hover:text-softteal-400 transition-colors">
                                                    {activity.title}
                                                </h3>
                                                <span className="text-sm text-softteal-400 font-medium">{activity.category}</span>
                                            </div>
                                        </div>
                                        <p className="text-darkslate-200 text-sm">{activity.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-darkslate-900 text-white py-12">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Ekramul Islam</h3>
                                <p className="text-darkslate-400">Innovating AI solutions for real-world challenges</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <div className="space-y-2">
                                    {[
                                        { id: 'about', label: 'About Me' },
                                        { id: 'experience', label: 'Experience' },
                                        { id: 'publications', label: 'Publications' },
                                        { id: 'academic-research', label: 'Research' },
                                        { id: 'personal-projects', label: 'Projects' },
                                        { id: 'skills', label: 'Skills' },
                                        { id: 'education', label: 'Education' },
                                        { id: 'linguistic-proficiency', label: 'Languages' },
                                        { id: 'extracurricular', label: 'Activities' }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="block text-darkslate-400 hover:text-softteal-400 transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                                <div className="flex space-x-4">
                                    {[
                                        { icon: Github, link: 'https://github.com/Ekram007' },
                                        { icon: Linkedin, link: 'https://www.linkedin.com/in/ekramul-islam-b824a1176/' },
                                        { icon: GraduationCap, link: 'https://scholar.google.com/citations?user=TmiwxJwAAAAJ&hl=en&oi=sra', title: 'Google Scholar' },
                                        { icon: Mail, link: 'mailto:ei.ekramul.islam@gmail.com' },
                                        { icon: Phone, link: 'tel:+8801521434732' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-darkslate-800 flex items-center justify-center hover:bg-softteal-600 transition-colors"
                                            title={social.title || ''}
                                        >
                                            <social.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-darkslate-800 text-center text-darkslate-400">
                            <p>© {new Date().getFullYear()} Ekramul Islam. Crafted with React</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;

