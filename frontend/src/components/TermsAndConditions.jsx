import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsAndConditions = ({ isOpen, onClose }) => {
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
                                <h1 className="text-3xl font-bold mb-6 text-[#B8860B]">TERMS AND CONDITIONS</h1>
                                <h2 className="text-2xl mb-8 text-right text-[#B8860B]">مﺎﻜﺣﻷاو طوﺮﺸﻟا</h2>

                                <div className="space-y-8 text-[#B8860B]/90">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Additional Driver</h3>
                                        <p className="mb-4">
                                            This is subject to RCB Luxury 02nd driver qualification and will be charged at AED 69.00 + 5%VAT for each additional driver per rental.
                                            Any booking confirmed for self-drive or chauffeur drive cannot be cancelled once payment is completed.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Age</h3>
                                        <p className="mb-4">
                                            For cash rentals the minimum age is 25 years, for credit card rentals the minimum age is 21 years and for groups F and above
                                            the minimum age is 25 years. There is no maximum age limit.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Driver's License</h3>
                                        <p className="mb-4">
                                            All drivers must have held a full driving licence for a minimum of one year. UAE residents require a current UAE licence.
                                            Regulations for visitors are subject to change and customers should check at the counter upon arrival.
                                            All non-UAE resident wishing to rent are required to hold an international driving licence along with their national driving licence.
                                            Rule of the road: drive on the right hand side.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">One Way</h3>
                                        <p className="mb-4">
                                            One way drop off between Emirates (except between Dubai/ Sharjah/ Ajman*) are charged for AED 300.00 for all car groups
                                            (*: no one way charges are applicable between Dubai- Sharjah, Sharjah- Dubai, Dubai- Ajman, Ajman- Dubai, Sharjah-Ajman or Ajman- Sharjah.)
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Dubai to Ruwais: AED 1000.00 for all car groups.</li>
                                            <li>One way to Oman- for all car groups:
                                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                                    <li>AED 1500.00 for Muscat, Oman</li>
                                                    <li>AED 3000.00 for Salalah, Oman</li>
                                                </ul>
                                            </li>
                                            <li>Renters may not drive their vehicle out of the UAE (except to Oman).</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Surcharges</h3>
                                        <ul className="space-y-4">
                                            <li>
                                                <strong className="text-[#B8860B]">Airport surcharge:</strong> A surcharge of AED 25.00 + 5% VAT is applicable for all rentals taking place at all airport locations.
                                                This surcharge is also applicable to rentals which have taken place at a non-airport location but are returning to an airport location.
                                            </li>
                                            <li>
                                                <strong className="text-[#B8860B]">Accident service charge:</strong> A fee of AED 50.00 +5% VAT per accident will be charged over and above the damage repair costs or applicable excess,
                                                as an accident handling administration fee.
                                            </li>
                                            <li>
                                                <strong className="text-[#B8860B]">Fuel:</strong> Not included in the rates. Vehicles must be filled with special grade petrol. A refuelling surcharge of 20% will
                                                be made for any vehicle returned without a full tank of petrol.
                                            </li>
                                            <li>
                                                <strong className="text-[#B8860B]">Traffic fine surcharge:</strong> A surcharge of AED 50.00 +5% VAT is applicable over and above the traffic fine,
                                                as a handling administration fee. Salik (toll gate system) is charged at AED 7.00 per crossing during Peak hours and AED 5.00 per crossing during non-peak hours.
                                            </li>
                                            <li>
                                                <strong className="text-[#B8860B]">Tyre replacement service charge:</strong> A surcharge of AED 100.00 will be charged over and above the tyre repair costs or applicable excess,
                                                as a handling administration fee.
                                            </li>
                                            <li>
                                                <strong className="text-[#B8860B]">Tinted film removal:</strong> A fee of AED 100.00 will be charged if the rental vehicle is returned with tinted film on the windows.
                                            </li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Tax</h3>
                                        <p className="mb-4">
                                            Effective January 2023, RCB Luxury Car Rental reserves the right to add value-added tax (VAT) on all services and rates,
                                            as confirmed and implemented by the UAE Government. This is applicable on all bookings for pick-up from 01/12/2023.
                                        </p>
                                    </section>

                                    <p className="text-sm italic text-[#B8860B]/70 mt-8">*T&C's Apply</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TermsAndConditions; 