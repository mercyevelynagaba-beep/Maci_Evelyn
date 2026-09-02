import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, Filter, Info, ShieldCheck } from 'lucide-react';
import { BAKERY_ITEMS } from '../data/bakeryData';
import { BakeryItem, ProductCategory } from '../types';

interface PriceListSectionProps {
  currency: 'UGX' | 'USD';
  onAddToBasket: (item: BakeryItem) => void;
  basketItemIds: string[];
  onOpenBooking: () => void;
}

export const PriceListSection: React.FC<PriceListSectionProps> = ({
  currency,
  onAddToBasket,
  basketItemIds,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories: { id: ProductCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Bakery Items', icon: '✨' },
    { id: 'cakes', label: 'Custom Cakes', icon: '🎂' },
    { id: 'mandazi', label: 'Golden Mandazi', icon: '🥟' },
    { id: 'buns', label: 'Warm Buns', icon: '🍯' },
    { id: 'loaves', label: 'Artisan Loaves', icon: '🍞' },
    { id: 'packages', label: 'Party Platters', icon: '🎉' },
  ];

  const filteredItems = useMemo(() => {
    return BAKERY_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const formatPrice = (item: BakeryItem) => {
    if (currency === 'UGX') {
      return `UGX ${item.priceUGX.toLocaleString()}`;
    }
    return `$${item.priceUSD.toFixed(2)}`;
  };

  const handleAdd = (item: BakeryItem) => {
    onAddToBasket(item);
    setAddedAnimationId(item.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section id="pricelist" className="py-16 sm:py-24 bg-[#FCFAF7] border-t border-[#D4C3B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3EB] border border-[#E8D9CC] text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.25em] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
            <span>Honest Artisanal Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#43312A] tracking-tight">
            Our Fresh Bakery Price List & Menu
          </h2>
          <p className="text-[#5D4037] text-base sm:text-lg mt-3 font-sans">
            Handcrafted with pure butter, real eggs, and fresh cardamom daily in Nansana. Pick up directly at Plot 8, Kampala-Hoima Road, or order in advance for delivery across Kampala and Wakiso.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#F5EFE6] p-3 sm:p-4 rounded-2xl border border-[#D4C3B5]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? 'bg-[#43312A] text-white shadow-xs'
                      : 'bg-white text-[#78350F] hover:bg-[#FAF3EB] border border-[#D4C3B5]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8B5E3C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cakes, mandazi, buns..."
              className="w-full pl-9 pr-4 py-2 text-xs font-sans rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F5EFE6] rounded-3xl border border-dashed border-[#D4C3B5]">
            <p className="text-lg font-serif font-bold text-[#43312A]">No items match your search.</p>
            <p className="text-xs font-sans text-[#8B5E3C] mt-1">Try searching for "mandazi", "cake", "bread", or clear the filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#43312A] text-white text-xs font-sans uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const inBasket = basketItemIds.includes(item.id);
              const isAddedJustNow = addedAnimationId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#D4C3B5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative h-52 overflow-hidden bg-[#EADCCB]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.badge && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B45309] text-white shadow-xs">
                            {item.badge}
                          </span>
                        )}
                        {item.serves && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold bg-[#FCFAF7]/95 text-[#43312A] backdrop-blur-xs border border-[#D4C3B5]">
                            {item.serves}
                          </span>
                        )}
                      </div>

                      {/* Price Tag in Image */}
                      <div className="absolute bottom-3 right-3 bg-[#43312A]/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-right border border-[#D4C3B5]/30">
                        <span className="text-sm sm:text-base font-serif font-bold text-[#FCFAF7]">
                          {formatPrice(item)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-xl font-bold text-[#43312A] group-hover:text-[#B45309] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-[11px] font-sans font-semibold text-[#8B5E3C] uppercase tracking-wider">
                        Portion: {item.unit}
                      </p>

                      <p className="text-xs text-[#5D4037] leading-relaxed line-clamp-2 font-sans">
                        {item.description}
                      </p>

                      {/* Ingredients tags */}
                      <div className="pt-1 flex flex-wrap gap-1">
                        {item.ingredients.slice(0, 3).map((ing, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5EFE6] text-[#78350F] font-sans font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                        {item.ingredients.length > 3 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded text-[#8B5E3C] font-sans">
                            +{item.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-5 pt-0 mt-2 border-t border-[#D4C3B5]/50 flex items-center gap-2 pt-3">
                    {item.category === 'cakes' ? (
                      <>
                        <button
                          onClick={onOpenBooking}
                          className="flex-1 py-2.5 px-3 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white text-xs font-sans uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <span>Custom Order</span>
                        </button>
                        <button
                          onClick={() => handleAdd(item)}
                          className={`py-2.5 px-3 rounded-full border text-xs font-sans uppercase tracking-wider font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                            isAddedJustNow
                              ? 'bg-[#B45309] text-white border-[#B45309]'
                              : inBasket
                              ? 'bg-[#FAF3EB] text-[#43312A] border-[#D4C3B5]'
                              : 'border-[#D4C3B5] text-[#43312A] hover:bg-[#F5EFE6]'
                          }`}
                          title="Add to your inquiry basket"
                        >
                          {isAddedJustNow ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>{inBasket ? 'More' : 'Inquire'}</span>
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleAdd(item)}
                        className={`w-full py-2.5 px-4 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isAddedJustNow
                            ? 'bg-[#B45309] text-white shadow-xs'
                            : inBasket
                            ? 'bg-[#FAF3EB] text-[#43312A] border border-[#D4C3B5]'
                            : 'bg-[#FCFAF7] border border-[#D4C3B5] text-[#43312A] hover:bg-[#43312A] hover:text-white hover:border-[#43312A]'
                        }`}
                      >
                        {isAddedJustNow ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>Added to Inquiry Basket</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>{inBasket ? 'Add More to Inquiry' : 'Add to Order Inquiry'}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Information Callout Banner */}
        <div className="mt-12 bg-[#F5EFE6] p-6 rounded-3xl border border-[#D4C3B5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#43312A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#D4C3B5]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#43312A]">
                Custom Ceremony Cake or Wholesale Mandazi/Buns Supply?
              </h4>
              <p className="text-xs sm:text-sm text-[#5D4037] mt-1 font-sans">
                We cater Kwanjula (introductions), weddings, church fellowships, and school events. Tell us your date and guest count for an instant quotation.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-[#43312A] text-white text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#B45309] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            Start Ceremony Booking →
          </button>
        </div>
      </div>
    </section>
  );
};
