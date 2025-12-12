import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, FileImage, Play } from 'lucide-react';
import LoginModal from './LoginModal';
import PrivacySection from './PrivacySection';
import { useTranslation } from 'react-i18next';

const Hero = () => {

    const { t } = useTranslation();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);

    const chatScenarios = t('hero.chatCarousel', { returnObjects: true });
    // Ensure chatScenarios is an array before using it
    const currentScenario = Array.isArray(chatScenarios) ? chatScenarios[activeScenarioIndex] : {};

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScenarioIndex((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderUserBubble = (index) => {
        if (index === 0) {
            return <p>{currentScenario.user}</p>;
        } else if (index === 1) {
            return (
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <FileImage className="w-5 h-5 text-gray-500" />
                    </div>
                    <span>{currentScenario.user}</span>
                </div>
            );
        } else if (index === 2) {
            return (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    <div className="flex gap-1 items-center h-4">
                        {[1, 2, 3, 4, 3, 5, 2].map((h, i) => (
                            <div key={i} className="w-1 bg-brand-primary/50 rounded-full" style={{ height: `${h * 4}px` }}></div>
                        ))}
                    </div>
                    <span className="text-sm opacity-80">{currentScenario.user}</span>
                </div>
            );
        }
    };

    return (
        <>
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                                {t('hero.headline.prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t('hero.headline.highlight')}</span> {t('hero.headline.suffix')}
                            </h1>
                            <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {t('hero.subheadline')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="btn-primary flex items-center justify-center gap-2 group"
                                >
                                    {t('hero.cta')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <p className="mt-4 text-sm text-brand-muted">
                                {t('hero.disclaimer')}
                            </p>
                        </motion.div>

                        {/* Visual Content - Chat Interface */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mx-auto w-full max-w-md lg:max-w-full"
                        >
                            {/* Decorative blobs */}
                            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                            {/* Glassmorphism Chat Card */}
                            <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 overflow-hidden min-h-[340px]">
                                {/* Header */}
                                <div className="flex items-center gap-3 border-b border-gray-100/50 pb-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold" key="avatar">
                                        AI
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-text">{t('hero.chat.aiName')}</h3>
                                        <p className="text-xs text-brand-muted">{t('hero.chat.status')}</p>
                                    </div>
                                </div>

                                {/* Messages Carousel */}
                                <div className="space-y-4">
                                    <AnimatePresence mode="wait">
                                        {/* User Message */}
                                        <motion.div
                                            key={`user-${activeScenarioIndex}`}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                                            transition={{ delay: 0.2 }}
                                            className="flex justify-end"
                                        >
                                            <div className="bg-brand-primary/10 text-brand-text px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                                                {renderUserBubble(activeScenarioIndex)}
                                                <span className="text-[10px] text-brand-muted block text-right mt-1">10:42 AM</span>
                                            </div>
                                        </motion.div>

                                        {/* AI Response */}
                                        <motion.div
                                            key={`ai-${activeScenarioIndex}`}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                                            transition={{ delay: 1.5 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white text-brand-text px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] border border-gray-100">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="font-medium">{currentScenario.aiTitle}</p>
                                                        <p className="text-sm text-brand-muted mt-1">{currentScenario.aiDetail}</p>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-brand-muted block text-right mt-1">10:42 AM</span>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Input Area Mockup */}
                                <div className="mt-6 pt-4 border-t border-gray-100/50 flex gap-2 items-center opacity-50">
                                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                    <div className="flex-1 h-10 bg-gray-100 rounded-full"></div>
                                    <div className="w-8 h-8 rounded-full bg-brand-primary/20"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <PrivacySection />
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Hero;
