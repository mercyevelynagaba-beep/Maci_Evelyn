import React from 'react';
import { Cake, MapPin, Phone, Clock, Mail, Heart, ArrowUp } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenClassBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenClassBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#43312A] text-[#FCFAF7] pt-16 pb-12 border-t border-[#D4C3B5]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4C3B5]/20">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#B45309] flex items-center justify-center text-white shadow-xs">
                <Cake className="w-6 h-6 text-[#FCFAF7]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#FCFAF7] leading-none">
                  Evelyn Bites
                </h3>
                <p className="text-xs text-[#D4C3B5] mt-1 font-sans font-medium">
                  Artisanal Bakery & Baking Academy
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D4C3B5] leading-relaxed font-sans">
              Serving Nansana Municipality and the greater Kampala region with authentic bespoke ceremony cakes, golden cardamom mandazi, honey-butter buns, and artisan bread. Proudly hosting weekend baking masterclasses for tomorrow's pastry chefs.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-full bg-[#B45309] hover:bg-[#8B5E3C] text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-xs transition-all cursor-pointer"
              >
                Book For Ceremony Online
              </button>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4C3B5]">
              Bakery Delights
            </h4>
            <ul className="space-y-2 text-xs text-[#D4C3B5]/80">
              <li>
                <button onClick={() => scrollTo('pricelist')} className="hover:text-white transition-colors cursor-pointer">
                  Ceremony & Wedding Cakes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricelist')} className="hover:text-white transition-colors cursor-pointer">
                  Kwanjula Introduction Cakes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricelist')} className="hover:text-white transition-colors cursor-pointer">
                  Cardamom Golden Mandazi
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricelist')} className="hover:text-white transition-colors cursor-pointer">
                  Honey Butter Sweet Buns
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricelist')} className="hover:text-white transition-colors cursor-pointer">
                  Sweet Milk & Artisan Loaves
                </button>
              </li>
            </ul>
          </div>

          {/* Academy & Classes */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4C3B5]">
              Weekend Classes
            </h4>
            <ul className="space-y-2 text-xs text-[#D4C3B5]/80">
              <li>
                <button onClick={() => scrollTo('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Saturday: Fondant & Tier Cakes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Saturday: Mandazi, Samosa & Pastry
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Sunday: Sourdough & Artisan Loaves
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Sunday: Junior Bakers Weekend Fun
                </button>
              </li>
              <li>
                <button onClick={onOpenClassBooking} className="text-[#D4C3B5] font-semibold hover:text-white underline cursor-pointer">
                  Reserve Class Seat →
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contacts */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4C3B5]">
              Visit & Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-[#D4C3B5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>
                  Plot 8, Kampala-Hoima Road, Nansana Municipality, Wakiso District
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Daily: 6:30 AM – 8:30 PM</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{BAKERY_INFO.phonePrimary}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>{BAKERY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D4C3B5]/70 font-sans">
          <p>© {new Date().getFullYear()} Evelyn Bites Bakery & Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Baked with <Heart className="w-3 h-3 text-[#B45309] fill-current" /> in Nansana
            </span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-full bg-[#34241F] text-[#D4C3B5] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
