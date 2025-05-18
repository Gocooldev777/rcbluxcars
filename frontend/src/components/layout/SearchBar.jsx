import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/datepicker.css";

const popularLocations = [
    {
        id: 1,
        name: 'Dubai International Airport',
        address: 'Airport Terminal 3, Dubai, UAE',
        type: 'Airport'
    },
    {
        id: 2,
        name: 'Dubai Marina',
        address: 'Dubai Marina, Dubai, UAE',
        type: 'City'
    },
    {
        id: 3,
        name: 'Palm Jumeirah',
        address: 'Palm Jumeirah, Dubai, UAE',
        type: 'Popular'
    },
    {
        id: 4,
        name: 'Burj Khalifa',
        address: 'Downtown Dubai, UAE',
        type: 'Landmark'
    },
    {
        id: 5,
        name: 'Abu Dhabi International Airport',
        address: 'Abu Dhabi, UAE',
        type: 'Airport'
    }
];

const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 }
    }
};

const dropdownVariants = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        transition: { duration: 0.2 }
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
};

export const SearchBar = () => {
    const navigate = useNavigate();
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [pickupTime, setPickupTime] = useState('00:00');
    const [returnTime, setReturnTime] = useState('00:00');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [filteredLocations, setFilteredLocations] = useState(popularLocations);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLocationSearch = (e) => {
        const searchTerm = e.target.value;
        setPickupLocation(searchTerm);
        setIsSearchOpen(true);

        const filtered = popularLocations.filter(location =>
            location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLocations(filtered);
    };

    const handleLocationSelect = (location) => {
        setPickupLocation(location.name);
        setIsSearchOpen(false);
    };

    const NoLocationsFound = () => (
        <div className="p-8 text-center">
            <h3 className="text-white text-lg font-semibold mb-2">We're sorry.</h3>
            <p className="text-gray-400 mb-4">RCB is not yet available here.</p>
            <p className="text-gray-400 mb-2">Let's see if we can find another location nearby.</p>
            <p className="text-[#B8860B] text-sm">Try searching a new address, city or airport.</p>
        </div>
    );

    // Generate time options for 24 hours with 30-minute intervals
    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute of ['00', '30']) {
                const hourStr = hour.toString().padStart(2, '0');
                times.push(`${hourStr}:${minute}`);
            }
        }
        return times;
    };

    const timeOptions = generateTimeOptions();

    const customDatePickerStyles = {
        datePickerContainer: "relative",
        datePickerInput: "w-full px-2 sm:px-4 py-2 text-sm sm:text-base bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] font-medium cursor-pointer",
    };

    return (
        <div className="sticky top-[120px] z-30 w-full bg-black/95 backdrop-blur-sm border-b border-[#B8860B]/20 px-2 sm:px-4 py-4 sm:py-6 mt-4">
            <div className="container mx-auto">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
                        {/* Pick-up & return */}
                        <div className="flex-1 min-w-0" ref={searchRef}>
                            <label className="block text-[#B8860B] text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold tracking-wide uppercase">Pick-up & return</label>
                            <div className="relative">
                                <div className="relative">
                                    <MapPinIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#B8860B]" />
                                    <input
                                        type="text"
                                        placeholder="Enter location"
                                        value={pickupLocation}
                                        onChange={handleLocationSearch}
                                        onClick={() => setIsSearchOpen(true)}
                                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] font-medium"
                                    />
                                </div>
                                <AnimatePresence>
                                    {isSearchOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute w-full mt-1 sm:mt-2 bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg shadow-xl z-50 max-h-48 sm:max-h-60 overflow-y-auto"
                                        >
                                            {filteredLocations.length > 0 ? (
                                                filteredLocations.map((location) => (
                                                    <div
                                                        key={location.id}
                                                        onClick={() => handleLocationSelect(location)}
                                                        className="p-2 sm:p-3 hover:bg-[#B8860B]/10 cursor-pointer border-b border-[#B8860B]/10 last:border-0"
                                                    >
                                                        <div className="flex items-start gap-2">
                                                            <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B8860B] mt-1 flex-shrink-0" />
                                                            <div>
                                                                <p className="text-white text-sm sm:text-base font-medium">{location.name}</p>
                                                                <p className="text-gray-300 text-xs sm:text-sm">{location.address}</p>
                                                                <span className="text-[10px] sm:text-xs text-[#B8860B] font-medium">{location.type}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <NoLocationsFound />
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Pick-up date */}
                        <div className="flex-1 min-w-0">
                            <label className="block text-[#B8860B] text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold tracking-wide uppercase">Pick-up date</label>
                            <div className="flex space-x-2">
                                <div className={customDatePickerStyles.datePickerContainer + " flex-1 min-w-0"}>
                                    <DatePicker
                                        selected={pickupDate}
                                        onChange={(date) => setPickupDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        placeholderText="Select date"
                                        className={customDatePickerStyles.datePickerInput}
                                        calendarClassName="bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg shadow-xl text-white"
                                        dayClassName={date => "hover:bg-[#B8860B]/20 rounded-full"}
                                        monthClassName={() => "text-[#B8860B]"}
                                        wrapperClassName="w-full"
                                    />
                                    <CalendarIcon className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#B8860B] pointer-events-none" />
                                </div>
                                <div className="relative w-24 sm:w-32">
                                    <ClockIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B8860B]" />
                                    <select
                                        value={pickupTime}
                                        onChange={(e) => setPickupTime(e.target.value)}
                                        className="w-full pl-7 sm:pl-9 pr-2 py-2 text-sm sm:text-base bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg text-[#B8860B] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] hover:border-[#B8860B]/40 appearance-none cursor-pointer transition-colors duration-200 font-medium"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B8860B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 8px center',
                                            backgroundSize: '12px'
                                        }}
                                    >
                                        {timeOptions.map((time) => (
                                            <option
                                                key={time}
                                                value={time}
                                                className="bg-[#1a1f25] text-[#B8860B] hover:bg-[#B8860B]/10 font-medium"
                                            >
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Return date */}
                        <div className="flex-1 min-w-0">
                            <label className="block text-[#B8860B] text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold tracking-wide uppercase">Return date</label>
                            <div className="flex space-x-2">
                                <div className={customDatePickerStyles.datePickerContainer + " flex-1 min-w-0"}>
                                    <DatePicker
                                        selected={returnDate}
                                        onChange={(date) => setReturnDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={pickupDate || new Date()}
                                        placeholderText="Select date"
                                        className={customDatePickerStyles.datePickerInput}
                                        calendarClassName="bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg shadow-xl text-white"
                                        dayClassName={date => "hover:bg-[#B8860B]/20 rounded-full"}
                                        monthClassName={() => "text-[#B8860B]"}
                                        wrapperClassName="w-full"
                                    />
                                    <CalendarIcon className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#B8860B] pointer-events-none" />
                                </div>
                                <div className="relative w-24 sm:w-32">
                                    <ClockIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B8860B]" />
                                    <select
                                        value={returnTime}
                                        onChange={(e) => setReturnTime(e.target.value)}
                                        className="w-full pl-7 sm:pl-9 pr-2 py-2 text-sm sm:text-base bg-[#1a1f25] border border-[#B8860B]/20 rounded-lg text-[#B8860B] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] hover:border-[#B8860B]/40 appearance-none cursor-pointer transition-colors duration-200 font-medium"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B8860B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 8px center',
                                            backgroundSize: '12px'
                                        }}
                                    >
                                        {timeOptions.map((time) => (
                                            <option
                                                key={time}
                                                value={time}
                                                className="bg-[#1a1f25] text-[#B8860B] hover:bg-[#B8860B]/10 font-medium"
                                            >
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Show cars button */}
                        <div className="flex-none self-center md:self-end w-full md:w-auto mt-3 md:mt-0">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/showroom')}
                                className="w-full md:w-auto bg-[#B8860B] text-black px-6 sm:px-8 py-2 rounded-lg text-sm sm:text-base font-bold hover:bg-[#B8860B]/90 transition-colors"
                            >
                                Show cars
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 