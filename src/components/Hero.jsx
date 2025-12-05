import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import LoginModal from './LoginModal';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { t } = useTranslation();

    return (
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
                        <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center gap-3 border-b border-gray-100/50 pb-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold">
                                    AI
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-text">{t('hero.chat.aiName')}</h3>
                                    <p className="text-xs text-brand-muted">{t('hero.chat.status')}</p>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="space-y-4">
                                {/* User Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="flex justify-end"
                                >
                                    <div className="bg-brand-primary/10 text-brand-text px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                                        <p>{t('hero.chat.userMessage')}</p>
                                        <span className="text-[10px] text-brand-muted block text-right mt-1">10:42 AM</span>
                                    </div>
                                </motion.div>

                                {/* AI Response */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2.5 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white text-brand-text px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] border border-gray-100">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium">{t('hero.chat.aiResponse.status')}</p>
                                                <p className="text-sm text-brand-muted mt-1">{t('hero.chat.aiResponse.detail')}</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-brand-muted block text-right mt-1">10:42 AM</span>
                                    </div>
                                </motion.div>
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

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </section>
    );
};

export default Hero;
