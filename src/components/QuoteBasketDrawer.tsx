import React from 'react';
import { X, Trash2, Plus, Minus, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { BasketItem } from '../types';
import { BAKERY_INFO } from '../data/bakeryData';

interface QuoteBasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  basket: BasketItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearBasket: () => void;
  currency: 'UGX' | 'USD';
  onOpenBooking: () => void;
}

export const QuoteBasketDrawer: React.FC<QuoteBasketDrawerProps> = ({
  isOpen,
  onClose,
  basket,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket,
  currency,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const totalUGX = basket.reduce((acc, b) => acc + b.item.priceUGX * b.quantity, 0);

  const formatPrice = (ugx: number) => {
    if (currency === 'UGX') {
      return `UGX ${ugx.toLocaleString()}`;
    }
    return `$${(ugx / 3700).toFixed(2)}`;
  };

  const handleWhatsAppInquiry = () => {
    const itemsList = basket
      .map((b) => `• ${b.quantity}x ${b.item.name} (${formatPrice(b.item.priceUGX * b.quantity)})`)
      .join('\n');

    const msg = `*Inquiry / Order from Evelyn Bites Website:*
Location: Plot 8, Kampala-Hoima Rd, Nansana

*Items:*
${itemsList}

*Estimated Total:* ${formatPrice(totalUGX)}

Please confirm availability and pickup/delivery options. Thank you!`;

    window.open(`https://wa.me/256701445892?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#43312A]/70 backdrop-blur-xs animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF7] shadow-2xl flex flex-col justify-between border-l border-[#D4C3B5]">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#D4C3B5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#B45309]" />
              <h3 className="font-serif text-xl font-bold text-[#43312A]">
                Your Order Inquiry List
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#8B5E3C] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items */}
          <div className="p-6 overflow-y-auto flex-1 divide-y divide-[#D4C3B5]/50 font-sans">
            {basket.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF3EB] text-[#B45309] flex items-center justify-center mx-auto border border-[#D4C3B5]">
                  <ShoppingBag className="w-8 h-8 text-[#B45309]" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#43312A]">
                  Your Inquiry List is Empty
                </h4>
                <p className="text-xs text-[#5D4037] max-w-xs mx-auto font-sans">
                  Browse our price list and tap "Add to Order Inquiry" on cakes, mandazi, buns, or loaves to create an instant quote.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white text-xs font-sans uppercase tracking-widest font-semibold shadow-xs cursor-pointer transition-colors"
                >
                  Explore Price List
                </button>
              </div>
            ) : (
              basket.map((item) => (
                <div key={item.item.id} className="py-4 flex gap-3.5 items-center justify-between">
                  <img
                    src={item.item.image}
                    alt={item.item.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-[#D4C3B5]"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-xs sm:text-sm text-[#43312A] truncate">
                      {item.item.name}
                    </h5>
                    <p className="text-[11px] text-[#8B5E3C]">
                      {item.item.unit}
                    </p>
                    <p className="text-xs font-bold text-[#B45309] mt-0.5">
                      {formatPrice(item.item.priceUGX * item.quantity)}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#D4C3B5]">
                    <button
                      onClick={() => onUpdateQuantity(item.item.id, -1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F5EFE6] text-[#43312A] cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-[#43312A] px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.item.id, 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#F5EFE6] text-[#43312A] cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => onRemoveItem(item.item.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Remove from list"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with Totals and Action */}
          {basket.length > 0 && (
            <div className="p-6 bg-white border-t border-[#D4C3B5] space-y-4 font-sans">
              <div className="flex items-center justify-between text-sm font-semibold text-[#43312A]">
                <span>Estimated Items Total:</span>
                <span className="font-serif text-2xl text-[#43312A] font-bold">
                  {formatPrice(totalUGX)}
                </span>
              </div>

              <p className="text-[11px] text-[#8B5E3C] leading-snug">
                Prices valid for fresh pickup at Plot 8, Kampala-Hoima Road or delivery across Nansana & Kampala.
              </p>

              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send List to Chef Evelyn on WhatsApp</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking();
                    }}
                    className="flex-1 py-2.5 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <span>Custom Ceremony Cake</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onClearBasket}
                    className="px-4 py-2.5 rounded-full border border-[#D4C3B5] text-xs font-sans uppercase tracking-wider font-semibold text-[#8B5E3C] hover:bg-[#F5EFE6] cursor-pointer transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
