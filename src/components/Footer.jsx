import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-8 sm:py-12 px-4 sm:px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8 sm:space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-xl sm:text-2xl font-black text-teal-500 tracking-tighter flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_2px_15px_rgba(20,184,166,0.9)]">
              SAFIYA<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </div>

          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="hover:text-teal-400 transition-colors py-1">Home</a>
            <a href="#about" className="hover:text-teal-400 transition-colors py-1">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors py-1">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors py-1">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors py-1">Contact</a>
          </nav>
        </div>

        {/* Middle Section: Socials & External Profiles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs sm:text-sm md:text-base font-mono text-white/60">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a 
              href="https://github.com/fathima-safiya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg group"
              title="GitHub"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/fathima-safiya-tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg group"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            <a 
              href="mailto:fathima.safiya.tech@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg group"
              title="Email"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6l8,4.882L20,6V8.236z"/>
              </svg>
            </a>

            <a 
              href="https://wa.me/94705178558" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg group"
              title="WhatsApp"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>

            <a 
              href="https://instagram.com/sfy_a21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg group"
              title="Instagram"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>

            <a 
              href="https://t.me/sfy_a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg group"
              title="Telegram"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.096l-6.405 4.027-2.76-.864c-.602-.185-.615-.602.125-.892l10.783-4.154c.498-.186.944.116.783.92z"/></svg>
            </a>
          </div>


        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/5 text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-widest text-center">
          <p>&copy; {new Date().getFullYear()} Fathima Safiya. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
