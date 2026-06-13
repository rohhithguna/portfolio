import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import RgSplash from '../assets/rg-splash.png';

const NUM_PARTICLES = 18;
const SUBTITLES = [
  'Cyber Security',
  'Cloud Computing',
  'Distributed Systems',
  'Systems Engineering'
];

const SplashLoader = ({ onAnimationComplete, theme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [particles, setParticles] = useState([]);
  const [progress, setProgress] = useState(0);

  const isDark = theme === 'dark';

  useEffect(() => {
    // Generate minimal premium particles
    const particleColors = isDark 
      ? ['#3B82F6', '#6366F1', '#8B5CF6'] 
      : ['#2563EB', '#4F46E5', '#7C3AED'];
      
    const generated = Array.from({ length: NUM_PARTICLES }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      size: Math.random() * 2 + 1,
      duration: 20 + Math.random() * 25, // Extremely slow movement
    }));
    setParticles(generated);

    document.body.style.overflow = 'hidden';

    // Subtitle rotation
    const subtitleTimeout = setTimeout(() => {
      const subtitleInterval = setInterval(() => {
        setSubtitleIndex(prev => (prev + 1) % SUBTITLES.length);
      }, 1200);
      return () => clearInterval(subtitleInterval);
    }, 1200);

    // Progress bar simulation over 4 seconds
    const startTime = Date.now();
    const duration = 4000;
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 16); // ~60fps updates for smooth fill

    // Sequence timing
    const readyTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // Wait 4.5s total to allow progress bar to reach 100% and dwell slightly

    return () => {
      clearTimeout(subtitleTimeout);
      clearTimeout(readyTimer);
      clearInterval(progressInterval);
      document.body.style.overflow = '';
    };
  }, [isDark]);

  const handleExitComplete = () => {
    document.body.style.overflow = '';
    onAnimationComplete?.();
  };

  const containerVariants = {
    initial: { opacity: 1, filter: "blur(0px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { 
      opacity: 0, 
      filter: "blur(12px)",
      transition: { duration: 0.9, ease: "easeInOut", when: "beforeChildren" } 
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.1 }, // Start slightly zoomed in
    animate: { 
      opacity: 1, 
      scale: [1.1, 1, 1.05, 1], // Entrance, then breathing
      transition: { 
        opacity: { duration: 1.2, ease: "easeOut" },
        scale: { 
          times: [0, 0.23, 0.615, 1], // Map 1.2s entrance to total duration
          duration: 5.2, // 1.2s entrance + 4s breathing cycle
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        } 
      }
    },
    exit: { 
      scale: 1.15, 
      opacity: 0,
      transition: { duration: 0.9, ease: "easeInOut" } 
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 flex flex-col justify-center items-center z-[100000] overflow-hidden"
          style={{
            backgroundColor: isDark ? '#020617' : '#F8FAFC',
          }}
        >
          {/* Full-Screen Image Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.img
              src={RgSplash}
              alt="Rohhith Gunasekaran Cover"
              variants={imageVariants}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Subtle animated radial gradient background over image */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              background: isDark 
                ? 'radial-gradient(circle at center, #1E3A8A 0%, transparent 70%)'
                : 'radial-gradient(circle at center, #60A5FA 0%, transparent 70%)',
            }}
          />

          {/* Ambient Particles */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
                animate={{ 
                  x: `${p.x + (Math.random() - 0.5) * 8}vw`, 
                  y: `${p.y + (Math.random() - 0.5) * 8}vh`, 
                  opacity: [0, 0.5, 0] 
                }}
                transition={{ 
                  duration: p.duration, 
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2
                }}
                style={{
                  position: 'absolute',
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                }}
              />
            ))}
          </div>

          {/* Text Content Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-6 md:bottom-10 z-20 flex flex-col items-center p-6 md:p-8 rounded-2xl backdrop-blur-md"
            style={{
              backgroundColor: isDark ? 'rgba(2, 6, 23, 0.4)' : 'rgba(248, 250, 252, 0.5)'
            }}
          >
            <h1 
              className={`text-sm sm:text-base md:text-lg font-semibold tracking-[0.3em] mb-4 text-center drop-shadow-md ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              ROHHITH GUNASEKARAN
            </h1>

            <div className="h-6 relative overflow-hidden flex justify-center w-72 mb-10 drop-shadow-sm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={subtitleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute text-xs md:text-sm font-light tracking-widest ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {SUBTITLES[subtitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Premium Animated Progress Bar */}
            <div 
              className={`w-[220px] h-[3px] relative overflow-hidden rounded-full drop-shadow-lg ${
                isDark ? 'bg-white/10' : 'bg-slate-300/50'
              }`}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7]"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: isDark ? '0 0 12px rgba(99, 102, 241, 0.6)' : 'none'
                }}
              />
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashLoader;