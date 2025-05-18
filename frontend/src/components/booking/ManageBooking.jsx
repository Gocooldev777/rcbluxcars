import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function ManageBooking() {
    return (
        <div className="min-h-[calc(100vh-72px)] mt-[72px] bg-[#0a0c0f] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Main Content */}
                <div className="bg-[#1a1f25] rounded-xl w-full overflow-hidden border border-white/10">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-white/10">
                        <h1 className="text-2xl font-bold text-white">Manage your booking</h1>
                        <Link
                            to="/"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </Link>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        <p className="text-gray-400">
                            View or change your booking easily.
                        </p>

                        {/* Form */}
                        <form className="space-y-4">
                            {/* Reservation Number */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-1">
                                    Reservation number
                                    <InformationCircleIcon className="w-5 h-5 text-[#B8860B]" />
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your reservation number"
                                    className="w-full px-4 py-2 bg-[#0a0c0f] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2 bg-[#0a0c0f] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B]"
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#FFD700] text-black py-2 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors"
                            >
                                Next
                            </motion.button>
                        </form>

                        {/* Terms and Privacy */}
                        <div className="text-xs text-gray-500 text-center">
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a href="#" className="text-[#B8860B] hover:underline">Privacy Policy</a>
                            {' '}and{' '}
                            <a href="#" className="text-[#B8860B] hover:underline">Terms of Service</a>
                            {' '}apply
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 