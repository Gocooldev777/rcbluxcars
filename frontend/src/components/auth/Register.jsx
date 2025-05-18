import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import carImage from '../../assets/Registration/pexels-albinberlin-919073.jpg';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const countryList = [
    // Middle East Countries (First priority)
    { code: '+971', shortCode: 'AE', flag: '🇦🇪', name: 'UAE' },
    { code: '+966', shortCode: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: '+974', shortCode: 'QA', flag: '🇶🇦', name: 'Qatar' },
    { code: '+965', shortCode: 'KW', flag: '🇰🇼', name: 'Kuwait' },
    { code: '+973', shortCode: 'BH', flag: '🇧🇭', name: 'Bahrain' },
    { code: '+968', shortCode: 'OM', flag: '🇴🇲', name: 'Oman' },
    { code: '+962', shortCode: 'JO', flag: '🇯🇴', name: 'Jordan' },
    { code: '+961', shortCode: 'LB', flag: '🇱🇧', name: 'Lebanon' },
    { code: '+963', shortCode: 'SY', flag: '🇸🇾', name: 'Syria' },
    { code: '+967', shortCode: 'YE', flag: '🇾🇪', name: 'Yemen' },
    { code: '+970', shortCode: 'PS', flag: '🇵🇸', name: 'Palestine' },
    { code: '+20', shortCode: 'EG', flag: '🇪🇬', name: 'Egypt' },
    { code: '+964', shortCode: 'IQ', flag: '🇮🇶', name: 'Iraq' },
    { code: '+98', shortCode: 'IR', flag: '🇮🇷', name: 'Iran' },
    // Europe
    { code: '+44', shortCode: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+49', shortCode: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', shortCode: 'FR', flag: '🇫🇷', name: 'France' },
    { code: '+39', shortCode: 'IT', flag: '🇮🇹', name: 'Italy' },
    { code: '+34', shortCode: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: '+31', shortCode: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: '+41', shortCode: 'CH', flag: '🇨🇭', name: 'Switzerland' },
    { code: '+46', shortCode: 'SE', flag: '🇸🇪', name: 'Sweden' },
    { code: '+47', shortCode: 'NO', flag: '🇳🇴', name: 'Norway' },
    { code: '+358', shortCode: 'FI', flag: '🇫🇮', name: 'Finland' },
    // Americas
    { code: '+1', shortCode: 'US', flag: '🇺🇸', name: 'United States' },
    { code: '+1', shortCode: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: '+52', shortCode: 'MX', flag: '🇲🇽', name: 'Mexico' },
    { code: '+55', shortCode: 'BR', flag: '🇧🇷', name: 'Brazil' },
    // Asia Pacific
    { code: '+91', shortCode: 'IN', flag: '🇮🇳', name: 'India' },
    { code: '+86', shortCode: 'CN', flag: '🇨🇳', name: 'China' },
    { code: '+81', shortCode: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: '+82', shortCode: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: '+65', shortCode: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: '+61', shortCode: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: '+64', shortCode: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
    // Africa
    { code: '+27', shortCode: 'ZA', flag: '🇿🇦', name: 'South Africa' },
    { code: '+234', shortCode: 'NG', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+254', shortCode: 'KE', flag: '🇰🇪', name: 'Kenya' },
    // Others
    { code: '+7', shortCode: 'RU', flag: '🇷🇺', name: 'Russia' },
    { code: '+90', shortCode: 'TR', flag: '🇹🇷', name: 'Turkey' },
    { code: '+972', shortCode: 'IL', flag: '🇮🇱', name: 'Israel' },
];

export default function Register() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        countryCode: '+971'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Move to next step or submit form
        if (step < 3) {
            setStep(step + 1);
        } else {
            console.log('Form submitted:', formData);
        }
    };

    const getCountryFlag = (countryCode) => {
        const countryLetters = countryCode.toUpperCase();
        return String.fromCodePoint(...[...countryLetters].map(char =>
            char.charCodeAt(0) + 127397
        ));
    };

    return (
        <div className="min-h-[calc(100vh-72px)] mt-[72px] bg-[#0a0c0f]">
            <div className="flex flex-col md:flex-row min-h-[calc(100vh-72px)]">
                {/* Left Side - Image */}
                <motion.div
                    className="md:w-1/2 relative overflow-hidden h-[200px] sm:h-[250px] md:h-auto"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onTouchStart={() => setIsMobileExpanded(!isMobileExpanded)}
                >
                    <div className="md:sticky md:top-[72px] h-full md:h-[calc(100vh-72px)] overflow-hidden">
                        <motion.img
                            src={carImage}
                            alt="Luxury Car"
                            className="w-full h-full object-cover"
                            animate={{
                                scale: (isHovered || isMobileExpanded) ? 1.05 : 1,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t"
                            animate={{
                                background: (isHovered || isMobileExpanded)
                                    ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3))"
                                    : "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8"
                                initial={false}
                            >
                                <motion.h2
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
                                    animate={{
                                        y: (isHovered || isMobileExpanded) ? 0 : 20,
                                        opacity: (isHovered || isMobileExpanded) ? 1 : 0.8,
                                        color: (isHovered || isMobileExpanded) ? "#FFD700" : "#ffffff"
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    UNLOCK<br />
                                    EXCLUSIVE<br />
                                    BENEFITS
                                </motion.h2>

                                <AnimatePresence>
                                    {(isHovered || isMobileExpanded) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="space-y-1 sm:space-y-2 md:space-y-3"
                                        >
                                            <motion.p
                                                className="text-sm sm:text-base md:text-lg font-medium"
                                                initial={{ opacity: 0, x: -20, color: "#ffffff" }}
                                                animate={{ opacity: 1, x: 0, color: "#B8860B" }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                ✦ Premium Fleet Access
                                            </motion.p>
                                            <motion.p
                                                className="text-sm sm:text-base md:text-lg font-medium"
                                                initial={{ opacity: 0, x: -20, color: "#ffffff" }}
                                                animate={{ opacity: 1, x: 0, color: "#DAA520" }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                ✦ Priority Booking
                                            </motion.p>
                                            <motion.p
                                                className="text-sm sm:text-base md:text-lg font-medium"
                                                initial={{ opacity: 0, x: -20, color: "#ffffff" }}
                                                animate={{ opacity: 1, x: 0, color: "#FFD700" }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                ✦ Exclusive Member Rates
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Indicator */}
                        <motion.div
                            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center md:hidden"
                            animate={{
                                rotate: isMobileExpanded ? 180 : 0
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-3 sm:p-4 md:p-8 bg-[#0a0c0f] text-white">
                    {/* Progress Steps */}
                    <div className="flex items-center mb-4 sm:mb-6 md:mb-8 overflow-x-auto pb-2">
                        {[1, 2, 3].map((num) => (
                            <React.Fragment key={num}>
                                <div className={`flex items-center flex-shrink-0 ${num === step ? 'text-[#FFD700]' : 'text-gray-400'}`}>
                                    <div className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base
                                        ${num === step ? 'border-[#FFD700] text-[#FFD700]' : 'border-gray-300'}`}>
                                        {num}
                                    </div>
                                    <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                                        {num === 1 ? 'Personal Details' :
                                            num === 2 ? 'Company Details' :
                                                'Finalization'}
                                    </span>
                                </div>
                                {num < 3 && (
                                    <div className={`flex-1 h-0.5 mx-1 sm:mx-2 md:mx-4 ${num < step ? 'bg-[#FFD700]' : 'bg-gray-300'}`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-white">3 steps to a free RCB business account</h1>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8">Register in less than two minutes and benefit from corporate discounts</p>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        {step === 1 && (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 bg-[#1a1f25] border border-white/10 rounded-lg text-white text-sm sm:text-base focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 bg-[#1a1f25] border border-white/10 rounded-lg text-white text-sm sm:text-base focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2 bg-[#1a1f25] border border-white/10 rounded-lg text-white text-sm sm:text-base focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                                        Phone Number
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="w-[140px] sm:w-[180px] px-2 sm:px-4 py-2 bg-[#1a1f25] border border-white/10 rounded-lg text-white text-sm sm:text-base focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none cursor-pointer"
                                                style={{
                                                    backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%23FFD700%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 0.5rem center',
                                                    backgroundSize: '1.5em 1.5em'
                                                }}
                                            >
                                                {countryList.map((country) => (
                                                    <option
                                                        key={`${country.shortCode}-${country.code}`}
                                                        value={country.code}
                                                        className="flex items-center gap-2 px-3 py-2"
                                                    >
                                                        {country.flag} {country.shortCode} {country.code}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="flex-1 px-3 sm:px-4 py-2 bg-[#1a1f25] border border-white/10 rounded-lg text-white text-sm sm:text-base focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                                            required
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="flex items-center justify-between mt-6 sm:mt-8">
                            <button
                                type="button"
                                onClick={() => step === 1 ? navigate('/') : setStep(step - 1)}
                                className="text-[#FFD700] hover:underline text-sm sm:text-base"
                            >
                                {step === 1 ? 'Back to Home' : 'Back'}
                            </button>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors text-sm sm:text-base"
                            >
                                Next
                            </motion.button>
                        </div>
                    </form>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
                        <button className="text-[#FFD700] hover:underline flex items-center">
                            <QuestionMarkCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                            Why do we need this information?
                        </button>
                        <Link to="/login" className="text-[#FFD700] hover:underline">
                            Already have a RCB business account? Log in now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 