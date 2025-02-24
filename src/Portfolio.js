import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Menu, X, ArrowRight, Code, BookOpen, Briefcase, GraduationCap, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  
  const textToType = "Machine Learning Engineer";
  
  // Typing effect
  useEffect(() => {
    if (typeIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + textToType[typeIndex]);
        setTypeIndex(typeIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typeIndex]);
  
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      <header id="home" className="h-screen bg-gradient-to-r from-teal-600 to-teal-800 text-white pt-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade">Ekramul Islam</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-light mb-8 h-8">{typedText}<span className="animate-pulse">|</span></h2>
            <div className="flex flex-wrap justify-center gap-6 text-teal-100 mb-8">
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
            <button 
              onClick={() => scrollToSection('experience')} 
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors inline-flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
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
                company: "IQVIA",
                period: "Aug 2024 – present",
                responsibilities: [
                  "Developed NLP solutions using LLaMA, Claude, and ChatGPT, incorporating prompt engineering, RAG techniques."
                ]
              },
              {
                title: "Machine Learning Engineer",
                company: "Giga Tech Limited",
                period: "Jan 2022 – Jul 2024",
                responsibilities: [
                  "Shallow Parsing: Developed data preparation, training, inference pipelines with API (FastAPI), PyPI package, dockerfile, achieving SOTA results (96.47 FScore) on Penn Treebank.",
                  "Sentiment Analysis: Conducted transformer based model experimentation, cross-dataset analysis, statistical significance tests, leading to a publication at KDD '23.",
                  "Named Entity Recognition: Achieved SOTA results on all Bangla datasets with novel RAG method.",
                  "Lemmatization: Developed a Bangla lemmatizer with 98.17% accuracy, published in EMNLP 2023."
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
                title: "SentiGOLD: A Large Bangla Gold Standard Multi-Domain Sentiment Analysis Dataset and its Evaluation",
                venue: "KDD '23, Long Beach, CA, USA."
              },
              {
                title: "BanLemma: A Word Formation Dependent Rule and Dictionary Based Bangla Lemmatizer",
                venue: "Findings of EMNLP 2023, Singapore"
              },
              {
                title: "Word Completion and Sequence Prediction in Bangla Language Using Trie and a Hybrid Approach of Sequential LSTM and N-gram",
                venue: "ICAICT '20, Dhaka, Bangladesh"
              }
            ].map((pub, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Award className="text-teal-600 mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">{pub.title}</h3>
                <div className="flex items-center gap-2 text-teal-600">
                  <ExternalLink size={16} />
                  <p>{pub.venue}</p>
                </div>
                <button className="mt-4 text-teal-600 hover:text-teal-800 inline-flex items-center gap-1 text-sm font-medium">
                  View Publication <ArrowRight size={14} />
                </button>
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
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-teal-100 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
            <div className="absolute right-4 top-4 w-16 h-16 flex items-center justify-center bg-teal-600 text-white rounded-full shadow-lg z-10">
              <GraduationCap size={24} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">BSc, CSE</h3>
                  <h4 className="text-lg text-teal-600 font-medium">Shahjalal University of Science and Technology</h4>
                </div>
                <span className="text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm">2017 – 2021</span>
              </div>
              <p className="text-gray-700 mt-2">CGPA: 3.18</p>
              <button className="mt-4 text-teal-600 hover:text-teal-800 inline-flex items-center gap-1 text-sm font-medium">
                View Transcript <ArrowRight size={14} />
              </button>
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