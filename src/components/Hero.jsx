import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import pictureImg from '../assets/Portfolio/picture_blue.jpg';

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const spotlightRef = useRef(null);
  const contentRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const developerRoles = [
    'FULL STACK DEVELOPER',
    'WEB DEVELOPER',
    'SOFTWARE DEVELOPER',
    'FULL STACK DEVELOPER'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!section || !card || !content) return;

    // --- GSAP CINEMATIC ENTRANCE ANIMATION ---
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      section.querySelector('header'),
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      content.querySelectorAll('.hero-anim-item'),
      { y: 50, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1, stagger: 0.12 },
      "-=0.7"
    )
    .fromTo(
      card,
      { scale: 0.75, opacity: 0, rotationY: 35, rotationX: -15 },
      { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, duration: 1.4, ease: "back.out(1.2)" },
      "-=0.9"
    );

    // --- MOUSE PHYSICS & SPOTLIGHT TRACKING ---
    const xTilt = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3.out" });
    const yTilt = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3.out" });
    const glareX = gsap.quickTo(glareRef.current, "x", { duration: 0.3, ease: "power2.out" });
    const glareY = gsap.quickTo(glareRef.current, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e) => {
      // Avoid running heavy calculations on touch devices
      if (window.innerWidth < 768) return;

      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update Spotlight position instantly via inline style
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }

      // Card 3D Perspective Calculations
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
      const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

      const rotateX = -((y - cardCenterY) / (cardRect.height / 2)) * 16;
      const rotateY = ((x - cardCenterX) / (cardRect.width / 2)) * 16;

      xTilt(rotateY);
      yTilt(rotateX);

      // Holographic Glare mapping
      glareX((x - cardRect.left) - cardRect.width / 2);
      glareY((y - cardRect.top) - cardRect.height / 2);
    };

    const handleMouseEnter = () => {
      if (window.innerWidth >= 768 && spotlightRef.current) {
        gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
      xTilt(0);
      yTilt(0);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-[100svh] bg-[#0B1120] overflow-hidden flex flex-col justify-between select-none pb-8 sm:pb-12"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>

      {/* 1. Cinematic Background Gradient & Marquee */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/90 to-[#0B1120] z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...developerRoles, ...developerRoles].map((role, idx) => (
              <span key={idx} className="text-[14vw] font-black text-teal-500 mx-8 uppercase tracking-tighter">
                {role} &bull;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Direct Mouse Tracking Spotlight Beam */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-0 blur-[90px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(20,184,166,0.1) 40%, transparent 70%)'
        }}
      ></div>

      {/* --- DEVELOPER NAVBAR --- */}
      <header className="absolute inset-x-0 top-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex items-center justify-between pointer-events-auto">
        <a href="#home" className="text-xl sm:text-2xl font-black text-teal-500 tracking-tighter flex items-center gap-1.5 drop-shadow-[0_2px_15px_rgba(20,184,166,0.9)]">
          SAFIYA<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
          <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="/resume.pdf"
            download="Safiya_Resume.pdf"
            className="flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 text-teal-300 font-bold text-xs sm:text-[13px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-105 active:scale-95 backdrop-blur-md group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-teal-500/50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] z-40 bg-[#0B1120]/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3 text-sm font-mono uppercase tracking-widest text-white/80">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-lg hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-lg hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-lg hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-lg hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-lg hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* 3. Main Content Layer */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex-1 flex flex-col justify-start pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">
        
        {/* Top Cinematic Badge */}
        <div className="hero-anim-item flex items-center justify-between w-full mb-4 sm:mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-teal-500/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white shadow-xl shadow-teal-500/10">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-teal-500"></span>
            </span>
            <span className="text-teal-400 font-bold tracking-wider">DEVELOPER PORTFOLIO</span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">YEAR 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/80 tracking-wider">
            <span className="px-2 py-0.5 border border-white/10 rounded bg-black/40">FULL STACK</span>
            <span className="px-2 py-0.5 border border-white/10 rounded bg-black/40">HNDIT STUDENT</span>
          </div>
        </div>

        {/* Main Center Cinematic Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* Left Side: Developer Story & Description */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 text-left">
            
            <div className="hero-anim-item flex items-center gap-2.5 sm:gap-3">
              <span className="px-2.5 sm:px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold text-[9px] sm:text-[10px] uppercase rounded tracking-widest shadow-[0_0_15px_rgba(20,184,166,0.15)] animate-pulse">OPEN TO WORK</span>
              <span className="text-white/70 text-xs sm:text-sm font-mono tracking-widest uppercase">Full Stack Developer</span>
            </div>

            <h1 className="hero-anim-item text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black tracking-tighter text-white leading-[0.95] sm:leading-[0.9] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              FATHIMA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 drop-shadow-[0_0_35px_rgba(20,184,166,0.4)]">
                SAFIYA
              </span>
            </h1>

            <div className="hero-anim-item flex items-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-white/70 font-bold">
              <span className="text-teal-300">React</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-300">TypeScript</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-300">Node.js</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-300">Tailwind</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-300">Firebase</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-300">MySQL</span>
            </div>

            <p className="hero-anim-item text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg drop-shadow-sm">
              Where ideas meet code, creativity, and purpose.
            </p>

            {/* Action Button Set */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto pt-2 sm:pt-3">
              <a
                href="#projects"
                className="px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white text-[#0B1120] font-bold text-xs sm:text-sm uppercase tracking-widest rounded hover:bg-slate-200 transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-widest rounded hover:bg-white/20 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)] backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Interactive 3D Holographic Tilt Developer Poster Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end perspective-[1200px] mt-4 lg:mt-0">
            <div 
              ref={cardRef}
              className="relative group transform-gpu transition-transform duration-100 ease-out will-change-transform max-w-full"
            >
              {/* Cinematic Red Neon Back Glow */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-teal-500/70 via-blue-500/40 to-sky-400/20 rounded-3xl blur-2xl sm:blur-3xl opacity-90 group-hover:opacity-100 animate-pulse duration-1000"></div>
              
              {/* Poster Card with Glowing Gradient Border */}
              <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] rounded-2xl p-[1px] md:p-[2px] bg-gradient-to-br from-teal-400 via-blue-500 to-teal-500 shadow-[0_0_40px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-shadow duration-500">
                <div className="relative w-full h-full p-2 md:p-3 bg-[#0B1120]/80 backdrop-blur-3xl rounded-[15px] overflow-hidden">
                  
                  {/* Dynamic Specular Glare Layer */}
                  <div 
                    ref={glareRef}
                    className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform-gpu z-40"
                  ></div>

                  <img
                    src={pictureImg}
                    alt="Developer Portrait"
                    className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[500px] object-cover rounded-xl filter contrast-[1.1] brightness-[1.05] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;