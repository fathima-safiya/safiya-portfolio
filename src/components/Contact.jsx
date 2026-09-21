import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/mgavkwrm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        alert("Failed to send message. Please check your form endpoint.");
        setStatus('error');
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      setStatus('error');
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0B1120] w-full relative overflow-hidden flex items-end pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 border-t border-white/10 select-none">
      
      {/* Background Cinematic Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-teal-500/15 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none z-0"></div>

      {/* Huge Background Parallax Watermark Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-6 sm:pt-8 md:pt-12 opacity-15"
      >
        <h1 
          className="text-[18vw] sm:text-[20vw] md:text-[22vw] leading-[0.75] font-black text-teal-500 uppercase tracking-tighter select-none scale-y-[1.4] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONNECT
        </h1>
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-stretch md:items-end gap-10 sm:gap-14 md:gap-16 lg:gap-24">
        
        {/* LEFT COLUMN - Let's Connect */}
        <div className="flex-1 flex flex-col items-start text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-white/80">Let’s build something</span><br />
            worth remembering.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed mb-6 sm:mb-10 max-w-lg font-light">
            Whether it’s a new idea, a real-world problem, or simply an opportunity to create something better, I’m always open to <span className="text-white">meaningful conversations</span> and new possibilities.
          </p>
          
          <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-md">
            
            {/* Email */}
            <a 
              href="mailto:fathima.safiya.tech@gmail.com" 
              className="flex items-center gap-4 group p-3 sm:p-4 rounded-2xl bg-[#1e293b]/50 border border-white/5 hover:bg-[#1e293b] hover:border-teal-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6l8,4.882L20,6V8.236z"/></svg>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Email</div>
                <div className="text-sm sm:text-base text-white/90 font-medium group-hover:text-teal-400 transition-colors">fathima.safiya.tech@gmail.com</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/94705178558" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-3 sm:p-4 rounded-2xl bg-[#1e293b]/50 border border-white/5 hover:bg-[#1e293b] hover:border-[#25D366]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 mb-1">WhatsApp</div>
                <div className="text-sm sm:text-base text-white/90 font-medium group-hover:text-[#25D366] transition-colors">+94 70 517 8558</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-[#1e293b]/50 border border-white/5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/70">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Location</div>
                <div className="text-sm sm:text-base text-white/90 font-medium">Kurunegala, Sri Lanka</div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN - Form Card */}
        <div className="flex-1 w-full max-w-md mx-auto md:max-w-none flex justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#1e293b]/95 backdrop-blur-2xl border-t border-l border-white/15 w-full p-6 sm:p-8 md:p-12 text-white flex flex-col justify-between rounded-3xl sm:rounded-[2.5rem] shadow-[0_-15px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Subtle highlight glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-90"></div>

            <div className="mb-6 sm:mb-10">
              <h3 className="text-3xl sm:text-4xl font-black text-white flex flex-wrap items-center gap-3">
                Send Message
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-2 sm:mt-3 font-light leading-relaxed">
                Have a question or want to work together? Send me an email directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-10 w-full">
              
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-transparent border-b border-white/10 pb-2.5 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-teal-500 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                />
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full bg-transparent border-b border-white/10 pb-2.5 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-teal-500 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                />
              </div>

              <div className="relative">
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..." 
                  required
                  className="w-full min-h-[120px] sm:min-h-[140px] bg-transparent border-b border-white/10 pb-2.5 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-teal-500 transition-colors placeholder-white/40 font-medium resize-none rounded-none text-white"
                ></textarea>
              </div>

              <div className="flex flex-col gap-6 mt-2 sm:mt-4">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full py-3.5 sm:py-4 rounded bg-white hover:bg-slate-200 text-[#0B1120] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 group shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-white/80 border-t border-white/10 pt-5 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  Open to internship opportunities & collaborations
                </div>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
