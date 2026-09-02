import React, { useState } from 'react';
import { Sparkles, ZoomIn, X, Calendar, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenBooking: () => void;
  onOpenClassBooking: (classId?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenBooking,
  onOpenClassBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cakes' | 'mandazi' | 'loaves' | 'classes'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'cakes', label: 'Ceremony Cakes' },
    { id: 'mandazi', label: 'Mandazi & Buns' },
    { id: 'loaves', label: 'Artisan Loaves' },
    { id: 'classes', label: 'Weekend Classes' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'mandazi') return item.category === 'mandazi' || item.category === 'buns';
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FCFAF7] border-t border-[#D4C3B5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3EB] border border-[#E8D9CC] text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.25em] font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
              <span>Baked with Passion in Nansana</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#43312A] tracking-tight">
              A Glimpse into Our Kitchen
            </h2>
            <p className="text-[#5D4037] text-sm sm:text-base mt-2 max-w-xl font-sans">
              Browse our gallery of past ceremony showpieces, morning batches of golden mandazi and buns, and lively weekend baking masterclasses.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F5EFE6] p-1.5 rounded-2xl border border-[#D4C3B5]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#43312A] text-white shadow-xs'
                    : 'text-[#78350F] hover:text-[#B45309] hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 bg-white border border-[#D4C3B5] cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EADCCB]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#43312A]/90 via-[#43312A]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Top Badge */}
                {item.occasion && (
                  <div className="absolute top-3 left-3 bg-[#FCFAF7]/95 backdrop-blur-xs text-[#43312A] text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-[#D4C3B5]">
                    {item.occasion}
                  </div>
                )}

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h3 className="font-serif text-xl font-bold text-[#FCFAF7] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D4C3B5] mt-1 line-clamp-2 font-sans">
                    {item.caption}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-white/20 backdrop-blur-xs text-[#FCFAF7] px-2 py-0.5 rounded-md font-sans font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#43312A]/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#FCFAF7] rounded-3xl overflow-hidden shadow-2xl border border-[#D4C3B5]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#43312A]/80 text-white flex items-center justify-center hover:bg-[#43312A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative h-80 sm:h-96 w-full bg-[#EADCCB]">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  {selectedPhoto.occasion && (
                    <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest font-sans">
                      {selectedPhoto.occasion}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-bold text-[#43312A] mt-0.5">
                    {selectedPhoto.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#5D4037] leading-relaxed font-sans">
                {selectedPhoto.caption}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {selectedPhoto.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#F5EFE6] text-[#78350F] px-2.5 py-1 rounded-lg font-medium font-sans"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#D4C3B5] flex flex-wrap items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold text-[#8B5E3C] hover:bg-[#F5EFE6]"
                >
                  Close
                </button>
                {selectedPhoto.category === 'classes' ? (
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      onOpenClassBooking();
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#43312A] text-white text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#B45309] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-4 h-4 text-[#D4C3B5]" />
                    <span>Book Weekend Class</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      onOpenBooking();
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#43312A] text-white text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#B45309] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4C3B5]" />
                    <span>Order This Style</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
