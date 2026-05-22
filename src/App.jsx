import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import GuidePage from './guide/GuidePage';
import { useTranslation } from 'react-i18next';

const upsertMetaByName = (name, content) => {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertMetaByProperty = (property, content) => {
  let meta = document.head.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isGuideRoute = window.location.pathname === '/guide' || window.location.pathname === '/guide/';

  const openLogin = () => setIsLoginOpen(true);

  useEffect(() => {
    if (isGuideRoute) {
      return;
    }

    document.title = t('seo.home.title');
    upsertMetaByName('description', t('seo.home.description'));
    upsertMetaByName('keywords', t('seo.home.keywords'));
    upsertMetaByName('robots', 'index, follow');
    upsertMetaByProperty('og:title', t('seo.home.title'));
    upsertMetaByProperty('og:description', t('seo.home.description'));
    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:url', 'https://theclutter.app/');
  }, [isGuideRoute, t, i18n.resolvedLanguage]);

  if (isGuideRoute) {
    return <GuidePage />;
  }

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white">
      <Navbar onOpenLogin={openLogin} />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing onOpenLogin={openLogin} />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
