import React from 'react';

const expertiseData = [
  {
    title: "Frontend",
    skills: ["HTML5 & CSS3", "JavaScript", "React.js", "Tailwind CSS", "Vite", "TypeScript"]
  },
  {
    title: "Backend & DB",
    skills: ["Node.js & Express", "PHP", "Java", "C#", "MySQL", "Firebase"]
  },
  {
    title: "Dev Tools",
    skills: ["Git & GitHub", "VS Code", "Android Studio", "NPM", "Postman / APIs"]
  },
  {
    title: "Design & UI/UX",
    skills: ["Figma", "Wireframing", "Prototyping", "Canva", "Responsive Design"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Team Collaboration", "Time Management", "Adaptability", "Fast Learner"]
  }
];

const Expertise = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-slate-900 text-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-12 select-none overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8 sm:space-y-12">
        
        {/* Compact Section Header */}
        <div className="flex flex-col gap-4 sm:gap-6 pb-2">
          <div className="space-y-4 max-w-xl">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-emerald-500/40 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-bold">SECTION 02</span>
                <span className="text-white/40">|</span>
                <span>SKILLS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                SKILLS & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                  CAPABILITIES.
                </span>
              </h2>
            </div>
            <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
              Leveraging modern tools and technologies to build functional, scalable, and beautifully designed applications.
            </p>
          </div>
        </div>

        {/* Box Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <div className="flex flex-col space-y-4 flex-1">
                {item.skills.map((skill, i) => (
                  <span key={i} className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;
