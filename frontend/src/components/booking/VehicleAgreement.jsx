import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    DocumentTextIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    LanguageIcon
} from '@heroicons/react/24/outline';
import '../../i18n/config';

const VehicleAgreement = () => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [showError, setShowError] = useState(false);
    const { t, i18n } = useTranslation();

    // Define all sections
    const agreementSections = [
        {
            title: t('agreement.sections.definitions.title'),
            content: [
                t('agreement.sections.definitions.vehicle'),
                t('agreement.sections.definitions.renter')
            ]
        },
        {
            title: t('agreement.sections.rentalRates.title'),
            content: [t('agreement.sections.rentalRates.content')]
        },
        {
            title: t('agreement.sections.deliveryReturn.title'),
            content: [t('agreement.sections.deliveryReturn.content')]
        },
        {
            title: t('agreement.sections.conditionsOfUse.title'),
            content: t('agreement.sections.conditionsOfUse.content')
        },
        {
            title: t('agreement.sections.drivingAge.title'),
            content: [t('agreement.sections.drivingAge.content')]
        },
        {
            title: t('agreement.sections.authorized.title'),
            content: [t('agreement.sections.authorized.content')]
        },
        {
            title: t('agreement.sections.creditQualifications.title'),
            content: [t('agreement.sections.creditQualifications.content')]
        },
        {
            title: t('agreement.sections.vehicleCleanliness.title'),
            content: [t('agreement.sections.vehicleCleanliness.content')]
        },
        {
            title: t('agreement.sections.fuelPolicy.title'),
            content: [t('agreement.sections.fuelPolicy.content')]
        },
        {
            title: t('agreement.sections.geographicLimitations.title'),
            content: [t('agreement.sections.geographicLimitations.content')]
        },
        {
            title: t('agreement.sections.driverLicenses.title'),
            content: [t('agreement.sections.driverLicenses.content')]
        },
        {
            title: t('agreement.sections.insurance.title'),
            content: t('agreement.sections.insurance.content')
        },
        {
            title: t('agreement.sections.indemnity.title'),
            content: [t('agreement.sections.indemnity.content')]
        },
        {
            title: t('agreement.sections.lossOrDamage.title'),
            content: t('agreement.sections.lossOrDamage.content')
        },
        {
            title: t('agreement.sections.noInsuranceCoverage.title'),
            content: t('agreement.sections.noInsuranceCoverage.content')
        },
        {
            title: t('agreement.sections.refundPolicy.title'),
            content: [t('agreement.sections.refundPolicy.content')]
        },
        {
            title: t('agreement.sections.paymentPolicy.title'),
            content: [t('agreement.sections.paymentPolicy.content')]
        },
        {
            title: t('agreement.sections.vehicleDeliveryPolicy.title'),
            content: [t('agreement.sections.vehicleDeliveryPolicy.content')]
        },
        {
            title: t('agreement.sections.kilometreRange.title'),
            content: [t('agreement.sections.kilometreRange.content')]
        },
        {
            title: t('agreement.sections.salikToll.title'),
            content: [t('agreement.sections.salikToll.content')]
        },
        {
            title: t('agreement.sections.finePayments.title'),
            content: [t('agreement.sections.finePayments.content')]
        },
        {
            title: t('agreement.sections.returnPolicy.title'),
            content: [t('agreement.sections.returnPolicy.content')]
        },
        {
            title: t('agreement.sections.paymentsAndFees.title'),
            content: t('agreement.sections.paymentsAndFees.content')
        },
        {
            title: t('agreement.sections.otherCharges.title'),
            content: t('agreement.sections.otherCharges.content')
        },
        {
            title: t('agreement.sections.accidentProcedure.title'),
            content: t('agreement.sections.accidentProcedure.content')
        },
        {
            title: t('agreement.sections.language.title'),
            content: [t('agreement.sections.language.content')]
        }
    ];

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleContinue = () => {
        if (!isAccepted) {
            setShowError(true);
            return;
        }
        // Handle agreement acceptance
        console.log('Agreement accepted');
    };

    return (
        <div className={`min-h-[calc(100vh-72px)] mt-[72px] bg-[#0a0c0f] p-4 md:p-8 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Language Selection */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-end space-x-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLanguageChange('en')}
                    className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors ${i18n.language === 'en'
                        ? 'bg-[#FFD700] text-black'
                        : 'bg-black/40 text-[#FFD700] border border-[#FFD700]/30'
                        }`}
                >
                    <LanguageIcon className="w-5 h-5" />
                    <span>English</span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLanguageChange('ar')}
                    className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors ${i18n.language === 'ar'
                        ? 'bg-[#FFD700] text-black'
                        : 'bg-black/40 text-[#FFD700] border border-[#FFD700]/30'
                        }`}
                >
                    <LanguageIcon className="w-5 h-5" />
                    <span>العربية</span>
                </motion.button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto bg-[#1a1f25] rounded-xl overflow-hidden border border-[#FFD700]/20"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#FFD700]/20 bg-black/40">
                    <div className="flex items-center space-x-3">
                        <DocumentTextIcon className="w-8 h-8 text-[#FFD700]" />
                        <h1 className="text-2xl font-bold text-white">
                            {t('agreement.title')}
                        </h1>
                    </div>
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </Link>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Introduction */}
                    <div className="text-gray-400">
                        <p>{t('agreement.intro')}</p>
                    </div>

                    {/* Agreement Sections */}
                    <div className="space-y-6">
                        {agreementSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black/40 rounded-lg p-6 border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-colors"
                            >
                                <h3 className="text-[#FFD700] font-semibold mb-4">{section.title}</h3>
                                <div className="space-y-4">
                                    {Array.isArray(section.content) ? (
                                        section.content.map((paragraph, i) => (
                                            <p key={i} className="text-gray-400">{paragraph}</p>
                                        ))
                                    ) : (
                                        Array.isArray(section.content) ? (
                                            section.content.map((item, i) => (
                                                <p key={i} className="text-gray-400">{item}</p>
                                            ))
                                        ) : (
                                            <p className="text-gray-400">{section.content}</p>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Acceptance Section */}
                    <div className="space-y-4">
                        <div className={`flex items-start ${i18n.language === 'ar' ? 'space-x-reverse' : 'space-x-3'}`}>
                            <div className="flex-shrink-0 mt-0.5">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setIsAccepted(!isAccepted);
                                        setShowError(false);
                                    }}
                                    className={`w-6 h-6 rounded border ${isAccepted
                                        ? 'bg-[#FFD700] border-[#FFD700]'
                                        : 'border-gray-500'
                                        } flex items-center justify-center transition-colors`}
                                >
                                    {isAccepted && (
                                        <CheckCircleIcon className="w-5 h-5 text-black" />
                                    )}
                                </motion.button>
                            </div>
                            <label className="text-gray-400 cursor-pointer" onClick={() => {
                                setIsAccepted(!isAccepted);
                                setShowError(false);
                            }}>
                                {t('agreement.accept')}
                            </label>
                        </div>

                        {showError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-center ${i18n.language === 'ar' ? 'space-x-reverse' : 'space-x-2'} text-red-500`}
                            >
                                <ExclamationCircleIcon className="w-5 h-5" />
                                <span>{t('agreement.error')}</span>
                            </motion.div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleContinue}
                            className="w-full bg-[#FFD700] text-black py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors"
                        >
                            {t('agreement.continue')}
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default VehicleAgreement;