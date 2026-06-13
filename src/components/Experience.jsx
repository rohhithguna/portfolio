import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MapPin, Calendar, CheckCircle2, Clock, FlaskConical } from 'lucide-react';
import { experienceData } from '../data/experienceData';

function Experience() {
  const { theme } = useContext(ThemeContext);

  const getStatusIcon = (status) => {
    if (status === 'Current') return <Clock size={14} />;
    if (status === 'Completed') return <CheckCircle2 size={14} />;
    if (status === 'Research') return <FlaskConical size={14} />;
    return null;
  };

  const getStatusStyle = (status) => {
    if (status === 'Current') return 'bg-indigo-500/10 border border-indigo-500/20 text-gradient-premium';
    if (status === 'Completed') return 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20';
    if (status === 'Research') return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20';
    if (status === 'Internship') return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20';
    return 'bg-content/5 text-content/70 border border-content/10';
  };

  return (
    <section
      id="experience"
      className="py-32 md:py-40 px-6 relative bg-transparent"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 relative"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-pure opacity-10 blur-[120px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content relative z-10">
Professional Experience
            </h2>
          </div>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-content/70 font-light leading-relaxed">
            My engineering journey, technical roles, and focused research directions.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`absolute left-[11px] md:left-[50%] top-0 bottom-0 w-px ${
              theme === 'dark' ? 'bg-white/10' : 'bg-blue-500/10'
            }`}
          />

          {/* Experience Items */}
          <div className="space-y-16">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-[7px] md:left-[50%] md:-translate-x-1/2 w-[9px] h-[9px] rounded-full ring-4 ring-background bg-gradient-premium z-10 transition-transform duration-300 hover:scale-125`} />

                  {/* Spacer for empty side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full pl-10 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'
                  }`}>
                    <div className={`group relative flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-500 border backdrop-blur-sm ${
                        theme === "dark" 
                            ? "bg-surface border-white/[0.06] hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(99,102,241,0.08)] shadow-md"
                            : "bg-[rgba(255,255,255,0.75)] border-[rgba(120,120,255,0.08)] hover:border-[rgba(120,120,255,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.1),0_0_40px_rgba(99,102,241,0.05)] shadow-sm"
                    }`}>
                      
                      {/* Header: Status Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.status.map(s => (
                          <span key={s} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${getStatusStyle(s)}`}>
                            {getStatusIcon(s)}
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-bold text-content group-hover:text-gradient-premium transition-all mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-content/80 mb-5">
                        {exp.company}
                      </h4>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-content/60 font-medium">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-content/60 font-medium">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6 flex-grow">
                        {exp.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-content/80 font-light leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-content/10">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`rounded-lg font-medium transition-all px-2.5 py-1 text-xs ${
                              theme === "dark"
                                  ? "bg-white/5 text-white/70 border border-white/5 hover:border-white/20"
                                  : "bg-blue-500/5 text-indigo-900/80 border border-indigo-500/10 hover:border-indigo-500/20"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;