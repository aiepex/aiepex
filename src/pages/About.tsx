import { motion } from 'motion/react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import PublicIcon from '@mui/icons-material/Public'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import HandshakeIcon from '@mui/icons-material/Handshake'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import VerifiedIcon from '@mui/icons-material/Verified'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GroupsIcon from '@mui/icons-material/Groups'
import StarIcon from '@mui/icons-material/Star'
import type { JSX } from 'react'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TeamMember {
  name: string
  role: string
  bio: string
  icon: JSX.Element
}

interface Value {
  icon: JSX.Element
  title: string
  description: string
}

interface Achievement {
  icon: JSX.Element
  title: string
  value: string
}

function About() {
  const timeline: TimelineItem[] = [
    { year: '2010', title: 'Founded', description: 'Started with a vision to democratize AI' },
    { year: '2015', title: 'Expansion', description: 'Opened offices in 5 countries' },
    { year: '2020', title: 'Innovation', description: 'Launched proprietary AI platform' },
    { year: '2024', title: 'Leadership', description: 'Industry leader with 500+ clients' },
  ]

  const team: TeamMember[] = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: '15+ years in AI research',
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Former Google AI Lead',
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
    },
    {
      name: 'Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning',
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Expert in Cloud Architecture',
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
    },
  ]

  const values: Value[] = [
    {
      icon: <TrackChangesIcon sx={{ fontSize: 48 }} />,
      title: 'Excellence',
      description: 'We pursue perfection in everything we create',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48 }} />,
      title: 'Integrity',
      description: 'Transparency and honesty guide our actions',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 48 }} />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries of what\'s possible',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
      title: 'Growth',
      description: 'Committed to continuous learning and improvement',
    },
  ]

  const achievements: Achievement[] = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Industry Awards',
      value: '25+',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: 'Certifications',
      value: '50+',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Team Members',
      value: '200+',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Client Satisfaction',
      value: '98%',
    },
  ]

  const stats = [
    { value: '500+', label: 'Clients Worldwide' },
    { value: '50+', label: 'Countries' },
    { value: '15', label: 'Years Experience' },
    { value: '1000+', label: 'Projects Delivered' },
  ]

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full mb-4">
              <span className="text-red-500 font-semibold text-sm">About Aiepex</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Pioneering the Future of AI
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make artificial intelligence accessible, ethical, and
              transformative for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded in 2010, Aiepex has grown from a small startup to a global leader
                in AI innovation. Our journey has been driven by a simple belief: technology
                should empower, not intimidate.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, we serve over 500 clients across 50 countries, from innovative
                startups to Fortune 500 companies. Our team of world-class researchers,
                engineers, and strategists work together to push the boundaries of what's
                possible with AI.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {stats.slice(0, 3).map((stat, index) => (
                  <motion.div
                    key={index}
                    className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-red-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-square bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl overflow-hidden border border-red-600/30 shadow-2xl shadow-red-900/20 flex items-center justify-center">
                <RocketLaunchIcon sx={{ fontSize: 200 }} className="text-red-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Our Journey
            </span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-600 to-red-800 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center justify-center md:justify-start mb-3">
                        <CalendarTodayIcon className="text-red-500 mr-2" />
                        <div className="text-3xl font-bold text-red-500">{item.year}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-950 shadow-lg shadow-red-900/50 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="text-red-500 mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Recognized excellence in AI innovation and service delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-red-500 mb-3 flex justify-center">{achievement.icon}</div>
                <div className="text-3xl font-bold text-red-500 mb-2">{achievement.value}</div>
                <div className="text-sm text-gray-400">{achievement.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900/50">
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
                Meet Our Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {member.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-red-400 mb-2 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10 hover:border-red-600/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-red-500 mb-6 flex items-center">
                <TrackChangesIcon sx={{ fontSize: 60 }} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To democratize artificial intelligence and make cutting-edge technology
                accessible to businesses of all sizes, empowering them to innovate, grow,
                and succeed in the digital age.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10 hover:border-red-600/50 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-red-500 mb-6 flex items-center">
                <PublicIcon sx={{ fontSize: 60 }} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To be the global leader in ethical AI innovation, creating a future where
                technology amplifies human potential, drives sustainable growth, and
                creates positive impact across industries and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About