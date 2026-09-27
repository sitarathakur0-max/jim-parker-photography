import React, { useState, useEffect } from 'react';
import { PageId, PortfolioItem } from './types';
import { PORTFOLIO_ITEMS } from './data/photographyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PortfolioLightbox } from './components/PortfolioLightbox';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Sync page state with window hash or default to 'home'
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (['home', 'about', 'services', 'portfolio', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedService, setSelectedService] = useState<string>('Wedding Photography');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync hash when hashchange occurs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'portfolio', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (item: PortfolioItem) => {
    const idx = PORTFOLIO_ITEMS.findIndex((p) => p.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleLightboxInquire = (item: PortfolioItem) => {
    setSelectedService(item.categoryLabel);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0C0C0D] text-[#ECE9E2] selection:bg-[#F6F4EE] selection:text-[#0C0C0D] relative">
      {/* Top Fixed / Floating Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceForInquiry={(svc) => setSelectedService(svc)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={navigateTo}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            prefilledService={selectedService}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Primary Architectural Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Fullscreen Portfolio Lightbox */}
      <PortfolioLightbox
        items={PORTFOLIO_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigateIndex={(index) => setLightboxIndex(index)}
        onInquire={handleLightboxInquire}
      />
    </div>
  );
}
