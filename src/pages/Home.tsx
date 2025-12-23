import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import SecurityIcon from '@mui/icons-material/Security'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import PublicIcon from '@mui/icons-material/Public'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupsIcon from '@mui/icons-material/Groups'
import VerifiedIcon from '@mui/icons-material/Verified'
import CodeIcon from '@mui/icons-material/Code'
import CloudIcon from '@mui/icons-material/Cloud'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import AnalyticsIcon from '@mui/icons-material/Analytics'

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <VerifiedIcon /> },
    { value: '200+', label: 'Happy Clients', icon: <GroupsIcon /> },
    { value: '50+', label: 'Team Members', icon: <GroupsIcon /> },
    { value: '15+', label: 'Years Experience', icon: <TrendingUpIcon /> },
  ]

  const features = [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 48 }} />,
      title: 'Innovation First',
      description: 'Cutting-edge AI solutions powered by the latest technology and research',
    },
    {
      icon: <FlashOnIcon sx={{ fontSize: 48 }} />,
      title: 'Lightning Fast',
      description: 'Optimized performance and rapid deployment for all your projects',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance for your peace of mind',
    },
    {
      icon: <TrackChangesIcon sx={{ fontSize: 48 }} />,
      title: 'Precision Results',
      description: 'Data-driven insights and measurable outcomes for your business',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 48 }} />,
      title: 'Smart Solutions',
      description: 'Intelligent automation and ML-powered decision making',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 48 }} />,
      title: 'Global Scale',
      description: 'Cloud infrastructure that scales with your growing needs',
    },
  ]

  const services = [
    {
      icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
      title: 'AI Consulting',
      description: 'Strategic AI implementation guidance',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Machine Learning',
      description: 'Custom ML models for your needs',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Data Analytics',
      description: 'Transform data into insights',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Aiepex transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow',
      content: 'Professional, efficient, and incredibly knowledgeable. Best decision we made for our company.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Innovation Labs',
      content: 'Their team delivered exceptional results. Our productivity increased by 40% in just 3 months.',
      rating: 5,
    },
  ]

  const technologies = [
    'TensorFlow',
    'PyTorch',
    'AWS',
    'Google Cloud',
    'Azure',
    'Python',
    'React',
    'Node.js',
    'Kubernetes',
    'Docker',
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -0.02,
              y: mousePosition.y * -0.02,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center mb-6 px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AutoAwesomeIcon className="text-red-500 mr-2" fontSize="small" />
              <span className="text-red-500 font-semibold text-sm">Welcome to the Future of AI</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                With AI Innovation
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering businesses with cutting-edge artificial intelligence solutions.
              From strategy to implementation, we deliver excellence at every step.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/services"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <RocketLaunchIcon className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-red-600 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-red-500 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full mb-4">
              <span className="text-red-500 font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                What We Offer
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 font-semibold transition-colors group"
            >
              <span>View All Services</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full mb-4">
              <span className="text-red-500 font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Powered by Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative">
                  <motion.div
                    className="text-red-500 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Carousel */}
      <section className="py-20 overflow-hidden">
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
                Technologies We Master
              </span>
            </h2>
            <p className="text-gray-400">Industry-leading tools and frameworks</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-red-600/50 transition-all duration-300"
                >
                  <span className="text-gray-300 font-semibold whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-700/20"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join hundreds of companies already leveraging AI to drive growth and innovation. Let's discuss
            how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg rounded-xl font-bold transition-all duration-300 shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 hover:scale-105"
          >
            <span>Start Your Journey</span>
            <RocketLaunchIcon />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home