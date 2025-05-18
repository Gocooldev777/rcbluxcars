import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicy = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-[9999]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.75, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.75, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-[90%] max-w-4xl mx-auto z-[9999]"
                    >
                        <div className="bg-[#1A1A1A] rounded-xl shadow-2xl max-h-[85vh] overflow-y-auto border border-[#B8860B]/30">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-[#B8860B] hover:text-[#B8860B]/80 transition-colors z-[10000]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-8">
                                <h1 className="text-3xl font-bold mb-6 text-[#B8860B]">Privacy Policy</h1>
                                <h2 className="text-2xl mb-6 text-right text-[#B8860B]">ﺔﻴﺻﻮﺼﺨﻟا ﺔﺳﺎﻴﺳ</h2>

                                <div className="space-y-6 text-[#B8860B]/90">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">RCB Luxury Car Rental Online Surveys</h3>
                                        <p>
                                            When you participate in any online surveys you may be asked to supply certain personal information, for example age or income. Provision of all or any of the requested information is voluntary. Survey results will only be used to improve the RCB Luxury Car Rental hire experience for our customers and not for any other purpose.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">How does RCB Luxury Car Rental protect your data?</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Secure Socket Layer (SSL) encryption technology is used to protect personal information such as credit card details when making a booking.</li>
                                            <li>Any personal information that we hold as part of your customer profile will be held in a database with physical and technological security controls and procedures in place.</li>
                                            <li>Only the last 4 digits of your credit card number will be displayed when viewing, amending or deleting your credit card details or on any booking on our website.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Our Commitment to Data Security</h3>
                                        <p className="mb-4">
                                            The security of your personal information is important to us. When you enter sensitive information (such as your payment card number) during any registration or booking process, we encrypt that information using secure socket layer technology (SSL).
                                        </p>
                                        <p>
                                            We follow generally accepted industry standards to protect the personally identifiable information and personal data submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-4 text-[#B8860B]">Cookie Policy</h3>
                                        <p className="mb-4">
                                            The RCB Luxury Car Rental website uses cookies. A cookie is a small text file that is stored by your browser, and allows it to remember information between web pages and browser sessions. RCB Luxury Car Rental uses a number of "first party" cookies - generated and used by the RCB Luxury Car Rental website – and some "third party" cookies – generated on our site by third parties.
                                        </p>
                                        <p>
                                            Cookies can only store text, which is always anonymous and usually encrypted. RCB Luxury Car Rental will never store any personal information in a cookie.
                                        </p>
                                    </section>

                                    <p className="text-sm italic text-[#B8860B]/70 mt-8">*T&C's Apply</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PrivacyPolicy; 