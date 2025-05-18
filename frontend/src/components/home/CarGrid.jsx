import React from 'react';
import { motion } from 'framer-motion';
import {
    UserGroupIcon,
    BriefcaseIcon,
    CogIcon,
    CheckIcon
} from '@heroicons/react/24/outline';

export function CarGrid() {
    const cars = [
        {
            id: 1747402476555,
            vehicleName: "STANDARD (VOLKSWAGEN JETTA)",
            subtitle: "or similar | Saloon",
            image: "https://res.cloudinary.com/dzonwo3nn/image/upload/v1747402439/pek6nsdpb4bwskilx7q2.jpg",
            numberOfSeats: "5",
            luggage: "4",
            transmission: "Automatic",
            price: "338.27",
            total: "1,353.01"
        },
        {
            id: 1747402731357,
            vehicleName: "FULL-SIZE (TOYOTA CAMRY)",
            subtitle: "or similar | Saloon",
            image: "https://res.cloudinary.com/dzonwo3nn/image/upload/v1747402692/j3rbuobycsoeh7jnc7z1.jpg",
            numberOfSeats: "5",
            luggage: "4",
            transmission: "Automatic",
            price: "351.97",
            total: "1,407.93"
        },
        {
            id: 1747508752134,
            vehicleName: "MERCEDES - BENZ VITO TOURER 2023",
            subtitle: "or similar | Premium",
            image: "https://res.cloudinary.com/dzonwo3nn/image/upload/v1747558868/kvyi2c2qrsheokndaclg.png",
            numberOfSeats: "7",
            luggage: "5",
            transmission: "Automatic",
            price: "425.99",
            total: "1,703.96"
        },
        {
            id: 1747402876921,
            vehicleName: "TESLA MODEL Y DUAL MOTOR 2024",
            subtitle: "or similar | Electric",
            image: "https://res.cloudinary.com/dzonwo3nn/image/upload/v1747402777/ujoubxqv08mxfmtu0ptd.jpg",
            numberOfSeats: "5",
            luggage: "3",
            transmission: "Automatic",
            price: "389.99",
            total: "1,559.96"
        }
    ];

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.2 }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    return (
        <section className="py-12 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-10 text-[#B8860B]"
                >
                    Our Premium Fleet
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cars.map((car) => {
                        const isMercedes = car.vehicleName.includes("MERCEDES - BENZ VITO TOURER");
                        return (
                            <motion.div
                                key={car.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 relative ${isMercedes ? 'border border-[#B8860B]/40 hover:border-[#B8860B]' : 'border border-gray-700 hover:border-[#B8860B]/80'}`}
                                style={{
                                    background: isMercedes
                                        ? 'linear-gradient(135deg, #13151a 0%, #1c1f26 100%)'
                                        : 'linear-gradient(120deg, #1a1a1a 0%, #2a2a2a 100%)'
                                }}
                            >
                                {/* Gradient overlays for Mercedes card */}
                                {isMercedes && (
                                    <>
                                        {/* Bottom right gold gradient */}
                                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#B8860B]/15 via-transparent to-transparent z-0 opacity-80"></div>
                                        
                                        {/* Top left gold gradient */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B8860B]/10 via-transparent to-transparent z-0 opacity-70"></div>
                                        
                                        {/* Overall subtle gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/5 via-transparent to-[#FFD700]/5 z-0 opacity-90 mix-blend-overlay"></div>
                                    </>
                                )}
                                
                                {/* Header section */}
                                <div className="p-5 pb-3 relative z-10">
                                    <h3 className={`text-xl font-bold ${isMercedes ? 'text-[#B8860B]' : 'text-white'}`}>
                                        {car.vehicleName}
                                    </h3>
                                    <p className="text-gray-400">{car.subtitle}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <div className={`flex items-center ${isMercedes ? 'bg-black/60' : 'bg-black/50'} px-3 py-1 rounded-full`}>
                                            <UserGroupIcon className={`w-5 h-5 mr-2 ${isMercedes ? 'text-[#B8860B]' : 'text-white'}`} />
                                            <span className="text-white">{car.numberOfSeats}</span>
                                        </div>
                                        
                                        <div className={`flex items-center ${isMercedes ? 'bg-black/60' : 'bg-black/50'} px-3 py-1 rounded-full`}>
                                            <BriefcaseIcon className={`w-5 h-5 mr-2 ${isMercedes ? 'text-[#B8860B]' : 'text-white'}`} />
                                            <span className="text-white">{car.luggage}</span>
                                        </div>
                                        
                                        <div className={`flex items-center ${isMercedes ? 'bg-black/60' : 'bg-black/50'} px-3 py-1 rounded-full`}>
                                            <CogIcon className={`w-5 h-5 mr-2 ${isMercedes ? 'text-[#B8860B]' : 'text-white'}`} />
                                            <span className="text-white">{car.transmission}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Car image */}
                                <motion.div 
                                    className="relative h-[200px] overflow-hidden z-10"
                                    whileHover="hover"
                                >
                                    {isMercedes ? (
                                        <div className="relative h-full flex justify-center items-center">
                                            <motion.img
                                                variants={imageVariants}
                                                src={car.image}
                                                alt={car.vehicleName}
                                                className="w-[85%] h-full object-cover scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#13151a]/60 via-transparent to-[#13151a]/60"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#B8860B]/20"></div>
                                        </div>
                                    ) : (
                                        <motion.img
                                            variants={imageVariants}
                                            src={car.image}
                                            alt={car.vehicleName}
                                            className="w-full h-full object-cover scale-105"
                                        />
                                    )}
                                </motion.div>
                                
                                {/* Footer with pricing */}
                                <div className="p-5 relative z-10">
                                    <div className="flex items-center text-green-500 mb-3">
                                        <CheckIcon className="w-5 h-5 mr-2" />
                                        <span>Unlimited miles</span>
                                    </div>
                                    
                                    <div className="flex items-baseline">
                                        <span className={`text-3xl font-bold ${isMercedes ? 'text-[#B8860B]' : 'text-white'}`}>
                                            {car.price}
                                        </span>
                                        <span className="text-gray-400 ml-1 text-xl">د.إ</span>
                                        <span className="text-gray-400 ml-2">/day</span>
                                        <span className="text-gray-500 ml-3 text-sm">{car.total}د.إ total</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 