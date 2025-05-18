import { motion } from 'framer-motion';

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 1
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const borderVariants = {
    initial: {
        opacity: 0.7,
        scale: 1
    },
    animate: {
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.02, 1],
        boxShadow: [
            "0 0 10px #FFD700, inset 0 0 5px #FFD700",
            "0 0 20px #FFD700, inset 0 0 10px #FFD700",
            "0 0 10px #FFD700, inset 0 0 5px #FFD700"
        ]
    }
};

const imageVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const CarCard = ({ car }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm group w-full min-w-[280px] max-w-[340px] mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            layout
        >
            {/* Animated border effect */}
            <motion.div
                className="absolute inset-0 rounded-xl"
                initial="initial"
                animate="animate"
                variants={borderVariants}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                style={{
                    border: '2px solid rgb(255, 218, 11)',
                    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))'
                }}
            />

            {/* Glowing overlay */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.15) 0%, transparent 70%)'
                }}
            />

            {/* Additional corner glows on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                    background: `
                        radial-gradient(circle at top left, rgba(255, 215, 0, 0.3) 0%, transparent 20%),
                        radial-gradient(circle at top right, rgba(255, 215, 0, 0.3) 0%, transparent 20%),
                        radial-gradient(circle at bottom left, rgba(255, 215, 0, 0.3) 0%, transparent 20%),
                        radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.3) 0%, transparent 20%)
                    `
                }}
            />

            {/* Car Image Container */}
            <motion.div className="relative w-full h-52 sm:h-56 overflow-hidden bg-black/40">
                <motion.img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-contain sm:object-cover"
                    variants={imageVariants}
                    loading="lazy"
                    style={{
                        filter: 'brightness(1.1) contrast(1.1)'
                    }}
                />
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)'
                    }}
                />
            </motion.div>

            {/* Car Details */}
            <motion.div
                className="p-3 relative z-10 overflow-hidden"
                variants={contentVariants}
            >
                {/* Car Title and Type */}
                <div className="space-y-0.5 mb-1.5 overflow-hidden">
                    <motion.h3
                        className="text-lg sm:text-xl font-bold text-[#FFD700] group-hover:text-[#FFED4A] transition-colors duration-300 truncate max-w-full"
                        variants={contentVariants}
                    >
                        {car.name}
                    </motion.h3>
                    <p className="text-sm text-gray-400 truncate max-w-full">{car.type || 'or similar'}</p>
                </div>

                {/* Car Specs */}
                <div className="flex items-center justify-start gap-2 mb-2">
                    <div className="flex items-center gap-0.5 min-w-0 bg-[#1a1a1a]/50 px-1.5 py-0.5 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 flex-shrink-0 text-[#FFD700]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="text-xs text-[#FFD700] truncate">{car.seats || '5'}</span>
                    </div>
                    <div className="flex items-center gap-0.5 min-w-0 bg-[#1a1a1a]/50 px-1.5 py-0.5 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 flex-shrink-0 text-[#FFD700]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-[#FFD700] truncate">{car.transmission || 'automatic'}</span>
                    </div>
                </div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col items-center gap-1.5"
                    variants={contentVariants}
                >
                    <motion.a
                        href="https://wa.me/971501059047"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-1 rounded-lg font-semibold text-center border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-pointer"
                    >
                        BOOK NOW
                    </motion.a>
                    <div className="w-full flex flex-col gap-1">
                        <a href="tel:+971501059047" className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-1 rounded-lg font-semibold text-center flex items-center justify-center gap-1.5 border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-xs truncate">+971501059047</span>
                        </a>
                        <a href="tel:+971585809850" className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-1 rounded-lg font-semibold text-center flex items-center justify-center gap-1.5 border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-xs truncate">+971585809850</span>
                        </a>
                    </div>
                </motion.div>

                {/* Features Tags */}
                <motion.div
                    className="mt-1.5 flex gap-0.5 flex-wrap overflow-hidden"
                    variants={contentVariants}
                >
                    {car.features?.map((feature, index) => (
                        <motion.span
                            key={index}
                            className="text-[9px] sm:text-[10px] bg-[#FFD700]/10 text-[#FFD700] px-1.5 py-0.5 rounded-full group-hover:bg-[#FFD700]/20 group-hover:text-[#FFED4A] transition-all duration-300 truncate"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {feature}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CarCard; 