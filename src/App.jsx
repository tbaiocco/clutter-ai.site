import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);

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
