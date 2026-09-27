import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/photographyData';
import { ContactInquiryForm } from '../components/ContactInquiryForm';
import { Phone, MapPin, Star, ArrowUpRight, Clock, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  prefilledService?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  prefilledService,
}) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="space-y-4 border-b border-white/10 pb-12">
        <div className="flex items-center space-x-3 text-xs tracking-[0.25em] uppercase text-[#8E8A81]">
          <span>Studio & Bookings</span>
          <span className="text-white/20">•</span>
          <span>{BUSINESS_INFO.location}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-7xl text-[#F6F4EE] font-light uppercase tracking-[-0.01em] leading-tight">
          Connect With <br />
          <span className="italic text-[#C8C5BC] lowercase">the</span> Zürich Studio
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-[#9B9891] leading-relaxed">
          Whether you are planning a wedding celebration, an intimate civil ceremony, or an editorial portrait session, 
          Jim Parker is available to discuss your date and answer any questions.
        </p>
      </section>

      {/* Main Grid: Studio Details & Interactive Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 sm:p-8 rounded-sm bg-[#121215] border border-white/10 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
              Direct Contact
            </span>

            {/* Phone Block */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C8C5BC] block">
                Telephone & WhatsApp
              </span>
              <a
                id="contact-call-direct"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center space-x-3 text-xl sm:text-2xl font-serif text-white hover:text-[#C8C5BC] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C8C5BC]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <p className="text-xs text-[#8E8A81]">
                Available for telephone inquiries and preliminary wedding discussions.
              </p>
            </div>

            {/* Studio Address */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C8C5BC] block">
                Studio Location
              </span>
              <div className="flex items-start space-x-3 text-sm text-white">
                <MapPin className="w-5 h-5 text-[#C8C5BC] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{BUSINESS_INFO.street}</p>
                  <p className="text-[#C8C5BC]">{BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}, Switzerland</p>
                  <p className="text-xs text-[#8E8A81] mt-1">
                    Zürich-Wiedikon • Consultations strictly by prior appointment.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#C8C5BC] hover:text-white transition-colors underline underline-offset-4"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Rating Highlight */}
            <div className="p-4 rounded bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-serif text-white">{BUSINESS_INFO.rating}</span>
                <div className="flex text-amber-400 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#8E8A81]">
                  ({BUSINESS_INFO.reviewCount} Google reviews)
                </span>
              </div>
              <p className="text-[11px] text-[#8E8A81]">
                All reviews verified independently on Google, honoring calm reliability and documentary excellence.
              </p>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-[0.2em] text-[#C8C5BC]">Studio Map</span>
              <span className="text-[#8E8A81]">8003 Zürich</span>
            </div>
            <div className="h-44 rounded-sm bg-[#1A1A20] border border-white/10 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/90 pointer-events-none" />
              <MapPin className="w-8 h-8 text-[#C8C5BC] relative z-10 mb-2" />
              <p className="text-xs text-white font-medium relative z-10">Heimatstrasse 7, Zürich</p>
              <p className="text-[11px] text-[#8E8A81] relative z-10 mt-1">Conveniently situated in Wiedikon</p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] uppercase tracking-wider relative z-10 transition-all border border-white/10 inline-flex items-center space-x-1"
              >
                <span>Navigate to Studio</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Inquiry Form */}
        <div className="lg:col-span-7">
          <ContactInquiryForm defaultService={prefilledService} />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-t border-white/10 pt-16 space-y-8">
        <div className="max-w-xl space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl text-white font-light uppercase tracking-[0.05em]">
            Booking & Planning FAQ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#C8C5BC]">
          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-2">
            <h3 className="font-serif text-base text-white">How far in advance should we book a wedding?</h3>
            <p className="text-[#8E8A81] leading-relaxed">
              Most couples reach out 6 to 12 months ahead, particularly for peak spring, summer, and autumn dates. 
              However, intimate civil weddings in Zürich can often be accommodated with shorter notice if the calendar permits.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-2">
            <h3 className="font-serif text-base text-white">Can we meet at the studio before committing?</h3>
            <p className="text-[#8E8A81] leading-relaxed">
              Yes, absolutely. A preliminary meeting at the Heimatstrasse 7 studio in Zürich is warmly recommended. 
              It provides an opportunity to review physical print archives and ensure mutual creative alignment.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-2">
            <h3 className="font-serif text-base text-white">Do you travel outside Zürich for weddings?</h3>
            <p className="text-[#8E8A81] leading-relaxed">
              Yes. While based in Zürich, Jim regularly documents celebrations throughout Switzerland (Lucerne, Ticino, Engadin, Geneva) 
              as well as international destination weddings.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#121215] border border-white/10 space-y-2">
            <h3 className="font-serif text-base text-white">How are the final photographs delivered?</h3>
            <p className="text-[#8E8A81] leading-relaxed">
              Delivered in a secure, private online gallery with full-resolution digital downloads and personal print authorization. 
              Each photograph is individually graded with archival contrast and color accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
