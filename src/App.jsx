import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';

import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import TechnicalDeepDives from './components/TechnicalDeepDives.jsx';
import Achievements from './components/Achievements.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import SplashLoader from './components/SplashLoader';

import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import { Analytics } from '@vercel/analytics/react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  const particlesContainerRef = useRef(null);

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark'
  );

  localStorage.setItem('theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Stable callback reference
  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  const particlesOptions = useMemo(() => {
    return {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: {
          value: 110, // ~40% reduction for cleaner negative space
          density: {
            enable: true,
            area: 1000, // Spread evenly, avoid dense clustering
          },
        },
        color: {
          value: theme === 'dark' 
            ? ['#38BDF8', '#3B82F6', '#8B5CF6'] 
            : ['#2563EB', '#4F46E5', '#8B5CF6'],
        },
        shape: {
          type: 'circle',
        },
        shadow: {
          enable: false, // Glow effect completely removed
          blur: 0,
          color: 'transparent',
          offset: { x: 0, y: 0 }
        },
        opacity: {
          value: 0.85, // High opacity core (85%)
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: { min: 1.0, max: 1.5 }, // Finer micro-particles
          random: true,
          anim: {
            enable: false,
          },
        },
        links: {
          enable: true,
          distance: 160,
          color: theme === 'dark' ? '#38BDF8' : '#4F46E5',
          opacity: 0.15, // Reverted to fine, subtle static lines
          width: 1.0, 
          triangles: {
            enable: false,
          }
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.25 }, // Extremely subtle ambient drifting
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'out',
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ['grab', 'bubble'],
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180, 
            links: {
              opacity: 0.8, // Increased opacity for thick, clear connection to cursor
            },
          },
          bubble: {
            distance: 250,
            size: 1.5, // Match max size
            duration: 2,
            opacity: 1.0, // Max opacity increase 15% (0.85 -> 1.0)
            mix: false,
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  useEffect(() => {
    // Gate particles until splash completes
    if (!splashDone) return;

    const initParticles = async () => {
      if (!particlesContainerRef.current) return;

      try {
        await loadSlim(tsParticles);

        await tsParticles.load({
          id: 'tsparticles',
          element: particlesContainerRef.current,
          options: particlesOptions,
        });
      } catch (error) {
        console.error('tsParticles failed:', error);
      }
    };

    initParticles();

    return () => {
      const container = tsParticles
        .dom()
        .find((c) => c.id === 'tsparticles');

      container?.destroy();
    };
  }, [particlesOptions, splashDone]);

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      {/* Splash mounts FIRST and gates everything */}
      {!splashDone && (
        <SplashLoader
          onAnimationComplete={handleSplashComplete}
          theme={theme}
        />
      )}

      {/* Heavy subtree mounts ONLY after splash */}
      {splashDone && (
        <>
          <div
            id="tsparticles"
            ref={particlesContainerRef}
            className="fixed inset-0 w-full h-full particles-canvas pointer-events-none"
            style={{
              zIndex: -20, // Layer 3: Particles sit between atmosphere (-z-30) and glows (-z-10)
            }}
          />

          <Analytics />
          <AnalyticsTracker />

          <ThemeContext.Provider
            value={{ theme, toggleTheme }}
          >
            <Navbar />
            <Hero />
            <Experience />
            <Projects />
            <TechnicalDeepDives />
            <Achievements />
            <AboutMe />
            <Skills />
            <Contact />
          </ThemeContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;