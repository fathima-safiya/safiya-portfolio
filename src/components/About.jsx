import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Cinematic Stagger Entrance on Scroll ---
    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // --- Interactive Magnetic Mouse Spotlight per Bento Card ---
    const cards = cardRefs.current;
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => {
        if (window.innerWidth < 768) return;
        handleMouseMove(e, card);
      };
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0B1120] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-teal-500/10 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-teal-900/10 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-teal-500/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-teal-500"></span>
            </span>
            <span className="text-teal-400 font-bold">SECTION 01</span>
            <span className="text-white/40">|</span>
            <span>ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
            PROFESSIONAL SUMMARY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 drop-shadow-[0_0_30px_rgba(20,184,166,0.4)]">
              MY JOURNEY.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout with Interactive Mouse Light Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Bio & Academic Core (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-6 sm:p-8 md:p-12 bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-teal-500/60 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(20,184,166,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-6 sm:p-8 text-white/5 font-mono text-5xl sm:text-7xl font-black pointer-events-none">
              01
            </div>
            
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">Background</h3>
              <p className="text-sm sm:text-base md:text-xl font-medium text-white/90 leading-relaxed">
                I am <span className="text-white font-bold drop-shadow">Fathima Safiya</span>, an HNDIT student and aspiring <span className="text-white font-bold drop-shadow">Full Stack Developer</span> with a strong interest in building modern, practical, and user-focused software solutions.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
                My journey into technology has grown through hands-on learning, academic projects, and exploring how software can solve real-world problems. I enjoy turning ideas into functional applications, learning new technologies, and continuously improving the way I design and develop software.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
                My current focus is on strengthening my skills across <strong className="text-white/80">frontend development, backend development, databases, and modern web technologies</strong>, while gradually exploring the world of <strong className="text-white/80">cloud computing</strong>. My long-term goal is to grow into a well-rounded software professional and specialize in <strong className="text-white/80">Cloud Engineering</strong>, in sha Allah.
              </p>
            </div>
            
            <div className="pt-6 sm:pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Frontend Development</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Backend Development</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Database Management</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Cloud Computing</span>
            </div>
          </div>

          {/* Card 2: Currently Exploring (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-6 sm:p-8 md:p-12 bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-teal-500/60 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(20,184,166,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-6 sm:p-8 text-white/5 font-mono text-5xl sm:text-7xl font-black pointer-events-none">
              02
            </div>
            
            <div className="space-y-4 sm:space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">Currently Exploring</h3>
              <ul className="space-y-5 text-sm sm:text-base text-white/80 font-light">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  <span className="leading-relaxed">Strengthening my frontend skills with <strong className="text-white font-medium">React & Next.js</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span className="leading-relaxed">Building small projects to improve my <strong className="text-white font-medium">backend development</strong> and application architecture skills.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                  <span className="leading-relaxed">Exploring <strong className="text-white font-medium">Cloud Computing</strong> and learning how modern applications are deployed and scaled.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-8 font-mono text-xs sm:text-sm md:text-base text-white/40 relative z-10 tracking-widest uppercase">
              // FORWARD MOMENTUM
            </div>
          </div>

          {/* Card 3: Technical Ecosystem (Span 12) */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-6 sm:p-8 md:p-12 bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-teal-500/60 transition-all duration-500 overflow-hidden relative group"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(20,184,166,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-2 text-left relative z-10 md:w-1/3 shrink-0">
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">Production Tech Stack</h3>
              <p className="text-base md:text-lg font-semibold text-white">Tools and technologies I work with every day.</p>
            </div>
            
            <div className="w-full md:w-2/3 overflow-hidden relative z-10 flex items-center py-2">
              <style>{`
                @keyframes aboutMarquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-about-marquee {
                  display: flex;
                  width: max-content;
                  animation: aboutMarquee 15s linear infinite;
                }
                .animate-about-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#0f172a] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#0f172a] to-transparent z-20 pointer-events-none"></div>

              <div className="animate-about-marquee gap-3 pr-3">
                {[
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
                  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
                  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
                  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
                  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-sm font-mono uppercase tracking-wider text-white shadow-inner hover:bg-teal-500/20 hover:border-teal-500/40 hover:scale-105 transition-all whitespace-nowrap cursor-default flex items-center gap-3 w-max"
                  >
                    <img src={tech.icon.replace('typescript-original.svg', 'typescript-plain.svg')} alt="" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;