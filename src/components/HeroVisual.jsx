import { motion, AnimatePresence } from 'motion/react';
import heroDark from '../assets/hero_dark.png';
import heroLight from '../assets/hero_light.png';

function HeroVisual({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="dark-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={heroDark}
              alt=""
              className="w-full h-full object-cover opacity-100"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="light-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={heroLight}
              alt=""
              className="w-full h-full object-cover opacity-100"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroVisual;
