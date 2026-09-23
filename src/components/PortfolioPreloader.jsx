import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MinimalPreloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    
    const updateProgress = () => {
      // Smooth, elegant loading (slower pace)
      current += Math.random() * 5 + 1;
      if (current > 100) current = 100;
      
      setProgress(Math.floor(current));
      
      if (progressRef.current) {
        progressRef.current.style.width = `${current}%`;
      }

      if (current < 100) {
        setTimeout(updateProgress, Math.random() * 100 + 60);
      } else {
        // When 100% is reached, fade out the preloader
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.4,
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    };

    setTimeout(updateProgress, 100);
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#0B1120] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      <div className="flex flex-col items-center text-center px-4 sm:px-6 relative z-10">
        
        {/* Big Welcome Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-black text-white tracking-tighter mb-4 sm:mb-6 opacity-95 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] leading-none">
          WELCOME
        </h1>
        
        {/* Animated Tech Logo */}
        <div className="mb-5 sm:mb-6 flex justify-center items-center">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center animate-bounce" style={{ animationDuration: '3s' }}>
            {/* Glowing aura */}
            <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-xl animate-pulse"></div>
            {/* Geometric Cube SVG */}
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-sky-400 relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-xs sm:text-sm md:text-base text-white/60 font-medium tracking-widest mb-10 sm:mb-12 uppercase">
          Creating. Learning. Building.
        </p>

        {/* Loading Container */}
        <div className="w-64 sm:w-80 md:w-96 flex flex-col items-center mt-2 sm:mt-4">
          {/* Animated Percentage */}
          <div className="w-full flex justify-end items-center mb-3 sm:mb-4">
            <span className="text-sm sm:text-base font-mono font-black text-sky-400 tracking-widest drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              {progress}%
            </span>
          </div>

          {/* Premium Progress Line */}
          <div className="w-full h-1.5 sm:h-2 bg-blue-900 border border-white/5 rounded-full overflow-hidden relative shadow-inner">
            <div 
              ref={progressRef}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-sky-300 rounded-full transition-all duration-200 ease-out shadow-[0_0_20px_rgba(56,189,248,1)]"
              style={{ width: '0%' }}
            >
              <div className="absolute top-0 right-0 w-8 h-full bg-white/40 blur-[2px] rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MinimalPreloader;
