import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Mail, Phone, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

function Contact() {
    const { theme } = useContext(ThemeContext);

    const contactActions = [
        {
            label: "Email Me",
            value: "rohhithguna@gmail.com",
            icon: Mail,
            href: "mailto:rohhithguna@gmail.com"
        },
        {
            label: "View Resume",
            value: "Download PDF",
            icon: FileText,
            href: "#" // Placeholder until user provides
        },
        {
            label: "Visit GitHub",
            value: "@rohhithguna",
            icon: Github,
            href: "#" // Placeholder
        },
        {
            label: "Visit LinkedIn",
            value: "Rohhith Gunasekaran",
            icon: Linkedin,
            href: "#" // Placeholder
        }
    ];

    return (
        <section id="contact" className="py-32 md:py-40 px-6 relative bg-transparent">
            <div className="max-w-4xl mx-auto relative z-10">
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
Get In Touch
            </h2>
          </div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
                </motion.div>

                {/* Central Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`p-6 md:p-8 rounded-2xl border backdrop-blur-sm shadow-xl ${
                        theme === "dark" ? "bg-surface border-white/10" : "bg-surface border-indigo-500/15"
                    }`}
                >
                    {/* Top Section: Name & Details */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-content mb-2">Rohhith Gunasekaran</h3>
                            <p className="text-content/70 text-lg flex items-center gap-2">
                                <Phone size={18} /> +91 9487844799
                            </p>
                        </div>
                        
                        <div className={`p-4 rounded-xl border ${
                            theme === "dark" ? "bg-white/5 border-white/10" : "bg-blue-500/5 border-indigo-500/15"
                        }`}>
                            <p className="text-sm font-semibold text-content/70 uppercase tracking-wider mb-3">Exploring Opportunities In</p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-content font-medium">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Infrastructure Engineering</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Security Research</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Systems Architecture</li>
                            </ul>
                        </div>
                    </div>

                    {/* Action Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactActions.map((action, idx) => (
                            <motion.a
                                key={idx}
                                href={action.href}
                                target={action.href.startsWith('http') ? "_blank" : undefined}
                                rel={action.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center justify-between p-4 rounded-xl border group transition-all duration-300 ${
                                    theme === "dark"
                                        ? "bg-white/5 border-white/5 hover:border-accent/50 hover:bg-white/10"
                                        : "bg-blue-500/5 border-indigo-500/10 hover:border-accent/50 hover:bg-blue-500/10"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${
                                        theme === "dark" ? "bg-accent/10 text-accent" : "bg-accent/10 text-accent"
                                    }`}>
                                        <action.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-content">{action.label}</h4>
                                        <p className="text-sm text-content/60 group-hover:text-gradient-premium transition-all">{action.value}</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-content/30 group-hover:text-gradient-premium transition-all" size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;