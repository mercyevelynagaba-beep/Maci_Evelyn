import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GallerySection } from './components/GallerySection';
import { PriceListSection } from './components/PriceListSection';
import { BakingClassesSection } from './components/BakingClassesSection';
import { AboutLocationSection } from './components/AboutLocationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CeremonyBookingModal } from './components/CeremonyBookingModal';
import { QuoteBasketDrawer } from './components/QuoteBasketDrawer';
import { Footer } from './components/Footer';
import { BakeryItem, BasketItem } from './types';
import { Phone, CalendarCheck } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<'UGX' | 'USD'>('UGX');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basket, setBasket] = useState<BasketItem[]>([]);

  // Toggle currency between Ugandan Shillings (UGX) and USD ($)
  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'UGX' ? 'USD' : 'UGX'));
  };

  // Add item from price list to quote basket
  const handleAddToBasket = (item: BakeryItem) => {
    setBasket((prev) => {
      const existing = prev.find((b) => b.item.id === item.id);
      if (existing) {
        return prev.map((b) =>
          b.item.id === item.id ? { ...b, quantity: b.quantity + 1 } : b
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setBasket((prev) => {
      return prev
        .map((b) => {
          if (b.item.id === id) {
            const newQty = b.quantity + delta;
            return newQty > 0 ? { ...b, quantity: newQty } : null;
          }
          return b;
        })
        .filter(Boolean) as BasketItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setBasket((prev) => prev.filter((b) => b.item.id !== id));
  };

  const handleClearBasket = () => {
    setBasket([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalBasketCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#43312A]">
      {/* Header & Sticky Nav */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        basketCount={totalBasketCount}
        onOpenBasket={() => setIsBasketOpen(true)}
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenClassBooking={() => scrollToSection('classes')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* Gallery Showcase */}
        <GallerySection
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onOpenClassBooking={() => scrollToSection('classes')}
        />

        {/* Categorized Price List & Menu */}
        <PriceListSection
          currency={currency}
          onAddToBasket={handleAddToBasket}
          basketItemIds={basket.map((b) => b.item.id)}
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        {/* Weekend Baking Classes (Saturday & Sunday) */}
        <BakingClassesSection
          currency={currency}
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        {/* Testimonials from Ceremonies & Class Graduates */}
        <TestimonialsSection />

        {/* Location (Plot 8, Kampala-Hoima Rd) & Bakery Story */}
        <AboutLocationSection
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onOpenClassBooking={() => scrollToSection('classes')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenClassBooking={() => scrollToSection('classes')}
      />

      {/* Online Ceremony Booking Modal */}
      <CeremonyBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currency={currency}
      />

      {/* Inquiries / Order Basket Drawer */}
      <QuoteBasketDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        basket={basket}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBasket={handleClearBasket}
        currency={currency}
        onOpenBooking={() => {
          setIsBasketOpen(false);
          setIsBookingModalOpen(true);
        }}
      />

      {/* Floating Action Button for Instant WhatsApp Chat */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#43312A] text-white text-xs font-sans font-bold uppercase tracking-wider shadow-lg hover:bg-[#B45309] transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#D4C3B5]"
        >
          <CalendarCheck className="w-4 h-4 text-[#FDE3CF]" />
          <span>Book Ceremony</span>
        </button>

        <a
          href={`https://wa.me/256701445892?text=${encodeURIComponent("Hello Evelyn Bites! I would like to inquire about fresh bakes, ceremony booking, or weekend classes.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-xl hover:bg-[#1EBE5D] transition-all hover:scale-105 active:scale-95 group border-2 border-white cursor-pointer"
          title="Chat with Evelyn Bites on WhatsApp"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="hidden sm:inline font-bold">WhatsApp Plot 8 Studio</span>
        </a>
      </div>
    </div>
  );
}
