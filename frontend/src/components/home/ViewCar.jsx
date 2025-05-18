import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    XMarkIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ShoppingBagIcon,
    CogIcon,
    MapPinIcon,
    ClockIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';

const BookingOption = ({ title, description, isSelected, isPopular, onClick }) => (
    <motion.div
        onClick={onClick}
        className={`p-6 rounded-xl border ${isSelected
            ? 'border-[#FFD700] bg-white/5'
            : 'border-white/10 hover:border-white/20'
            } cursor-pointer transition-all duration-200`}
    >
        <div className="flex items-start justify-between">
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    {isPopular && (
                        <span className="px-2 py-1 text-xs bg-[#FF4B2B] text-white rounded-full">
                            Popular
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 ${isSelected
                    ? 'border-[#FFD700] bg-[#FFD700]'
                    : 'border-white/30'
                    } flex items-center justify-center`}>
                    {isSelected && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-black rounded-full"
                        />
                    )}
                </div>
            </div>
        </div>
    </motion.div>
);

export function ViewCar({ car, onClose }) {
    const [selectedBookingOption, setSelectedBookingOption] = useState('best-price');

    const handleOverlayClick = (e) => {
        // Only close if clicking the overlay background itself
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0c0f] rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            >
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-white/10">
                    <div>
                        <h2 className="text-2xl font-bold text-[#FFD700]">{car.name}</h2>
                        <p className="text-gray-400">or similar | {car.category}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Left Column - Car Image and Specs */}
                    <div>
                        <div className="bg-gradient-to-br from-[#1a1f25] to-[#0a0c0f] rounded-xl p-8 mb-6">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <UserGroupIcon className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-sm font-medium">Passengers</span>
                                </div>
                                <p className="text-2xl font-bold">{car.specs.passengers} Seats</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <BriefcaseIcon className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-sm font-medium">Luggage</span>
                                </div>
                                <p className="text-2xl font-bold">1 Suitcase</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShoppingBagIcon className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-sm font-medium">Bags</span>
                                </div>
                                <p className="text-2xl font-bold">2 Bags</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <CogIcon className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-sm font-medium">Transmission</span>
                                </div>
                                <p className="text-2xl font-bold">{car.specs.transmission}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Options */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Booking option</h3>
                            <div className="space-y-4">
                                <BookingOption
                                    title="Best price"
                                    description="Pay now, cancel and rebook for a fee"
                                    isSelected={selectedBookingOption === 'best-price'}
                                    onClick={() => setSelectedBookingOption('best-price')}
                                />
                                <BookingOption
                                    title="Stay flexible"
                                    description="Pay at pick-up, free cancellation and rebooking any time before pick-up time"
                                    isSelected={selectedBookingOption === 'flexible'}
                                    isPopular={true}
                                    onClick={() => setSelectedBookingOption('flexible')}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Mileage</h3>
                            <BookingOption
                                title="Unlimited miles"
                                description="All miles are included in the price"
                                isSelected={true}
                            />
                        </div>

                        <div className="bg-white/5 rounded-xl p-6">
                            <div className="flex flex-col gap-2">
                                <motion.a
                                    href="https://wa.me/971501059047"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-3 rounded-lg font-semibold text-center border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-pointer"
                                >
                                    BOOK NOW
                                </motion.a>
                                <div className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-2 rounded-lg font-semibold text-center flex items-center justify-center gap-2 border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+971501059047</span>
                                </div>
                                <div className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-2 rounded-lg font-semibold text-center flex items-center justify-center gap-2 border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+971585809850</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
} 