import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Authentic Project Data based on your engineering portfolio
const projectsData = [
  {
    title: "Hall Booking & Management System",
    category: "Full Stack Development",
    description: "A real-world web application designed to simplify hall booking and management operations for Camilla Banquet Hotel.",
    tags: [
      "React", 
      "TypeScript", 
      "Vite", 
      "Tailwind CSS", 
      "Firebase Authentication", 
      "Firebase Firestore", 
      "Firebase Storage", 
      "Firebase Hosting", 
      "PayHere Sandbox"
    ],
    match: "100%",
    episode: "01",
    github: "https://github.com/fathima-safiya/HallCamilla-Hall-Booking-Management-System"
  },
  {
    title: "UniFind — Campus Lost & Found System",
    category: "Full Stack Web Application",
    description: "A web-based campus management system for students and staff to report, track, and recover lost belongings with interactive search, filters, and admin moderation.",
    tags: [
      "PHP",
      "MySQL",
      "PDO",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Authentication",
      "Admin Panel"
    ],
    match: "100%",
    episode: "02",
    github: "https://github.com/fathima-safiya/unifind-lost-and-found"
  },
  {
    title: "Kurunegala Civic Platform",
    category: "Full Stack Web Application",
    description: "A comprehensive civic reporting platform for Kurunegala, Sri Lanka. Built with React and PHP, it allows citizens to report local issues, tracks resolution timelines, and provides specialized dashboards for city staff and administrators.",
    tags: [
      "React",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Authentication",
      "Admin Dashboard"
    ],
    match: "100%",
    episode: "03",
    github: "https://github.com/fathima-safiya/kurunegala-civic-platform"
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const cardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const mobileCarouselRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial origins (Centered in viewport)
      gsap.set([folderBackRef.current, folderFrontRef.current], { 
        xPercent: -50, 
        yPercent: -50 
      });
      gsap.set(folderFrontRef.current, { transformOrigin: "bottom center" });
      
      const getGridPos = (index, total) => {
        if (total === 2) {
          return { row: 1, col: index === 0 ? 0 : 2 };
        }
        if (total === 3) {
          if (index === 0) return { row: 1, col: 0 };
          if (index === 1) return { row: 0, col: 1 };
          return { row: 1, col: 2 };
        }
        let row, col;
        if (index < 3) { row = 0; col = index; }
        else if (index === 3) { row = 1; col = 0; }
        else if (index === 4) { row = 1; col = 2; }
        else { row = 2; col = index - 5; }
        return { row, col };
      };

      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          rotation: gsap.utils.random(-6, 6),
          scale: 0.85,
          x: 0,
          y: 0,
        });
      });

      let mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        let { isDesktop, isMobile } = context.conditions;

        if (isDesktop) {
          let floatTween;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 50%", 
              end: "bottom 50%",
              toggleActions: "play reverse play reverse",
              onEnter: () => { if (floatTween) floatTween.kill(); },
              onEnterBack: () => { if (floatTween) floatTween.kill(); },
              onLeave: () => { if (floatTween) floatTween.kill(); },
              onLeaveBack: () => { if (floatTween) floatTween.kill(); }
            },
            onComplete: () => {
              floatTween = gsap.to(cardsRef.current, {
                y: "+=10",
                rotation: "+=1",
                duration: 3.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                stagger: { amount: 1.2, from: "random" }
              });
            }
          });

          // 1. Folder opens with smooth rotation
          tl.to(folderFrontRef.current, {
            rotationX: -130,
            duration: 1.2,
            ease: "power3.inOut"
          });

          // 2. Cards rise up collectively
          tl.to(cardsRef.current, {
            y: -140,
            scale: 0.9,
            zIndex: 70,
            duration: 0.6,
            stagger: 0.04,
            ease: "back.out(1.2)"
          }, "-=0.6");

          // 3. Cards spread out cleanly & symmetrically around the central folder
          tl.to(cardsRef.current, {
            x: (i) => {
              const count = cardsRef.current.length;
              const cardW = cardsRef.current[i]?.offsetWidth || 360;
              const folderW = folderBackRef.current?.offsetWidth || 320;
              const gap = 36;
              
              if (count === 1) return 0;
              if (count === 2) {
                const spacing = (folderW / 2) + (cardW / 2) + gap;
                return i === 0 ? -spacing : spacing;
              }
              if (count === 3) {
                const spacing = (folderW / 2) + (cardW / 2) + gap;
                if (i === 0) return -spacing;
                if (i === 1) return 0;
                return spacing;
              }
              const { col } = getGridPos(i, count);
              const w = Math.max(...cardsRef.current.map(c => c?.offsetWidth || 0)) || 360;
              return (col - 1) * (w + 40);
            },
            y: (i) => {
              const count = cardsRef.current.length;
              const h = Math.max(...cardsRef.current.map(c => c?.offsetHeight || 0)) || 240;
              const folderH = folderBackRef.current?.offsetHeight || 200;
              const gap = 36;

              if (count === 1) return -(folderH / 2 + h / 2 + gap);
              if (count === 2) return 80;
              if (count === 3) {
                if (i === 1) return -(folderH / 2 + h / 2 + gap);
                return 80;
              }
              const { row } = getGridPos(i, count);
              return (row - 1) * (h + 40);
            },
            rotation: (i) => (i === 0 ? -2 : 2),
            scale: 1,
            duration: 1.4,
            stagger: { amount: 0.3, from: "center" },
            ease: "expo.out"
          }, "-=0.2");
        }

        if (isMobile) {
          const cardW = window.innerWidth * 0.8;
          const gap = 20;
          
          mobileCardsRef.current.forEach((card, i) => {
            gsap.set(card, {
              x: -(i * (cardW + gap)), 
              y: 0,
              scale: 0.4,
              opacity: 0,
              rotation: gsap.utils.random(-15, 15)
            });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            }
          });

          tl.to(folderFrontRef.current, {
            rotationX: -130,
            duration: 0.8,
            ease: "power3.inOut"
          });

          tl.to(mobileCardsRef.current, {
            y: -60,
            opacity: 1,
            scale: 0.85,
            duration: 0.6,
            stagger: 0.05,
            ease: "back.out(1.2)"
          }, "-=0.4");

          tl.to(mobileCardsRef.current, {
            x: 0,
            y: 40,
            rotation: 0,
            scale: (i) => i === 0 ? 1 : 0.95,
            opacity: (i) => i === 0 ? 1 : 0.85,
            duration: 0.8,
            stagger: 0.08,
            ease: "expo.out",
            onComplete: () => {
              if (mobileCarouselRef.current) {
                mobileCarouselRef.current.style.overflowX = 'auto';
                mobileCarouselRef.current.style.pointerEvents = 'auto';
              }
              if (mobileCardsRef.current) {
                mobileCardsRef.current.forEach(card => {
                  if (card) card.style.opacity = '1';
                });
              }
            }
          }, "-=0.2");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="bg-[#0B1120] min-h-[100svh] md:min-h-[130vh] relative font-sans overflow-x-clip text-white w-full flex items-center justify-center py-12 sm:py-16 md:py-20 select-none">
      
      {/* Background Cinematic Title Watermark */}
      <div className="absolute top-6 sm:top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          PROJECTS
        </h1>
      </div>

      {/* Ambient Crimson Glow behind folder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Main Perspective Container */}
      <div className="mt-8 sm:mt-12 relative w-full max-w-7xl h-full flex items-center justify-center perspective-[2000px] z-10">
        
        {/* Origin Container */}
        <div className="relative w-0 h-0 transform-style-3d">
          
          {/* Folder Back */}
          <div 
            ref={folderBackRef}
            className="absolute w-[85vw] md:w-[26vw] lg:w-[24vw] max-w-[320px] aspect-video bg-[#0f172a] rounded-2xl sm:rounded-[24px] border border-teal-500/40 shadow-[0_20px_50px_rgba(20,184,166,0.25)] flex items-center justify-center"
            style={{ zIndex: 5 }}
          >
            <div className="absolute -top-5 sm:-top-6 left-5 sm:left-6 w-24 sm:w-28 h-6 sm:h-7 bg-[#0f172a] rounded-t-xl border-t border-teal-500/30" />
            <div className="relative z-10 text-teal-500 font-mono font-black text-lg sm:text-xl lg:text-2xl tracking-widest uppercase opacity-60">
              PROJECT_FILES
            </div>
          </div>

          {/* Desktop Project Cards */}
          {projectsData.map((project, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="hidden md:block absolute w-[80vw] md:w-[30vw] lg:w-[28vw] max-w-[370px] aspect-[4/3] will-change-transform"
              style={{ zIndex: 10 + i }}
            >
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#0f172a]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500 group hover:scale-[1.04] hover:border-teal-500 hover:shadow-[0_35px_80px_rgba(20,184,166,0.35)] hover:-translate-y-2 cursor-pointer relative z-10 p-6 lg:p-7 flex flex-col justify-between"
              >
                
                {/* Top Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded border border-teal-500/20">
                    {project.episode}
                  </span>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                </div>

                {/* Middle Title & Description */}
                <div className="space-y-2 my-auto">
                  <div className="text-[10px] lg:text-[11px] font-mono uppercase tracking-widest text-white/40">
                    {project.category}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded group-hover:border-teal-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Red Glowing Corner Accent */}
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-teal-500 group-hover:shadow-[0_0_15px_#14b8a6] transition-all" />
              </a>
            </div>
          ))}

          {/* Folder Front Flap */}
          <div 
            ref={folderFrontRef}
            className="absolute w-[85vw] md:w-[26vw] lg:w-[24vw] max-w-[320px] aspect-video pointer-events-none will-change-transform"
            style={{ zIndex: 60 }}
          >
            <div className="absolute bottom-0 w-full h-[85%] bg-[#0f172a] rounded-b-2xl sm:rounded-b-[24px] rounded-t-md shadow-[0_-5px_20px_rgba(0,0,0,0.8)] flex flex-col justify-end p-5 sm:p-6 border-t border-teal-500/40">
              <div className="w-16 sm:w-20 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Swipeable Carousel */}
      <div 
        ref={mobileCarouselRef}
        className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto py-8 sm:py-12 flex items-center gap-4 sm:gap-6 px-[8vw] sm:px-[12.5vw] pointer-events-none z-[100] snap-x snap-mandatory overflow-x-hidden hide-scrollbar"
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        {projectsData.map((project, i) => (
          <div 
            key={`mob-${i}`}
            ref={el => mobileCardsRef.current[i] = el}
            className="shrink-0 w-[84vw] sm:w-[340px] max-w-[360px] aspect-[4/3] snap-center will-change-transform relative z-10"
          >
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-2xl sm:rounded-[24px] overflow-hidden border border-white/15 bg-[#0f172a] p-5 sm:p-6 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.9)] pointer-events-auto"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                  {project.episode}
                </span>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-white">{project.title}</h3>
                <p className="text-[11px] sm:text-xs text-white/70 font-light line-clamp-2">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2.5 sm:pt-3 border-t border-white/10">
                {project.tags.slice(0, 5).map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] sm:text-[10px] font-mono text-white/60 bg-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
