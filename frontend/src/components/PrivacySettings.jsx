import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacySettings = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has seen the privacy settings
        const hasSeenPrivacy = localStorage.getItem('hasSeenPrivacy');
        if (!hasSeenPrivacy) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('hasSeenPrivacy', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 bg-[#1a1f25] text-white p-4 shadow-lg z-50"
                >
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-sm">
                            <p>
                                We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience.
                                By clicking accept, you agree to this use as described in our Cookie Policy.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 bg-[#FFD700] text-black rounded hover:bg-[#FFD700]/90 transition-colors"
                            >
                                Accept
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 border border-[#FFD700] text-[#FFD700] rounded hover:bg-[#FFD700]/10 transition-colors"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PrivacySettings; 