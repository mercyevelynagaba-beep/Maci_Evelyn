import React from 'react';
import { Sparkles, Calendar, ArrowRight, Heart, Award, Users, Flame } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollTo }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-[#F5EFE6]">
      {/* Natural Tones Background Accents */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#EADCCB] rounded-full opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#EADCCB]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D9CC] text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.2em] font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#B45309] animate-pulse" />
              <span>Nansana · Plot 8 · Kampala-Hoima Road</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#43312A] leading-[1.02]">
              The Heart <br className="hidden sm:inline" />
              of <span className="text-[#B45309] italic font-normal font-serif">Baking</span> in Nansana.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#5D4037] leading-relaxed max-w-2xl font-sans">
              Welcome to <strong className="text-[#43312A] font-bold">Evelyn Bites</strong>. Handcrafting bespoke ceremony cakes for Kwanjula and weddings, golden spiced mandazi, and artisanal loaves baked daily on Hoima Road. Proudly hosting hands-on <strong className="text-[#B45309] font-bold">weekend masterclasses</strong>.
            </p>

            {/* Quick Specialties Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-[#8B5E3C]">
              <span className="px-3 py-1 rounded-md bg-white border border-[#E8D9CC]">
                Custom Ceremony Cakes
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E8D9CC]">
                Golden Spiced Mandazi
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E8D9CC]">
                Honey Butter Buns
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E8D9CC]">
                Artisan Milk Loaves
              </span>
              <span className="px-3 py-1 rounded-md bg-[#FAF3EB] border border-[#D4C3B5] text-[#B45309] font-bold">
                Weekend Baking Classes
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-book-ceremony"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#43312A] text-white text-xs sm:text-sm font-sans uppercase tracking-widest font-bold shadow-sm hover:bg-[#B45309] active:scale-[0.98] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4C3B5]" />
                <span>Book For Ceremony</span>
                <ArrowRight className="w-4 h-4 text-[#D4C3B5]" />
              </button>

              <button
                id="hero-view-pricelist"
                onClick={() => onScrollTo('pricelist')}
                className="px-7 py-3.5 rounded-full border-2 border-[#43312A] text-[#43312A] text-xs sm:text-sm font-sans uppercase tracking-widest font-bold hover:bg-[#43312A] hover:text-white active:scale-[0.98] transition-all cursor-pointer"
              >
                View Price List & Menu
              </button>
            </div>

            {/* Social Proof / Features strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#D4C3B5]">
              <div className="flex items-center gap-2.5 p-2 bg-white rounded-2xl shadow-xs border border-[#E8D9CC]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF3EB] flex items-center justify-center text-[#B45309] shrink-0 font-bold">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#43312A]">Fresh Daily</p>
                  <p className="text-[10px] text-[#8B5E3C] uppercase tracking-wider">Hoima Road</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 bg-white rounded-2xl shadow-xs border border-[#E8D9CC]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF3EB] flex items-center justify-center text-[#B45309] shrink-0 font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#43312A]">Ceremonies</p>
                  <p className="text-[10px] text-[#8B5E3C] uppercase tracking-wider">Kwanjula Ready</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 bg-white rounded-2xl shadow-xs border border-[#E8D9CC]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF3EB] flex items-center justify-center text-[#B45309] shrink-0 font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#43312A]">Academy</p>
                  <p className="text-[10px] text-[#8B5E3C] uppercase tracking-wider">Sat & Sun</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF3EB] group">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=85"
                  alt="Evelyn Bites Custom Ceremony Cake"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#43312A]/90 via-[#43312A]/20 to-transparent" />
                
                {/* Overlay Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#B45309] text-[10px] font-sans font-bold tracking-widest uppercase mb-1.5 shadow-sm">
                    Ceremony Centerpiece
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FCFAF7]">
                    Royal Kwanjula & Wedding Tiers
                  </h3>
                  <p className="text-xs text-[#D4C3B5] mt-1 font-sans">
                    Handcrafted in Nansana with spiced fruit cake and delicate edible detailing.
                  </p>
                </div>
              </div>

              {/* Floating Miniature 1: Golden Mandazi & Buns */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-3 rounded-2xl shadow-lg border border-[#E8D9CC] flex items-center gap-3.5 max-w-[240px]">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=200&q=80"
                  alt="Cardamom Mandazi"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#43312A]">Golden Mandazi</span>
                  </div>
                  <p className="text-[10px] text-[#8B5E3C]">Spiced Cardamom</p>
                  <p className="text-xs font-bold text-[#B45309] mt-0.5">UGX 12,000 / pack</p>
                </div>
              </div>

              {/* Floating Miniature 2: Weekend Classes Badge */}
              <div 
                onClick={() => onScrollTo('classes')}
                className="absolute -top-4 -right-4 sm:-right-6 bg-[#43312A] text-white p-4 rounded-2xl shadow-xl border-2 border-white cursor-pointer hover:bg-[#78350F] transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest font-semibold text-[#D4C3B5]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>Academy</span>
                </div>
                <p className="font-serif text-lg font-bold mt-0.5 text-white">Master the Oven</p>
                <p className="text-[10px] text-[#D4C3B5]">Sat & Sun · 9am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
