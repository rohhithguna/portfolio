import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ThemeContext } from '../context/ThemeContext';
import { useContext, useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'deep-dives', label: 'Deep Dives' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-[95%] md:max-w-[92%] rounded-[14px] md:rounded-[16px] vision-nav-container pointer-events-auto transition-all duration-500`}
      >
        <div className="px-2 md:px-3">
          <div className="flex items-center justify-between h-[36px] md:h-[40px]">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, 'Home')}
              className="flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-80"
            >
              <span className="text-sm md:text-base font-[600] tracking-[0.15em] text-content font-sans ml-1">
                RG
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.label)}
                  className="relative group px-2 py-0.5 rounded-[8px] vision-nav-item flex items-center justify-center"
                >
                  <span className={`relative z-10 text-[10px] md:text-[11px] font-medium transition-colors duration-400 ${
                    activeSection === item.id 
                      ? (theme === 'dark' ? 'text-white' : 'text-slate-900')
                      : 'text-content/60 group-hover:text-content'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active Liquid Glass Pill Indicator */}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeNavBackground"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 vision-nav-pill"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              {/* Theme Toggle Orb */}
              <button
                onClick={toggleTheme}
                className="vision-orb group"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 30 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10"
                    >
                      <Sun className="w-4 h-4 text-white/90" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 30 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10"
                    >
                      <Moon className="w-4 h-4 text-slate-800/90" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="!w-[26px] !h-[26px] !rounded-[6px] flex items-center justify-center vision-orb"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Sun className="w-3 h-3 text-white/90" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Moon className="w-3 h-3 text-slate-800/90" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="!w-[26px] !h-[26px] !rounded-[6px] flex items-center justify-center vision-orb"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <X className="w-3 h-3 text-content" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Menu className="w-3 h-3 text-content" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-indigo-500/10 dark:border-white/10"
              >
                <div className="flex flex-col space-y-2 py-6 px-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.label)}
                      className={`text-base font-medium px-4 py-3 rounded-2xl transition-colors duration-300 relative overflow-hidden ${
                        activeSection === item.id
                          ? 'text-accent bg-accent/10 dark:bg-accent/20'
                          : 'text-content/70 hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;