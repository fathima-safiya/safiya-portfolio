1import { useEffect, useRef } from 'react';
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
    liveDemo: "https://hall-camilla-hall-booking-management-system-2htm5sm57.vercel.app",
    image: hallcamillaImg
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
    liveDemo: null, // Removed as requested
    image: unifindImg
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
    liveDemo: "https://kurunegala-civic-platform.vercel.app",
    image: kurunegalaImg
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
    <section id="projects" ref={containerRef} className="bg-[#0B1120] relative font-sans text-white w-full py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-12 select-none overflow-hidden">

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
                  {/* Live Demo Button (Teal) */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-[13px] sm:text-sm font-bold shadow-[0_5px_15px_rgba(20,184,166,0.2)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.4)] hover:-translate-y-0.5 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {/* GitHub Button (Outlined Dark) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0B1120] hover:bg-white/5 border border-white/10 hover:border-white/20 text-white text-[13px] sm:text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
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
