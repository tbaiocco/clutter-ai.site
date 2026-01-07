import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = ({ onOpenLogin }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-bg/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                            <img className="h-10 w-auto" src="/logo.png" alt="Clutter.AI" />
                            <span className="font-heading font-bold text-2xl tracking-tight">Clutter.AI</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#how-it-works" className="text-brand-text hover:text-brand-primary font-medium transition-colors">{t('navbar.howItWorks')}</a>
                            <a href="#features" className="text-brand-text hover:text-brand-primary font-medium transition-colors">{t('navbar.features')}</a>
                            <a href="#pricing" className="text-brand-text hover:text-brand-primary font-medium transition-colors">{t('navbar.pricing')}</a>
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Language Switcher */}
                            <div className="relative group mr-2">
                                <button className="flex items-center gap-1 text-brand-text hover:text-brand-primary transition-colors font-medium">
                                    <Globe size={20} />
                                    <span>{t(`navbar.language.${i18n.resolvedLanguage}`)}</span>
                                </button>
                                <div className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hidden group-hover:block">
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.resolvedLanguage === 'en' ? 'text-brand-primary bg-brand-primary/5 font-bold' : 'text-brand-text hover:bg-gray-50'}`}
                                    >
                                        {t('navbar.language.en')}
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('pt')}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.resolvedLanguage === 'pt' ? 'text-brand-primary bg-brand-primary/5 font-bold' : 'text-brand-text hover:bg-gray-50'}`}
                                    >
                                        {t('navbar.language.pt')}
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('es')}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.resolvedLanguage === 'es' ? 'text-brand-primary bg-brand-primary/5 font-bold' : 'text-brand-text hover:bg-gray-50'}`}
                                    >
                                        {t('navbar.language.es')}
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={onOpenLogin}
                                className="btn-outline py-2.5 px-5 text-sm"
                            >
                                {t('navbar.signIn')}
                            </button>
                            <button
                                onClick={onOpenLogin}
                                className="btn-primary py-2.5 px-5 text-sm shadow-purple-500/20"
                            >
                                {t('navbar.getStarted')}
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-4">
                            <button
                                onClick={() => handleLanguageChange(i18n.resolvedLanguage === 'en' ? 'pt' : i18n.resolvedLanguage === 'pt' ? 'es' : 'en')} // Cycle languages on mobile
                                className="text-brand-text hover:text-brand-primary transition-colors"
                            >
                                <span className="font-bold text-sm">{t(`navbar.language.${i18n.resolvedLanguage}`)}</span>
                            </button>

                            <button
                                onClick={toggleMenu}
                                className="text-brand-text hover:text-brand-primary transition-colors p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-brand-bg border-b border-gray-100 overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-gray-50 hover:text-brand-primary">{t('navbar.howItWorks')}</a>
                                <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-gray-50 hover:text-brand-primary">{t('navbar.features')}</a>
                                <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-gray-50 hover:text-brand-primary">{t('navbar.pricing')}</a>
                                <div className="pt-4 space-y-3">
                                    <button
                                        onClick={() => { onOpenLogin(); setIsMenuOpen(false); }}
                                        className="w-full btn-outline text-center justify-center"
                                    >
                                        {t('navbar.signIn')}
                                    </button>
                                    <button
                                        onClick={() => { onOpenLogin(); setIsMenuOpen(false); }}
                                        className="w-full btn-primary text-center justify-center shadow-none"
                                    >
                                        {t('navbar.getStarted')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -20, x: '-50%' }}
                        className="fixed top-24 left-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl text-sm font-medium"
                    >
                        {t('navbar.toast')}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
