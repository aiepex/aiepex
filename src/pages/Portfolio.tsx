import { useState, type JSX } from 'react'
import { motion } from 'motion/react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import CloudIcon from '@mui/icons-material/Cloud'
import InventoryIcon from '@mui/icons-material/Inventory'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MicIcon from '@mui/icons-material/Mic'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VisibilityIcon from '@mui/icons-material/Visibility'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import GroupsIcon from '@mui/icons-material/Groups'
import VerifiedIcon from '@mui/icons-material/Verified'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

interface Project {
  id: number
  title: string
  category: string
  description: string
  icon: JSX.Element
  tags: string[]
  results: string
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'AI/ML', 'Analytics', 'Cloud', 'Mobile']

  const projects: Project[] = [
    {
      id: 1,
      title: 'Predictive Healthcare Analytics',
      category: 'AI/ML',
      description: 'Machine learning platform predicting patient outcomes with 95% accuracy',
      icon: <LocalHospitalIcon sx={{ fontSize: 80 }} />,
      tags: ['Healthcare', 'Predictive Analytics', 'Python'],
      results: '+40% efficiency',
    },
    {
      id: 2,
      title: 'Financial Fraud Detection',
      category: 'AI/ML',
      description: 'Real-time fraud detection system processing millions of transactions',
      icon: <AccountBalanceIcon sx={{ fontSize: 80 }} />,
      tags: ['Finance', 'Deep Learning', 'Security'],
      results: '-85% fraud cases',
    },
    {
      id: 3,
      title: 'Customer Behavior Analytics',
      category: 'Analytics',
      description: 'Advanced analytics dashboard providing real-time customer insights',
      icon: <AnalyticsIcon sx={{ fontSize: 80 }} />,
      tags: ['Retail', 'Analytics', 'Dashboard'],
      results: '+60% conversions',
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud',
      description: 'Seamless migration of enterprise systems to scalable cloud platform',
      icon: <CloudIcon sx={{ fontSize: 80 }} />,
      tags: ['Cloud', 'DevOps', 'AWS'],
      results: '-50% costs',
    },
    {
      id: 5,
      title: 'Smart Inventory Management',
      category: 'AI/ML',
      description: 'AI-powered inventory optimization reducing waste and stockouts',
      icon: <InventoryIcon sx={{ fontSize: 80 }} />,
      tags: ['Retail', 'Optimization', 'IoT'],
      results: '+35% efficiency',
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      category: 'Mobile',
      description: 'Feature-rich mobile banking application with biometric security',
      icon: <PhoneAndroidIcon sx={{ fontSize: 80 }} />,
      tags: ['Finance', 'Mobile', 'Security'],
      results: '1M+ downloads',
    },
    {
      id: 7,
      title: 'Voice Assistant Integration',
      category: 'AI/ML',
      description: 'Custom voice assistant for enterprise customer service automation',
      icon: <MicIcon sx={{ fontSize: 80 }} />,
      tags: ['NLP', 'Voice AI', 'Automation'],
      results: '-70% support tickets',
    },
    {
      id: 8,
      title: 'Supply Chain Optimization',
      category: 'Analytics',
      description: 'End-to-end supply chain visibility and optimization platform',
      icon: <LocalShippingIcon sx={{ fontSize: 80 }} />,
      tags: ['Logistics', 'Analytics', 'IoT'],
      results: '+45% throughput',
    },
    {
      id: 9,
      title: 'Computer Vision Quality Control',
      category: 'AI/ML',
      description: 'Automated quality inspection system using computer vision',
      icon: <VisibilityIcon sx={{ fontSize: 80 }} />,
      tags: ['Manufacturing', 'Computer Vision', 'Automation'],
      results: '99.8% accuracy',
    },
  ]

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: <CheckCircleIcon /> },
    { value: '200+', label: 'Happy Clients', icon: <GroupsIcon /> },
    { value: '98%', label: 'Success Rate', icon: <VerifiedIcon /> },
    { value: '24/7', label: 'Support Available', icon: <SupportAgentIcon /> },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full mb-4">
            <span className="text-red-500 font-semibold text-sm">Our Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped businesses across industries transform with AI and technology
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/50'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-red-600/50 hover:text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                layout
              >
                <div className="relative aspect-video bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center">
                  <motion.div
                    className="text-red-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-red-500 text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="text-green-500 font-bold text-sm">{project.results}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-xs hover:border-red-600/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Our Track Record
              </span>
            </h2>
            <p className="text-xl text-gray-400">Proven results across all projects</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex justify-center mb-3 text-red-500">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO, TechCorp',
                content: 'Aiepex delivered beyond our expectations. The AI solution transformed our operations.',
                rating: 5,
              },
              {
                name: 'Sarah Johnson',
                role: 'CTO, DataFlow',
                content: 'Professional team, cutting-edge solutions, and exceptional support throughout.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Director, FinanceHub',
                content: 'The fraud detection system has saved us millions. Highly recommended!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-red-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio