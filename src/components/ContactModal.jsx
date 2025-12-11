import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden p-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Content */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {t('contact.title')}
                            </h2>
                            <p className="text-gray-500">
                                {t('contact.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Email Link */}
                            <a
                                href="mailto:ask@theclutter.app"
                                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#B929EB]/20 hover:bg-[#B929EB]/5 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#B929EB]/10 flex items-center justify-center text-[#B929EB] group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500 font-medium">
                                        {t('contact.emailLabel')}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        ask@theclutter.app
                                    </p>
                                </div>
                            </a>

                            {/* WhatsApp Link */}
                            <a
                                href="https://wa.me/351964938153"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#B929EB]/20 hover:bg-[#B929EB]/5 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#B929EB]/10 flex items-center justify-center text-[#B929EB] group-hover:scale-110 transition-transform">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500 font-medium">
                                        {t('contact.whatsappLabel')}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        +351 964 938 153
                                    </p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
