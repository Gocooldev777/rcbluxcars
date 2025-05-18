import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import contractImage from '../../assets/ContractImage.jpg';
import PrivacyPolicy from '../PrivacyPolicy';
import TermsAndConditions from '../TermsAndConditions';
import ChildSeat from '../ChildSeat';
import CorporateLeasing from '../CorporateLeasing';
import AboutUs from '../home/AboutUs';
import { Vision } from '../home/Vision';

const Footer = ({ setIsPremiumOpen }) => {
    const location = useLocation();
    const isVehicleAgreementRoute = location.pathname === '/vehicle-agreement';
    const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isChildSeatOpen, setIsChildSeatOpen] = useState(false);
    const [isCorporateLeasingOpen, setIsCorporateLeasingOpen] = useState(false);
    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
    const [isVisionOpen, setIsVisionOpen] = useState(false);

    return (
        <footer className="bg-black text-[#B8860B]">
            {/* Agreement Section */}
            {!isVehicleAgreementRoute && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-40 mb-32">
                    <Link to="/vehicle-agreement" className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="relative rounded-[24px] overflow-hidden shadow-2xl group bg-black mx-auto"
                            style={{
                                maxWidth: '1200px',
                                width: '100%'
                            }}
                        >
                            <div
                                className="relative w-full"
                                style={{
                                    paddingTop: '42%' // This creates a 21:9 aspect ratio
                                }}
                            >
                                <img
                                    src={contractImage}
                                    alt="Vehicle Contract"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    style={{
                                        objectPosition: '50% 35%'
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3))',
                                        backdropFilter: 'blur(1px)'
                                    }}
                                />

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <motion.h2
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 md:mb-6 text-center"
                                        style={{
                                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        Vehicle Contract
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 text-center"
                                        style={{
                                            textShadow: '0 1px 2px rgba(0,0,0,0.15)'
                                        }}
                                    >
                                        Click to view agreement details
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            )}

            {/* Features Section */}
            <div className="container mx-auto px-4 py-16 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                    {/* Fast Service Icon - Updated to a more realistic clock */}
                    <div className="flex flex-col items-center" style={{ marginTop: '100px' }}>
                        <div className="w-20 h-20 rounded-full bg-[#B8860B]/10 flex items-center justify-center mb-4">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="9" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                                {/* Additional tick marks for more realistic clock */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">URGENT<br />SERVICE</h3>
                        <p className="text-[#B8860B]/80">Quick response time</p>
                    </div>

                    {/* Certified Quality Icon - Updated to show certificate and checkmark */}
                    <div className="flex flex-col items-center" style={{ marginTop: '100px' }}>
                        <div className="w-20 h-20 rounded-full bg-[#B8860B]/10 flex items-center justify-center mb-4">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                {/* Certificate base */}
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                {/* Certificate ribbon */}
                                <path d="M12 4v16" strokeDasharray="2 2" />
                                {/* Checkmark */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                {/* Horizontal lines for text */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 16h8" strokeDasharray="1 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">CERTIFIED QUALITY<br />VEHICLES</h3>
                        <p className="text-[#B8860B]/80">Premium certified fleet</p>
                    </div>

                    {/* Dubai Experience Icon */}
                    <div className="flex flex-col items-center" style={{ marginTop: '100px' }}>
                        <div className="w-20 h-20 rounded-full bg-[#B8860B]/10 flex items-center justify-center mb-4">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">DUBAI<br />EXPERIENCE</h3>
                        <p className="text-[#B8860B]/80">Local expertise</p>
                    </div>

                    {/* Luxury Service Icon - Updated to show luxury/premium symbol */}
                    <div className="flex flex-col items-center" style={{ marginTop: '100px' }}>
                        <div className="w-20 h-20 rounded-full bg-[#B8860B]/10 flex items-center justify-center mb-4">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                {/* Diamond shape */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 8-8 8-8-8z" />
                                {/* Inner details */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l4 4-4 4-4-4z" />
                                {/* Sparkles */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v1M12 18v1M5 10l-1 1M19 10l1 1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">EXCLUSIVE<br />LUXURY</h3>
                        <p className="text-[#B8860B]/80">Premium service</p>
                    </div>

                    {/* Fair Pricing Icon */}
                    <div className="flex flex-col items-center" style={{ marginTop: '100px' }}>
                        <div className="w-20 h-20 rounded-full bg-[#B8860B]/10 flex items-center justify-center mb-4">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">FAIR<br />PRICING</h3>
                        <p className="text-[#B8860B]/80">Best market rates</p>
                    </div>
                </div>
            </div>

            {/* Company Info */}
            <div className="text-center mb-16">
                {/* <h2 className="text-2xl font-bold mb-2">A UNIT OF RB GROUP OF COMPANY</h2> */}
                {/* <p className="text-xl">DUBAI, UNITED ARAB EMIRATES</p> */}
            </div>

            {/* Footer Links */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => setIsAboutUsOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsPremiumOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    RCB Premium Program
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsVisionOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    Vision
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsCorporateLeasingOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    Corporate Leasing
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Help & Support</h3>
                        <ul className="space-y-2">


                            <li>
                                <button
                                    onClick={() => setIsPrivacyPolicyOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsTermsOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    Terms & Conditions
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsChildSeatOpen(true)}
                                    className="hover:text-[#B8860B]/80 text-left w-full"
                                >
                                    Child Seat
                                </button>
                            </li>

                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start space-x-6 mb-4">
                            {/* Location Icon */}
                            <a href="https://maps.app.goo.gl/nGuv9DcufKjj8dqV7?g_st=iw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8860B] hover:text-[#B8860B]/80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C7.802 0 4.5 3.301 4.5 7.5C4.5 12.875 12 24 12 24s7.5-11.125 7.5-16.5C19.5 3.301 16.199 0 12 0zm0 10.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                </svg>
                            </a>
                            {/* X (Twitter) Icon */}
                            <a href="https://x.com/rcbluxury?s=11&t=iggmQIxn0YjSpDtC6SYHaQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8860B] hover:text-[#B8860B]/80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Instagram Icon */}
                            <a href="https://www.instagram.com/rcbluxury?igsh=MXNrYWxnbm0zYmh5YQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8860B] hover:text-[#B8860B]/80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                                </svg>
                            </a>
                            {/* WhatsApp Icons */}
                            <a href="https://wa.me/971501059047"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8860B] hover:text-[#B8860B]/80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/971585809850"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8860B] hover:text-[#B8860B]/80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                        {/* Office Address */}
                        <div className="text-[#B8860B]/80 text-sm">
                            <h4 className="font-bold text-[#B8860B] mb-2">Office Location</h4>
                            <p>#33, 02nd floor, Burjuman Exit 3, Bank Street</p>
                            <p>Khalid Bin Waleed Road</p>
                            <p>Dubai, United Arab Emirates.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="border-t border-[#B8860B]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                        <Link to="/contact" className="hover:text-[#B8860B]/80">Contact</Link>
                        <button
                            onClick={() => setIsPrivacyPolicyOpen(true)}
                            className="hover:text-[#B8860B]/80"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => setIsTermsOpen(true)}
                            className="hover:text-[#B8860B]/80"
                        >
                            Terms & Conditions
                        </button>
                        <button
                            onClick={() => setIsChildSeatOpen(true)}
                            className="hover:text-[#B8860B]/80"
                        >
                            Child Seat
                        </button>
                    </div>
                    <p className="text-[#B8860B]/80">© 2025 RCB Luxury Car Rental. All rights reserved.</p>
                </div>
            </div>

            {/* Privacy Policy Modal */}
            <PrivacyPolicy
                isOpen={isPrivacyPolicyOpen}
                onClose={() => setIsPrivacyPolicyOpen(false)}
            />

            {/* Terms and Conditions Modal */}
            <TermsAndConditions
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />

            {/* Child Seat Modal */}
            <ChildSeat
                isOpen={isChildSeatOpen}
                onClose={() => setIsChildSeatOpen(false)}
            />

            {/* Corporate Leasing Modal */}
            <CorporateLeasing
                isOpen={isCorporateLeasingOpen}
                onClose={() => setIsCorporateLeasingOpen(false)}
            />

            {/* About Us Modal */}
            <AboutUs
                isOpen={isAboutUsOpen}
                onClose={() => setIsAboutUsOpen(false)}
                isModal={true}
            />

            {/* Vision Modal */}
            <Vision
                isOpen={isVisionOpen}
                onClose={() => setIsVisionOpen(false)}
                isModal={true}
            />
        </footer>
    );
};

export { Footer }; 