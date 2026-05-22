import React, { useEffect } from 'react';
import { Globe, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type GuideLayoutProps = {
  children: React.ReactNode;
};

const SEO_META_NAME = 'description';
const SEO_KEYWORDS_NAME = 'keywords';
const OG_TITLE = 'og:title';
const OG_DESCRIPTION = 'og:description';

const upsertMetaByName = (name: string, content: string) => {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let meta = document.head.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const Layout = ({ children }: GuideLayoutProps) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('guide.seo.title');
    upsertMetaByName(SEO_META_NAME, t('guide.seo.description'));
    upsertMetaByName(SEO_KEYWORDS_NAME, t('guide.seo.keywords'));
    upsertMetaByProperty(OG_TITLE, t('guide.seo.title'));
    upsertMetaByProperty(OG_DESCRIPTION, t('guide.seo.description'));
  }, [t, i18n.resolvedLanguage]);

  const languages = ['pt', 'en', 'es'];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight">
            <img className="h-10 w-auto" src="/logo.png" alt="Clutter.AI" />
            <span>Clutter.AI</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 sm:flex">
              <Globe className="h-4 w-4" />
              <span>{t('guide.layout.language')}</span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
                    i18n.resolvedLanguage === lang
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:px-6">
          <p>{t('guide.layout.footer')}</p>
          <a className="font-semibold text-brand-primary" href="https://theclutter.app" target="_blank" rel="noreferrer">
            theclutter.app
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
