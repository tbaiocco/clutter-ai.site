import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Lock, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PrivacySection = () => {
    const { t } = useTranslation();

    const features = [
        {
            key: 'training',
            icon: BrainCircuit,
        },
        {
            key: 'security',
            icon: Lock,
        },
        {
            key: 'ownership',
            icon: UserCheck,
        }
    ];

    return (
        <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        {t('privacySection.title')}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t('privacySection.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-[#B929EB]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {t(`privacySection.cards.${feature.key}.title`)}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t(`privacySection.cards.${feature.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrivacySection;
