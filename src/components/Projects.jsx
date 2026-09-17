import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hallcamillaImg from '../assets/Portfolio/hallcamilla.png';
import unifindImg from '../assets/Portfolio/unifind.png';
import kurunegalaImg from '../assets/Portfolio/kurunegala.png';

gsap.registerPlugin(ScrollTrigger);

// Project Data - Images and Live Demo links to be added by user later
const projectsData = [
  {
    title: "Hall Booking & Management System",
    category: "Web Application",
    description: "A real-world web application designed to simplify hall booking and management operations for Camilla Banquet Hotel.",
    tags: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Firebase"
    ],
    github: "https://github.com/fathima-safiya/HallCamilla-Hall-Booking-Management-System",
    liveDemo: "#", // Add later
    image: hallcamillaImg,
    theme: {
      bg: "bg-emerald-500 hover:bg-emerald-600",
      shadow: "shadow-[0_5px_15px_rgba(16,185,129,0.2)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)]"
    }
  },
  {
    title: "UniFind — Campus Lost & Found System",
    category: "Web Application",
    description: "A web-based campus management system for students and staff to report, track, and recover lost belongings with interactive search, filters, and admin moderation.",
    tags: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Tailwind CSS"
    ],
    github: "https://github.com/fathima-safiya/unifind-lost-and-found",
    liveDemo: "#", // Add later
    image: unifindImg,
    theme: {
      bg: "bg-blue-500 hover:bg-blue-600",
      shadow: "shadow-[0_5px_15px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)]"
    }
  },
  {
    title: "Kurunegala Civic Platform",
    category: "Web Application",
    description: "A comprehensive civic reporting platform for Kurunegala, Sri Lanka. Built with React and PHP, it allows citizens to report local issues and tracks resolution timelines.",
    tags: [
      "React",
      "PHP",
      "MySQL",
      "Tailwind CSS"
    ],
    github: "https://github.com/fathima-safiya/kurunegala-civic-platform",
    liveDemo: "#", // Add later
    image: kurunegalaImg,
    theme: {
      bg: "bg-orange-500 hover:bg-orange-600",
      shadow: "shadow-[0_5px_15px_rgba(249,115,22,0.2)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)]"
    }
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Basic fade up and stagger animation on scroll for grid cards
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="bg-[#0B1120] relative font-sans text-white w-full min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-12 select-none overflow-hidden">
      
      {/* Background Cinematic Title Watermark */}
      <div className="absolute top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          PROJECTS
        </h1>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-teal-500/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <span className="text-teal-400 font-bold">SECTION 02</span>
            <span className="text-white/40">|</span>
            <span>MY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight text-center sm:text-left">
            FEATURED <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 drop-shadow-[0_0_30px_rgba(20,184,166,0.4)]">
              PROJECTS.
            </span>
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group flex flex-col w-full h-full rounded-2xl sm:rounded-[24px] overflow-hidden border border-white/10 bg-[#0f172a]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-teal-500/50 hover:shadow-[0_25px_60px_rgba(20,184,166,0.15)] transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Image Container (Placeholder) */}
              <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-8 h-8 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-white/20 font-mono tracking-widest uppercase text-[10px]">Image Coming Soon</span>
                  </div>
                )}
                
                {/* Badge Top Right */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[9px] sm:text-[10px] font-mono tracking-widest text-white shadow-lg">
                  Web Application
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                
                {/* Category Subheading */}
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/50 mb-3 flex items-center gap-2">
                  <span className="text-teal-400 font-bold">FULL-STACK</span>
                  <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  <span>{project.category}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-white/80 hover:bg-teal-500/10 hover:border-teal-500/30 hover:text-teal-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-auto">
                  {/* Live Demo Button */}
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl ${project.theme.bg} text-white text-[13px] sm:text-sm font-bold ${project.theme.shadow} hover:-translate-y-0.5 transition-all`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    LIVE DEMO
                  </a>
                  {/* GitHub Button */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl ${project.theme.bg} text-white text-[13px] sm:text-sm font-bold ${project.theme.shadow} hover:-translate-y-0.5 transition-all`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
