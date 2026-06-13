import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useState } from 'react';
import { projectsData } from '../data/projectsData';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const featuredProjects = projectsData.filter(p => p.featured);
    const inProgressProjects = projectsData.filter(p => p.inProgress);
    const otherProjects = projectsData.filter(p => !p.featured && !p.inProgress);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    return (
        <section id="projects" className="py-32 md:py-40 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center relative"
                >
                    <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-pure opacity-10 blur-[120px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content relative z-10">
Engineering Portfolio
            </h2>
          </div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-gradient-pure mx-auto rounded-full mb-8" />
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-content/70 font-light leading-relaxed">
                        A curated selection of technical projects, research initiatives, and system architectures I've built.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-content">Featured Work</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                        </div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        >
                            {featuredProjects.map((project) => (
                                <ProjectCard 
                                    key={project.id} 
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                    isCompact={false}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* In Progress & Research */}
                {inProgressProjects.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-content">Research & Development</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent" />
                        </div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {inProgressProjects.map((project) => (
                                <ProjectCard 
                                    key={project.id} 
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                    isCompact={false}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* Additional Projects */}
                {otherProjects.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-content">Additional Projects</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-content/20 to-transparent" />
                        </div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {otherProjects.map((project) => (
                                <ProjectCard 
                                    key={project.id} 
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                    isCompact={true}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* View More GitHub */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <a
                        href="https://github.com/rohhithguna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 border-2 border-content/20 text-content hover:bg-content/5 hover:-translate-y-1"
                    >
                        <span>View GitHub Profile</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>

            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default Projects;