import { motion } from 'motion/react';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import ReactGA from 'react-ga4';
import { FileText, Mail, Github, Linkedin, Terminal, Trophy, Layers } from 'lucide-react';
import HeroVisual from './HeroVisual';


function Hero() {
  const { theme } = useContext(ThemeContext);

  const handleContactScroll = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const stats = [
    { label: 'Projects', value: '9+', icon: Terminal },
    { label: 'Hackathon Finals', value: '2', icon: Trophy },
    { label: 'Core Focus Areas', value: '4', icon: Layers },
  ];

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Base Solid Background for blending */}
      <div className={`absolute inset-0 transition-colors duration-1000 -z-50 ${theme === 'dark' ? 'bg-[#050B1A]' : 'bg-[#FAFCFF]'}`} />

      {/* Layer 1: Hero artwork image */}
      <div className="absolute inset-0 -z-40 overflow-hidden pointer-events-none">
        <HeroVisual theme={theme} />
      </div>

      {/* Layer 2 removed to allow full brightness of the background artwork */}

      {/* Layer 4: Removed glow effects to keep image perfectly clear */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      </div>

      {/* Seamless transition mask at the bottom of the hero section */}
      <div className={`absolute bottom-0 left-0 w-full h-32 z-10 transition-colors duration-1000 bg-gradient-to-b pointer-events-none ${theme === 'dark' ? 'from-transparent to-[#0b1120]' : 'from-transparent to-[#f8fafc]'
        }`} />

      {/* Layer 5: Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-lg md:text-xl mb-4 font-medium tracking-wide ${theme === "dark" ? "text-content/80" : "text-content/70"
                }`}
            >
              Rohhith Gunasekaran
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 ${theme === "dark" ? "text-content" : "text-content"
                }`}
            >
              Architecting secure infrastructure and <span className="text-gradient-premium">distributed intelligence</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`text-lg md:text-xl mb-10 font-light leading-relaxed max-w-2xl ${theme === "dark" ? "text-content/70" : "text-content/70"
                }`}
            >
              Focused on cyber security, distributed systems, and GPU virtualization. Designing resilient architectures for high-performance computing environments.
            </motion.p>

            {/* CTAs and Socials Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Primary CTA */}
              <a
                href="/resume/Rohhith_Gunasekaran_Resume.pdf"
                download="Rohhith_Gunasekaran_Resume.pdf"
                onClick={() => {
                  ReactGA.event({
                    category: "Resume",
                    action: "Download",
                    label: "Resume PDF",
                  });
                }}
                className="group relative px-8 py-3.5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 inline-flex items-center gap-2 bg-gradient-premium text-white shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <FileText size={20} />
                View Resume
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={handleContactScroll}
                className={`px-8 py-3.5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 inline-flex items-center gap-2 border-2 hover:scale-[1.02] ${theme === "dark"
                  ? "border-white/20 text-white hover:bg-white/5"
                  : "border-indigo-500/20 text-black hover:bg-blue-500/5"
                  }`}
              >
                <Mail size={20} />
                Get In Touch
              </a>

              {/* Socials */}
              <div className="flex items-center gap-4 ml-2">
                <a href="https://github.com/rohhithguna" target="_blank" rel="noreferrer" className="text-content/60 hover:text-accent hover:scale-[1.05] transition-all" aria-label="GitHub Profile">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rohhith-gunasekaran/" target="_blank" rel="noreferrer" className="text-content/60 hover:text-accent hover:scale-[1.05] transition-all" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rohhith.gunasekaran@gmail.com" className="text-content/60 hover:text-accent hover:scale-[1.05] transition-all" aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mt-20 md:mt-32 w-full max-w-4xl mx-auto p-4 md:p-6"
        >
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-2 text-center group">
                  <div className={`p-3 rounded-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-white/5 group-hover:bg-accent/20' : 'bg-blue-500/5 group-hover:bg-accent/10'
                    }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${theme === 'dark' ? 'text-white/70 group-hover:text-accent' : 'text-indigo-900/80 group-hover:text-accent'
                      }`} />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-content font-serif">{stat.value}</div>
                    <div className="text-sm font-medium text-content/60 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;