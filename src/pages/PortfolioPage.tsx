import React, { useState } from 'react';
import { PageId, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, BUSINESS_INFO } from '../data/photographyData';
import { Eye, ArrowUpRight, Phone, SlidersHorizontal, MapPin } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [filter, setFilter] = useState<'all' | 'wedding' | 'portrait' | 'couple'>('all');

  const filteredItems =
    filter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="space-y-4 border-b border-white/10 pb-12">
        <div className="flex items-center space-x-3 text-xs tracking-[0.25em] uppercase text-[#8E8A81]">
          <span>Curated Archive</span>
          <span className="text-white/20">•</span>
          <span>Jim Parker Photography</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-7xl text-[#F6F4EE] font-light uppercase tracking-[-0.01em] leading-tight">
          Selected Portfolio <br />
          <span className="italic text-[#C8C5BC] lowercase">of</span> Moments & Light
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-[#9B9891] leading-relaxed">
          A showcase of authentic wedding narratives, character portraits, and candid couple stories captured in Zürich and beyond. 
          Select any image to open the full-screen viewing room.
        </p>
      </section>

      {/* Filter Control Bar */}
      <section className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/10 text-xs">
        <div className="flex items-center space-x-2 text-[#8E8A81]">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="uppercase tracking-[0.2em]">Filter Archive:</span>
        </div>

        <div className="flex items-center space-x-2 border border-white/15 p-1 rounded bg-black/40">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded transition-all text-xs tracking-wider uppercase ${
              filter === 'all'
                ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium'
                : 'text-[#8E8A81] hover:text-white'
            }`}
          >
            All Works ({PORTFOLIO_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter('wedding')}
            className={`px-3.5 py-1.5 rounded transition-all text-xs tracking-wider uppercase ${
              filter === 'wedding'
                ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium'
                : 'text-[#8E8A81] hover:text-white'
            }`}
          >
            Weddings ({PORTFOLIO_ITEMS.filter((i) => i.category === 'wedding').length})
          </button>
          <button
            onClick={() => setFilter('portrait')}
            className={`px-3.5 py-1.5 rounded transition-all text-xs tracking-wider uppercase ${
              filter === 'portrait'
                ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium'
                : 'text-[#8E8A81] hover:text-white'
            }`}
          >
            Portraits ({PORTFOLIO_ITEMS.filter((i) => i.category === 'portrait').length})
          </button>
          <button
            onClick={() => setFilter('couple')}
            className={`px-3.5 py-1.5 rounded transition-all text-xs tracking-wider uppercase ${
              filter === 'couple'
                ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium'
                : 'text-[#8E8A81] hover:text-white'
            }`}
          >
            Couples ({PORTFOLIO_ITEMS.filter((i) => i.category === 'couple').length})
          </button>
        </div>
      </section>

      {/* Asymmetrical Editorial Portfolio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => {
          const isSpanTwo = index === 0 || index === 3;
          return (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className={`group relative cursor-pointer rounded-sm overflow-hidden border border-white/10 bg-[#121215] transition-all duration-500 hover:border-white/30 flex flex-col justify-between ${
                isSpanTwo ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Image Container */}
              <div
                className={`w-full overflow-hidden relative bg-black/60 ${
                  isSpanTwo ? 'aspect-[16/10]' : 'aspect-[3/4]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Editorial Caption Bar */}
              <div className="p-5 border-t border-white/5 space-y-2 bg-[#121215]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8C5BC]">
                    {item.categoryLabel}
                  </span>
                  <span className="flex items-center space-x-1 text-[#8E8A81] text-[11px]">
                    <MapPin className="w-3 h-3 text-[#8E8A81]" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#F6F4EE] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8E8A81] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Inquiry Callout */}
      <section className="p-8 sm:p-12 rounded-sm bg-[#121215] border border-white/10 text-center space-y-6">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
          Custom Commission
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
          Like a Specific Style You See Here?
        </h3>
        <p className="text-xs sm:text-sm text-[#C8C5BC] max-w-lg mx-auto">
          We can tailor the coverage style, lighting, and pacing to match your wedding or portrait desires. Contact Jim Parker to discuss your ideas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded bg-[#F6F4EE] text-[#0C0C0D] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium transition-all"
          >
            Inquire About Your Date
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3 rounded border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:border-white transition-all flex items-center space-x-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
