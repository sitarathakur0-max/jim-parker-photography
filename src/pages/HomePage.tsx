import React, { useState } from 'react';
import { PageId, PortfolioItem } from '../types';
import {
  BUSINESS_INFO,
  IMAGES,
  PORTFOLIO_ITEMS,
  SERVICES_LIST,
  PROCESS_STEPS,
  EXPECTATIONS,
} from '../data/photographyData';
import { ContactInquiryForm } from '../components/ContactInquiryForm';
import {
  Star,
  ArrowUpRight,
  Phone,
  MapPin,
  Camera,
  Compass,
  CheckCircle,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenLightbox }) => {
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'wedding' | 'portrait' | 'couple'>('all');

  const filteredPortfolio =
    portfolioFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === portfolioFilter);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* =========================================================================
          SECTION 1: HERO (Cinematic Editorial, Full-Bleed Composition, Typography)
          ========================================================================= */}
      <section
        id="home-hero-section"
        className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden border-b border-white/10"
      >
        {/* Subtle background ambient gradient */}
        <div className="absolute inset-0 bg-radial from-[#1A1A20]/40 via-[#0C0C0D] to-[#0C0C0D] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {/* Top Editorial Eyebrow & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3 text-xs tracking-[0.25em] uppercase text-[#8E8A81]">
              <span className="w-2 h-2 rounded-full bg-[#C8C5BC]" />
              <span>Independent Photography Studio</span>
              <span className="text-white/20">•</span>
              <span className="text-[#C8C5BC]">{BUSINESS_INFO.location}</span>
            </div>

            {/* Google Rating Verified Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs text-[#ECE9E2]">
              <div className="flex text-amber-400 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">{BUSINESS_INFO.rating}</span>
              <span className="text-[#8E8A81]">({BUSINESS_INFO.reviewCount} Google reviews)</span>
            </div>
          </div>

          {/* Massive Editorial Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-[#F6F4EE] font-light tracking-[-0.01em] uppercase leading-[0.95]">
              Observing Life <br />
              <span className="italic font-normal text-[#C8C5BC] lowercase">in</span> Shadow & Light
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-[#9B9891] leading-relaxed font-light">
              Jim Parker Photography creates cinematic, documentary wedding and editorial photographs based out of Zürich. 
              Grounded in quiet observation, natural daylight, and unforced human intimacy.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              id="hero-explore-portfolio-button"
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-3.5 bg-[#F6F4EE] hover:bg-white text-[#0C0C0D] rounded-sm font-medium uppercase tracking-[0.2em] text-xs transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="hero-inquire-dates-button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-sm font-light uppercase tracking-[0.2em] text-xs transition-all border border-white/15"
            >
              Check Wedding Dates
            </button>

            <a
              id="hero-direct-call-link"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center space-x-2 px-4 py-3.5 text-xs tracking-wider text-[#C8C5BC] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Full-Bleed Asymmetrical Hero Visual */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 relative z-10">
          <div className="relative rounded-sm overflow-hidden border border-white/15 group bg-black/60 aspect-[16/9] sm:aspect-[21/9] max-h-[520px]">
            <img
              src={IMAGES.heroWedding}
              alt="Cinematic black and white documentary wedding photography in Zurich"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] editorial-img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D] via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 text-xs">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8E8A81] block">
                  Signature Wedding Series
                </span>
                <p className="font-serif text-lg text-white font-normal">
                  The Courtyard Procession • Zürich
                </p>
              </div>
              <span className="text-[11px] text-[#C8C5BC] font-mono">
                Documentary 35mm • Natural Daylight
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PHOTOGRAPHY PHILOSOPHY & VISION
          ========================================================================= */}
      <section id="home-philosophy-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
              01 / Photography Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-[0.05em] leading-tight">
              Quiet Observation, Unhurried Presence
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#C8C5BC] leading-relaxed font-light">
            <p className="text-white text-lg sm:text-xl font-serif italic">
              "The most profound photographs are rarely staged. They happen in the quiet spaces between events—when people forget the lens exists."
            </p>
            <p>
              At Jim Parker Photography, photography is approached not as a performance or a rigid checklist, but as an observational craft. 
              Operating independently from the studio at Heimatstrasse 7 in Zürich, every commission is treated with individual dedication. 
              Rather than directing every movement or interrupting authentic emotions with artificial gear, Jim blends into the background, 
              allowing genuine laughter, quiet embraces, and atmospheric subtleties to emerge organically.
            </p>
            <p>
              This philosophy produces timeless documentary images: rich monochrome contrast, natural light that honors real skin textures, 
              and editorial framing that holds its elegance across generations.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 text-xs text-[#8E8A81]">
              <div>
                <strong className="block text-white uppercase tracking-[0.15em] mb-1">
                  Documentary Truth
                </strong>
                Preserving spontaneous, unposed emotions without artificial interference.
              </div>
              <div>
                <strong className="block text-white uppercase tracking-[0.15em] mb-1">
                  Natural Daylight
                </strong>
                Using architectural light and atmosphere rather than harsh synthetic flash.
              </div>
              <div>
                <strong className="block text-white uppercase tracking-[0.15em] mb-1">
                  Archival Longevity
                </strong>
                Monochrome and muted tones that transcend short-lived social media filters.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SIGNATURE DISCIPLINE — WEDDING PHOTOGRAPHY
          ========================================================================= */}
      <section
        id="home-wedding-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-b border-white/10"
      >
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block mb-2">
                02 / Signature Focus
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase tracking-[0.05em]">
                Wedding Photography
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C8C5BC] hover:text-white transition-colors"
            >
              <span>View Wedding Coverage Options</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetrical Feature Layout: Image & Editorial Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative group rounded-sm overflow-hidden border border-white/15 bg-black/60 aspect-[4/3]">
              <img
                src={IMAGES.intimateWedding}
                alt="Intimate candid wedding ceremony documentary photograph"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E8A81]">
                    Documentary Nuance
                  </span>
                  <p className="font-serif text-base text-white">
                    Unspoken vows & raw human emotion
                  </p>
                </div>
                <span className="text-white/60">Zürich Registry & Venues</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 text-sm text-[#C8C5BC] font-light leading-relaxed">
              <h3 className="font-serif text-2xl text-white font-normal">
                Stories Told with Integrity, Not Poses
              </h3>
              <p>
                Weddings are vibrant, deeply personal gatherings composed of countless subtle interactions—a nervous glance before stepping into the ceremony, 
                a tear wiped away during the toasts, hands quietly clasped beneath the dinner table.
              </p>
              <p>
                Jim Parker photographs weddings with a documentary mindset. Rather than pulling you away for hours of stiff poses, 
                the goal is to keep you immersed in your celebration with family and friends. Couple portraits are approached as a calm, 
                refreshing stroll where you simply enjoy a moment together in beautiful light.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Civil Weddings in Zürich:</strong> Seamless, discreet documentation at Stadthaus Zürich and regional registry halls.
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Full-Day Celebrations:</strong> Complete morning preparations to evening ambiance.
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Destination Commissions:</strong> Available across Switzerland and European destinations.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-[0.2em] border border-white/15 transition-all"
                >
                  Inquire For Your Wedding Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OTHER PHOTOGRAPHY SERVICES (Editorial Portraits & Couples)
          ========================================================================= */}
      <section id="home-other-services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block mb-2">
                03 / Diverse Disciplines
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase tracking-[0.05em]">
                Portraits & Intimate Stories
              </h2>
            </div>
            <p className="text-xs text-[#8E8A81] max-w-sm">
              Beyond wedding days, the studio welcomes commissions for individual character portraits, creative editorial assignments, and couple sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service Card 1: Editorial Portraits */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121215] border border-white/10 space-y-6 flex flex-col justify-between group hover:border-white/25 transition-all">
              <div className="space-y-4">
                <div className="aspect-[3/4] max-h-[380px] w-full rounded-sm overflow-hidden border border-white/10 bg-black/60">
                  <img
                    src={IMAGES.editorialPortrait}
                    alt="Editorial black and white studio portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A81]">
                    Studio & Location
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    Editorial & Creative Portraits
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8A81] leading-relaxed">
                    Thoughtful character studies illuminated by natural chiaroscuro light. Tailored for artists, professionals, performers, and personal documentation without synthetic corporate stiffness.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#C8C5BC]">Studio Heimatstrasse 7, Zürich</span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs uppercase tracking-[0.2em] text-white hover:text-[#C8C5BC] flex items-center space-x-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service Card 2: Couple Sessions */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121215] border border-white/10 space-y-6 flex flex-col justify-between group hover:border-white/25 transition-all">
              <div className="space-y-4">
                <div className="aspect-[3/4] max-h-[380px] w-full rounded-sm overflow-hidden border border-white/10 bg-black/60">
                  <img
                    src={IMAGES.coupleStory}
                    alt="Candid couple editorial photograph walking in Zurich"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A81]">
                    Outdoor & Architectural
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    Couples & Engagement Stories
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8A81] leading-relaxed">
                    Unscripted sessions built around real movement and unforced conversation. We explore the architectural textures of Zürich, lake shores, or natural Swiss landscapes.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#C8C5BC]">Zürich & Surrounds</span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs uppercase tracking-[0.2em] text-white hover:text-[#C8C5BC] flex items-center space-x-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: STORYTELLING & CREATIVE PROCESS
          ========================================================================= */}
      <section id="home-process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-sm bg-[#0E0E10] border border-white/10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
              04 / Storytelling & Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-[0.05em]">
              From First Conversation to Archival Delivery
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8A81]">
              A transparent, calm four-stage journey designed to give you peace of mind so you can simply live your day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="space-y-3 border-l border-white/15 pl-5 relative">
                <span className="font-serif text-2xl text-[#C8C5BC] font-light block">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-white font-normal">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8E8A81] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SELECTED PORTFOLIO SHOWCASE (Interactive Grid & Lightbox)
          ========================================================================= */}
      <section id="home-portfolio-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block mb-2">
                05 / Selected Works
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase tracking-[0.05em]">
                Editorial Archive
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-2 border border-white/15 p-1 rounded bg-black/40 text-xs">
              <button
                onClick={() => setPortfolioFilter('all')}
                className={`px-3 py-1 rounded transition-all ${
                  portfolioFilter === 'all' ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium' : 'text-[#8E8A81] hover:text-white'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setPortfolioFilter('wedding')}
                className={`px-3 py-1 rounded transition-all ${
                  portfolioFilter === 'wedding' ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium' : 'text-[#8E8A81] hover:text-white'
                }`}
              >
                Weddings
              </button>
              <button
                onClick={() => setPortfolioFilter('portrait')}
                className={`px-3 py-1 rounded transition-all ${
                  portfolioFilter === 'portrait' ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium' : 'text-[#8E8A81] hover:text-white'
                }`}
              >
                Portraits
              </button>
              <button
                onClick={() => setPortfolioFilter('couple')}
                className={`px-3 py-1 rounded transition-all ${
                  portfolioFilter === 'couple' ? 'bg-[#F6F4EE] text-[#0C0C0D] font-medium' : 'text-[#8E8A81] hover:text-white'
                }`}
              >
                Couples
              </button>
            </div>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-black/80 transition-all hover:border-white/30 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[3/4]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8C5BC] block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#8E8A81] mt-0.5">{item.location}</p>
                  </div>
                  <span className="p-2 rounded-full bg-white/10 text-white backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded border border-white/20 text-xs uppercase tracking-[0.2em] text-[#C8C5BC] hover:text-white hover:border-white transition-all"
            >
              <span>View Complete Portfolio Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT CLIENTS CAN EXPECT
          ========================================================================= */}
      <section id="home-expectations-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="max-w-xl space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
              06 / Client Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-[0.05em]">
              What Clients Can Expect
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8A81]">
              No awkward posing, no stress, no unexpected surprises. Just calm professionalism from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPECTATIONS.map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-sm bg-[#121215] border border-white/10 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8C5BC]" />
                  <h3 className="font-serif text-xl text-white font-normal">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8E8A81] leading-relaxed pl-4.5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: STUDIO / BUSINESS INTRODUCTION (Zürich Roots & Craft)
          ========================================================================= */}
      <section
        id="home-studio-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-b border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
                07 / The Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase tracking-[0.05em]">
                Heimatstrasse 7, Zürich
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#C8C5BC] font-light leading-relaxed">
              Jim Parker operates an independent photography practice rooted in the vibrant Wiedikon district of Zürich. 
              The studio serves as a calm creative meeting space where couples and portrait clients can discuss ideas, 
              view physical print samples, and collaborate on the vision for their celebrations.
            </p>
            <p className="text-xs sm:text-sm text-[#8E8A81] leading-relaxed">
              Whether documenting a civil marriage at the Zürich Stadthaus, a full weekend celebration by Lake Zürich, 
              or traveling to scenic alpine valleys, the local base provides deep familiarity with Swiss venues, lighting conditions, 
              and seasonal weather rhythms.
            </p>

            <div className="p-4 rounded bg-white/[0.03] border border-white/10 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-white font-medium">
                <MapPin className="w-4 h-4 text-[#C8C5BC]" />
                <span>Heimatstrasse 7, 8003 Zürich, Switzerland</span>
              </div>
              <p className="text-[#8E8A81]">
                Consultations and studio sessions by appointment. Direct telephone contact:{' '}
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-sm overflow-hidden border border-white/15 bg-black/60 aspect-[4/3] relative">
              <img
                src={IMAGES.weddingCandid}
                alt="Atmospheric documentary wedding morning scene"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#C8C5BC] flex justify-between items-center">
                <span>Morning Preparation Light</span>
                <span className="text-[#8E8A81]">Zürich Studio Collection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: VERIFIED REVIEW HIGHLIGHT (Exact 5.0/5 from 16 Google Reviews)
          ========================================================================= */}
      <section id="home-reviews-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-sm bg-gradient-to-b from-[#141418] to-[#0D0D10] border border-white/15 text-center space-y-8 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
              08 / Client Trust & Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase tracking-[0.05em]">
              5.0 / 5.0 on Google
            </h2>
            <p className="text-xs sm:text-sm text-[#C8C5BC] leading-relaxed">
              Based on <strong className="text-white">16 verified client reviews</strong> on Google. 
              Reflecting unwavering dedication to discreet presence, artistic authenticity, and prompt communication.
            </p>
          </div>

          {/* Large Visual Rating Display */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="flex text-amber-400 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#8E8A81]">
              100% 5-Star Recommendation Score
            </div>
          </div>

          {/* Authentic Rating Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6 border-t border-white/10 text-xs text-left">
            <div className="p-4 rounded bg-black/40 border border-white/5 space-y-1">
              <span className="text-white font-medium block">Personal Connection</span>
              <p className="text-[#8E8A81]">Direct collaboration with Jim Parker from first call to final gallery.</p>
            </div>
            <div className="p-4 rounded bg-black/40 border border-white/5 space-y-1">
              <span className="text-white font-medium block">Unobtrusive Style</span>
              <p className="text-[#8E8A81]">Clients and wedding guests enjoy the day without camera pressure.</p>
            </div>
            <div className="p-4 rounded bg-black/40 border border-white/5 space-y-1">
              <span className="text-white font-medium block">Archival Finish</span>
              <p className="text-[#8E8A81]">Meticulously hand-graded high-resolution files delivered promptly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: STRONG CONTACT CTA (Direct Phone & Booking Form)
          ========================================================================= */}
      <section id="home-contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
              09 / Inquiries & Bookings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light uppercase tracking-[0.05em] leading-tight">
              Begin the Conversation
            </h2>
            <p className="text-sm text-[#C8C5BC] font-light leading-relaxed">
              Wedding commissions are accepted on a limited basis each season to ensure dedicated creative attention for every couple. 
              To discuss your wedding plans, portrait session, or date availability, please reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              <a
                id="home-direct-phone-action"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center space-x-4 p-4 rounded bg-white/[0.04] border border-white/10 hover:border-white/30 transition-all text-left group"
              >
                <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-[#0C0C0D] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E8A81] block">
                    Direct Telephone
                  </span>
                  <span className="text-base text-white font-medium group-hover:text-white">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 rounded bg-white/[0.04] border border-white/10 text-left">
                <div className="p-3 rounded-full bg-white/10 text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E8A81] block">
                    Studio Address
                  </span>
                  <span className="text-sm text-white font-medium block">
                    {BUSINESS_INFO.location}
                  </span>
                  <span className="text-[11px] text-[#8E8A81] mt-0.5 block">
                    Zürich Wiedikon • In-person meetings by appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactInquiryForm defaultService="Wedding Photography" />
          </div>
        </div>
      </section>
    </div>
  );
};
