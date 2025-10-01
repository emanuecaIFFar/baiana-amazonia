
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GeminiChat from './components/GeminiChat';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a140c] text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GeminiChat />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
