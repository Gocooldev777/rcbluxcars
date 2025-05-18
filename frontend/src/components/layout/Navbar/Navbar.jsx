import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newLogo from '../../../assets/NewLogo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Sticky top banner */}
      <div className="sticky top-0 z-50 w-full bg-[#B8860B] text-black text-center py-1">
        <span className="text-sm font-medium">Think Beyond Possibilities</span>
      </div>

      {/* Main navbar */}
      <div className="sticky top-[28px] z-40 w-full bg-black text-white">
        <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-6">
          {/* Left side - Logo */}
          <div className="flex items-center h-full">
            <button
              className="lg:hidden px-2 text-[#B8860B] mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="flex items-center">
              <img
                src={newLogo}
                alt="RCB Luxury"
                className="h-12 md:h-14"
                style={{
                  maxWidth: '180px',
                  objectFit: 'contain'
                }}
              />
            </Link>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center h-full space-x-6">
            <Link to="/manage-bookings" className="text-[#B8860B] hover:text-[#FFD700] transition-colors">
              Manage bookings
            </Link>
            <Link to="/contact" className="text-[#B8860B] hover:text-[#FFD700] transition-colors">
              Contact Us
            </Link>
            <div className="text-[#B8860B] hover:text-[#FFD700] transition-colors">
              <span>EN</span>
              <span className="mx-2">|</span>
              <span className="font-arabic">العربية</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-[#B8860B] hover:text-[#FFD700] transition-colors">
                Login
              </Link>
              <Link to="/register" className="px-6 py-2 bg-[#B8860B] text-black rounded-lg hover:bg-[#FFD700] transition-colors font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } lg:hidden w-full bg-black border-t border-[#B8860B]/20`}
        >
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link to="/manage-bookings" className="text-[#B8860B] hover:text-[#FFD700] transition-colors">
              Manage bookings
            </Link>
            <Link to="/contact" className="text-[#B8860B] hover:text-[#FFD700] transition-colors">
              Contact Us
            </Link>
            <div className="text-[#B8860B]">
              <span>EN</span>
              <span className="mx-2">|</span>
              <span className="font-arabic">العربية</span>
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              <Link to="/login" className="text-[#B8860B] hover:text-[#FFD700] transition-colors text-center">
                Login
              </Link>
              <Link to="/register" className="px-6 py-2 bg-[#B8860B] text-black rounded-lg hover:bg-[#FFD700] transition-colors font-medium text-center">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar