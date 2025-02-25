import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Menu, X, ArrowRight, Code, BookOpen, Briefcase, GraduationCap, Award } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState("home");
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
        if (deleting) {
            if (typedText.length > 0) {
                setTimeout(() => {
                    setTypedText((prev) => prev.slice(0, -1));
                }, deletingSpeed);
            } else {
                setDeleting(false);
                setTypeIndex((prev) => (prev + 1) % textsToType.length);
            }
        } else {
            if (typedText.length < textsToType[typeIndex].length) {
                setTimeout(() => {
                    setTypedText((prev) => prev + textsToType[typeIndex][prev.length]);
                }, typingSpeed);
            } else {
                setTimeout(() => setDeleting(true), delayBetweenTexts);
            }
        }
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
                top: element.offsetTop - 60, // Adjust for navbar height
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-teal-600">Ekramul Islam</div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {[
                                { id: 'home', label: 'Home', icon: <MapPin size={16} /> },
                                { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
                                { id: 'publications', label: 'Publications', icon: <BookOpen size={16} /> },
                                { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
                                { id: 'education', label: 'Education', icon: <GraduationCap size={16} /> }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center gap-1 transition-colors ${activeSection === item.id ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}`}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
                        <div className="flex flex-col space-y-4">
                            {[
                                { id: 'home', label: 'Home', icon: <MapPin size={16} /> },
                                { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
                                { id: 'publications', label: 'Publications', icon: <BookOpen size={16} /> },
                                { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
                                { id: 'education', label: 'Education', icon: <GraduationCap size={16} /> }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center gap-2 transition-colors ${activeSection === item.id ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}`}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Header/Hero Section */}
            <header id="home" className="h-screen bg-gradient-to-r from-teal-600 to-teal-800 text-white pt-20 flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">

                    {/* Profile Image */}
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img src="/profile.jpg" alt="Ekramul Islam" className="w-full h-full object-cover" />
                    </div>

                    {/* Name & Title */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade">Ekramul Islam</h1>
                        <h2 className="text-2xl md:text-3xl font-light mb-4 h-8">{typedText}<span className="animate-pulse">|</span></h2>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-6 text-teal-100 mb-6">
                        <a href="mailto:ei.ekramul.islam@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={18} />
                            <span>ei.ekramul.islam@gmail.com</span>
                        </a>
                        <a href="tel:+8801521434732" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={18} />
                            <span>+8801521434732</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <a href="https://github.com/Ekram007" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Github size={18} />
                            <span>Ekram007</span>
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors inline-flex items-center gap-2 group"
                    >
                        View My Work
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>

                </div>
            </header>


            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-16">
                {/* Experience Section */}
                <section id="experience" className="mb-24 pt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-12">
                        {[
                            {
                                title: "Machine Learning Engineer",
                                company: "IQVIA (A Fortune 500 Company)",
                                period: "Aug 2024 – present",
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
                                company: "Giga Tech Limited",
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
                        ].map((job, index) => (
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
                                    "In this study, we introduce SentiGOLD, a Bangla multi-domain sentiment analysis dataset with 70,000 samples, compiled from various sources and annotated by a gender-balanced team of linguists. Created through collaboration between the Government of Bangladesh and a nationally recognized Bangla linguistics committee, it follows established linguistic conventions. Unlike other languages, no standard Bangla sentiment dataset existed due to the lack of a unified linguistic framework. SentiGOLD covers 30 domains (e.g., politics, entertainment) and 5 sentiment classes (strongly negative to strongly positive). It achieves an Inter Annotator Agreement (IAA) score of 0.88 using Fleiss' kappa. Cross-dataset evaluation on the SentNoB dataset and zero-shot experiments demonstrate strong generalizability, with our best model achieving a macro F1 score of 0.62 (intra-dataset) and 0.61 (cross-dataset). The fine-tuned model is accessible online at [https://sentiment.bangla.gov.bd].",
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
                                    "Lemmatization is vital in NLP and linguistics for reducing data density and enhancing contextual understanding. However, the morphological richness and inflectional complexity of Bangla text make lemmatization particularly challenging. In this study, we propose a Bangla lemmatizer using linguistic rules and a dictionary, targeting part-of-speech-based lemmatization within sentences. Unlike traditional rule-based methods, we analyze suffix marker sequences based on morpho-syntactic values instead of entire suffixes. Our approach is informed by a large, diverse Bangla text corpus to capture inflected word patterns. The lemmatizer achieves 96.36% accuracy on a manually annotated test set and demonstrates strong performance on three established Bangla lemmatization datasets. To support Bangla NLP research, we release the code and datasets publicly at GitHub.",
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
                                    "Autocompletion and sequence prediction form the foundation of assistance systems, enhancing typing efficiency by reducing keystrokes and minimizing errors. While extensive research exists for the English language, similar efforts in Bangla remain limited. This paper presents a hybrid approach integrating a trie data structure, sequential LSTM, and N-gram models for Bangla word completion and sequence prediction. The trie structure efficiently stores Bangla vocabulary, enabling word retrieval from user-inputted prefixes. For sequence prediction, we combined the strengths of neural networks and N-gram models, with the hybrid approach outperforming single-model implementations. Evaluations on both small and large-scale Bangla datasets demonstrate the effectiveness of our methodology. The proposed framework shows significant potential for improving Bangla search engines, keyboards, and recommendation systems, paving the way for future research in this domain.",
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
                <section id="skills" className="mb-24 pt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    category: "Libraries",
                                    skills: ['PyTorch', 'Hugging Face', 'Scikit-learn', 'Pandas', 'Numpy', 'Tensorflow', 'OpenCV', 'FastAPI']
                                },
                                {
                                    category: "Programming Language",
                                    skills: ['Python']
                                },
                                {
                                    category: "Database",
                                    skills: ['MySQL']
                                },
                                {
                                    category: "Containerization",
                                    skills: ['Docker', 'PyPI']
                                },
                                {
                                    category: "Version Control",
                                    skills: ['Git', 'GitHub']
                                }
                            ].map((category, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-lg font-semibold text-teal-600 mb-3 flex items-center gap-2">
                                        <Code size={18} />
                                        {category.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm hover:bg-teal-600 hover:text-white transition-colors cursor-pointer"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="pt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Education</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-8">
                        {/* BSc Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute -right-16 -top-16 w-32 h-32 bg-teal-100 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="absolute right-4 top-4 w-16 h-16 flex items-center justify-center bg-teal-600 text-white rounded-full shadow-lg z-10">
                                <GraduationCap size={24} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800">BSc in Computer Science and Engineering</h3>
                                        <h4 className="text-lg text-teal-600 font-medium">Shahjalal University of Science and Technology, Sylhet, Bangladesh</h4>
                                    </div>
                                    <span className="text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm">2017 – 2021</span>
                                </div>
                                <p className="text-gray-700 mt-2">CGPA: 3.18 (out of 4.00)</p>
                                <button className="mt-4 text-teal-600 hover:text-teal-800 inline-flex items-center gap-1 text-sm font-medium">
                                    View Transcript <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* HSC Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute -right-16 -top-16 w-32 h-32 bg-teal-100 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="absolute right-4 top-4 w-16 h-16 flex items-center justify-center bg-teal-600 text-white rounded-full shadow-lg z-10">
                                <GraduationCap size={24} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800">Higher Secondary Certificate</h3>
                                        <h4 className="text-lg text-teal-600 font-medium">Dhaka College, Dhaka, Bangladesh</h4>
                                    </div>
                                    <span className="text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm">2014 – 2016</span>
                                </div>
                                <p className="text-gray-700 mt-2">GPA: 5.00 (out of 5.00)</p>
                            </div>
                        </div>
                        {/* SSC Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute -right-16 -top-16 w-32 h-32 bg-teal-100 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="absolute right-4 top-4 w-16 h-16 flex items-center justify-center bg-teal-600 text-white rounded-full shadow-lg z-10">
                                <GraduationCap size={24} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-wrap justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800">Secondary School Certificate</h3>
                                        <h4 className="text-lg text-teal-600 font-medium">National Bank Public School & College, Dhaka, Bangladesh</h4>
                                    </div>
                                    <span className="text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm">2012 – 2014</span>
                                </div>
                                <p className="text-gray-700 mt-2">GPA: 5.00 (out of 5.00)</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-2">Ekramul Islam</h3>
                            <p className="text-gray-400">Machine Learning Engineer</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="mailto:ei.ekramul.islam@gmail.com" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Mail size={18} />
                            </a>
                            <a href="tel:+8801521434732" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Phone size={18} />
                            </a>
                            <a href="https://github.com/Ekram007" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} Ekramul Islam. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;