import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, GlobeAltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const languages = [
    { code: 'en', name: 'English', region: 'United States' },
    { code: 'ar', name: 'العربية', region: 'United Arab Emirates' },
    { code: 'fr', name: 'Français', region: 'France' },
    { code: 'de', name: 'Deutsch', region: 'Germany' },
    { code: 'es', name: 'Español', region: 'Spain' },
    { code: 'zh', name: '中文', region: 'China' },
    { code: 'ja', name: '日本語', region: 'Japan' },
    { code: 'ko', name: '한국어', region: 'South Korea' }
];

const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'SAR', symbol: 'ر.س', name: 'Saudi Riyal' }
];

const LanguageSelector = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('language');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.region.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredCurrencies = currencies.filter(curr =>
        curr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        curr.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    onClick={(e) => e.target === e.currentTarget && onClose()}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-[#1a1f25] rounded-xl w-full max-w-md overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-[#B8860B]/20">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveTab('language')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'language'
                                            ? 'bg-[#B8860B] text-black'
                                            : 'text-[#B8860B] hover:bg-[#B8860B]/10'
                                        }`}
                                >
                                    <GlobeAltIcon className="w-5 h-5" />
                                    Language & Region
                                </button>
                                <button
                                    onClick={() => setActiveTab('currency')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'currency'
                                            ? 'bg-[#B8860B] text-black'
                                            : 'text-[#B8860B] hover:bg-[#B8860B]/10'
                                        }`}
                                >
                                    <CurrencyDollarIcon className="w-5 h-5" />
                                    Currency
                                </button>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Search */}
                        <div className="p-4">
                            <input
                                type="text"
                                placeholder={`Search ${activeTab === 'language' ? 'language or region' : 'currency'}`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 bg-[#0a0c0f] border border-[#B8860B]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B]"
                            />
                        </div>

                        {/* Content */}
                        <div className="max-h-[400px] overflow-y-auto">
                            {activeTab === 'language' ? (
                                <div className="p-4 space-y-2">
                                    {filteredLanguages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#B8860B]/10 transition-colors text-left"
                                        >
                                            <div>
                                                <div className="text-white font-medium">{lang.name}</div>
                                                <div className="text-gray-400 text-sm">{lang.region}</div>
                                            </div>
                                            <div className="text-[#B8860B] text-sm font-medium">
                                                {lang.code.toUpperCase()}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-4 space-y-2">
                                    {filteredCurrencies.map((curr) => (
                                        <button
                                            key={curr.code}
                                            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#B8860B]/10 transition-colors text-left"
                                        >
                                            <div>
                                                <div className="text-white font-medium">{curr.name}</div>
                                                <div className="text-gray-400 text-sm">{curr.code}</div>
                                            </div>
                                            <div className="text-[#B8860B] text-xl font-medium">
                                                {curr.symbol}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LanguageSelector; 