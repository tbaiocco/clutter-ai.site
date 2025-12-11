import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LegalModal = ({ isOpen, onClose, initialTab = 'privacy' }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab);
        }
    }, [isOpen, initialTab]);

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
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-10">
                            <h2 className="text-xl font-bold text-gray-900">
                                {t('legal.lastUpdated')}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 p-2 rounded-full hover:bg-gray-100"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex p-2 gap-2 bg-gray-50/50">
                            <button
                                onClick={() => setActiveTab('privacy')}
                                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'privacy'
                                        ? 'bg-[#B929EB] text-white shadow-lg shadow-purple-500/20'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                    }`}
                            >
                                {t('legal.tabs.privacy')}
                            </button>
                            <button
                                onClick={() => setActiveTab('terms')}
                                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'terms'
                                        ? 'bg-[#B929EB] text-white shadow-lg shadow-purple-500/20'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                    }`}
                            >
                                {t('legal.tabs.terms')}
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <div className="prose prose-slate prose-sm max-w-none">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: activeTab === 'privacy'
                                            ? t('legal.privacyContent')
                                            : t('legal.termsContent')
                                    }}
                                />
                            </div>
                        </div>

                        {/* Footer (Actions) */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
