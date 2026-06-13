import { motion, AnimatePresence } from 'motion/react';
import heroDark from '../assets/hero_dark.png';
import heroLight from '../assets/hero_light.png';

function HeroVisual({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="dark-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full flex items-center justify-end"
          >
            {/* The Globe Image - Expanded, shifted slightly downwards, right aligned, 100% brightness, pushed slightly off-screen right in dark mode */}
            <img
              src={heroDark}
              alt=""
              className="absolute right-0 -translate-y-[5%] lg:-translate-y-[8%] translate-x-[15%] md:translate-x-[10%] lg:translate-x-[8%] xl:translate-x-[9%] w-[150%] md:w-[125%] lg:w-[100%] xl:w-[95%] h-[130%] lg:h-[150%] object-contain object-right opacity-100"
              style={{
                imageRendering: 'high-quality',
                transformOrigin: 'right center',
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
            className="absolute inset-0 w-full h-full flex items-center justify-end"
          >
            {/* The Globe Image - Expanded, shifted slightly downwards, right aligned, 100% brightness */}
            <img
              src={heroLight}
              alt=""
              className="absolute right-0 -translate-y-[5%] lg:-translate-y-[8%] translate-x-[10%] md:translate-x-[5%] lg:translate-x-0 w-[150%] md:w-[125%] lg:w-[100%] xl:w-[95%] h-[130%] lg:h-[150%] object-contain object-right opacity-100"
              style={{
                imageRendering: 'high-quality',
                transformOrigin: 'right center',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroVisual;
