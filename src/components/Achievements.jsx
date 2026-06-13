import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Trophy, Code2, ShieldCheck, Cloud, Database, BrainCircuit } from 'lucide-react';

function Achievements() {
  const { theme } = useContext(ThemeContext);

  const achievementsList = [
    {
      title: 'VIT Hackathon Finalist',
      organization: 'Vellore Institute of Technology (VIT)',
      year: '2025',
      description: 'Reached the finalist stage in a competitive hackathon through the development and evaluation of a system-level project. Collaborated in a team environment to design, build, and present a working technical solution under evaluation constraints.',
      icon: Trophy,
      tag: 'Hackathon Finalist'
    },
    {
      title: 'National AI/ML Hackathon Participant',
      organization: 'Vivriti Capital × YUVAAN × IIT Hyderabad',
      year: '2026',
      description: 'Participated in the National AI/ML Hackathon. Worked as part of Team EliteX to develop and present an AI/ML-based solution while competing against teams from various institutions.',
      icon: Code2,
      tag: 'AI/ML Hackathon'
    }
  ];

  const certificationsList = [
    {
      title: 'Cyber Security Foundation',
      issuer: 'Certification Authority',
      status: 'In Progress',
      icon: ShieldCheck,
    },
    {
      title: 'Cloud Computing Architecture',
      issuer: 'Certification Authority',
      status: 'Planned',
      icon: Cloud,
    },
    {
      title: 'Data Science Fundamentals',
      issuer: 'Certification Authority',
      status: 'Planned',
      icon: Database,
    },
    {
      title: 'Applied Artificial Intelligence',
      issuer: 'Certification Authority',
      status: 'Planned',
      icon: BrainCircuit,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="py-32 md:py-40 px-6 relative bg-transparent section-ambient">
      <div className="max-w-6xl mx-auto relative z-10 space-y-32">
        
        {/* Achievements Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
          >
            <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-pure opacity-10 blur-[120px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content relative z-10">
Achievements
            </h2>
          </div>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievementsList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-10 md:p-12 rounded-2xl border backdrop-blur-lg transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  theme === "dark" 
                    ? "bg-gradient-to-br from-[#0d1529] to-[#0b1120] border-white/[0.06] hover:border-white/[0.10] hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] shadow-md" 
                    : "bg-white/85 border-indigo-500/[0.07] hover:border-indigo-500/[0.14] hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.09)] shadow-sm"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className={`p-5 rounded-2xl flex-shrink-0 h-fit w-fit ${
                    theme === "dark" 
                      ? "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-indigo-400 ring-1 ring-indigo-500/10" 
                      : "bg-gradient-to-br from-blue-500/8 via-indigo-500/8 to-violet-500/8 text-indigo-600 ring-1 ring-indigo-500/10"
                  }`}>
                    <item.icon size={36} strokeWidth={1.3} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-4 w-fit ${
                      theme === "dark" ? "bg-white/[0.06] text-white/70 border border-white/[0.08]" : "bg-indigo-500/[0.06] text-indigo-700 border border-indigo-500/[0.12]"
                    }`}>
                      {item.year} · {item.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-content tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-gradient-premium mb-5">
                      {item.organization}
                    </p>
                    <p className="text-content/75 leading-relaxed font-light text-sm md:text-base max-w-prose">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
          >
            <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-pure opacity-10 blur-[120px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content relative z-10">
Certifications
            </h2>
          </div>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certificationsList.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col items-center text-center p-8 rounded-2xl border backdrop-blur-lg transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  theme === "dark" 
                    ? "bg-gradient-to-br from-[#0d1529] to-[#0b1120] border-white/[0.06] hover:border-white/[0.10] hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] shadow-md" 
                    : "bg-white/85 border-indigo-500/[0.07] hover:border-indigo-500/[0.14] hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.09)] shadow-sm"
                }`}
              >
                <div className={`p-4 rounded-2xl mb-6 ${
                  theme === "dark" 
                    ? "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-indigo-400 ring-1 ring-indigo-500/10" 
                    : "bg-gradient-to-br from-blue-500/8 via-indigo-500/8 to-violet-500/8 text-indigo-600 ring-1 ring-indigo-500/10"
                }`}>
                  <cert.icon size={28} strokeWidth={1.3} />
                </div>
                <h3 className="text-lg font-bold text-content mb-2 leading-snug tracking-[-0.01em]">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-gradient-premium mb-6 uppercase tracking-wider">
                  {cert.issuer}
                </p>
                <span className={`mt-auto px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                  cert.status === 'In Progress' 
                    ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20"
                    : "bg-content/5 text-content/60 border border-content/[0.08]"
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
