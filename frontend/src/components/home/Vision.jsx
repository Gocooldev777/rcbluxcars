import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Vision({ isOpen, onClose, isModal = false }) {
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

    const titleText = "VISION".split("");

    const content = (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <div className="flex justify-center space-x-2 mb-12">
                    {titleText.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.1 }}
                            className="text-5xl font-bold font-serif text-[#B8860B] tracking-wider"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="text-lg font-medium text-[#B8860B]/90 leading-relaxed"
                    >
                        HERE AT RCB LUXURY WE VALUE EACH AND EVERY CUSTOMER AND MAKE SURE THEY EXPERIENCE THE
                        LUXURY ON WHEELS. THE QUALITY OF SERVICE WE OFFER WOULD MAKE YOU A PART OF THE RCB LUXURY BY ITSELF.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-48 h-1 bg-[#B8860B] mx-auto my-12"
                    ></motion.div>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.3 }}
                        className="text-lg font-medium text-[#B8860B]/90 leading-relaxed"
                    >
                        WE HAVE A COMMITTED TEAM WHO IS MAINLY DEDICATED TOWARDS THE CUSTOMER SATISFACTION AND MEETING THE
                        REQUIREMENTS OF THE CUSTOMERS. WE DO UNDERSTAND YOUR NEEDS AND WE CATER TO EVERY REQUEST.
                        WE ARE FULLY COMMITTED TO FULFILL ALL THE DREAMS AND MEET UP TO YOUR EXPECTATIONS.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl font-bold font-serif text-[#B8860B] mt-8 italic"
                    >
                        "THINK BEYOND POSSIBILITIES" IS OUR VISION AND WE MAKE IT HAPPEN.
                    </motion.p>
                </div>
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

    return <section className="py-16 bg-black text-[#B8860B]">{content}</section>;
} 