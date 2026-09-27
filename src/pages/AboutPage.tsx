import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/photographyData';
import { Star, Phone, MapPin, ArrowUpRight, Camera, Film, Compass, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="space-y-4 border-b border-white/10 pb-12">
        <div className="flex items-center space-x-3 text-xs tracking-[0.25em] uppercase text-[#8E8A81]">
          <span>Independent Studio Profile</span>
          <span className="text-white/20">•</span>
          <span>{BUSINESS_INFO.location}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-7xl text-[#F6F4EE] font-light uppercase tracking-[-0.01em] leading-tight">
          About Jim Parker <br />
          <span className="italic text-[#C8C5BC] lowercase">and the</span> Studio Craft
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-[#9B9891] leading-relaxed">
          An independent photography business based at Heimatstrasse 7 in Zürich, dedicated to documentary wedding photography and cinematic editorial portraiture.
        </p>
      </section>

      {/* Asymmetrical Editorial Profile Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative group rounded-sm overflow-hidden border border-white/15 bg-black/60 aspect-[3/4]">
          <img
            src={IMAGES.editorialPortrait}
            alt="Editorial portrait representing Jim Parker Photography studio aesthetic"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-xs text-[#C8C5BC]">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E8A81] block">
              Studio Aesthetic
            </span>
            <p className="font-serif text-lg text-white">
              Heimatstrasse 7, 8003 Zürich
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#C8C5BC] font-light leading-relaxed">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
            The Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-[0.05em]">
            The Art of Non-Intrusive Storytelling
          </h2>
          <p>
            Photography should honor how a moment truly felt, not manufacture how it ought to appear for a screen. 
            When Jim Parker photographs a wedding or an editorial portrait, the emphasis remains entirely on organic interaction, 
            natural light, and the honest cadence of human relationships.
          </p>
          <p>
            Operating as an independent photographer in Zürich means every couple and client works directly with Jim. 
            There are no studio representatives or anonymous associates; the eye that meets you at the Heimatstrasse studio 
            is the same eye documenting your celebration and hand-crafting your final gallery.
          </p>
          <p>
            This personal approach creates a calm, reassuring presence on wedding days. Guests are at ease, laughter is genuine, 
            and quiet tears are caught without drawing unwanted attention.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded bg-[#141418] border border-white/10 space-y-1">
              <span className="text-white font-medium block uppercase tracking-[0.15em]">Direct Collaboration</span>
              <p className="text-[#8E8A81]">Consistent creative vision handled personally by Jim Parker from start to finish.</p>
            </div>
            <div className="p-4 rounded bg-[#141418] border border-white/10 space-y-1">
              <span className="text-white font-medium block uppercase tracking-[0.15em]">5.0/5 Google Trust</span>
              <p className="text-[#8E8A81]">Reflecting 16 verified five-star client reviews on Google.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Pillars */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <div className="max-w-xl space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
            Working Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-[0.05em]">
            Four Tenets of the Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-3">
            <Film className="w-5 h-5 text-[#C8C5BC]" />
            <h3 className="font-serif text-lg text-white font-normal">Cinematic Restraint</h3>
            <p className="text-xs text-[#8E8A81] leading-relaxed">
              Choosing substance over spectacle. Frames are composed with deliberate negative space, natural contrast, and architectural geometry.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-3">
            <Camera className="w-5 h-5 text-[#C8C5BC]" />
            <h3 className="font-serif text-lg text-white font-normal">Unhurried Timing</h3>
            <p className="text-xs text-[#8E8A81] leading-relaxed">
              Allowing emotional narratives to unfold without rushed countdowns or synthetic stage directions.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-3">
            <Compass className="w-5 h-5 text-[#C8C5BC]" />
            <h3 className="font-serif text-lg text-white font-normal">Zürich & Beyond</h3>
            <p className="text-xs text-[#8E8A81] leading-relaxed">
              Based at Heimatstrasse 7, 8003 Zürich, with full mobility across Swiss cantons and European destinations.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-3">
            <CheckCircle2 className="w-5 h-5 text-[#C8C5BC]" />
            <h3 className="font-serif text-lg text-white font-normal">Archival Longevity</h3>
            <p className="text-xs text-[#8E8A81] leading-relaxed">
              Every deliverable is crafted to retain emotional resonance and visual sophistication decades into the future.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Location & Consultation Invitation */}
      <section className="p-8 sm:p-12 rounded-sm bg-gradient-to-b from-[#141418] to-[#0D0D10] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
            Visit the Studio
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
            Heimatstrasse 7, 8003 Zürich
          </h2>
          <p className="text-xs sm:text-sm text-[#C8C5BC] leading-relaxed">
            In-person consultations are arranged by appointment. We invite you to sit down over a coffee to walk through print portfolios and talk through your wedding or portrait session.
          </p>
          <p className="text-xs text-[#8E8A81]">
            Direct contact: <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white hover:underline">{BUSINESS_INFO.phone}</a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3.5 rounded border border-white/20 text-xs uppercase tracking-[0.2em] text-[#C8C5BC] hover:text-white hover:border-white transition-all text-center"
          >
            Call {BUSINESS_INFO.phone}
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded bg-[#F6F4EE] text-[#0C0C0D] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium transition-all text-center"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
