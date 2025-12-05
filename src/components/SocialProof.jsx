import React from 'react';
import { Trans } from 'react-i18next';

const SocialProof = () => {
    return (
        <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-4 bg-white py-3 px-6 rounded-full shadow-lg shadow-gray-100 border border-gray-100">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr ${i === 1 ? 'from-purple-500 to-indigo-500' :
                                i === 2 ? 'from-blue-500 to-cyan-500' :
                                    i === 3 ? 'from-pink-500 to-rose-500' :
                                        'from-amber-500 to-orange-500'
                            }`} />
                    ))}
                </div>
                <p className="text-sm font-medium text-brand-text">
                    <Trans i18nKey="features.socialProof" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary" /> }} />
                </p>
            </div>
        </div>
    );
};

export default SocialProof;
