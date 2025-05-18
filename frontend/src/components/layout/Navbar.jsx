import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import newLogo2 from '../../assets/New logo2 image main.png';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Top Banner */}
            <div className="w-full bg-[#B8860B] text-black text-center py-0.5">
                <span className="text-sm font-medium">Think Beyond Possibilities</span>
            </div>

            {/* Main Navbar */}
            <nav className="bg-black/95 backdrop-blur-sm border-b border-[#B8860B]/20">
                <div className="flex flex-wrap items-center justify-between px-4 py-1 md:px-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={newLogo2}
                            alt="RCB Luxury Car Rental"
                            className="h-16 md:h-20 object-contain"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#B8860B] p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Navigation Items */}
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 gap-4`}>
                        {/* Manage Bookings Link */}
                        <Link
                            to="/manage-booking"
                            className="text-[#B8860B] hover:text-[#B8860B]/80 text-sm md:text-base transition-colors duration-200"
                        >
                            Manage bookings
                        </Link>

                        {/* Contact Us Link */}
                        <Link
                            to="/contact"
                            className="text-[#B8860B] hover:text-[#B8860B]/80 text-sm md:text-base transition-colors duration-200"
                        >
                            Contact Us
                        </Link>

                        {/* Language Selector */}
                        <div className="flex items-center gap-2 text-[#B8860B] text-sm md:text-base">
                            <button
                                className="cursor-pointer hover:text-[#B8860B]/80"
                                onClick={() => setIsLanguageSelectorOpen(true)}
                            >
                                EN
                            </button>
                            <span className="text-[#B8860B]/50">|</span>
                            <button
                                className="cursor-pointer hover:text-[#B8860B]/80"
                                onClick={() => setIsLanguageSelectorOpen(true)}
                            >
                                العربية
                            </button>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex gap-2 md:gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/login')}
                                className="bg-[#B8860B] text-black px-4 py-1.5 rounded text-sm md:text-base font-medium hover:bg-[#B8860B]/90 min-w-[80px] transition-colors duration-200"
                            >
                                Login
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/register')}
                                className="bg-[#B8860B] text-black px-4 py-1.5 rounded text-sm md:text-base font-medium hover:bg-[#B8860B]/90 min-w-[80px] transition-colors duration-200"
                            >
                                Register
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Language Selector Modal */}
            <LanguageSelector
                isOpen={isLanguageSelectorOpen}
                onClose={() => setIsLanguageSelectorOpen(false)}
            />
        </div>
    );
};

export default Navbar; 