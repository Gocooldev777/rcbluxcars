import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/outline';
import qrCode from '../../assets/contact/business-card.png';
import newLogo2 from '../../assets/New logo2 image main.png';

export default function ContactUs() {
    return (
        <div className="min-h-[calc(100vh-72px)] mt-[72px] bg-[#0a0c0f] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Main Content */}
                <div className="bg-[#1a1f25] rounded-xl w-full overflow-hidden border border-white/10">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-white/10">
                        <h1 className="text-2xl font-bold text-white">CONTACT US</h1>
                        <Link
                            to="/"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </Link>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-4">
                        <h2 className="text-gray-400 text-center">
                            اتصل بنا
                        </h2>

                        {/* Location Icon */}
                        <div className="flex justify-center">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <MapPinIcon className="w-6 h-6 text-[#B8860B]" />
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="bg-black p-3 rounded-lg max-w-[200px] mx-auto">
                            <img
                                src={qrCode}
                                alt="QR Code"
                                className="w-full aspect-square object-contain"
                            />
                        </div>

                        {/* Logo and Location */}
                        <div className="text-center space-y-3">
                            <div className="relative inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B]/30 to-[#B8860B]/10 rounded-lg blur-sm"></div>
                                <div className="relative bg-black p-2 rounded-lg border border-[#B8860B]/40">
                                    <img 
                                        src={newLogo2} 
                                        alt="RCB Luxury Car Rental" 
                                        className="h-12 w-auto object-contain mx-auto"
                                    />
                                </div>
                            </div>
                            <p className="text-white text-sm font-medium">DUBAI, UNITED ARAB EMIRATES</p>
                            <p className="text-xs text-gray-500">*T&C'S APPLY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 