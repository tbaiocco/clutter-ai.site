import React, { useMemo, useState } from 'react';
import { BriefcaseBusiness, CarFront, Camera, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap = [BriefcaseBusiness, CarFront, Camera];

const Hero = () => {
  const { t } = useTranslation();
  const scenarios = t('guide.hero.scenarios', { returnObjects: true }) as Array<{
    title: string;
    body: string;
    label: string;
  }>;
  const [active, setActive] = useState(0);

  const safeScenarios = useMemo(() => (Array.isArray(scenarios) ? scenarios : []), [scenarios]);

  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-44 w-44 rounded-full bg-brand-primary/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {t('guide.hero.kicker')}
          </p>
          <h1 className="text-balance text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t('guide.hero.headline')}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {t('guide.hero.subheadline')}
          </p>
          <a
            href="#commands"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3 font-bold text-white shadow-lg transition hover:scale-[1.01]"
          >
            {t('guide.hero.primaryCta')}
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid gap-4">
          {safeScenarios.map((scenario, idx) => {
            const ScenarioIcon = iconMap[idx] ?? BriefcaseBusiness;
            const isActive = idx === active;
            return (
              <button
                key={scenario.title}
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className={`rounded-2xl border p-5 text-left transition ${
                  isActive
                    ? 'border-brand-primary/30 bg-gradient-to-r from-brand-primary/8 to-brand-secondary/8 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-slate-900 p-2 text-white">
                    <ScenarioIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{scenario.label}</p>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{scenario.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{scenario.body}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
