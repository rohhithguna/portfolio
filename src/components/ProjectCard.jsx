import { motion } from 'motion/react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'; 
import { ExternalLink, BookOpen, Presentation, CheckCircle2, Clock, Microscope } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ProjectCard({ project, onClick, isCompact = false }) {
    const { theme } = useContext(ThemeContext);

    const {
        title,
        shortDescription,
        tags,
        type,
        status,
        links,
        metrics,
        image,
        featured,
        repositoryStats
    } = project;

    // Truncate description for compact cards
    const displayDescription = isCompact && shortDescription.length > 120
        ? shortDescription.substring(0, 120) + '...'
        : shortDescription;

    const StatusIcon = () => {
        if (status === 'Completed') return <CheckCircle2 size={12} />;
        if (status === 'In Progress') return <Clock size={12} />;
        if (status === 'Research') return <Microscope size={12} />;
        return null;
    };

    const getStatusStyle = () => {
        if (status === 'Completed') return 'bg-accent/10 text-accent border border-accent/20';
        if (status === 'In Progress') return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20';
        if (status === 'Research') return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20';
        return 'bg-content/5 text-content/70 border border-content/10';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hover"
            className="group relative h-full cursor-pointer flex flex-col rounded-2xl"
            onClick={onClick}
        >
            {/* Inner Card */}
            <motion.div 
                variants={{
                    hover: { y: -3 }
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col h-full rounded-2xl backdrop-blur-lg transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden border ${
                    isCompact ? 'p-5' : 'p-6 md:p-8'
                } ${
                    theme === "dark" 
                        ? "bg-gradient-to-br from-[#0d1529] to-[#0b1120] border-white/[0.06] group-hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] group-hover:border-white/[0.09]"
                        : "bg-white/85 border-indigo-500/[0.07] group-hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.09)] group-hover:border-indigo-500/[0.13]"
                }`}
            >
                <div className="relative z-10 flex flex-col h-full flex-grow">
                    
                    {/* Header: Featured Badge, Type, and Status */}
                    <div className="flex justify-between items-start mb-5">
                        <div className="flex flex-col gap-2">
                            {featured && (
                                <span className={`w-fit text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border ${
                                    theme === 'dark' ? 'bg-white/5 border-white/10 text-white/70 shadow-sm' : 'bg-blue-500/5 border-indigo-500/15 text-indigo-900/80 shadow-sm'
                                }`}>
                                    Featured
                                </span>
                            )}
                            {type && (
                                <span className={`text-xs font-semibold tracking-wider uppercase ${
                                    theme === 'dark' ? 'text-white/50' : 'text-indigo-900/60'
                                }`}>
                                    {type}
                                </span>
                            )}
                        </div>
                        {status && (
                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${getStatusStyle()}`}>
                                <StatusIcon />
                                {status}
                            </div>
                        )}
                    </div>

                    {/* Optional Image */}
                    {image && (
                        <div className="relative w-full h-40 md:h-48 mb-6 rounded-xl overflow-hidden border border-indigo-500/10 dark:border-white/5 bg-blue-500/10 dark:bg-white/5">
                            <motion.img 
                                src={image} 
                                alt={title}
                                className="w-full h-full object-cover transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] brightness-90 group-hover:brightness-102"
                                variants={{
                                    hover: { scale: 1.02 }
                                }}
                            />
                        </div>
                    )}

                    {/* Title */}
                    <h3 className={`font-bold tracking-tight leading-tight ${
                        isCompact ? 'text-lg md:text-xl mb-2' : 'text-2xl md:text-3xl mb-3'
                    } text-content group-hover:text-gradient-premium transition-all duration-300`}>
                        {title}
                    </h3>

                    {/* Description */}
                    <p className={`font-light leading-relaxed flex-grow ${
                        isCompact ? 'mb-5 text-sm opacity-70 line-clamp-2' : 'mb-6 text-base opacity-80'
                    } text-content`}>
                        {displayDescription}
                    </p>

                    {/* Metrics Layer */}
                    {metrics && metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {metrics.map((metric, i) => (
                                <div key={i} className={`flex flex-col p-2.5 rounded-lg border backdrop-blur-sm ${
                                    theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-blue-500/5 border-indigo-500/10'
                                }`}>
                                    <span className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${
                                        theme === 'dark' ? 'text-white/40' : 'text-black/40'
                                    }`}>{metric.label}</span>
                                    <span className={`font-medium text-sm md:text-base tracking-tight ${
                                        theme === 'dark' ? 'text-white/90' : 'text-indigo-950'
                                    }`}>{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Repository Stats */}
                    {repositoryStats && links?.github && (
                        <div className="flex items-center gap-4 mb-5 text-xs font-semibold tracking-wide text-content/60">
                            <span className="flex items-center gap-1.5 hover:text-content transition-colors"><FaStar size={12} className="text-yellow-500" /> {repositoryStats.stars}</span>
                            <span className="flex items-center gap-1.5 hover:text-content transition-colors"><FaCodeBranch size={12} className="text-blue-500" /> {repositoryStats.forks}</span>
                            <span className="flex items-center gap-1.5"><Clock size={12} /> Updated: {repositoryStats.lastUpdated}</span>
                        </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags?.map((tag, i) => (
                            <span
                                key={i}
                                className={`rounded-md font-medium transition-all duration-300 px-2.5 py-1 text-[11px] md:text-xs hover:-translate-y-0.5 ${
                                    theme === "dark"
                                        ? "bg-white/5 text-white/70 border border-white/5 hover:border-white/20 hover:text-white hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
                                        : "bg-blue-500/5 text-indigo-900/80 border border-indigo-500/10 hover:border-indigo-500/20 hover:text-black hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links Footer */}
                    <div className={`flex gap-5 items-center border-t pt-4 mt-auto transition-colors duration-300 ${
                        theme === 'dark' ? 'border-white/10 group-hover:border-white/20' : 'border-indigo-500/15 group-hover:border-indigo-500/20'
                    }`}>
                        
                        {/* GitHub Link */}
                        {links?.github ? (
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group/github flex items-center gap-2 text-sm font-semibold text-content/60 transition-all p-1"
                                aria-label="GitHub Repository"
                            >
                                <FaGithub size={20} className="group-hover/github:text-violet-500 transition-colors" />
                                <span className="group-hover/github:text-gradient-premium transition-all">View Source Code</span>
                            </a>
                        ) : (
                            <div className="flex items-center gap-2 text-sm font-semibold text-content/20 p-1 cursor-not-allowed" aria-label="GitHub Not Available">
                                <FaGithub size={20} />
                            </div>
                        )}

                        {/* Demo Link */}
                        {links?.demo ? (
                            <a
                                href={links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm font-semibold text-content/60 hover:text-accent transition-colors"
                            >
                                <ExternalLink size={16} />
                                <span>Demo</span>
                            </a>
                        ) : (
                            <div className="flex items-center gap-1.5 text-sm font-semibold text-content/20 cursor-not-allowed">
                                <ExternalLink size={16} />
                                <span>Demo</span>
                            </div>
                        )}

                        {/* Documentation Link */}
                        {links?.documentation && (
                            <a
                                href={links.documentation}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm font-semibold text-content/60 hover:text-accent transition-colors"
                            >
                                <BookOpen size={16} />
                                <span>Docs</span>
                            </a>
                        )}

                        {/* Case Study Link */}
                        {links?.caseStudy && (
                            <a
                                href={links.caseStudy}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm font-semibold text-content/60 hover:text-accent transition-colors"
                            >
                                <Presentation size={16} />
                                <span>Case Study</span>
                            </a>
                        )}

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;