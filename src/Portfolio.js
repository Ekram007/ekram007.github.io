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
                    <div className="space-y-2">
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
                    <div className="text-gray-700">
                    Involved in the entire ML life cycle including data collection, preprocessing, model selection, training, evaluation, tuning deployment, monitoring and finally documenting the outcome in a manuscript. The projects I was involved in:                  
                    </div>
                </>,
                <>
                    <div className="mt-4">
                        <div className="font-semibold text-gray-800 mb-2">Corpus Project (Bangla):</div>
                        <div className="text-gray-700 mb-3">Aim was to develop a complete ecosystem for Bangla NLP filed, where deliverables include corpora, language models, downstream models, packages/api, applications etc. Some of my key contributions are: </div>
                        <div className="ml-4 space-y-4">
                            <div>
                                <div className="font-semibold text-gray-800 mb-2">Shallow and Deep Parsing (Core Component Lead):</div>
                                <div className="ml-4 space-y-2 text-gray-700">
                                    <div>• <strong>Led development</strong> of separate and <strong>joint modeling pipelines</strong> for simultaneous training of shallow and deep parsing tasks, utilizing State-of-the-Art (SOTA) architectures.</div>
                                    <div>• Engineered the complete <strong>inference pipeline</strong>, including a <strong>PyPI package</strong>, a <strong>FastAPI</strong> service endpoint, and a <strong>Docker container</strong> for seamless deployment.</div>
                                    <div>• Achieved <strong>SOTA results</strong> on the Penn Treebank (English) for both tasks (Shallow Parsing: <strong>96.47 FScore</strong>; Deep Parsing: UAS: <strong>97.49%</strong>, LAS: <strong>96.36%</strong>).</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 mb-2">Named Entity Recognition (NER):</div>
                                <div className="ml-4 space-y-2 text-gray-700">
                                    <div>• Developed the baseline NER model using <strong>BERT, BiLSTM, and CRF</strong> architectures.</div>
                                    <div>• <strong>Improved performance</strong> by experimenting with advanced class imbalance handling techniques, including <strong>curricular-face loss</strong> (achieving a <strong>1.93% increase in macro F1</strong> over the previous SOTA).</div>
                                    <div>• Created and integrated a <strong>Bangla gazetteer</strong> with neural networks to enhance overall NER performance.</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 mb-2">Lemmatization (BanLemma):</div>
                                <div className="ml-4 space-y-2 text-gray-700">
                                    <div>• <strong>Collaborated with linguists</strong> to develop a novel <strong>rule-based lemmatizer</strong> for Bangla, with rules derived from analysis of concatenation patterns and dictionary insights. (Resulting work <strong>accepted to EMNLP '23</strong> with <strong>98.17% accuracy</strong> on the internal test set).</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 mb-2">Language Model Training & Classification:</div>
                                <div className="ml-4 space-y-2 text-gray-700">
                                    <div>• Prepared the initial <strong>pre-training boilerplate</strong> for <strong>BERT, XLNet, and Word2Vec</strong> using Hugging Face's <em>transformers</em> and <em>datasets</em> libraries.</div>
                                    <div>• Implemented a <strong>CNN model</strong> to accurately classify text as Romanized Bangla (Banglish), achieving <strong>0.93 macro F1</strong>, which was then used to develop a specialized corpus.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                <>
                    <div className="mt-4">
                        <div className="font-semibold text-gray-800 mb-2">Sentiment Analysis and Research (SentiGOLD):</div>
                        <div className="ml-4 space-y-2 text-gray-700">
                            <div>• <strong>First-authored</strong> the paper, <strong>"SentiGOLD: A Large Bangla Gold Standard Multi-Domain Sentiment Analysis Dataset and its Evaluation," published at KDD '23</strong> (a top-ranked data science conference).</div>
                            <div>• Conducted extensive <strong>transformer-based model experimentation</strong>, <strong>cross-dataset analysis</strong>, and rigorous <strong>statistical significance tests</strong> to develop the benchmarking model and contribute to manuscript crafting.</div>
                            <div>• Developed a comprehensive <strong>live sentiment analysis platform</strong> with 70,000 samples across 30 domains, achieving <strong>0.62 macro F1 score</strong> and <strong>0.88 IAA score</strong> with government-approved linguistic framework.</div>
                            <div className="mt-3">
                                <a
                                    href="https://sentiment.bangla.gov.bd/sentiment-emotion-analysis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
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
                        <div className="font-semibold text-gray-800 mb-2">Computer Vision Systems:</div>
                        <div className="ml-4 space-y-4">
                            <div>
                                <div className="font-semibold text-gray-800 mb-2">Human Monitoring Live System:</div>
                                <div className="ml-4 space-y-2 text-gray-700">
                                    <div>• Developed a production-ready live system for monitoring people using office lobby cameras.</div>
                                    <div>• Utilized <strong>YOLOv8</strong> for accurate human detection and <strong>DeepSORT</strong> for consistent, multi-frame tracking.</div>
                                    <div>• Implemented <strong>ArcFace</strong> for extracting distinct face embeddings and <strong>cosine similarity</strong> for accurate facial recognition and matching.</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 mb-2">Face Anti-Spoofing:</div>
                                <div className="ml-4 space-y-2 text-gray-700">
                                    <div>• Created a multi-model system to identify spoof attempts (vs. live humans) using models for <strong>smile detection, eye blink detection, hand gestures detection, and head movements detection</strong>.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                <>
                    <div className="mt-6 pt-4 border-t border-gray-300">
                        <div className="font-semibold text-gray-800 mb-2">Key Achievements:</div>
                        <div className="ml-4 space-y-2 text-gray-700">
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
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Side Navigation - Desktop */}
            <nav className={`hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 shadow-xl z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-800 bg-opacity-90 backdrop-blur-sm' : 'bg-gradient-to-b from-teal-700 to-teal-800'}`}>
                {/* Header Section - Fixed height */}
                <div className="p-6 border-b border-teal-600 flex-shrink-0">
                    <div className="flex justify-center mb-4">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-teal-300 shadow-lg shadow-teal-200/50 transform transition-transform hover:scale-110">
                            <img
                                src="/profile.jpg"
                                alt="Ekramul Islam"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">Ekramul Islam</div>
                        <p className="text-teal-100 text-sm">ML Engineer & Researcher</p>
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
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'text-teal-100 hover:bg-teal-600 hover:text-white hover:translate-x-2'}`
                            }
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Footer Section - Fixed height */}
                <div className="p-6 border-t border-teal-600 flex-shrink-0">
                    <div className="flex justify-center space-x-3">
                        <a href="https://www.linkedin.com/in/ekramul-islam-b824a1176/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center hover:bg-white hover:text-teal-700 transition-all">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://github.com/Ekram007" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center hover:bg-white hover:text-teal-700 transition-all">
                            <Github size={16} />
                        </a>
                        <a href="mailto:ei.ekramul.islam@gmail.com" className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center hover:bg-white hover:text-teal-700 transition-all">
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Header */}
            <div className={`md:hidden fixed top-0 left-0 right-0 shadow-md z-50 p-4 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-95 backdrop-blur-sm' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-teal-600">Ekramul Islam</div>
                    <button
                        className="text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="mt-4 pb-4 border-t border-gray-200 pt-4">
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
                                        ? 'bg-teal-50 text-teal-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-100'
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
                <header id="about" className="min-h-[100dvh] md:h-screen bg-gradient-to-br from-teal-900 via-gray-800 to-teal-700 text-white pt-20 md:pt-0 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* ... existing background elements ... */}

                    {/* Profile Image for Mobile */}
                    <div className="md:hidden w-28 h-28 rounded-full overflow-hidden border-4 border-teal-300 shadow-xl mb-6 transform hover:scale-105 transition-transform">
                        <img
                            src="/profile.jpg"
                            alt="Ekramul Islam"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center gap-4 md:gap-6 relative text-center">
                        <h1 className="text-3xl md:text-7xl font-bold drop-shadow-lg space-y-2 md:space-y-4">
                            <div className="bg-gradient-to-r from-teal-300 to-white bg-clip-text text-transparent">
                                Hi, I'm Ekram
                            </div>
                            <div className="text-xl md:text-4xl font-medium text-teal-200 mt-2 md:mt-4">
                                Passionate about life, AI, and discovery.
                            </div>
                        </h1>

                        {/* Typed Text Container */}
                        <div className="mt-4 md:mt-6 relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg blur opacity-30 animate-pulse"></div>
                            <div className="relative text-lg md:text-3xl font-mono px-4 py-2 md:px-6 md:py-3 bg-teal-800 bg-opacity-50 rounded-lg">
                                {typedText}
                                <span className="border-r-2 border-teal-200 animate-pulse ml-1"></span>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-2 md:gap-8 text-sm md:text-xl gap-4 md:gap-8 text-base md:text-xl mt-4 md:mt-8 text-teal-100">
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
                            <a href="/Md._Ekramul_Islam_CV.pdf" download className="relative group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-xl hover:shadow-2xl">
                                <ArrowRight className="animate-bounce-horizontal" size={18} />
                                <span className="text-sm md:text-lg font-medium">Download CV</span>
                            </a>

                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                {[
                                    { icon: MapPin, text: "Dhaka, BD" },
                                    { icon: Phone, text: "(+880) 1521434732" },
                                    { icon: Mail, text: "ei.ekramul.islam@gmail.com" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-teal-800 bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all cursor-pointer group">
                                        <item.icon className="text-teal-300 group-hover:text-white transition-colors" size={16} />
                                        <span className="text-xs md:text-sm group-hover:text-white transition-colors">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Animated Scroll Indicator */}
                        {/* Animated Scroll Indicator */}
                        {/* Animated Scroll Indicator */}
                        <div className="absolute -bottom-20 md:-bottom-32 animate-bounce-slow">
                            <div className="relative w-8 h-14 md:w-12 md:h-20 scale-150">
                                <div className="absolute inset-0 border-2 border-teal-300 rounded-full">
                                    <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1 h-3 md:h-4 bg-teal-300 rounded-full animate-scroll-wheel"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Sections */}
                <main className="max-w-6xl mx-auto px-6 py-16">
                    {/* Experience Section */}
                    <section id="experience" className="mb-24 pt-16 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400">
                                    Professional Journey
                                </span>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full"></div>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                A timeline of my professional growth and key achievements in the field of Machine Learning and AI
                            </p>
                        </div>

                        <div className="relative">
                            {/* Animated Timeline Line */}
                            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-teal-300 to-teal-200 rounded-full"></div>
                            
                            <div className="space-y-16">
                                {experiences.map((job, index) => (
                                    <div key={index} className="relative group">
                                        {/* Timeline Dot with Animation */}
                                        <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full border-4 border-white shadow-xl z-20 transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl">
                                            <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-20"></div>
                                        </div>

                                        <div className="md:ml-16">
                                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-[1.02] overflow-hidden border border-gray-100">
                                                {/* Header with Gradient Background */}
                                                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 md:p-8 border-b border-gray-100">
                                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                                                    <Briefcase className="text-white" size={20} />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                                                                        {job.title}
                                                                    </h3>
                                                                    <h4 className="text-lg font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                                                                        {job.company}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start md:items-end gap-2">
                                                            <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium shadow-sm">
                                                                {job.period}
                                                            </span>
                                                            {job.period.includes('Present') && (
                                                                <div className="flex items-center gap-1 text-teal-600">
                                                                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
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
                                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-30 animate-pulse delay-500"></div>
                    </section>

                    {/* Publications Section */}
                    <section id="publications" className="mb-24 pt-16 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800">Publications</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                        </div>

                        {/* Research Impact Metrics */}
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl mb-8 border border-teal-200">
                            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Research Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-teal-600">30+</div>
                                    <div className="text-gray-600">Total Citations</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-teal-600">3</div>
                                    <div className="text-gray-600">h-index</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-teal-600">2</div>
                                    <div className="text-gray-600">i10-index</div>
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
                                    className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <Award
                                        className="text-teal-600 mb-4 group-hover:scale-110 transition-transform"
                                        size={28}
                                    />
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">
                                        {pub.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-1">
                                        <i>{pub.authors}</i>
                                    </p>
                                    <p className="text-gray-600 text-sm mb-1">
                                        {pub.publicationType}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-1">
                                        <strong>DOI:</strong>{" "}
                                        <a
                                            href={pub.doi}
                                            target="_blank"
                                            className="text-teal-600 hover:underline"
                                        >
                                            {pub.doi}
                                        </a>
                                    </p>
                                    <p className="text-gray-700 text-sm mb-4">{pub.overview}</p>
                                    {pub.title.includes("SENTIGOLD") && (
                                        <div className="mt-4">
                                            <a
                                                href="https://sentiment.bangla.gov.bd/sentiment-emotion-analysis"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
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
                            <h2 className="text-3xl font-bold text-gray-800">Academic Research</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
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
                                    className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 hover:text-teal-800 transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    <p className="text-teal-600 font-medium text-sm mb-3">{project.subtitle}</p>
                                    <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full"
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
                            <h2 className="text-3xl font-bold text-gray-800">Personal Projects</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800">CrossPress Digest</h3>
                                <span className="text-sm text-gray-500">Jan 2025 – Present</span>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-gray-700">
                                    Led backend and ML development for a system that identifies duplicate news stories from multiple sources using semantic search, and summarizes with Gemini.
                                </p>
                                
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Implemented search service using vector database (Chroma) and LLM-based RAG to answer user queries</li>
                                        <li>Duplicate news story identification using semantic search</li>
                                        <li>Automated summarization with Gemini API</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Elasticsearch', 'Sentence Transformers', 'MongoDB', 'Gemini API', 'Chroma', 'Docker', 'FastAPI', 'Python'].map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full"
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
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                                    >
                                        <span>Live Site</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-24 bg-teal-50 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16">
                                Technical Expertise
                                <div className="mt-2 w-24 h-1 bg-teal-500 mx-auto"></div>
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {skillsData.map((skill) => (
                                    <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center transform hover:scale-105">
                                        <div className="relative w-20 h-20 mx-auto mb-4">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                                <circle
                                                    className="text-teal-100"
                                                    strokeWidth="8"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="40"
                                                    cx="50"
                                                    cy="50"
                                                />
                                                <circle
                                                    className="text-teal-500 transition-all duration-500"
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
                                                <skill.icon className="w-8 h-8 text-teal-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                        <p className="text-gray-600 text-sm">{skill.technologies.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Enhanced Education Section */}
                    <section id="education" className="py-24 bg-gradient-to-br from-teal-50 to-white scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
                                    Academic Journey
                                </span>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-teal-400 to-transparent" />
                            </h2>

                            <div className="relative">
                                {/* Animated Timeline */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-300 via-teal-200 to-teal-300 transform -translate-x-1/2 animate-pulse-beam" />

                                <div className="space-y-16 md:space-y-24">
                                    {educationData.map((edu, index) => (
                                        <div key={index} className="relative group">
                                            {/* Timeline Dot */}
                                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/4 w-5 h-5 bg-teal-500 rounded-full border-4 border-white shadow-xl transform transition-all group-hover:scale-125 group-hover:bg-teal-400 z-10" />

                                            <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                                                {/* Institution Image */}
                                                <div className="hidden md:block flex-1 transform transition-all duration-500 group-hover:-translate-y-2">
                                                    <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                                        <img
                                                            src={`/institution-${index + 1}.jpg`} // Add your institution images
                                                            alt={edu.institution}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent" />
                                                    </div>
                                                </div>

                                                {/* Education Card */}
                                                <div className="flex-1 relative">
                                                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-l-4 border-teal-500 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-3xl">
                                                        <div className="absolute -top-6 left-6 w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-45">
                                                            <GraduationCap className="text-white transform -rotate-45" size={24} />
                                                        </div>

                                                        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                                                            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">🎓 {edu.degree}</span>
                                                        </h3>
                                                        <p className="text-xl font-semibold text-teal-600 mb-3 flex items-center gap-2">
                                                            <Briefcase size={18} />
                                                            {edu.institution}
                                                        </p>

                                                        <div className="space-y-2 text-gray-600">
                                                            <p className="flex items-center gap-2">
                                                                <MapPin size={16} className="text-teal-500" />
                                                                {edu.location}
                                                            </p>
                                                            <p className="flex items-center gap-2">
                                                                <Calendar size={16} className="text-teal-500" />
                                                                {edu.duration}
                                                            </p>
                                                            <p className="flex items-center gap-2 font-medium">
                                                                <Award size={16} className="text-teal-500" />
                                                                {edu.gpa}
                                                            </p>
                                                        </div>

                                                        {/* Hover Effect Decoration */}
                                                        <div className="absolute -inset-2 rounded-3xl border-2 border-teal-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
                    <section id="linguistic-proficiency" className="py-24 bg-gradient-to-br from-teal-50 to-white scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
                                    Linguistic Proficiency
                                </span>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-teal-400 to-transparent" />
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">E</span>
                                        English
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">IELTS Overall Score</span>
                                            <span className="text-2xl font-bold text-teal-600">7.5</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Listening</span>
                                                <span className="font-semibold text-teal-600">8.5</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Reading</span>
                                                <span className="font-semibold text-teal-600">8.0</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Writing</span>
                                                <span className="font-semibold text-teal-600">6.0</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Speaking</span>
                                                <span className="font-semibold text-teal-600">6.5</span>
                                            </div>
                                        </div>
                                        <div className="pt-2 text-sm text-gray-500">
                                            <strong>IELTS</strong> - International English Language Testing System
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">ব</span>
                                        Bangla
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Proficiency Level</span>
                                            <span className="text-2xl font-bold text-teal-600">Native</span>
                                        </div>
                                        <p className="text-gray-600">
                                            Native language speaker with deep understanding of Bengali literature, 
                                            culture, and linguistic nuances. Extensive experience in Bangla NLP research 
                                            and development.
                                        </p>
                                        <div className="pt-2 text-sm text-gray-500">
                                            <strong>Native Language</strong> - Fluent in all aspects
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Extra-curricular Activities Section */}
                    <section id="extracurricular" className="py-24 bg-gray-50 scroll-mt-header" style={{ scrollMarginTop: "100px" }}>
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-16">
                                Extra-curricular Activities
                                <div className="mt-2 w-24 h-1 bg-teal-500 mx-auto"></div>
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
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-3xl">{activity.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                                                    {activity.title}
                                                </h3>
                                                <span className="text-sm text-teal-600 font-medium">{activity.category}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">{activity.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Ekramul Islam</h3>
                                <p className="text-gray-400">Innovating AI solutions for real-world challenges</p>
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
                                            className="text-gray-400 hover:text-teal-400 transition-colors"
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
                                        { icon: Mail, link: 'mailto:ei.ekramul.islam@gmail.com' },
                                        { icon: Phone, link: 'tel:+8801521434732' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                                        >
                                            <social.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                            <p>© {new Date().getFullYear()} Ekramul Islam. Crafted with passion and React</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;

