import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Menu, X, ArrowRight, Code, BookOpen, Briefcase, GraduationCap, Linkedin, Award, Calendar } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState("about");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [typeIndex, setTypeIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const textsToType = ["Machine Learning Engineer", "NLP Researcher"];
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

    // Scroll detection for sticky navbar
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
            company: "IQVIA (A Fortune 500 Company)",
            period: "Aug 2024 – Present",
            responsibilities: [
                <>
                    Developed NLP solutions, including <strong>chat assistants</strong>, using models like LLaMA, Claude, and ChatGPT, incorporating prompt engineering techniques such as few-shot learning, chain-of-thought, and advanced <strong>RAG</strong> techniques.
                </>,
                <>
                    Applied <strong>agentic approach</strong> to enable models to handle complex tasks autonomously and contextually, while leveraging <strong>AWS</strong> SageMaker and Bedrock for efficient model deployment, optimization, and scaling.
                </>
            ]
        },
        {
            title: "Machine Learning Engineer",
            company: "Giga Tech Limited, Dhaka, Bangladesh",
            period: "Jan 2022 – Jul 2024",
            responsibilities: [
                <>
                    Developed Shallow Parsing pipelines, including data preparation, training, and inference, using FastAPI, a PyPI package, and Dockerfile, achieving state-of-the-art results with a <strong>96.47%</strong> FScore on the Penn Treebank dataset.
                </>,
                <>
                    Conducted extensive Sentiment Analysis experiments with transformer-based models, cross-dataset analysis, and statistical significance tests, leading to a publication at <strong>KDD '23</strong>.
                </>,
                <>
                    Achieved state-of-the-art performance in Named Entity Recognition (NER) on all Bangla datasets by implementing a novel RAG-based approach published in <strong>NAACL 2025</strong>.
                </>,
                <>
                    Developed a Bangla lemmatizer with 98.17% accuracy, which was published in <strong>EMNLP 2023</strong>.
                </>
            ]
        }
    ];

    const skillsData = [
        { name: "ML Frameworks", icon: Code, level: 90, technologies: ['PyTorch', 'TensorFlow'] },
        { name: "NLP", icon: BookOpen, level: 85, technologies: ['Transformers', 'spaCy'] },
        { name: "Cloud", icon: Briefcase, level: 75, technologies: ['AWS', 'Docker'] },
        { name: "Data", icon: GraduationCap, level: 80, technologies: ['Pandas', 'SQL'] }
    ];

    const educationData = [
        {
            degree: "BSc Computer Science",
            institution: "Shahjalal University",
            duration: "2017 – 2021",
            gpa: "CGPA: 3.18/4.00"
        },
        {
            degree: "Higher Secondary",
            institution: "Dhaka College",
            duration: "2014 – 2016",
            gpa: "GPA: 5.00/5.00"
        }
    ];

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Side Navigation - Desktop */}
            <nav className={`hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 pt-8 shadow-xl z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-800 bg-opacity-90 backdrop-blur-sm' : 'bg-gradient-to-b from-teal-700 to-teal-800'}`}>
                <div className="p-6 border-b border-teal-600">
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

                <div className="flex flex-col flex-grow p-6 space-y-4">
                    {[
                        { id: 'about', label: 'About Me', icon: <MapPin size={18} /> },
                        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                        { id: 'publications', label: 'Publications', icon: <BookOpen size={18} /> },
                        { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
                        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 
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

                <div className="p-6 border-t border-teal-600">
                    <div className="flex justify-center space-x-3">
                        <a href="https://linkedin.com/in/ekram" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center hover:bg-white hover:text-teal-700 transition-all">
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
                                { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
                                { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> }
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
            <div className="flex-1 md:ml-64">
                {/* Enhanced About Me Section */}
                <header id="about" className="h-screen bg-gradient-to-br from-teal-900 via-gray-800 to-teal-700 text-white pt-20 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
                        <div className="absolute bottom-32 right-1/3 w-32 h-32 bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl animate-float-delayed"></div>
                    </div>

                    {/* Profile Image for Mobile */}
                    <div className="md:hidden w-48 h-48 rounded-full overflow-hidden border-4 border-teal-300 shadow-xl mb-8 transform hover:scale-105 transition-transform">
                        <img
                            src="/profile.jpg"
                            alt="Ekramul Islam"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 relative text-center">
                        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg space-y-4">
                            <div className="bg-gradient-to-r from-teal-300 to-white bg-clip-text text-transparent">
                                Hi, I'm Ekram
                            </div>
                            <div className="text-3xl md:text-4xl font-medium text-teal-200 mt-4">
                                Transforming Ideas into Intelligent Solutions
                            </div>
                        </h1>

                        {/* Enhanced Typed Text Container */}
                        <div className="mt-6 relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg blur opacity-30 animate-pulse"></div>
                            <div className="relative text-2xl md:text-3xl font-mono px-6 py-3 bg-teal-800 bg-opacity-50 rounded-lg">
                                {typedText}
                                <span className="border-r-2 border-teal-200 animate-pulse ml-1"></span>
                            </div>
                        </div>

                        {/* Enhanced Bio Section */}
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg md:text-xl mt-8 text-teal-100">
                            <div className="space-y-4 relative">
                                <div className="absolute -top-4 -left-4 text-teal-400 text-6xl opacity-25">“</div>
                                <p className="relative z-10">
                                    Specializing in NLP and Machine Learning, I bridge the gap between
                                    theoretical research and practical implementation. With 3+ years
                                    experience at leading tech companies, I deliver solutions that
                                    combine technical excellence with domain expertise.
                                </p>
                            </div>
                            <div className="space-y-4 relative">
                                <div className="absolute -top-4 -right-4 text-teal-400 text-6xl opacity-25 rotate-180">“</div>
                                <p className="relative z-10">
                                    Passionate about low-resource language processing, I've pioneered
                                    multiple NLP frameworks for Bangla language. My work focuses on
                                    creating linguistically-aware AI systems that understand cultural
                                    context and regional nuances.
                                </p>
                            </div>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            <a href="/resume.pdf" download className="relative group flex items-center gap-3 px-8 py-4 bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-xl hover:shadow-2xl">
                                <span className="absolute -inset-1 bg-teal-500 blur-12 opacity-30 group-hover:opacity-50 transition-opacity"></span>
                                <ArrowRight className="animate-bounce-horizontal" size={20} />
                                <span className="text-lg font-medium">Download Resume</span>
                            </a>

                            <div className="flex items-center gap-4">
                                {[
                                    { icon: MapPin, text: "Dhaka, Bangladesh" },
                                    { icon: Phone, text: "(+880) 1521434732" },
                                    { icon: Mail, text: "ei.ekramul.islam@gmail.com" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 px-4 py-2 bg-teal-800 bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all cursor-pointer group">
                                        <item.icon className="text-teal-300 group-hover:text-white transition-colors" size={18} />
                                        <span className="text-sm md:text-base group-hover:text-white transition-colors">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Animated Scroll Indicator */}
                        <div className="absolute bottom-8 animate-bounce-slow">
                            <div className="relative w-12 h-20">
                                <div className="absolute inset-0 border-2 border-teal-300 rounded-full">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-teal-300 rounded-full animate-scroll-wheel"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Sections */}
                <main className="max-w-6xl mx-auto px-6 py-16">
                    {/* Experience Section */}
                    <section id="experience" className="mb-24 pt-16">
                        <h2 className="text-4xl font-bold text-center mb-16 relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
                                Professional Journey
                            </span>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-teal-400 to-transparent" />
                        </h2>

                        <div className="space-y-12">
                            {experiences.map((job, index) => (
                                <div key={index} className="relative">
                                    {index !== 1 && <div className="absolute top-0 bottom-0 left-7 md:left-9 w-0.5 bg-teal-200"></div>}
                                    <div className="flex">
                                        <div className="flex flex-col items-center mr-4 md:mr-8">
                                            <div className="w-14 h-14 md:w-18 md:h-18 flex items-center justify-center bg-teal-600 text-white rounded-full shadow-lg z-10">
                                                <Briefcase size={24} />
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1">
                                            <div className="flex flex-wrap justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{job.title}</h3>
                                                    <h4 className="text-lg text-teal-600 font-medium">{job.company}</h4>
                                                </div>
                                                <span className="text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm">{job.period}</span>
                                            </div>
                                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                                {job.responsibilities.map((responsibility, i) => (
                                                    <li key={i}>{responsibility}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Publications Section */}
                    <section id="publications" className="mb-24 pt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800">Publications</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title:
                                        "SENTIGOLD: A LARGE BANGLA GOLD STANDARD MULTI-DOMAIN SENTIMENT ANALYSIS DATASET AND ITS EVALUATION",
                                    publishedDate: "04-08-2023",
                                    doi: "HTTPS://DOI.ORG/10.1145/3580305.3599904",
                                    publicationType: "INTERNATIONAL CONFERENCE",
                                    citationCount: 11,
                                    publicationRank: "A*",
                                    overview:
                                        "In this study, we introduce SentiGOLD, a Bangla multi-domain sentiment analysis dataset with 70,000 samples..."
                                },
                                {
                                    title:
                                        "BANLEMMA: A WORD FORMATION DEPENDENT RULE AND DICTIONARY BASED BANGLA LEMMATIZER",
                                    publishedDate: "15-12-2023",
                                    doi: "HTTPS://DOI.ORG/10.18653/V1/2023.FINDINGS-EMNLP.240",
                                    publicationType: "INTERNATIONAL CONFERENCE",
                                    citationCount: 1,
                                    publicationRank: "A*",
                                    overview:
                                        "Lemmatization is vital in NLP and linguistics for reducing data density. In this study, we propose a Bangla lemmatizer using linguistic rules..."
                                },
                                {
                                    title:
                                        "WORD COMPLETION AND SEQUENCE PREDICTION IN BANGLA LANGUAGE USING TRIE AND A HYBRID APPROACH OF SEQUENTIAL LSTM AND N-GRAM",
                                    publishedDate: "28-11-2020",
                                    doi: "HTTPS://DOI.ORG/10.1109/ICAICT51780.2020.9333518",
                                    publicationType: "LOCAL CONFERENCE",
                                    citationCount: 13,
                                    publicationRank: "N/A",
                                    overview:
                                        "Autocompletion and sequence prediction form the foundation of assistance systems, enhancing typing efficiency..."
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
                                        <strong>Published Date:</strong> {pub.publishedDate}
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
                                    <p className="text-gray-600 text-sm mb-1">
                                        <strong>Type:</strong> {pub.publicationType}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-1">
                                        <strong>Citations:</strong> {pub.citationCount}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-1">
                                        <strong>Rank:</strong> {pub.publicationRank}
                                    </p>
                                    <p className="text-gray-700 text-sm mb-4">{pub.overview}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-24 bg-teal-50">
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
                    <section id="education" className="py-24 bg-gradient-to-br from-teal-50 to-white">
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
                    {/* ... */}
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
                                    {['about', 'experience', 'publications', 'skills', 'education'].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => scrollToSection(item)}
                                            className="text-gray-400 hover:text-teal-400 transition-colors capitalize"
                                        >
                                            {item === 'about' ? 'About Me' : item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                                <div className="flex space-x-4">
                                    {[
                                        { icon: Github, link: 'https://github.com/Ekram007' },
                                        { icon: Linkedin, link: 'https://linkedin.com/in/ekram' },
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
