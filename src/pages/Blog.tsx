import { motion } from 'motion/react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import CloudIcon from '@mui/icons-material/Cloud'
import ChatIcon from '@mui/icons-material/Chat'
import SecurityIcon from '@mui/icons-material/Security'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import EmailIcon from '@mui/icons-material/Email'
import type { JSX } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  icon: JSX.Element
  category: string
}

interface FeaturedPost {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  icon: JSX.Element
  category: string
}

function Blog() {
  const featuredPost: FeaturedPost = {
    title: 'The Future of AI in Enterprise: Trends for 2025',
    excerpt: 'Explore the latest trends and predictions shaping the future of artificial intelligence in enterprise applications.',
    author: 'Sarah Chen',
    date: 'December 20, 2024',
    readTime: '8 min read',
    icon: <RocketLaunchIcon sx={{ fontSize: 100 }} />,
    category: 'AI Trends',
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning: A Comprehensive Guide',
      excerpt: 'Learn the fundamentals of machine learning and how to implement your first ML model.',
      author: 'Michael Rodriguez',
      date: 'December 18, 2024',
      readTime: '12 min read',
      icon: <SmartToyIcon sx={{ fontSize: 70 }} />,
      category: 'Tutorial',
    },
    {
      id: 2,
      title: 'How AI is Transforming Healthcare Industry',
      excerpt: 'Discover how artificial intelligence is revolutionizing patient care and medical diagnostics.',
      author: 'Emily Watson',
      date: 'December 15, 2024',
      readTime: '6 min read',
      icon: <LocalHospitalIcon sx={{ fontSize: 70 }} />,
      category: 'Healthcare',
    },
    {
      id: 3,
      title: 'Best Practices for Cloud Migration in 2024',
      excerpt: 'Essential strategies and tips for successfully migrating your infrastructure to the cloud.',
      author: 'David Kim',
      date: 'December 12, 2024',
      readTime: '10 min read',
      icon: <CloudIcon sx={{ fontSize: 70 }} />,
      category: 'Cloud',
    },
    {
      id: 4,
      title: 'Natural Language Processing: Real-World Applications',
      excerpt: 'Explore practical applications of NLP in business and everyday technology.',
      author: 'Sarah Chen',
      date: 'December 10, 2024',
      readTime: '7 min read',
      icon: <ChatIcon sx={{ fontSize: 70 }} />,
      category: 'NLP',
    },
    {
      id: 5,
      title: 'Data Security in AI: Protecting Your Models',
      excerpt: 'Learn essential security practices to protect your AI models and data from threats.',
      author: 'Michael Rodriguez',
      date: 'December 8, 2024',
      readTime: '9 min read',
      icon: <SecurityIcon sx={{ fontSize: 70 }} />,
      category: 'Security',
    },
    {
      id: 6,
      title: 'Building Scalable AI Systems: Architecture Patterns',
      excerpt: 'Discover proven architecture patterns for building robust and scalable AI systems.',
      author: 'David Kim',
      date: 'December 5, 2024',
      readTime: '11 min read',
      icon: <ArchitectureIcon sx={{ fontSize: 70 }} />,
      category: 'Architecture',
    },
  ]

  const categories = [
    'All Posts',
    'AI Trends',
    'Tutorial',
    'Healthcare',
    'Cloud',
    'NLP',
    'Security',
    'Architecture',
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
            <span className="text-red-500 font-semibold text-sm">Our Blog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Insights & Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tutorials, and insights in AI and technology
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center">
                <motion.div
                  className="text-red-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {featuredPost.icon}
                </motion.div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full text-red-500 text-sm font-semibold mb-4 w-fit">
                  <span>⭐ Featured Post</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-red-500 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <PersonIcon fontSize="small" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <CalendarTodayIcon fontSize="small" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <AccessTimeIcon fontSize="small" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 font-semibold transition-colors group w-fit">
                  <span>Read Full Article</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-6 py-3 bg-gray-900 border border-gray-800 text-gray-400 hover:border-red-600/50 hover:text-white rounded-lg font-semibold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative aspect-video bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center">
                  <motion.div
                    className="text-red-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {post.icon}
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-red-500 text-xs font-semibold mb-3">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-800">
                    <div className="flex items-center space-x-1">
                      <PersonIcon fontSize="small" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <AccessTimeIcon fontSize="small" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gray-900 border-2 border-gray-800 hover:border-red-600 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <EmailIcon className="text-red-500 mx-auto mb-4" sx={{ fontSize: 60 }} />
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Subscribe to Our Newsletter
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get the latest AI insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
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
                Popular Topics
              </span>
            </h2>
            <p className="text-xl text-gray-400">Explore our most read content</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Machine Learning', 'Cloud Computing', 'Data Science', 'Cybersecurity'].map((topic, index) => (
              <motion.div
                key={topic}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 text-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-white font-semibold">{topic}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog