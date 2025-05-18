import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    UserGroupIcon,
    KeyIcon,
    CogIcon,
    ChevronDownIcon,
    CheckIcon
} from '@heroicons/react/24/outline';
import { ViewCar } from './ViewCar';
import carData from '../../Cloudinary/data.json';

// Import all images from ShowRoom folder
const images = import.meta.glob('../../assets/ShowRoom/*.(png|jpg|jpeg)', { eager: true });

const FilterButton = ({ label, isOpen, onClick, children }) => (
    <motion.div className="relative">
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200"
        >
            <span>{label}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-[#FFD700]/20 z-50"
            >
                {children}
            </motion.div>
        )}
    </motion.div>
);

const CarImageBackground = ({ children }) => (
    <div className="relative h-64 rounded-xl mb-6 overflow-hidden group">
        {/* Premium dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f25] via-[#232b35] to-[#1a1f25]">
            {/* Animated subtle gradient overlay */}
            <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-transparent via-black/10 to-transparent animate-gradient" />

            {/* Dynamic floor reflection */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1a1f25] via-[#232b35]/50 to-transparent transform-gpu" />

            {/* Dramatic spotlight effect */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 25%, transparent 50%)'
                }}
            />

            {/* Side accent lights */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FFD700]/5 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#FFD700]/5 to-transparent" />

            {/* Hover effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 to-transparent" />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.15) 0%, transparent 60%)'
                    }}
                />
            </div>
        </div>

        {/* Car image container with enhanced positioning */}
        <div className="relative h-full flex items-center justify-center p-4">
            {children}
        </div>
    </div>
);

export default function ShowroomCars() {
    const [selectedCar, setSelectedCar] = useState(null);
    const [activeFilters, setActiveFilters] = useState({
        sort: false,
        vehicleType: false,
        gearshift: false,
        passengers: false,
        driversAge: false
    });

    // Filter values
    const [filters, setFilters] = useState({
        sort: 'price-low', // price-low, price-high
        vehicleType: 'all', // all, SUV, Sedan, Sports
        gearshift: 'all', // all, Automatic, Manual
        passengers: 'all', // all, 2, 4, 5
        driversAge: 'all' // all, 18-21, 22-25, 26+
    });

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    // Use data from data.json to set cars
    useEffect(() => {
        const generatedCars = carData.vehicles.map((vehicle, index) => ({
            id: vehicle.id,
            name: vehicle.vehicleName,
            category: vehicle.type,
            image: vehicle.image,
            specs: {
                passengers: parseInt(vehicle.numberOfSeats),
                doors: 4, // Assuming 4 doors as default
                transmission: vehicle.transmission
            },
            price: {
                daily: 100, // Placeholder value
                total: 400  // Placeholder value
            }
        }));

        setCars(generatedCars);
        setFilteredCars(generatedCars);
    }, []);

    // Apply filters
    useEffect(() => {
        let result = [...cars];

        // Apply vehicle type filter
        if (filters.vehicleType !== 'all') {
            result = result.filter(car => car.category === filters.vehicleType);
        }

        // Apply gearshift filter
        if (filters.gearshift !== 'all') {
            result = result.filter(car => car.specs.transmission === filters.gearshift);
        }

        // Apply passengers filter
        if (filters.passengers !== 'all') {
            result = result.filter(car => car.specs.passengers === parseInt(filters.passengers));
        }

        // Apply sorting
        if (filters.sort === 'price-low') {
            result.sort((a, b) => a.price.daily - b.price.daily);
        } else if (filters.sort === 'price-high') {
            result.sort((a, b) => b.price.daily - a.price.daily);
        }

        setFilteredCars(result);
    }, [filters, cars]);

    const toggleFilter = (filter) => {
        setActiveFilters(prev => ({
            ...Object.fromEntries(Object.keys(prev).map(key => [key, false])),
            [filter]: !prev[filter]
        }));
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
        setActiveFilters(prev => ({
            ...prev,
            [filterType]: false
        }));
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <>
            <div className="min-h-screen bg-[#0a0c0f] text-white p-4 sm:p-6 md:p-8">
                {/* Filters Section */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
                    <FilterButton
                        label="Sort by"
                        isOpen={activeFilters.sort}
                        onClick={() => toggleFilter('sort')}
                    >
                        <div className="p-2">
                            <button
                                className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.sort === 'price-low' ? 'text-[#FFD700]' : ''}`}
                                onClick={() => handleFilterChange('sort', 'price-low')}
                            >
                                <span>Price (Low to High)</span>
                                {filters.sort === 'price-low' && <CheckIcon className="w-4 h-4" />}
                            </button>
                            <button
                                className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.sort === 'price-high' ? 'text-[#FFD700]' : ''}`}
                                onClick={() => handleFilterChange('sort', 'price-high')}
                            >
                                <span>Price (High to Low)</span>
                                {filters.sort === 'price-high' && <CheckIcon className="w-4 h-4" />}
                            </button>
                        </div>
                    </FilterButton>

                    <FilterButton
                        label="Vehicle type"
                        isOpen={activeFilters.vehicleType}
                        onClick={() => toggleFilter('vehicleType')}
                    >
                        <div className="p-2">
                            {['all', 'SUV', 'Sedan', 'Sports Car'].map(type => (
                                <button
                                    key={type}
                                    className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.vehicleType === type ? 'text-[#FFD700]' : ''}`}
                                    onClick={() => handleFilterChange('vehicleType', type)}
                                >
                                    <span>{type === 'all' ? 'All Types' : type}</span>
                                    {filters.vehicleType === type && <CheckIcon className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </FilterButton>

                    <FilterButton
                        label="Gearshift"
                        isOpen={activeFilters.gearshift}
                        onClick={() => toggleFilter('gearshift')}
                    >
                        <div className="p-2">
                            {['all', 'Automatic', 'Manual'].map(type => (
                                <button
                                    key={type}
                                    className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.gearshift === type ? 'text-[#FFD700]' : ''}`}
                                    onClick={() => handleFilterChange('gearshift', type)}
                                >
                                    <span>{type === 'all' ? 'All Types' : type}</span>
                                    {filters.gearshift === type && <CheckIcon className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </FilterButton>

                    <FilterButton
                        label="Passengers"
                        isOpen={activeFilters.passengers}
                        onClick={() => toggleFilter('passengers')}
                    >
                        <div className="p-2">
                            <button
                                className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.passengers === 'all' ? 'text-[#FFD700]' : ''}`}
                                onClick={() => handleFilterChange('passengers', 'all')}
                            >
                                <span>All</span>
                                {filters.passengers === 'all' && <CheckIcon className="w-4 h-4" />}
                            </button>
                            {[2, 4, 5].map(num => (
                                <button
                                    key={num}
                                    className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.passengers === num.toString() ? 'text-[#FFD700]' : ''}`}
                                    onClick={() => handleFilterChange('passengers', num.toString())}
                                >
                                    <span>{num} Passengers</span>
                                    {filters.passengers === num.toString() && <CheckIcon className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </FilterButton>

                    <FilterButton
                        label="Driver's age"
                        isOpen={activeFilters.driversAge}
                        onClick={() => toggleFilter('driversAge')}
                    >
                        <div className="p-2">
                            {['all', '18-21', '22-25', '26+'].map(age => (
                                <button
                                    key={age}
                                    className={`w-full text-left px-4 py-2 hover:bg-white/5 rounded flex items-center justify-between ${filters.driversAge === age ? 'text-[#FFD700]' : ''}`}
                                    onClick={() => handleFilterChange('driversAge', age)}
                                >
                                    <span>{age === 'all' ? 'All Ages' : `${age} years`}</span>
                                    {filters.driversAge === age && <CheckIcon className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </FilterButton>
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {filteredCars.map((car, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedCar(car)}
                            className="bg-gradient-to-br from-[#1a1f25] to-[#0a0c0f] rounded-xl p-3 sm:p-4 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD700]/10 min-w-[280px] w-full mx-auto"
                        >
                            <div className="mb-3 sm:mb-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-1">{car.name}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">or similar | {car.category}</p>
                            </div>

                            <div className="flex gap-2 sm:gap-4 mb-3 sm:mb-4">
                                <div className="flex items-center space-x-1.5 sm:space-x-2 bg-black/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/5">
                                    <UserGroupIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD700]" />
                                    <span className="text-xs sm:text-sm">{car.specs.passengers}</span>
                                </div>
                                <div className="flex items-center space-x-1.5 sm:space-x-2 bg-black/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/5">
                                    <KeyIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD700]" />
                                    <span className="text-xs sm:text-sm">{car.specs.doors}</span>
                                </div>
                                <div className="flex items-center space-x-1.5 sm:space-x-2 bg-black/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/5">
                                    <CogIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD700]" />
                                    <span className="text-xs sm:text-sm">{car.specs.transmission}</span>
                                </div>
                            </div>

                            <div className="relative h-40 sm:h-48 rounded-xl mb-3 sm:mb-4 overflow-hidden">
                                <motion.img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-contain sm:object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                                <motion.a
                                    href="https://wa.me/971501059047"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-1.5 sm:py-2 rounded-lg font-semibold text-center border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)] text-sm sm:text-base cursor-pointer"
                                >
                                    BOOK NOW
                                </motion.a>
                                <div className="w-full flex flex-col gap-1.5 sm:gap-2">
                                    <div className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-1.5 sm:py-2 rounded-lg font-semibold text-center flex items-center justify-center gap-1.5 sm:gap-2 border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="text-xs sm:text-sm">+971501059047</span>
                                    </div>
                                    <div className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-1.5 sm:py-2 rounded-lg font-semibold text-center flex items-center justify-center gap-1.5 sm:gap-2 border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="text-xs sm:text-sm">+971585809850</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedCar && (
                <ViewCar
                    car={selectedCar}
                    onClose={() => setSelectedCar(null)}
                />
            )}
        </>
    );
}

// Add this to your CSS
const styles = `
@keyframes gradient {
    0% { transform: translateX(-50%) }
    50% { transform: translateX(50%) }
    100% { transform: translateX(-50%) }
}
.animate-gradient {
    animation: gradient 8s linear infinite;
}
`; 