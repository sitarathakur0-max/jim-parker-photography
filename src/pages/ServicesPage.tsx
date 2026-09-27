import React from 'react';
import { PageId } from '../types';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/photographyData';
import { CheckCircle2, ArrowUpRight, Phone, Calendar, Star, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForInquiry,
}) => {
  const handleInquireService = (serviceName: string) => {
    onSelectServiceForInquiry(serviceName);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="space-y-4 border-b border-white/10 pb-12">
        <div className="flex items-center space-x-3 text-xs tracking-[0.25em] uppercase text-[#8E8A81]">
          <span>Studio Offerings</span>
          <span className="text-white/20">•</span>
          <span>Zürich & Destination</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-7xl text-[#F6F4EE] font-light uppercase tracking-[-0.01em] leading-tight">
          Photography Services <br />
          <span className="italic text-[#C8C5BC] lowercase">with</span> Documentary Depth
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-[#9B9891] leading-relaxed">
          Bespoke commissions encompassing documentary wedding photography, editorial portraiture, and intimate couple stories. 
          Every project is handled personally by Jim Parker with meticulous attention to natural light and archival preservation.
        </p>
      </section>

      {/* Services List Section */}
      <section className="space-y-16">
        {SERVICES_LIST.map((service, index) => (
          <div
            key={service.id}
            id={`service-${service.id}`}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-sm bg-[#121215] border border-white/10 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            {service.image && (
              <div className={`lg:col-span-5 rounded-sm overflow-hidden border border-white/15 bg-black/60 aspect-[4/3] ${
                index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-110 editorial-img-zoom"
                />
              </div>
            )}

            {/* Content Column */}
            <div className={`space-y-6 lg:col-span-7 ${
              index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
            }`}>
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
                  Service {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-[0.05em]">
                  {service.title}
                </h2>
                <p className="text-xs font-mono text-[#C8C5BC]">{service.subtitle}</p>
              </div>

              <p className="text-sm text-[#C8C5BC] leading-relaxed font-light">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E8A81] block">
                  Coverage Hallmarks
                </span>
                <ul className="space-y-2 text-xs text-[#C8C5BC]">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E8A81] block">
                  Deliverables Included
                </span>
                <ul className="space-y-1.5 text-xs text-[#8E8A81]">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8C5BC]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleInquireService(service.title)}
                  className="px-6 py-3 rounded bg-[#F6F4EE] text-[#0C0C0D] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center space-x-2"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-4 py-3 text-xs tracking-wider text-[#8E8A81] hover:text-white transition-colors"
                >
                  Or call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* The Standard of Every Commission */}
      <section className="p-8 sm:p-12 rounded-sm bg-[#0E0E10] border border-white/10 space-y-8">
        <div className="max-w-xl space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
            Quality Assurance
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
            Every Commission Includes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded bg-black/40 border border-white/5 space-y-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <h4 className="font-serif text-base text-white">Full Printing Rights</h4>
            <p className="text-[#8E8A81] leading-relaxed">
              Complete personal print authorization with zero watermarks or restrictive printing barriers.
            </p>
          </div>

          <div className="p-5 rounded bg-black/40 border border-white/5 space-y-2">
            <Calendar className="w-5 h-5 text-white" />
            <h4 className="font-serif text-base text-white">Direct Preparation</h4>
            <p className="text-[#8E8A81] leading-relaxed">
              In-depth planning session at the Heimatstrasse studio or via call to align on timelines and lighting.
            </p>
          </div>

          <div className="p-5 rounded bg-black/40 border border-white/5 space-y-2">
            <Star className="w-5 h-5 text-white" />
            <h4 className="font-serif text-base text-white">Verified Excellence</h4>
            <p className="text-[#8E8A81] leading-relaxed">
              Backed by a 5.0/5 Google rating from 16 verified clients valuing calm documentary execution.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Booking CTA Bar */}
      <section className="text-center py-8 border-t border-white/10 space-y-6">
        <h3 className="font-serif text-3xl text-white font-light">
          Have an Upcoming Date in Mind?
        </h3>
        <p className="text-xs sm:text-sm text-[#8E8A81] max-w-md mx-auto">
          Contact Jim Parker directly to confirm schedule availability for civil weddings, celebrations, or studio portraits.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#F6F4EE] hover:bg-white text-[#0C0C0D] rounded-sm font-medium uppercase tracking-[0.2em] text-xs transition-all"
          >
            Open Booking Form
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3.5 border border-white/15 hover:border-white/30 text-white rounded-sm text-xs uppercase tracking-[0.2em] transition-all flex items-center space-x-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
