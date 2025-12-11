import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Check, Sparkles } from 'lucide-react';
import SocialProof from './SocialProof';

const Pricing = ({ onOpenLogin }) => {
    const { t } = useTranslation();

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-gradient-to-br from-[#B929EB] to-[#2DD9F6]"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 p-10 md:p-20 text-center text-white">

                        <div className="inline-flex items-center gap-2 bg-white text-electric-purple font-extrabold px-6 py-2 rounded-full mb-8 shadow-lg text-sm md:text-base uppercase tracking-wider transform hover:scale-105 transition-transform">
                            <Sparkles size={18} className="text-yellow-400 fill-yellow-400" />
                            {t('pricing.badge')}
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            {t('pricing.headline')}
                        </h2>

                        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            <Trans i18nKey="pricing.subheadline">
                                We are currently in public beta. To thank our early adopters, all premium features are $0 until <span className="font-bold underline decoration-wavy underline-offset-4">February 28, 2026</span>.
                            </Trans>
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 max-w-4xl mx-auto">
                            <p className="text-white/80 font-bold mb-6 uppercase tracking-widest text-sm">{t('pricing.included')}</p>
                            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-left">
                                {(t('pricing.features', { returnObjects: true }) || []).map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-white text-electric-purple rounded-full p-1 shrink-0">
                                            <Check size={16} strokeWidth={4} />
                                        </div>
                                        <span className="font-semibold text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={onOpenLogin}
                            className="btn-primary text-electric-purple font-black text-lg md:text-xl py-5 px-10 rounded-xl hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block mx-auto w-full md:w-auto"
                        >
                            {t('pricing.cta')}
                        </button>
                    </div>
                </motion.div>

                {/* Social Proof */}
                <SocialProof />
            </div>
        </section>
    );
};

export default Pricing;
