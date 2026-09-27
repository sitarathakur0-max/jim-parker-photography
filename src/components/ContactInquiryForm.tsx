import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';
import { BUSINESS_INFO } from '../data/photographyData';
import { CheckCircle2, Send, Phone, Calendar, Mail, User, MapPin } from 'lucide-react';

interface ContactInquiryFormProps {
  defaultService?: string;
  onSuccess?: () => void;
}

export const ContactInquiryForm: React.FC<ContactInquiryFormProps> = ({ defaultService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: defaultService || 'Wedding Photography',
    eventDate: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceType: defaultService }));
    }
  }, [defaultService]);

  const validate = () => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your celebration or session';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Emulate smooth client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  if (isSubmitted) {
    return (
      <div
        id="inquiry-form-success-state"
        className="p-8 sm:p-10 rounded-sm bg-[#141417] border border-white/10 text-center space-y-6"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center text-[#ECE9E2]">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81]">
            Inquiry Received
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
            Thank you, {formData.fullName}.
          </h3>
          <p className="text-sm text-[#C8C5BC] max-w-md mx-auto leading-relaxed">
            Your inquiry for <strong className="text-white">{formData.serviceType}</strong> has been received by Jim Parker at the Zürich studio.
          </p>
        </div>

        <div className="p-4 rounded bg-black/40 border border-white/5 text-left text-xs space-y-2 max-w-md mx-auto text-[#8E8A81]">
          <p><span className="text-[#C8C5BC]">Email:</span> {formData.email}</p>
          <p><span className="text-[#C8C5BC]">Phone:</span> {formData.phone}</p>
          {formData.eventDate && <p><span className="text-[#C8C5BC]">Preferred Date:</span> {formData.eventDate}</p>}
          {formData.location && <p><span className="text-[#C8C5BC]">Location:</span> {formData.location}</p>}
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center space-x-2 text-xs text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded border border-white/10 transition-colors uppercase tracking-[0.15em]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Directly: {BUSINESS_INFO.phone}</span>
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                serviceType: 'Wedding Photography',
                eventDate: '',
                location: '',
                message: '',
              });
            }}
            className="text-xs text-[#8E8A81] hover:text-white underline underline-offset-4"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-inquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 lg:p-10 rounded-sm bg-[#121215] border border-white/10 space-y-6 shadow-2xl"
    >
      <div className="border-b border-white/10 pb-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8A81] block">
          Direct Studio Inquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mt-1">
          Check Availability & Discuss Your Date
        </h3>
        <p className="text-xs text-[#8E8A81] mt-1.5">
          All inquiries are received directly by Jim Parker. You can also call directly at{' '}
          <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white hover:underline">
            {BUSINESS_INFO.phone}
          </a>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
            Full Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#6E6A62] absolute left-3.5 top-3" />
            <input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Elena & Julian"
              className={`w-full pl-10 pr-4 py-2.5 bg-black/40 border text-sm text-white placeholder-[#5E5A52] rounded-sm focus:outline-none focus:border-white transition-colors ${
                errors.fullName ? 'border-red-400' : 'border-white/15'
              }`}
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
            Email Address <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#6E6A62] absolute left-3.5 top-3" />
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@domain.com"
              className={`w-full pl-10 pr-4 py-2.5 bg-black/40 border text-sm text-white placeholder-[#5E5A52] rounded-sm focus:outline-none focus:border-white transition-colors ${
                errors.email ? 'border-red-400' : 'border-white/15'
              }`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#6E6A62] absolute left-3.5 top-3" />
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+41 78 ... or international"
              className={`w-full pl-10 pr-4 py-2.5 bg-black/40 border text-sm text-white placeholder-[#5E5A52] rounded-sm focus:outline-none focus:border-white transition-colors ${
                errors.phone ? 'border-red-400' : 'border-white/15'
              }`}
            />
          </div>
          {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
        </div>

        {/* Service Type */}
        <div className="space-y-1.5">
          <label htmlFor="serviceType" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
            Service of Interest
          </label>
          <select
            id="serviceType"
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-4 py-2.5 bg-black/40 border border-white/15 text-sm text-white rounded-sm focus:outline-none focus:border-white transition-colors"
          >
            <option value="Wedding Photography" className="bg-[#121215] text-white">
              Wedding Photography (Civil & Celebration)
            </option>
            <option value="Editorial Portraits" className="bg-[#121215] text-white">
              Editorial & Creative Portraits
            </option>
            <option value="Couples & Intimate Sessions" className="bg-[#121215] text-white">
              Couples & Engagement Story
            </option>
            <option value="Other Photography" className="bg-[#121215] text-white">
              Other Special Photography Commission
            </option>
          </select>
        </div>

        {/* Event Date */}
        <div className="space-y-1.5">
          <label htmlFor="eventDate" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
            Anticipated Date / Season
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#6E6A62] absolute left-3.5 top-3" />
            <input
              id="eventDate"
              type="text"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              placeholder="e.g. Autumn 2026 or 14 August"
              className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 text-sm text-white placeholder-[#5E5A52] rounded-sm focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label htmlFor="location" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
            Location / Venue
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-[#6E6A62] absolute left-3.5 top-3" />
            <input
              id="location"
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. Zürich Old Town, Lake, Studio..."
              className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 text-sm text-white placeholder-[#5E5A52] rounded-sm focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-[#C8C5BC]">
          Your Vision & Plans <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us a little about yourselves, the gathering you are imagining, or the portrait style you're drawn to..."
          className={`w-full px-4 py-3 bg-black/40 border text-sm text-white placeholder-[#5E5A52] rounded-sm focus:outline-none focus:border-white transition-colors resize-none ${
            errors.message ? 'border-red-400' : 'border-white/15'
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-[#8E8A81]">
          No obligation. Studio located at Heimatstrasse 7, 8003 Zürich.
        </p>

        <button
          id="submit-inquiry-button"
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#F6F4EE] hover:bg-white text-[#0C0C0D] rounded-sm font-medium uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <span>Send Direct Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
