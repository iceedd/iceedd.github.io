import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Send,
  CheckCircle,
  Clock
} from 'lucide-react';
import { contactContent, siteConfig, certificationsContent } from '../content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - integrate with your preferred form service
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

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

  const iconMap = {
    Mail,
    Phone,
    Linkedin,
    Github,
    MapPin
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
              {contactContent.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              {contactContent.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {contactContent.description}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Availability Status */}
                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {contactContent.availability.status}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactContent.availability.note}
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Get in Touch
                  </h3>
                  {contactContent.contactMethods.map((method, index) => {
                    const IconComponent = iconMap[method.icon] || Mail;
                    return (
                      <motion.a
                        key={method.type}
                        href={method.type === 'email' ? `mailto:${method.value}` : 
                              method.type === 'phone' ? `tel:${method.value}` : method.value}
                        target={method.type === 'email' || method.type === 'phone' ? '_self' : '_blank'}
                        rel={method.type === 'email' || method.type === 'phone' ? '' : 'noopener noreferrer'}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { delay: index * 0.1, duration: 0.5 }
                          }
                        }}
                        className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg group ${
                          method.primary 
                            ? 'border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                        }`}
                      >
                        <div className={`p-3 rounded-full ${
                          method.primary 
                            ? 'bg-primary-100 dark:bg-primary-800'
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            method.primary 
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-gray-600 dark:text-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {method.label}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {method.type === 'email' || method.type === 'phone' ? method.value : 'View Profile'}
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Current Certifications */}
                <motion.div variants={itemVariants} className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Current Certifications
                  </h3>
                  <div className="space-y-3">
                    {certificationsContent.current.slice(0, 3).map((cert, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {cert.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer} • {cert.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* In Progress */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Currently Pursuing
                    </h4>
                    {certificationsContent.inProgress.slice(0, 2).map((cert, index) => (
                      <div key={index} className="flex items-start gap-3 mb-2">
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {cert.name}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Expected: {cert.expectedDate}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="M365 Consultation Request"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell me about your M365 project or consultation needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
                
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    I typically respond within 24 hours. For urgent matters, feel free to reach out directly via phone or LinkedIn.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;