import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  Award, 
  ChevronRight,
  X,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { projectsContent } from '../content';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="card card-hover group cursor-pointer h-full"
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Header */}
        <div className="p-8">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              {project.status}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{project.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Hover CTA */}
        <div className="px-8 pb-8">
          <div className="flex items-center justify-between text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="font-medium">View Details</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectModal = ({ project }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {project.client} • {project.role}
              </p>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Key Highlights
              </h3>
              <div className="grid gap-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Results & Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
                  >
                    <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <div className="font-bold text-gray-900 dark:text-white">Duration</div>
                <div className="text-gray-600 dark:text-gray-400">{project.duration}</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <div className="font-bold text-gray-900 dark:text-white">Team Size</div>
                <div className="text-gray-600 dark:text-gray-400">{project.teamSize}</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <div className="font-bold text-gray-900 dark:text-white">My Role</div>
                <div className="text-gray-600 dark:text-gray-400">{project.role}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {projectsContent.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {projectsContent.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid-projects">
            {projectsContent.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss how I can help transform your Microsoft 365 environment and drive business success.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;