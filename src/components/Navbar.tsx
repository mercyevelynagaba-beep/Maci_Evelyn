import React, { useState } from 'react';
import { Cake, Phone, Clock, ShoppingBag, Menu, X, CalendarCheck, MapPin } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface NavbarProps {
  currency: 'UGX' | 'USD';
  onToggleCurrency: () => void;
  basketCount: number;
  onOpenBasket: () => void;
  onOpenBooking: () => void;
  onOpenClassBooking: (classId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  basketCount,
  onOpenBasket,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#D4C3B5] transition-all">
      {/* Warm Top Bar */}
      <div className="bg-[#43312A] text-[#D4C3B5] text-xs py-1.5 px-4 font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
              Plot 8, Kampala-Hoima Rd, Nansana Municipality
            </span>
            <span className="hidden md:inline-block text-[#8B5E3C]">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#E8D9CC]">
              <Clock className="w-3.5 h-3.5 text-[#B45309]" />
              Open Daily: 6:30 AM – 8:30 PM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[#D4C3B5] font-medium">
              Weekend Masterclasses Enrolling!
            </span>
            <a
              href={`https://wa.me/256701445892?text=${encodeURIComponent("Hello Evelyn Bites, I'd like to make an inquiry!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#FCFAF7] hover:text-[#B45309] transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-[#25D366]" />
              <span>{BAKERY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#B45309] flex items-center justify-center text-white shadow-sm font-serif font-bold italic text-xl group-hover:scale-105 transition-transform">
              EB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#43312A] leading-tight">
                  Evelyn Bites
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F5EFE6] text-[#8B5E3C] border border-[#E8D9CC]">
                  Bakery
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8B5E3C] font-sans font-semibold">
                Nansana · Plot 8 · Kampala
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-xs font-semibold uppercase tracking-wider text-[#78350F]">
            <button 
              onClick={() => scrollTo('gallery')} 
              className="hover:text-[#B45309] transition-colors cursor-pointer py-1"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollTo('pricelist')} 
              className="hover:text-[#B45309] transition-colors cursor-pointer py-1"
            >
              Price List & Menu
            </button>
            <button 
              onClick={() => scrollTo('classes')} 
              className="hover:text-[#B45309] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <span>Baking Classes</span>
              <span className="text-[10px] bg-[#FAF3EB] border border-[#E8D9CC] text-[#B45309] font-bold px-2 py-0.5 rounded-full">
                Weekends
              </span>
            </button>
            <button 
              onClick={() => scrollTo('location')} 
              className="hover:text-[#B45309] transition-colors cursor-pointer py-1"
            >
              Location & Story
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Switcher */}
            <button
              id="currency-toggle-btn"
              onClick={onToggleCurrency}
              title="Switch currency between UGX and USD"
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#D4C3B5] bg-[#FCFAF7] text-[#43312A] hover:bg-[#F5EFE6] transition-colors"
            >
              <span className={currency === 'UGX' ? 'font-bold text-[#B45309]' : 'text-[#8B5E3C]'}>UGX</span>
              <span className="mx-1 text-[#D4C3B5]">/</span>
              <span className={currency === 'USD' ? 'font-bold text-[#B45309]' : 'text-[#8B5E3C]'}>USD</span>
            </button>

            {/* Inquiries / Quote Basket */}
            <button
              id="quote-basket-btn"
              onClick={onOpenBasket}
              className="relative p-2.5 rounded-full text-[#43312A] hover:bg-[#F5EFE6] transition-colors"
              title="View items in your inquiry list"
            >
              <ShoppingBag className="w-5 h-5 text-[#43312A]" />
              {basketCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B45309] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {basketCount}
                </span>
              )}
            </button>

            {/* Ceremony Booking Button */}
            <button
              id="nav-book-ceremony-btn"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#43312A] text-white text-xs font-sans uppercase tracking-widest font-semibold shadow-sm hover:bg-[#B45309] active:scale-[0.98] transition-colors"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#E8D9CC]" />
              <span>Book for Ceremony</span>
            </button>
          </div>

          {/* Mobile Menu & Basket Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBasket}
              className="relative p-2 rounded-lg text-[#43312A] hover:bg-[#F5EFE6]"
            >
              <ShoppingBag className="w-6 h-6" />
              {basketCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B45309] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {basketCount}
                </span>
              )}
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#43312A] hover:bg-[#F5EFE6] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4C3B5] bg-[#FCFAF7] px-4 pt-3 pb-6 space-y-3 shadow-lg font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-[#D4C3B5]">
            <span className="text-xs font-semibold text-[#8B5E3C]">Currency View:</span>
            <button
              onClick={onToggleCurrency}
              className="px-3 py-1 text-xs font-bold rounded-md bg-[#F5EFE6] text-[#43312A] border border-[#D4C3B5]"
            >
              Active: {currency} (Tap to switch)
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-xs font-semibold uppercase tracking-wider text-[#78350F]">
            <button 
              onClick={() => scrollTo('gallery')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F5EFE6]"
            >
              Bakery Gallery
            </button>
            <button 
              onClick={() => scrollTo('pricelist')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F5EFE6]"
            >
              Price List & Menu
            </button>
            <button 
              onClick={() => scrollTo('classes')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F5EFE6] flex items-center justify-between"
            >
              <span>Weekend Baking Classes</span>
              <span className="text-[10px] bg-[#B45309] text-white font-bold px-2 py-0.5 rounded-full">
                Weekends
              </span>
            </button>
            <button 
              onClick={() => scrollTo('location')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F5EFE6]"
            >
              Plot 8 Location & Story
            </button>
          </div>

          <div className="pt-3 border-t border-[#D4C3B5] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#43312A] text-white text-center font-sans text-xs uppercase tracking-widest font-semibold shadow-sm hover:bg-[#B45309] flex items-center justify-center gap-2 transition-colors"
            >
              <CalendarCheck className="w-4 h-4 text-[#E8D9CC]" />
              <span>Book For Ceremony</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
