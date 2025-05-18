import React from 'react';
import { motion } from 'framer-motion';
import {
    ClockIcon,
    HandRaisedIcon,
    KeyIcon,
    SparklesIcon,
    WrenchIcon,
    ShieldCheckIcon,
    TrophyIcon,
    LockClosedIcon,
    UserGroupIcon,
    CreditCardIcon,
    UserIcon,
    StarIcon
} from '@heroicons/react/24/outline';

export function OurService() {
    const features = [
        {
            icon: <ClockIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'URGENT',
            subtitle: 'SERVICE',
            description: 'Quick response time'
        },
        {
            icon: <HandRaisedIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'CERTIFIED QUALITY',
            subtitle: 'VEHICLES',
            description: 'Premium certified fleet'
        },
        {
            icon: <KeyIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'DUBAI',
            subtitle: 'EXPERIENCE',
            description: 'Local expertise'
        },
        {
            icon: <SparklesIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'EXCLUSIVE',
            subtitle: 'LUXURY',
            description: 'Premium service'
        },
        {
            icon: <WrenchIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'FAIR',
            subtitle: 'PRICING',
            description: 'Best market rates'
        },
        {
            icon: <ShieldCheckIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'SECURE',
            subtitle: 'SERVICE',
            description: 'Protected journey'
        },
        {
            icon: <TrophyIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'AWARD',
            subtitle: 'WINNING',
            description: 'Excellence recognized'
        },
        {
            icon: <LockClosedIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'PRIVACY',
            subtitle: 'ASSURED',
            description: 'Confidential service'
        },
        {
            icon: <UserGroupIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'CONCIERGE',
            subtitle: 'SERVICE',
            description: 'Personal assistance'
        },
        {
            icon: <CreditCardIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'FLEXIBLE',
            subtitle: 'PAYMENT',
            description: 'Easy transactions'
        },
        {
            icon: <UserIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'PERSONAL',
            subtitle: 'SERVICE',
            description: 'Tailored experience'
        },
        {
            icon: <StarIcon className="w-8 h-8 text-[#392E26]" />,
            title: 'PREMIUM',
            subtitle: 'QUALITY',
            description: 'Luxury standard'
        }
    ];

    return (
        <section className="py-16 bg-black text-[#B8860B] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#B8860B]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B]/5 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#B8860B] mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-[#B8860B] mx-auto" />
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group bg-[#B8860B]/5 rounded-lg p-4 hover:bg-[#B8860B]/10 transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 flex items-center justify-center mb-4 
                                          bg-[#B8860B] rounded-full text-[#392E26] 
                                          transform transition-transform duration-300 shadow-lg"
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-lg font-bold text-[#B8860B] uppercase mb-1">{feature.title}</h3>
                            <h4 className="text-sm font-bold text-[#B8860B]/80 uppercase mb-2">{feature.subtitle}</h4>
                            <p className="text-sm text-[#B8860B]/70">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#B8860B]/5 rounded-2xl p-6 md:p-8">
                    {/* English Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-[#B8860B] border-b border-[#B8860B]/20 pb-2">Book Online</h4>
                            <ul className="list-disc list-inside space-y-2 text-[#B8860B]/90">
                                <li>Quick & Easy Phone / WhatsApp Booking</li>
                                <li>Expect perfection every time</li>
                                <li>Full comprehensive insurance</li>
                                <li>24×7 Support available</li>
                                <li>Free pick up & drop off (Dubai only) *T&C's Apply</li>
                            </ul>
                        </div>

                        {['Fleet Excellence', 'Professional Chauffeurs', 'Privacy Commitment', 'Concierge Service', 'Flexible Timing', 'Premium Experience'].map((title, index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="space-y-4 hover:bg-[#B8860B]/10 p-4 rounded-lg transition-all duration-300"
                            >
                                <h4 className="text-2xl font-semibold text-[#B8860B] border-b border-[#B8860B]/20 pb-2">{title}</h4>
                                <p className="text-[#B8860B]/90 leading-relaxed">
                                    {title === 'Fleet Excellence' && 'In our fleet all the Vehicles are maintained in perfect condition, with daily quality checks. Discreet colours with no company signage.'}
                                    {title === 'Professional Chauffeurs' && 'All RCB Luxury chauffeurs are specially trained and well experienced, we believe in offering high standards to our valuable customers, privacy, and First Aid.'}
                                    {title === 'Privacy Commitment' && 'Busy people want to work and take calls during their commutes without worrying about what they\'re saying or who\'s listening. They also want to know that who they travel with, where they go, and where they live or work remains private. All RCB Luxury Chauffeurs are subject to special training and enhanced privacy training sessions by the company. RCB Luxury Car Rental keeps all sensitive data fully private, and follow our strict confidentiality policy.'}
                                    {title === 'Concierge Service' && 'Our concierge-style customer service team helps passengers personalise the fine details of their journeys. From water bottles to umbrellas to phone charges, all amenities come standard.'}
                                    {title === 'Flexible Timing' && 'Join your chauffeurs at your leisure. We\'re pleased to offer an hour of complementary waiting time.'}
                                    {title === 'Premium Experience' && 'Reclaim your precious time, enjoy more productivity, and improve your comfort as your chauffeur watches your belongings, handles diverse errands, and ensures you are never left waiting between appointments. This unique service is available both on demand and via scheduled bookings.'}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Arabic Services */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-right"
                        dir="rtl"
                    >
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-[#B8860B] border-b border-[#B8860B]/20 pb-2">احجز عبر الإنترنت</h4>
                            <ul className="list-disc list-inside space-y-2 text-[#B8860B]/90">
                                <li>حجز سريع وسهل عبر الهاتف/واتساب</li>
                                <li>احصل على أفضل خدمة في كل مرة</li>
                                <li>تأمين شامل</li>
                                <li>دعم فني متوفر على مدار الساعة</li>
                                <li>استلام وتسليم مجاني (دبي فقط) *تطبق الشروط والأحكام</li>
                            </ul>
                        </div>

                        {[
                            { title: 'تميز الأسطول', content: 'جميع مركبات أسطولنا محفوظة في حالة ممتازة، مع فحوصات جودة يومية. ألوانها مميزة، ولا تحمل أي لافتات للشركة.' },
                            { title: 'سائقون محترفون', content: 'جميع سائقي RCB Luxury مدربون تدريبا خاصا ويتمتعون بخبرة واسعة، ونحن نؤمن بتقديم معايير عالية لعملائنا الكرام، والخصوصية، والإسعافات الأولية.' },
                            { title: 'التزام الخصوصية', content: 'يرغب الأشخاص المشغولون بالعمل والرد على المكالمات أثناء تنقلاتهم دون القلق بشأن ما يقولونه أو من يستمع إليهم. كما يرغبون في ضمان خصوصية من يسافرون معه، وأين يذهبون، ومكان إقامتهم أو عملهم. يخضع جميع سائقي RCB Luxury لتدريب خاص وجلسات تدريبية مكثفة حول الخصوصية تقدمها الشركة. تحافظ RCB Luxury Car Rental على خصوصية جميع البيانات الحساسة، وتلتزم بسياسة السرية الصارمة لدينا.' },
                            { title: 'خدمة الكونسيرج', content: 'يساعد فريق خدمة العملاء الخاص بنا المسافرين على تخصيص أدق تفاصيل رحلاتهم. من زجاجات المياه إلى المظلات إلى رسوم الهاتف، جميع وسائل الراحة متوفرة بشكل قياسي.' },
                            { title: 'توقيت مرن', content: 'انضم إلى سائقيك في أي وقت. يسعدنا أن نقدم لك ساعة انتظار مجانية.' },
                            { title: 'تجربة متميزة', content: 'استغل وقتك الثمين، وتمتع بمزيد من الإنتاجية، وحسن راحتك بينما يعتني سائقك بأمتعتك، ويتولى مهامك المتنوعة، ويضمن لك عدم الانتظار بين المواعيد. هذه الخدمة الفريدة متاحة عند الطلب وعن طريق الحجوزات المجدولة.' }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="space-y-4 hover:bg-[#B8860B]/10 p-4 rounded-lg transition-all duration-300"
                            >
                                <h4 className="text-2xl font-semibold text-[#B8860B] border-b border-[#B8860B]/20 pb-2">{service.title}</h4>
                                <p className="text-[#B8860B]/90 leading-relaxed">{service.content}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Company Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-16 bg-[#B8860B]/5 rounded-lg py-6 px-4"
                >
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-bold text-[#B8860B] mb-2"
                    >
                        A UNIT OF RB GROUP OF COMPANY
                    </motion.p>
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-xl text-[#B8860B]/80"
                    >
                        DUBAI, UNITED ARAB EMIRATES
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
} 