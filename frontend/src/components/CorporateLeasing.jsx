import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newLogo2 from '../assets/New logo2 image main.png';

const CorporateLeasing = ({ isOpen, onClose }) => {
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
                        className="relative w-[90%] max-w-4xl mx-auto z-[9999]"
                    >
                        <div className="bg-[#1A1A1A] rounded-xl shadow-2xl max-h-[85vh] overflow-y-auto border border-[#B8860B]/30">
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
                                <h1 className="text-3xl font-bold mb-6 text-[#B8860B]">Corporate Leasing</h1>
                                <h2 className="text-2xl mb-8 text-right text-[#B8860B]">تﺎﻛﺮﺸﻟا ﺮﻴﺟﺄﺗ</h2>

                                <div className="space-y-8 text-[#B8860B]/90">
                                    <section>
                                        <p className="mb-6">
                                            A corporate car lease is essentially a long-term agreement of 12 months or more, offering exclusive use of a
                                            vehicle for a pre-defined mileage at a fixed monthly rate.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Key Benefits</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Flexibility and total control</li>
                                            <li>No hassle of maintenance and fleet administration</li>
                                            <li>Single monthly payment to cover all related costs</li>
                                            <li>VAT can be reclaimed</li>
                                            <li>'Off balance sheet' financing: Allows capital to be freed up from non-income earning assets</li>
                                            <li>Improved balance sheet ratios (ROE)</li>
                                            <li>Fleet costs move from variable to fixed: Ease of budgeting and forecasting</li>
                                            <li>Matches finance expenses to asset economic life and usage</li>
                                            <li>No equity or initial deposit required</li>
                                            <li>Cost effectiveness and control of operating costs</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <p className="mb-6">
                                            Any business which needs mobility for their commercial operations, but do not want to deal with the hassle of
                                            owning and maintaining assets. Leasing provides the freedom for businesses to focus on their core value
                                            proposition, and operate with more convenience.
                                        </p>
                                    </section>

                                    <section className="bg-[#B8860B]/10 p-6 rounded-lg">
                                        <p className="text-center font-semibold">
                                            Please click on "Enquire Now" and one of our Key Account Managers will call you for a consultation
                                            to offer you a tailor-made solution suited to your needs.
                                        </p>
                                        <div className="mt-4 text-center">
                                            <button
                                                onClick={() => window.location.href = 'mailto:sales@rcbluxury.com'}
                                                className="bg-[#B8860B] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#B8860B]/90 transition-colors"
                                            >
                                                Enquire Now
                                            </button>
                                        </div>
                                    </section>

                                    <div className="text-center mt-8">
                                        <div className="flex justify-center">
                                            <div className="relative inline-block">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B]/30 to-[#B8860B]/10 rounded-xl blur-md"></div>
                                                <div className="relative bg-black/50 p-3 rounded-xl border border-[#B8860B]/40">
                                                    <img 
                                                        src={newLogo2} 
                                                        alt="RCB Luxury Car Rental" 
                                                        className="h-16 w-auto object-contain mx-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#B8860B] mt-3">DUBAI, UNITED ARAB EMIRATES</p>
                                        <p className="text-sm italic text-[#B8860B]/70 mt-2">*T&C's Apply</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CorporateLeasing; 