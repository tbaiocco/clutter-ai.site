import React, { useState } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactModal from './ContactModal';
import LegalModal from './LegalModal';

const Footer = () => {
    const { t } = useTranslation();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [legalTab, setLegalTab] = useState(null); // 'privacy', 'terms', or null

    const openLegal = (tab) => {
        setLegalTab(tab);
    };

    return (
        <>
            <footer className="bg-white border-t border-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        <div className="flex items-center gap-2">
                            <img className="h-8 w-auto" src="/logo.png" alt="Clutter.AI" />
                            <span className="font-heading font-bold text-xl text-brand-text">Clutter.AI</span>
                        </div>

                        <div className="flex gap-6 text-sm text-brand-muted">
                            <button
                                onClick={() => openLegal('privacy')}
                                className="hover:text-brand-primary transition-colors"
                            >
                                {t('footer.privacy')}
                            </button>
                            <button
                                onClick={() => openLegal('terms')}
                                className="hover:text-brand-primary transition-colors"
                            >
                                {t('footer.terms')}
                            </button>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (window.displayPreferenceModal) {
                                        window.displayPreferenceModal();
                                    }
                                }}
                                className="termly-display-preferences hover:text-brand-primary transition-colors"
                            >
                                {t('footer.cookies')}
                            </a>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="hover:text-brand-primary transition-colors"
                            >
                                {t('footer.contact')}
                            </button>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-muted hover:bg-brand-primary hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-muted hover:bg-brand-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-muted hover:bg-brand-primary hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-brand-muted/60">
                        &copy; {new Date().getFullYear()} Clutter.AI. {t('footer.rights')}
                    </div>
                </div>
            </footer>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <LegalModal
                isOpen={!!legalTab}
                onClose={() => setLegalTab(null)}
                initialTab={legalTab || 'privacy'}
            />
        </>
    );
};

export default Footer;
