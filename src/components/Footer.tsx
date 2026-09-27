import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/photographyData';
import { Phone, MapPin, Star, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="primary-site-footer" className="bg-[#080809] border-t border-white/10 text-[#8E8A81] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Architectural Header */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block mb-2">
              Independent Photography Studio • Switzerland
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F6F4EE] font-light tracking-[0.05em] uppercase">
              Jim Parker Photography
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              id="footer-call-cta"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded border border-white/20 text-[#ECE9E2] hover:text-white hover:border-white/40 transition-all text-xs uppercase tracking-[0.2em]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8C5BC]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              id="footer-inquire-cta"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#F6F4EE] text-[#0C0C0D] hover:bg-white transition-all text-xs uppercase tracking-[0.2em] font-medium"
            >
              <span>Request Availability</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-xs">
          {/* Col 1: Studio Location */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#ECE9E2] font-medium">
              Studio Address
            </div>
            <div className="flex items-start space-x-2 text-[#C8C5BC] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#8E8A81] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{BUSINESS_INFO.street}</p>
                <p>{BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}, Switzerland</p>
                <p className="text-[11px] text-[#8E8A81] mt-2">
                  Studio visits and wedding consultations by appointment.
                </p>
              </div>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[11px] text-[#C8C5BC] hover:text-white transition-colors underline underline-offset-4"
            >
              <span>View on Google Maps</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Col 2: Verified Rating Highlight */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#ECE9E2] font-medium">
              Verified Client Rating
            </div>
            <div className="p-4 rounded bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-serif font-light text-white">{BUSINESS_INFO.rating}</span>
                <div className="flex text-amber-400 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#C8C5BC]">
                Based on <strong className="text-white">{BUSINESS_INFO.reviewCount} verified reviews</strong> on Google.
              </p>
              <p className="text-[11px] text-[#8E8A81] leading-normal">
                Committed to candid documentary excellence, quiet professionalism, and handcrafted archival results.
              </p>
            </div>
          </div>

          {/* Col 3: Photography Focus */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#ECE9E2] font-medium">
              Photography Focus
            </div>
            <ul className="space-y-2.5 text-[#C8C5BC]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Wedding Photography (Civil & Celebrations)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Editorial & Studio Portraits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Couples & Intimate Storytelling
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Curated Black & White Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigation Links */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#ECE9E2] font-medium">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[#C8C5BC]">
              {(['home', 'about', 'services', 'portfolio', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors uppercase tracking-[0.15em] text-[11px]"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E6A62] gap-4">
          <p>© {new Date().getFullYear()} Jim Parker Photography. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span>Heimatstrasse 7, 8003 Zürich</span>
            <span>•</span>
            <span>Tel: {BUSINESS_INFO.phone}</span>
          </div>
          <p className="flex items-center gap-1">
            <span>Cinematic & Documentary Craft</span>
            <Heart className="w-3 h-3 text-[#8E8A81]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
