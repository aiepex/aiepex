import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import type { JSX } from 'react'

interface FooterLink {
  label: string
  path: string
}

interface SocialLink {
  name: string
  icon: JSX.Element
  url: string
}

function Footer() {
  const currentYear = new Date().getFullYear()

  const companyLinks: FooterLink[] = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about' },
    { label: 'Careers', path: '/contact' },
    { label: 'Press Kit', path: '/contact' },
  ]

  const servicesLinks: FooterLink[] = [
    { label: 'AI Consulting', path: '/services' },
    { label: 'Machine Learning', path: '/services' },
    { label: 'Data Analytics', path: '/services' },
    { label: 'Cloud Solutions', path: '/services' },
  ]

  const resourcesLinks: FooterLink[] = [
    { label: 'Blog', path: '/blog' },
    { label: 'Case Studies', path: '/portfolio' },
    { label: 'Documentation', path: '/contact' },
    { label: 'Help Center', path: '/contact' },
  ]

  const legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', path: '/contact' },
    { label: 'Terms of Service', path: '/contact' },
    { label: 'Cookie Policy', path: '/contact' },
    { label: 'GDPR', path: '/contact' },
  ]

  const socialLinks: SocialLink[] = [
    { 
      name: 'Twitter', 
      icon: <TwitterIcon />, 
      url: 'https://twitter.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: <LinkedInIcon />, 
      url: 'https://linkedin.com' 
    },
    { 
      name: 'GitHub', 
      icon: <GitHubIcon />, 
      url: 'https://github.com' 
    },
    { 
      name: 'YouTube', 
      icon: <YouTubeIcon />, 
      url: 'https://youtube.com' 
    },
    { 
      name: 'Instagram', 
      icon: <InstagramIcon />, 
      url: 'https://instagram.com' 
    },
  ]

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center space-x-3 group mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  {/* Glow effect */}
                  <div className="absolute inset-0 blur-md bg-red-600/50 group-hover:bg-red-600/70 transition-all duration-300"></div>
                  {/* Triangle */}
                  <div className="relative w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[32px] border-b-red-600 group-hover:border-b-red-500 transition-colors duration-300"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                  Aiepex
                </span>
              </Link>

              <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                Pioneering the future of artificial intelligence with innovative solutions 
                that transform businesses and empower growth.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-r-lg transition-all duration-300 shadow-lg shadow-red-900/30">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-900/30"
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Company Links */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-5 relative inline-block">
                    Company
                    <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></span>
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-red-500 transition-all duration-300 inline-flex items-center group text-sm"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services Links */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-5 relative inline-block">
                    Services
                    <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></span>
                  </h3>
                  <ul className="space-y-3">
                    {servicesLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-red-500 transition-all duration-300 inline-flex items-center group text-sm"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-5 relative inline-block">
                    Resources
                    <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></span>
                  </h3>
                  <ul className="space-y-3">
                    {resourcesLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-red-500 transition-all duration-300 inline-flex items-center group text-sm"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-5 relative inline-block">
                    Legal
                    <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></span>
                  </h3>
                  <ul className="space-y-3">
                    {legalLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-red-500 transition-all duration-300 inline-flex items-center group text-sm"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-white font-bold text-lg mb-5">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-red-500 flex-shrink-0">
                      <EmailIcon fontSize="small" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <a href="mailto:info@aiepex.com" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                        info@aiepex.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-red-500 flex-shrink-0">
                      <PhoneIcon fontSize="small" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <a href="tel:+11234567890" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                        +91 6372395289
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-red-500 flex-shrink-0">
                      <LocationOnIcon fontSize="small" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <p className="text-gray-300 text-sm">
                        Balasore, Odisha, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>&copy; {currentYear} Aiepex.</span>
                <span className="hidden md:inline">|</span>
                <span>All rights reserved.</span>
              </div>

              {/* Bottom Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sitemap
                </Link>
                <span className="text-gray-700">|</span>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Accessibility
                </Link>
                <span className="text-gray-700">|</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Made with</span>
                  <span className="text-red-500 animate-pulse">❤️</span>
                  <span className="text-gray-400">in SF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl shadow-red-900/50 flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer