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
      className="relative w-full bg-[#0B1120] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
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
            <span>MY BACKGROUND</span>
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
          
          {/* Card 1: Bio & Academic Core (Span 12) */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-6 sm:p-8 md:p-12 bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-teal-500/60 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden"
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
                I’m <span className="text-white font-bold drop-shadow">Fathima Safiya</span>, an <strong className="text-white/80">undergraduate Software Engineer focused on building practical software and developing strong engineering fundamentals at SLIATE Kurunegala</strong>.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
                I enjoy turning ideas into <strong className="text-white/80">functional, structured, and user-focused applications</strong>. My learning has been shaped through hands-on academic and personal projects, where I’ve worked across frontend development, backend logic, databases, authentication, and cloud-connected services.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
                My current foundation includes <strong className="text-white/80">Java, JavaScript, TypeScript, PHP, React, MySQL, Firebase, and modern web technologies</strong>, supported by an understanding of <strong className="text-white/80">object-oriented programming, database management, and software development principles</strong>.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
                I’m building my path toward becoming a <strong className="text-white/80">well-rounded Software Engineer</strong> — someone who understands not only how an application looks and works, but also how its underlying systems are designed, connected, deployed, and improved.
              </p>
            </div>
            
            <div className="pt-6 sm:pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Software Development</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Full-Stack Development</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Problem Solving</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white/80">Cloud Computing</span>
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
                  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
                  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
                  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
                  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
                  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
                  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
                  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
                  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' }
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