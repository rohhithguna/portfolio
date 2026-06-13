import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GraduationCap, Target, Network, Shield, Cpu, Database, Cloud, Zap, BookOpen } from 'lucide-react';
import ProfileImage from "../assets/rohhithgunasekaran.jpg"

function AboutMe() {
    const { theme } = useContext(ThemeContext);

    const currentFocus = [
        { name: 'Cyber Security', icon: Shield },
        { name: 'Cloud Computing', icon: Cloud },
        { name: 'Distributed Systems', icon: Network },
        { name: 'GPU Virtualization', icon: Cpu },
        { name: 'AI Systems', icon: Database },
        { name: 'Infrastructure Engineering', icon: Zap }
    ];

    const researchInterests = [
        'Intrusion Detection Systems',
        'GAN-Based Security Research',
        'Cloud Gaming Infrastructure',
        'GPU Resource Virtualization',
        'Distributed Computing'
    ];

    return (
        <section id="about" className="py-32 md:py-40 px-6 relative bg-transparent">
            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
                >
                    <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-pure opacity-10 blur-[120px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content relative z-10">
Profile & Research
            </h2>
          </div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Column: Image & Education */}
                    <div className="lg:col-span-5 space-y-12 flex flex-col items-center lg:items-start">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-content/10 shadow-xl flex-shrink-0"
                        >
                            <img
                                src={ProfileImage}
                                alt="Rohhith Gunasekaran"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay pointer-events-none" />
                        </motion.div>

                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`w-full max-w-md p-8 rounded-2xl border backdrop-blur-sm ${
                                theme === "dark" ? "bg-surface border-white/5" : "bg-surface border-indigo-500/10"
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="text-accent" size={24} strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold text-content">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-content/90">Bachelor of Engineering</h4>
                                    <p className="text-content/70">Computer Science and Engineering</p>
                                </div>
                                <div className="h-px w-full bg-content/10" />
                                <div>
                                    <h4 className="text-base font-medium text-content/90">Coimbatore Institute of Technology</h4>
                                    <div className="flex justify-between items-center mt-2 text-sm text-content/60">
                                        <span>Expected: 2027</span>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                                            theme === "dark" ? "bg-white/10 text-white" : "bg-blue-500/10 text-black"
                                        }`}>Pre-final Year</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: About, Focus, Research */}
                    <div className="lg:col-span-7 space-y-12">
                        
                        {/* About Narrative */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold text-content">About Me</h3>
                            <div className="space-y-4 text-lg text-content/80 leading-relaxed font-light">
                                <p>
                                    I am a Systems Engineering and Security Researcher focused on distributed architecture and infrastructure optimization.
                                </p>
                                <p>
                                    My work centers on building highly available cloud environments, developing GPU virtualization techniques, and researching adversarial machine learning for intrusion detection. I bridge the gap between theoretical security models and applied engineering by designing systems that are fundamentally resilient against complex attack vectors.
                                </p>
                            </div>
                        </motion.div>

                        {/* Current Focus Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-content mb-6 flex items-center gap-3">
                                <Target className="text-accent" size={24} strokeWidth={1.5} />
                                Current Focus
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {currentFocus.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:border-accent/30 hover:scale-[1.02] ${
                                            theme === "dark" ? "bg-surface border-white/5 hover:bg-white/[0.02]" : "bg-surface border-indigo-500/10 hover:bg-blue-500/[0.02]"
                                        }`}
                                    >
                                        <item.icon className="text-accent/80" size={28} strokeWidth={1.5} />
                                        <span className="text-sm font-medium text-center text-content/90">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Research Interests */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-content mb-6 flex items-center gap-3">
                                <BookOpen className="text-accent" size={24} strokeWidth={1.5} />
                                Research Interests
                            </h3>
                            <ul className="space-y-3">
                                {researchInterests.map((interest, idx) => (
                                    <li key={idx} className="flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors flex-shrink-0" />
                                        <span className="text-content/80 group-hover:text-content transition-colors font-medium">
                                            {interest}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;