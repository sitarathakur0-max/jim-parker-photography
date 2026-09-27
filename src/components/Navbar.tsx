import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/photographyData';
import { Phone, Menu, X, Star, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0C0C0D]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0C0C0D]/90 via-[#0C0C0D]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <button
          id="nav-logo-button"
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded"
        >
          <span className="block font-serif text-xl sm:text-2xl font-light tracking-[0.2em] text-[#F6F4EE] uppercase transition-colors group-hover:text-white">
            Jim Parker
          </span>
          <span className="block text-[9px] tracking-[0.3em] text-[#9B9891] uppercase font-sans -mt-0.5">
            Photography • Zürich
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs uppercase tracking-[0.25em] transition-all duration-300 py-1 relative ${
                  isActive
                    ? 'text-[#F6F4EE] font-medium'
                    : 'text-[#8E8A81] hover:text-[#ECE9E2]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C8C5BC]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick Contact & Rating */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-[#C8C5BC]">
            <div className="flex text-amber-400">
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="font-semibold text-white">{BUSINESS_INFO.rating}</span>
            <span className="text-[#8E8A81]">({BUSINESS_INFO.reviewCount} Google reviews)</span>
          </div>

          <a
            id="nav-phone-link"
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="flex items-center space-x-2 text-xs text-[#C8C5BC] hover:text-white transition-colors tracking-wider"
            title="Call Jim Parker directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#C8C5BC]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <button
            id="nav-cta-inquire"
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0C0C0D] bg-[#F6F4EE] hover:bg-white transition-all duration-300 rounded font-medium shadow-sm hover:shadow"
          >
            Inquire
          </button>
        </div>

        {/* Mobile Menu Trigger Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="p-2 text-[#C8C5BC] hover:text-white"
            aria-label="Call phone number"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F6F4EE] hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 top-[60px] bg-[#0C0C0D] z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto border-t border-white/10"
        >
          <div className="space-y-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] pb-2 border-b border-white/5">
              Menu Navigation
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-2xl font-serif tracking-[0.1em] py-1 transition-colors flex items-center justify-between ${
                    currentPage === link.id
                      ? 'text-[#F6F4EE] font-medium'
                      : 'text-[#8E8A81] hover:text-[#ECE9E2]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-[#C8C5BC]">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>{BUSINESS_INFO.rating} Rating on Google ({BUSINESS_INFO.reviewCount} reviews)</span>
            </div>

            <div className="text-xs text-[#8E8A81]">
              <p>{BUSINESS_INFO.location}</p>
              <p className="mt-1">By appointment for wedding & portrait inquiries</p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex-1 py-3 bg-white/10 hover:bg-white/15 text-center text-xs tracking-wider uppercase text-white rounded border border-white/10"
              >
                Call Studio
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex-1 py-3 bg-[#F6F4EE] text-center text-xs tracking-wider uppercase text-[#0C0C0D] rounded font-medium"
              >
                Book Date
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
