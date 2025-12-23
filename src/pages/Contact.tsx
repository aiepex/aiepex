import { useState, type JSX } from 'react'
import { motion } from 'motion/react'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import PublicIcon from '@mui/icons-material/Public'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MapIcon from '@mui/icons-material/Map'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

interface ContactInfo {
  icon: JSX.Element
  title: string
  content: string
  link: string | null
}

interface Office {
  city: string
  country: string
  address: string
  phone: string
  icon: string
}

interface FAQ {
  question: string
  answer: string
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'info@aiepex.com',
      link: 'mailto:info@aiepex.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      content: '+91 6372395289',
      link: 'tel:+916372395289',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Office',
      content: 'Balasore, Odisha, India',
      link: 'https://maps.app.goo.gl/MQt5NAzcURwjvcm28',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM - 6PM IST',
      link: null,
    },
  ]

  const offices: Office[] = [
    {
      city: 'Balasore',
      country: 'India',
      address: 'Balasore, Odisha 756001',
      phone: '+91 98765 43210',
      icon: '🇮🇳',
    },
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Market Street, CA 94103',
      phone: '+1 (123) 456-7890',
      icon: '🇺🇸',
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Tech Hub, London EC1A 1BB',
      phone: '+44 20 1234 5678',
      icon: '🇬🇧',
    },
  ]

  const faqs: FAQ[] = [
    {
      question: 'What services do you offer?',
      answer: 'We offer AI consulting, machine learning, data analytics, cloud solutions, custom development, and 24/7 support & maintenance.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most projects range from 2-6 months from discovery to deployment.',
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes! We work with businesses of all sizes, from startups to Fortune 500 companies.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve healthcare, finance, retail, manufacturing, education, and technology sectors among others.',
    },
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
            <span className="text-red-500 font-semibold text-sm">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Our team is ready to help you transform your ideas into reality
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <SendIcon className="mr-3 text-red-500" />
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-consulting">AI Consulting</option>
                      <option value="machine-learning">Machine Learning</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="support">Support & Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/50 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <SendIcon />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-600/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-red-500 mb-4">{info.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PublicIcon className="text-red-500 mx-auto mb-4" sx={{ fontSize: 60 }} />
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Our Global Offices
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visit us at any of our offices worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 text-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-6xl mb-4">{office.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{office.city}</h3>
                <p className="text-gray-400 mb-4">{office.country}</p>
                <p className="text-gray-400 text-sm mb-2">{office.address}</p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="text-red-500 hover:text-red-400 transition-colors font-semibold"
                >
                  {office.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MapIcon className="text-red-500 mx-auto mb-4" sx={{ fontSize: 60 }} />
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Find Us Here
              </span>
            </h2>
            <p className="text-xl text-gray-400">Visit our office in Balasore, Odisha</p>
          </motion.div>

          <motion.div
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:border-red-600/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59886.72374546628!2d86.89659492167966!3d21.494065299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c4b0c5ccaaaab%3A0xb0d0a51b2c9b7e0e!2sBalasore%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balasore, Odisha Location"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HelpOutlineIcon className="text-red-500 mx-auto mb-4" sx={{ fontSize: 60 }} />
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-bold text-white mb-2 flex items-start">
                  <span className="text-red-500 mr-2">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 pl-6">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact