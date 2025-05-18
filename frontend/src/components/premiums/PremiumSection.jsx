import React from 'react';

export const PremiumSection = () => {
    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="w-full max-w-6xl mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#B8860B] mb-4 sm:mb-8">
                    NEW MEMBERSHIP PACKAGES
                </h3>

                <div className="text-lg sm:text-xl text-center text-[#B8860B]/90 mb-6 sm:mb-12">
                    <p className="mb-1">Worrying about exceeding kilometer?</p>
                    <p>Try our new packages that convenient for you!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {/* Silver Package */}
                    <div className="bg-gradient-to-b from-[#1a1a1a] to-black rounded-xl p-4 sm:p-6 border border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(184,134,11,0.3)]">
                        <div className="text-center mb-4 sm:mb-6">
                            <h4 className="text-xl sm:text-2xl font-bold text-[#C0C0C0] mb-3 sm:mb-4">SILVER</h4>
                            <div className="text-[#B8860B]">
                                <p className="text-lg sm:text-xl mb-1 sm:mb-2">AED 389/-</p>
                                <p className="text-xs sm:text-sm">+ 5,000 KMS FOR 6 MONTHS</p>
                            </div>
                            <div className="mt-3 sm:mt-4 text-[#B8860B]">
                                <p className="text-lg sm:text-xl mb-1 sm:mb-2">AED 689/-</p>
                                <p className="text-xs sm:text-sm">+10,000 KMS FOR 12 MONTHS</p>
                            </div>
                        </div>
                    </div>

                    {/* Platinum Package */}
                    <div className="bg-gradient-to-b from-[#1a1a1a] to-black rounded-xl p-4 sm:p-6 border-2 border-[#B8860B] transform scale-100 md:scale-105 shadow-xl relative hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,134,11,0.4)] mt-8 md:mt-0">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#B8860B] text-black px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                            MOST POPULAR
                        </div>
                        <div className="text-center mb-4 sm:mb-6">
                            <h4 className="text-xl sm:text-2xl font-bold text-[#E5E4E2] mb-3 sm:mb-4">PLATINUM</h4>
                            <div className="text-[#B8860B]">
                                <p className="text-lg sm:text-xl mb-1 sm:mb-2">AED 1,299/-</p>
                                <p className="text-xs sm:text-sm">UNLIMITED KMS FOR 6 MONTHS</p>
                            </div>
                            <div className="mt-3 sm:mt-4 text-[#B8860B]">
                                <p className="text-lg sm:text-xl mb-1 sm:mb-2">AED 2,149/-</p>
                                <p className="text-xs sm:text-sm">UNLIMITED KMS FOR 12 MONTHS</p>
                            </div>
                            <div className="mt-3 sm:mt-4 text-[#B8860B]/80 text-xs sm:text-sm">
                                <p>FREE EXTENSION FOR 1 DAY</p>
                                <p>FREE VEHICLE UPGRADE</p>
                            </div>
                        </div>
                    </div>

                    {/* Gold Package */}
                    <div className="bg-gradient-to-b from-[#1a1a1a] to-black rounded-xl p-4 sm:p-6 border border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(184,134,11,0.3)]">
                        <div className="text-center mb-4 sm:mb-6">
                            <h4 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-3 sm:mb-4">GOLD</h4>
                            <div className="text-[#B8860B]">
                                <p className="text-lg sm:text-xl mb-1 sm:mb-2">AED 599/-</p>
                                <p className="text-xs sm:text-sm">+ 10,000 KMS FOR 6 MONTHS</p>
                            </div>
                            <div className="mt-3 sm:mt-4 text-[#B8860B]">
                                <p className="text-lg sm:text-xl mb-1 sm:mb-2">AED 999/-</p>
                                <p className="text-xs sm:text-sm">+ 15,000 KMS FOR 12 MONTHS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center text-[#B8860B]/80">
                    <p className="text-sm sm:text-base">Contact us for more information:</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-2">
                        <a href="tel:+971585809850" className="text-sm sm:text-base hover:text-[#B8860B] transition-colors duration-300">+971 58 580 9850</a>
                        <a href="mailto:sales@rcbluxury.com" className="text-sm sm:text-base hover:text-[#B8860B] transition-colors duration-300">sales@rcbluxury.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}; 