import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Camera, Bell, Layers, Check } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const icons = [
    <MessageSquare className="w-8 h-8 text-brand-primary" />,
    <div className="flex gap-2"><Mic className="w-6 h-6 text-brand-secondary" /><Camera className="w-6 h-6 text-brand-primary" /></div>,
    <Bell className="w-8 h-8 text-brand-secondary" />,
    <Layers className="w-8 h-8 text-brand-primary" />
];

const featureConfig = [
    { colSpan: "lg:col-span-2", bg: "bg-white" },
    { colSpan: "lg:col-span-1", bg: "bg-brand-bg border border-gray-200" },
    { colSpan: "lg:col-span-1", bg: "bg-brand-bg border border-gray-200" },
    { colSpan: "lg:col-span-2", bg: "bg-white" }
];

const Features = () => {
    const { t } = useTranslation();
    const items = t('features.items', { returnObjects: true });

    const features = items.map((item, index) => ({
        ...item,
        icon: icons[index],
        ...featureConfig[index]
    }));


    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        {t('features.headline.prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t('features.headline.highlight')}</span> {t('features.headline.suffix')}
                    </h2>
                    <p className="text-brand-muted max-w-2xl mx-auto">
                        {t('features.subheadline')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${feature.colSpan} ${feature.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between`}
                        >
                            <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-brand-muted leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
