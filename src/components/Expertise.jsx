import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    number: "[ 01 / 06 ]",
    title: "Frontend Development",
    text: "Building responsive and interactive user interfaces using modern web technologies.",
    tag: "UI / INTERACTION",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Vite"],
    gradient: "from-[#0f172a] via-[#0B1120] to-[#020617]"
  },
  {
    number: "[ 02 / 06 ]",
    title: "Programming & Backend",
    text: "Developing applications and implementing programming logic using multiple programming languages and technologies.",
    tag: "PROGRAMMING",
    skills: ["Java", "PHP", "C#", "Node.js"],
    gradient: "from-[#0f172a] via-[#0B1120] to-[#020617]"
  },
  {
    number: "[ 03 / 06 ]",
    title: "Databases",
    text: "Working with structured and cloud-based data storage for application development.",
    tag: "DATA",
    skills: ["MySQL", "Firebase Firestore", "SQLite"],
    gradient: "from-[#0f172a] via-[#0B1120] to-[#020617]"
  },
  {
    number: "[ 04 / 06 ]",
    title: "Tools & Ecosystem",
    text: "Using modern development tools for coding, version control, and application development.",
    tag: "PRODUCTIVITY",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    gradient: "from-[#0f172a] via-[#0B1120] to-[#020617]"
  },
  {
    number: "[ 05 / 06 ]",
    title: "Technologies & Platforms",
    text: "Working with modern technologies and platforms to build and manage practical applications.",
    tag: "APPLICATION DEVELOPMENT",
    skills: ["Firebase", "Vite", "GitHub", "Android Studio"],
    gradient: "from-[#0f172a] via-[#0B1120] to-[#020617]"
  },
  {
    number: "[ 06 / 06 ]",
    title: "Soft Skills",
    text: "Collaborating effectively, solving complex problems, and adapting to new challenges in dynamic environments.",
    tag: "COMMUNICATION",
    skills: ["Problem Solving", "Teamwork", "Adaptability", "Time Management", "Fast Learner"],
    gradient: "from-[#0f172a] via-[#0B1120] to-[#020617]"
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Keep the top-most card fully focused

      gsap.to(card, {
        scale: 0.92 - index * 0.025,
        y: -15 - index * 8,
        filter: "blur(6px)",
        opacity: 0.4,
        scrollTrigger: {
          trigger: card,
          start: `top ${90 + index * 20}px`,
          end: "bottom top",
          scrub: true,
        }
      });
    });

    // Magnetic mouse highlight per card
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full bg-[#0B1120] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-teal-500/10 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-2">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-teal-500/40 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-teal-500"></span>
              </span>
              <span className="text-teal-400 font-bold">SECTION 02</span>
              <span className="text-white/40">|</span>
              <span>SKILLS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              SKILLS & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 drop-shadow-[0_0_25px_rgba(20,184,166,0.35)]">
                CAPABILITIES.
              </span>
            </h2>
          </div>
          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-sm md:max-w-md">
            Leveraging modern web technologies to build functional, scalable, and responsive applications.
          </p>
        </div>

        {/* Compact 1-on-1 Gradient Stacking Container */}
        <div className="relative flex flex-col gap-6 sm:gap-8 pb-8 sm:pb-12">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] md:min-h-[250px] transform-gpu transition-all overflow-hidden group hover:border-teal-500/50`}
              style={{
                zIndex: index + 1,
                top: `${80 + index * 14}px`
              }}
            >
              {/* Dynamic Mouse Spotlight Highlight */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(20,184,166,0.18), transparent 70%)'
                }}
              ></div>

              {/* Crimson Accent Stripe */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent z-10"></div>

              {/* Card Header Top */}
              <div className="flex items-center justify-between w-full mb-4 sm:mb-6 relative z-10">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-teal-400 px-2.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/25">
                  {item.tag}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-mono font-bold text-white/30 tracking-widest">
                  {item.number}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col h-full justify-center relative z-10 space-y-4 sm:space-y-6 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-start lg:items-center">
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug group-hover:text-teal-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 mt-auto border-t border-white/5">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/[0.03] border border-white/5 rounded-md text-[10px] sm:text-[11px] font-mono text-white/60 hover:text-white hover:border-white/10 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Red Corner Dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:shadow-[0_0_10px_#14b8a6] z-10 transition-all"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;
