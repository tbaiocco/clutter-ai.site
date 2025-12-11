import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { UserPlus, Inbox, Mail, Brain, Check, Bot } from 'lucide-react';

const HowItWorks = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="how-it-works" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        {t('howItWorks.headline.prefix')} <span className="text-electric-purple">{t('howItWorks.headline.highlight')}</span>{t('howItWorks.headline.suffix')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        {t('howItWorks.subheadline')}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Step 1: Sign Up & Connect */}
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-electric-purple">
                            <UserPlus size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{t('howItWorks.step1.title')}</h3>
                        <p className="text-gray-600 mb-6">{t('howItWorks.step1.body')}</p>

                        <div className="space-y-4 bg-gray-50 p-4 rounded-xl">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 min-w-[20px]"><Bot size={18} className="text-cyan-500" /></div>
                                <p className="text-sm text-gray-700">
                                    <Trans i18nKey="howItWorks.step1.detailA">
                                        Find bot <span className="font-semibold">@Dumpsterhook_bot</span>. Send your registered phone number as the first message. Wait for: '✅ Welcome! Your account has been linked'.
                                    </Trans>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 min-w-[20px]"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-xs font-bold">W</span></div>
                                <p className="text-sm text-gray-700">
                                    <Trans i18nKey="howItWorks.step1.detailB">
                                        Simply start sending messages to <span className="font-semibold">+1 555 444 333</span>.
                                    </Trans>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 2: Capture Everything */}
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
                            <Inbox size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{t('howItWorks.step2.title')}</h3>
                        <p className="text-gray-600 mb-6">{t('howItWorks.step2.body')}</p>

                        <div className="bg-gray-900 text-gray-300 p-4 rounded-xl font-mono text-sm space-y-2 mb-4">
                            <div className="flex justify-between"><span>/help</span> <span className="text-gray-500 opacity-70">{t('howItWorks.step2.commands.help').split(' - ')[1]}</span></div>
                            <div className="flex justify-between"><span>/start</span> <span className="text-gray-500 opacity-70">{t('howItWorks.step2.commands.start').split(' - ')[1]}</span></div>
                            <div className="flex justify-between"><span>/recent</span> <span className="text-gray-500 opacity-70">{t('howItWorks.step2.commands.recent').split(' - ')[1]}</span></div>
                            <div className="flex justify-between"><span>/upcoming</span> <span className="text-gray-500 opacity-70">{t('howItWorks.step2.commands.upcoming').split(' - ')[1]}</span></div>
                            <div className="flex justify-between"><span>/track [num]</span> <span className="text-gray-500 opacity-70">{t('howItWorks.step2.commands.track').split(' - ')[1]}</span></div>
                            <div className="flex justify-between"><span>/search [q]</span> <span className="text-gray-500 opacity-70">{t('howItWorks.step2.commands.search').split(' - ')[1]}</span></div>
                        </div>
                        <p className="text-xs text-gray-400 italic">
                            {t('howItWorks.step2.note')}
                        </p>
                    </motion.div>

                    {/* Step 3: Email Integration */}
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{t('howItWorks.step3.title')}</h3>
                        <p className="text-gray-600 mb-6">
                            <Trans i18nKey="howItWorks.step3.body">
                                Forward emails from your registered address directly to <span className="font-semibold text-electric-purple">capture@inbox.theclutter.app</span>.
                            </Trans>
                        </p>

                        <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                            <p className="text-sm text-amber-800 font-medium">
                                {t('howItWorks.step3.warning')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 4: Natural Language Search */}
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{t('howItWorks.step4.title')}</h3>
                        <p className="text-gray-600 mb-6">{t('howItWorks.step4.body')}</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg text-gray-700">
                                <Check size={16} className="text-green-500" />
                                "{t('howItWorks.step4.examples.1')}"
                            </div>
                            <div className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg text-gray-700">
                                <Check size={16} className="text-green-500" />
                                "{t('howItWorks.step4.examples.2')}"
                            </div>
                            <div className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg text-gray-700">
                                <Check size={16} className="text-green-500" />
                                "{t('howItWorks.step4.examples.3')}"
                            </div>
                            <div className="mt-4 p-3 border border-dashed border-gray-300 rounded-lg">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Typos? No Problem:</span>
                                <p className="text-gray-400 line-through text-sm mt-1">"{t('howItWorks.step4.typos')}"</p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
