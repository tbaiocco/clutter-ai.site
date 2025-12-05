import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BOT_WHATSAPP_NUMBER = "YOUR_BOT_NUMBER";
const BOT_TELEGRAM_USER = "YOUR_BOT_USER";

export default function OnboardingForm() {
    const { t } = useTranslation();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    // Schema must be inside component to use t() or use useMemo depend on t
    // Alternatively, use zod errorMap or simple message overriding
    // For simplicity, defining here to capture t() closure
    const schema = z.object({
        email: z.string().email(t('onboarding.errors.emailInvalid')),
        phoneNumber: z.string().min(1, t('onboarding.errors.phoneRequired')),
    });

    // Detect default country from browser language
    // e.g., "en-US" -> "US", "pt-BR" -> "BR", "es" -> fallback to "US" if not found
    const defaultCountry = React.useMemo(() => {
        const lang = navigator.language || 'en-US';
        const parts = lang.split('-');
        if (parts.length > 1) {
            return parts[1].toUpperCase();
        }
        return 'US'; // Fallback
    }, []);

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            phoneNumber: ''
        }
    });

    const onSubmit = async (data) => {
        setStatus('loading');
        setErrorMessage('');

        try {
            const payload = {
                email: data.email,
                phoneNumber: data.phoneNumber,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                language: navigator.language || 'en-US'
            };

            await axios.post('/users', payload);
            setStatus('success');
        } catch (error) {
            console.error(error);
            const msg = error.response?.data?.message || t('onboarding.errors.generic');
            setErrorMessage(msg);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto text-center border border-purple-100 animate-fade-in">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('onboarding.success.title')}</h2>
                <p className="text-gray-600 mb-8">
                    {t('onboarding.success.message')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`https://wa.me/${BOT_WHATSAPP_NUMBER}?text=Start`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center py-3.5 px-6 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1fad55] transition-transform hover:scale-[1.02] active:scale-[0.98] gap-2 shadow-md hover:shadow-lg"
                    >
                        {t('onboarding.success.whatsapp')}
                    </a>
                    <a
                        href={`https://t.me/${BOT_TELEGRAM_USER}?start=start`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center py-3.5 px-6 rounded-xl font-semibold text-white bg-[#0088cc] hover:bg-[#0077b3] transition-transform hover:scale-[1.02] active:scale-[0.98] gap-2 shadow-md hover:shadow-lg"
                    >
                        {t('onboarding.success.telegram')}
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto border border-purple-100 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('onboarding.title')}</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                        {t('onboarding.emailLabel')}
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        disabled={status === 'loading'}
                        className={`w-full h-12 px-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#B929EB] focus:border-[#B929EB] transition-all bg-gray-50 text-gray-900 placeholder-gray-400
                    ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 hover:border-gray-300'}`}
                        placeholder={t('onboarding.emailPlaceholder')}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1.5 ml-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                        {t('onboarding.phoneLabel')}
                    </label>
                    <div className={`phone-input-container rounded-xl border overflow-hidden bg-gray-50 focus-within:ring-2 focus-within:ring-[#B929EB] focus-within:border-[#B929EB] transition-all
                  ${errors.phoneNumber ? 'border-red-500 focus-within:ring-red-200' : 'border-gray-200 hover:border-gray-300'}`}>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    international
                                    defaultCountry={defaultCountry}
                                    disabled={status === 'loading'}
                                    className="flex h-12 items-center px-4 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:text-gray-900 [&_.PhoneInputCountry]:mr-2"
                                    placeholder={t('onboarding.phonePlaceholder')}
                                />
                            )}
                        />
                    </div>
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1.5 ml-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl animate-fade-in">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-12 bg-[#B929EB] hover:bg-[#a024cc] text-white font-bold rounded-xl transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg mt-2 transform active:scale-[0.99]"
                >
                    {status === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        t('onboarding.submit')
                    )}
                </button>
            </form>
        </div>
    );
}
