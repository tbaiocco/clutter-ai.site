import React from 'react';
import {
  Bot,
  CalendarClock,
  Compass,
  Search,
  PackageSearch,
  Sparkles,
  AudioLines,
  Image,
  Workflow,
  ShieldCheck,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import audioCapture from '../assets/screenshots/audio-capture.png';
import photoCapture from '../assets/screenshots/photo-capture.png';
import startShot from '../assets/screenshots/start.png';
import helpShot from '../assets/screenshots/help.png';
import reminderShot from '../assets/screenshots/reminder.png';
import morningDigestShot from '../assets/screenshots/morning-digest.png';
import userWebUiShot from '../assets/screenshots/user-webui.png';
import fuzzyMatchShot from '../assets/screenshots/fuzzy-match.png';
import profileSettingsShot from '../assets/screenshots/user-profile-settings.png';
import feedbackShot from '../assets/screenshots/feedbacks.png';

const commandIcons = [Bot, Compass, CalendarClock, PackageSearch, Search, Sparkles];

const Features = () => {
  const { t } = useTranslation();

  const commands = t('guide.commands.items', { returnObjects: true }) as Array<{
    command: string;
    description: string;
  }>;

  const journey = [
    {
      title: t('guide.journey.capture.title'),
      description: t('guide.journey.capture.description'),
      images: [
        { src: audioCapture, alt: 'Audio capture via WhatsApp' },
        { src: photoCapture, alt: 'Photo capture with extracted context' },
      ],
    },
    {
      title: t('guide.journey.processing.title'),
      description: t('guide.journey.processing.description'),
      images: [
        { src: startShot, alt: 'Bot onboarding with start command' },
        { src: helpShot, alt: 'Help command with invisible UI commands' },
      ],
    },
    {
      title: t('guide.journey.action.title'),
      description: t('guide.journey.action.description'),
      images: [
        { src: reminderShot, alt: 'Proactive reminder card' },
        { src: morningDigestShot, alt: 'Morning digest summary' },
      ],
    },
    {
      title: t('guide.journey.web.title'),
      description: t('guide.journey.web.description'),
      images: [
        { src: userWebUiShot, alt: 'Web UI with temporal buckets' },
        { src: fuzzyMatchShot, alt: 'Natural language fuzzy search' },
        { src: profileSettingsShot, alt: 'Profile settings and clarity rituals' },
      ],
    },
    {
      title: t('guide.journey.feedback.title'),
      description: t('guide.journey.feedback.description'),
      images: [{ src: feedbackShot, alt: 'Feedback channel for product evolution' }],
    },
  ];

  return (
    <>
      <section id="commands" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('guide.commands.title')}</h2>
          <p className="mt-3 max-w-3xl text-slate-600">{t('guide.commands.subtitle')}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {commands.map((item, idx) => {
            const Icon = commandIcons[idx] ?? Bot;
            return (
              <div key={item.command} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 inline-flex rounded-lg bg-slate-900 p-2 text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="font-mono text-sm font-bold text-brand-primary">{item.command}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="journey" className="border-y border-slate-200/80 bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('guide.journey.title')}</h2>
          <p className="mt-3 max-w-3xl text-slate-600">{t('guide.journey.subtitle')}</p>

          <div className="mt-10 space-y-10">
            {journey.map((block) => (
              <article key={block.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                <p className="mt-3 text-slate-600">{block.description}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {block.images.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="entropy" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <AudioLines className="mb-3 h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-bold text-slate-900">{t('guide.entropy.input.title')}</h3>
            <p className="mt-2 text-slate-700">{t('guide.entropy.input.body')}</p>
          </article>
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <Workflow className="mb-3 h-6 w-6 text-emerald-600" />
            <h3 className="text-xl font-bold text-slate-900">{t('guide.entropy.output.title')}</h3>
            <p className="mt-2 text-slate-700">{t('guide.entropy.output.body')}</p>
          </article>
          <article className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <ShieldCheck className="mb-3 h-6 w-6 text-sky-600" />
            <h3 className="text-xl font-bold text-slate-900">{t('guide.entropy.data.title')}</h3>
            <p className="mt-2 text-slate-700">{t('guide.entropy.data.body')}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Features;
