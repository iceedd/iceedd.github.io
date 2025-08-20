import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import { aboutContent } from '../content';

const About = () => {
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

  const highlightIcons = [
    { icon: Users, color: "text-blue-500" },
    { icon: Zap, color: "text-yellow-500" },
    { icon: Award, color: "text-green-500" },
    { icon: CheckCircle, color: "text-purple-500" }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {aboutContent.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {aboutContent.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Call to action */}
              <motion.div variants={itemVariants} className="pt-6">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Let's Work Together
                </button>
              </motion.div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Key Achievements
              </h3>
              
              <div className="space-y-4">
                {aboutContent.highlights.map((highlight, index) => {
                  const IconComponent = highlightIcons[index]?.icon || CheckCircle;
                  const iconColor = highlightIcons[index]?.color || "text-primary-500";
                  
                  return (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.1, duration: 0.5 }
                        }
                      }}
                      className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className={`mt-1 ${iconColor}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {highlight}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Experience card */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-lg"
              >
                <h4 className="text-xl font-bold mb-3">Professional Focus</h4>
                <p className="text-primary-100 leading-relaxed">
                  Currently deepening expertise in Microsoft Security solutions and pursuing advanced certifications. 
                  Passionate about emerging AI integrations within the Microsoft 365 ecosystem and their potential 
                  to revolutionize workplace productivity.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5+", label: "Years Experience", desc: "Microsoft 365 Engineering" },
              { number: "50+", label: "Projects Delivered", desc: "Successful Implementations" },
              { number: "15+", label: "Certifications", desc: "Microsoft Technologies" },
              { number: "99.9%", label: "Uptime Achieved", desc: "Production Systems" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }
                }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;