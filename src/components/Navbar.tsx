import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/70 backdrop-blur-xl shadow-lg'
          : 'bg-gray-950/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={handleNavClick}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-md bg-red-600/50 group-hover:bg-red-600/70 transition-all duration-300"></div>
              {/* Triangle */}
              <div className="relative w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[32px] border-b-red-600 group-hover:border-b-red-500 transition-colors duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Aiepex
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/70 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-gray-300 hover:text-red-500 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open menu</span>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45' : '-translate-y-2'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45' : 'translate-y-2'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-gray-950/90 backdrop-blur-xl rounded-b-2xl -mx-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/50 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar