import React, { useState, useEffect } from 'react';
import {
    UserGroupIcon,
    KeyIcon,
    CogIcon,
    ChevronDownIcon,
    CheckIcon
} from '@heroicons/react/24/outline';
import { ViewCar } from './ViewCar';
import carData from '../../Cloudinary/data.json';

const FilterButton = ({ label, isOpen, onClick, children }) => (
    <div className="relative">
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200"
        >
            <span>{label}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
            <div
                className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-[#FFD700]/20 z-50"
            >
                {children}
            </div>
        )}
    </div>
);

export default function ShowroomCars() {
    const [selectedCar, setSelectedCar] = useState(null);
    const [activeFilters, setActiveFilters] = useState({
        vehicleType: false,
        gearshift: false,
        passengers: false,
        driversAge: false
    });

    // Filter values
    const [filters, setFilters] = useState({
        vehicleType: 'all', // all, SUV, Sedan, Sports
        gearshift: 'all', // all, Automatic, Manual
        passengers: 'all', // all, 2, 4, 5
        driversAge: 'all' // all, 18-21, 22-25, 26+
    });

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    // Use data from data.json to set cars
    useEffect(() => {
        const generatedCars = carData.vehicles.map((vehicle) => ({
            id: vehicle.id,
            name: vehicle.vehicleName,
            category: vehicle.type,
            image: vehicle.image,
            specs: {
                passengers: parseInt(vehicle.numberOfSeats),
                doors: 4, // Assuming 4 doors as default
                transmission: vehicle.transmission
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

    return (
        <>
            <div className="min-h-screen bg-[#0a0c0f] text-white p-4 sm:p-6 md:p-8">
                {/* Filters Section */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
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
                    {filteredCars.map((car) => (
                        <div
                            key={car.id}
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
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-contain sm:object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                                <div className="w-full flex items-center justify-center bg-black/30 px-3 py-2 rounded-lg text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Unlimited miles</span>
                                </div>
                                <a
                                    href="https://wa.me/971501059047"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#FFD700] py-1.5 sm:py-2 rounded-lg font-semibold text-center border border-[#333333] shadow-[0_0_10px_rgba(255,255,255,0.1)] text-sm sm:text-base cursor-pointer"
                                >
                                    BOOK NOW
                                </a>
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
                        </div>
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