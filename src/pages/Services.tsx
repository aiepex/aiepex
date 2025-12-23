import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PsychologyIcon from '@mui/icons-material/Psychology'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import CloudIcon from '@mui/icons-material/Cloud'
import CodeIcon from '@mui/icons-material/Code'
import BuildIcon from '@mui/icons-material/Build'
import SearchIcon from '@mui/icons-material/Search'
import MapIcon from '@mui/icons-material/Map'
import ConstructionIcon from '@mui/icons-material/Construction'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FactoryIcon from '@mui/icons-material/Factory'
import SchoolIcon from '@mui/icons-material/School'
import ComputerIcon from '@mui/icons-material/Computer'
import type { JSX } from 'react'

interface Service {
  icon: JSX.Element
  title: string
  description: string
  features: string[]
}

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: JSX.Element
}

interface Industry {
  name: string
  icon: JSX.Element
}

function Services() {
  const services: Service[] = [
    {
      icon: <SmartToyIcon sx={{ fontSize: 60 }} />,
      title: 'AI Consulting',
      description: 'Strategic guidance for implementing AI solutions that drive real business value',
      features: [
        'AI Strategy & Roadmap',
        'Technology Assessment',
        'Implementation Planning',
        'ROI Analysis',
      ],
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 60 }} />,
      title: 'Machine Learning',
      description: 'Custom ML models designed and trained for your specific business needs',
      features: [
        'Predictive Analytics',
        'Computer Vision',
        'Natural Language Processing',
        'Deep Learning Solutions',
      ],
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 60 }} />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that inform strategic decisions',
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Real-time Analytics',
        'Dashboard Development',
      ],
    },
    {
      icon: <CloudIcon sx={{ fontSize: 60 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure optimized for AI and ML workloads',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'DevOps Integration',
        'Auto-scaling Solutions',
      ],
    },
    {
      icon: <CodeIcon sx={{ fontSize: 60 }} />,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique requirements',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'System Integration',
      ],
    },
    {
      icon: <BuildIcon sx={{ fontSize: 60 }} />,
      title: 'Support & Maintenance',
      description: '24/7 technical support to keep your AI systems running smoothly',
      features: [
        'Technical Support',
        'System Monitoring',
        'Performance Optimization',
        'Regular Updates',
      ],
    },
  ]

  const process: ProcessStep[] = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and identify opportunities for AI implementation',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive roadmap aligned with your business objectives',
      icon: <MapIcon sx={{ fontSize: 40 }} />,
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build and train custom AI models using cutting-edge technologies',
      icon: <ConstructionIcon sx={{ fontSize: 40 }} />,
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Seamlessly integrate solutions into your existing infrastructure',
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous monitoring and improvement for peak performance',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    },
  ]

  const industries: Industry[] = [
    { name: 'Healthcare', icon: <LocalHospitalIcon sx={{ fontSize: 50 }} /> },
    { name: 'Finance', icon: <AccountBalanceIcon sx={{ fontSize: 50 }} /> },
    { name: 'Retail', icon: <ShoppingCartIcon sx={{ fontSize: 50 }} /> },
    { name: 'Manufacturing', icon: <FactoryIcon sx={{ fontSize: 50 }} /> },
    { name: 'Education', icon: <SchoolIcon sx={{ fontSize: 50 }} /> },
    { name: 'Technology', icon: <ComputerIcon sx={{ fontSize: 50 }} /> },
  ]

  const benefits = [
    { value: '40%', label: 'Faster Deployment' },
    { value: '60%', label: 'Cost Reduction' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
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
            <span className="text-red-500 font-semibold text-sm">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              AI Solutions That Drive Results
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Comprehensive artificial intelligence services designed to transform your business
            and accelerate growth in the digital age
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-2xl shadow-red-900/50 hover:scale-105"
          >
            <span>Get Started</span>
            <RocketLaunchIcon />
          </Link>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2">
                  {benefit.value}
                </div>
                <div className="text-gray-400 font-medium">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
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
                Our Service Offerings
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions for every business challenge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative">
                  <motion.div
                    className="text-red-500 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center mt-6 text-red-500 hover:text-red-400 font-semibold transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-red-700 to-red-800"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="relative z-10 w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-red-900/50"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 h-full w-full"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-red-500 font-bold text-2xl mb-3">{item.step}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
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
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Delivering specialized AI solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-red-500 mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-white font-semibold group-hover:text-red-500 transition-colors">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gray-900/50">
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
            Let's discuss how our AI solutions can help you achieve your goals and drive innovation in
            your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg rounded-xl font-bold transition-all duration-300 shadow-2xl shadow-red-900/50 hover:scale-105"
            >
              <span>Get Started Today</span>
              <RocketLaunchIcon />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center space-x-2 px-10 py-5 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg rounded-xl font-bold transition-all duration-300"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Services