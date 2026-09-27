import React, { useEffect, useCallback } from 'react';
import { PortfolioItem } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, ArrowUpRight } from 'lucide-react';

interface PortfolioLightboxProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
  onInquire: (item: PortfolioItem) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigateIndex,
  onInquire,
}) => {
  const isOpen = currentIndex !== null && items[currentIndex] !== undefined;
  const currentItem = isOpen ? items[currentIndex!] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigateIndex(nextIndex);
    }
  }, [currentIndex, items.length, onNavigateIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigateIndex(nextIndex);
    }
  }, [currentIndex, items.length, onNavigateIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 bg-[#070708]/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#8E8A81]">
            Jim Parker Portfolio Archive
          </span>
          <span className="text-white/20">•</span>
          <span className="text-xs text-[#C8C5BC] font-mono">
            {currentIndex! + 1} / {items.length}
          </span>
        </div>

        <button
          id="lightbox-close-button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#ECE9E2] hover:text-white transition-all border border-white/10"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area with Previous/Next controls */}
      <div className="relative flex-1 flex items-center justify-center my-4 max-w-7xl w-full mx-auto overflow-hidden">
        {/* Previous Button */}
        <button
          id="lightbox-prev-button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image Container */}
        <div className="relative max-h-[72vh] max-w-full flex items-center justify-center">
          <img
            id="lightbox-active-image"
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] max-w-full object-contain rounded-sm shadow-2xl border border-white/5"
          />
        </div>

        {/* Next Button */}
        <button
          id="lightbox-next-button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <span className="text-[10px] uppercase tracking-[0.25em] px-2 py-0.5 rounded bg-white/10 text-[#C8C5BC]">
              {currentItem.categoryLabel}
            </span>
            <span className="flex items-center space-x-1 text-[#8E8A81]">
              <MapPin className="w-3 h-3 text-[#8E8A81]" />
              <span>{currentItem.location}</span>
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
            {currentItem.title}
          </h3>
          <p className="text-[#8E8A81] text-xs sm:text-sm max-w-2xl mt-1">
            {currentItem.caption}
          </p>
        </div>

        <button
          id="lightbox-inquire-button"
          onClick={() => {
            onInquire(currentItem);
            onClose();
          }}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#F6F4EE] text-[#0C0C0D] hover:bg-white transition-all uppercase tracking-[0.2em] font-medium text-xs shrink-0"
        >
          <span>Inquire This Style</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
