import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Code, 
  Users, 
  Database, 
  Monitor, 
  Settings,
  ChevronRight,
  Star
} from 'lucide-react';
import { skillsContent } from '../content';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [visibleBars, setVisibleBars] = useState(new Set());

  const categoryIcons = {
    'Microsoft 365 Core': Cloud,
    'Power Platform': Zap,
    'Security & Compliance': Shield,
    'Development & Automation': Code
  };

  const skillIcons = {
    'Communication': Users,
    'Collaboration': Users,
    'Storage': Database,
    'Productivity': Monitor,
    'Automation': Zap,
    'Development': Code,
    'Analytics': Database,
    'AI': Star,
    'Identity': Shield,
    'Device Management': Settings,
    'Compliance': Shield,
    'Security': Shield,
    'Scripting': Code,
    'Integration': Settings,
    'Serverless': Cloud
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const SkillBar = ({ skill, index, categoryIndex }) => {
    const IconComponent = skillIcons[skill.category] || Settings;
    const isVisible = visibleBars.has(`${categoryIndex}-${index}`);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisibleBars(prev => new Set([...prev, `${categoryIndex}-${index}`]));
      }, index * 100);

      return () => clearTimeout(timer);
    }, [index, categoryIndex]);

    return (
      <motion.div
        variants={itemVariants}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
              <IconComponent className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.category}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
              {skill.level}%
            </span>
          </div>
        </div>
        
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
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
              {skillsContent.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {skillsContent.subtitle}
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillsContent.categories.map((category, index) => {
              const IconComponent = categoryIcons[category.name] || Settings;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Skills Content */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Category Info */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {React.createElement(categoryIcons[skillsContent.categories[activeCategory].name] || Settings, {
                      className: "w-8 h-8 text-primary-600 dark:text-primary-400"
                    })}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skillsContent.categories[activeCategory].name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {skillsContent.categories[activeCategory].description}
                  </p>

                  {/* Category Highlights */}
                  <div className="space-y-3">
                    {skillsContent.categories[activeCategory].skills.slice(0, 3).map((skill, index) => (
                      <div key={skill.name} className="flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>{skill.name}</strong> - {skill.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="card p-6 text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {skillsContent.categories[activeCategory].skills.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Technologies
                    </div>
                  </div>
                  <div className="card p-6 text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {Math.round(
                        skillsContent.categories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) /
                        skillsContent.categories[activeCategory].skills.length
                      )}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg. Proficiency
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Skills List */}
              <motion.div
                variants={containerVariants}
                className="space-y-6"
              >
                {skillsContent.categories[activeCategory].skills.map((skill, index) => (
                  <SkillBar
                    key={`${activeCategory}-${skill.name}`}
                    skill={skill}
                    index={index}
                    categoryIndex={activeCategory}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Overall Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Cloud Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deep knowledge of Microsoft's cloud ecosystem and hybrid architectures
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Security Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in implementing zero-trust security models and compliance frameworks
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert in creating automated workflows and custom solutions to enhance productivity
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;