import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UserPlusIcon,
    CalendarDaysIcon,
    GlobeAltIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';
import newLogo2 from '../../assets/New logo2 image main.png';

const CarIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l2-6h10l2 6m0 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m2-6h10M5 10h14"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 14h.01M17 14h.01"
        />
    </svg>
);

export function AboutUs({ isOpen, onClose, isModal = false }) {
    const features = [
        {
            icon: <CarIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'WIDE RANGE',
            subtitle: 'OF VEHICLES',
            description: 'Premium fleet selection'
        },
        {
            icon: <SparklesIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'ATTRACTIVE RATES',
            subtitle: 'FOR SHORT-TERM RENTALS',
            description: 'Flexible duration options'
        },
        {
            icon: <GlobeAltIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'SUSTAINABLE',
            subtitle: 'MOBILITY',
            description: 'Eco-conscious choices'
        },
        {
            icon: <UserPlusIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'FREE',
            subtitle: 'ADDITIONAL DRIVER',
            description: 'Multiple driver options'
        },
        {
            icon: <CalendarDaysIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'MONTH-ON-MONTH',
            subtitle: 'COMMITMENT',
            description: 'Long-term solutions'
        }
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const titleText = "ABOUT US".split("");

    const content = (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <div className="flex justify-center space-x-2 mb-8">
                    {titleText.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.1 }}
                            className="text-4xl font-bold font-serif text-[#B8860B] tracking-wider"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="text-lg font-medium text-[#B8860B]/90 leading-relaxed"
                    >
                        RCB LUXURY CAR RENTAL - REAL WORLD BUSINESS, REAL LIFE BUSINESS, WHERE WE EXECUTE
                        DEALS, MEETING CUSTOMER DEMANDS, MAKING SURE OPERATIONS RUN SMOOTHLY. IF YOU GUYS ARE INTERESTED IN
                        RENTING A CAR BE IT A SELF DRIVE CAR OR A CHAUFFEUR DRIVEN HIRE.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-48 h-1 bg-[#B8860B] mx-auto my-8"
                    ></motion.div>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.3 }}
                        className="text-lg font-medium text-[#B8860B]/90 leading-relaxed"
                    >
                        RENT A CAR IN DUBAI AT THE BEST RATES FOR ALL TYPES OF CARS.
                        COMPARE DAILY, WEEKLY AND MONTHLY CAR RENTAL OFFERS FROM LOCAL CAR RENTALS.
                    </motion.p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-16 h-16 flex items-center justify-center text-4xl mb-4 
                                      bg-[#B8860B] rounded-full text-[#392E26] 
                                      transform transition-transform duration-300"
                        >
                            {feature.icon}
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-base font-bold text-[#B8860B] uppercase"
                        >
                            {feature.title}
                        </motion.h3>
                        <motion.h4
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.1 }}
                            className="text-base font-bold text-[#B8860B] uppercase mb-2"
                        >
                            {feature.subtitle}
                        </motion.h4>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                            className="text-sm text-[#B8860B]/70"
                        >
                            {feature.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mt-16 space-y-1"
            >
                <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B]/30 to-[#B8860B]/10 rounded-full blur-md"></div>
                        <div className="relative bg-black p-3 rounded-full border border-[#B8860B]/40">
                            <img 
                                src={newLogo2} 
                                alt="RCB Luxury Car Rental" 
                                className="h-24 w-auto object-contain"
                            />
                        </div>
                    </div>
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-base font-semibold text-[#B8860B] font-serif mt-3"
                    >
                        DUBAI, UNITED ARAB EMIRATES
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );

    if (isModal) {
        if (!isOpen) return null;

        return (
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.75, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.75, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-[95%] max-w-7xl mx-auto z-[9999] bg-black rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto border border-[#B8860B]/30"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-[#B8860B] hover:text-[#B8860B]/80 transition-colors z-[10000]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-8">
                                {content}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        );
    }

    return <section className="py-8 bg-black">{content}</section>;
}

export default AboutUs; 