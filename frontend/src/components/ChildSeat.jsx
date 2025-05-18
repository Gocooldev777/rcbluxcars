import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChildSeat = ({ isOpen, onClose }) => {
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
                                <h1 className="text-3xl font-bold mb-6 text-[#B8860B]">Child Seat</h1>
                                <h2 className="text-2xl mb-8 text-right text-[#B8860B]">ﻞﻔﻄﻟا ﺪﻌﻘﻣ</h2>

                                <div className="space-y-6 text-[#B8860B]/90">
                                    <section>
                                        <p className="mb-6">
                                            The simple, unavoidable fact is that child seats save lives. Around the world, child seats have been proven time
                                            and again to be effective in protecting the life and well-being of young children. For our younger customers,
                                            simply sitting in the back seat with the seatbelt on isn't an option, as seatbelts are designed for adults, rather
                                            than child safety. In fact, using a seatbelt can lead to serious injuries for children in the event of an accident.
                                        </p>
                                        <p className="mb-6">
                                            This is why it is so important to ensure that your child is securely seated using a properly-designed and safety-tested child seat.
                                        </p>
                                    </section>

                                    <section>
                                        <p className="mb-6">
                                            It's also important to know that if you are renting a vehicle from RCB Luxury Car Rental and are carrying
                                            young children during your rental period, you must have a child seat or seats fitted. Under UAE traffic law, the
                                            fitting and use of child seats is mandatory. Failure to fix safety seats for children is a traffic violation
                                            resulting in a fine and black points to the Renter.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">How to Book a Child Seat</h3>
                                        <p className="mb-6">
                                            To book a child seat, please contact us:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Call us: <a href="tel:+97150105904" className="text-[#B8860B] hover:underline">+971 50 105 9047</a></li>
                                            <li>Email us: <a href="mailto:sales@rcbluxury.com" className="text-[#B8860B] hover:underline">sales@rcbluxury.com</a> (quote your reservation reference number)</li>
                                        </ul>
                                        <p className="mt-4 mb-6">
                                            It is mandatory to provide us the age and approximate weight of your child to ensure that we arrange the most appropriate size.
                                            Bookings will be confirmed subject to availability.
                                        </p>
                                    </section>

                                    <section>
                                        <p className="mb-6">
                                            We offer child seats for all vehicle groups and from all locations with a minimum of 24 hours advance notice. It
                                            is the Renter's responsibility to properly install and fasten a child safety or child booster seat.
                                        </p>
                                        <p className="mb-6 font-semibold">
                                            RCB Luxury Car Rental encourages customers to book child seats in advance to avoid any issues at the time of pick-up.
                                        </p>
                                    </section>

                                    <div className="text-center mt-8">
                                        <p className="text-[#B8860B] font-semibold">A UNIT OF RB GROUP OF COMPANY</p>
                                        <p className="text-[#B8860B]">DUBAI, UNITED ARAB EMIRATES</p>
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

export default ChildSeat; 