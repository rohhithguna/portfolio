import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Code2, ShieldCheck, Cloud, BrainCircuit, Globe, Wrench } from 'lucide-react';

function Skills() {
    const { theme } = useContext(ThemeContext);
    
    const skillCategories = [
        {
            title: 'Programming',
            icon: Code2,
            skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'TypeScript']
        },
        {
            title: 'Cyber Security',
            icon: ShieldCheck,
            skills: ['Network Security', 'Vulnerability Assessment', 'Security Auditing', 'Reconnaissance', 'Threat Modeling']
        },
        {
            title: 'Cloud & Systems',
            icon: Cloud,
            skills: ['Distributed Systems', 'Cloud Computing', 'GPU Virtualization', 'Resource Scheduling', 'Infrastructure Engineering']
        },
        {
            title: 'AI & Data Engineering',
            icon: BrainCircuit,
            skills: ['Machine Learning', 'Adversarial ML', 'Data Pipelines', 'Statistical Modeling']
        },
        {
            title: 'Web Technologies',
            icon: Globe,
            skills: ['React', 'Next.js', 'Node.js', 'WebSockets', 'WebRTC']
        },
        {
            title: 'Tools & Infrastructure',
            icon: Wrench,
            skills: ['Linux', 'Docker', 'Git', 'Wireshark', 'PostgreSQL', 'Redis']
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-32 md:py-40 px-6 relative bg-transparent">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
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
Technical Skills
            </h2>
          </div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] ${
                                theme === "dark" 
                                    ? "bg-surface border-white/5 hover:border-accent/30" 
                                    : "bg-surface border-indigo-500/10 hover:border-accent/30"
                            }`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl flex-shrink-0 ${
                                    theme === "dark" ? "bg-accent/10 text-accent" : "bg-accent/10 text-accent"
                                }`}>
                                    <category.icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-content leading-tight">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                                            theme === "dark"
                                                ? "bg-white/5 border-white/10 text-content/90 hover:border-accent/50 hover:text-accent"
                                                : "bg-blue-500/5 border-indigo-500/15 text-content/90 hover:border-accent/50 hover:text-accent"
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;