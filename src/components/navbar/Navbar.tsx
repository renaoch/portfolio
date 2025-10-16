"use client"
import React, { useState } from 'react'
import { TextRevealCardName } from './NavbarNameHoverEffect'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-white  hover:bg-gray-800 transition-colors duration-200 group">
              <span className="text-black font-bold text-lg font-mono group-hover:scale-110 transition-transform duration-200">
                &lt;/&gt;
              </span>
            </div>
          
          </div>
           
          {/* Name/Brand Section - Keep as is */}
          <div className="ml-20 flex-shrink-0">
            <TextRevealCardName />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <a 
                href="#contact" 
                className="bg-gray-900 text-white px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">Available</span>
            </div>
            <button 
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              <svg 
                className={`h-6 w-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <a 
              href="#home" 
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-3 text-base font-semibold bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 mt-4 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
