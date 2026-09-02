import React, { useState } from 'react';
import { X, Calendar, Sparkles, CheckCircle2, Clock, MapPin, Phone, ShieldCheck, Heart, Download } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface CeremonyBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'UGX' | 'USD';
}

export const CeremonyBookingModal: React.FC<CeremonyBookingModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const [ceremonyType, setCeremonyType] = useState('Kwanjula (Introduction)');
  const [ceremonyDate, setCeremonyDate] = useState('');
  const [guestCount, setGuestCount] = useState('80-120');
  const [tierOption, setTierOption] = useState('2-Tier');
  const [finishStyle, setFinishStyle] = useState('Royal Fondant with Edible Gold Lace');
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([
    'Traditional Spiced Fruit (Kwanjula Special)',
    'Madagascan Vanilla Bean Sponge'
  ]);
  const [customInscription, setCustomInscription] = useState('');
  const [themeColors, setThemeColors] = useState('');
  
  // Pastry Add-ons
  const [addMandaziBites, setAddMandaziBites] = useState(true);
  const [addSweetBuns, setAddSweetBuns] = useState(false);

  // Delivery & Contact
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('delivery');
  const [deliveryLocation, setDeliveryLocation] = useState('Nansana Municipality');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  // Base tier pricing logic
  const getTierPrice = (tier: string): number => {
    switch (tier) {
      case '1-Tier (Serves ~20-30)':
        return 160000;
      case '2-Tier':
        return 290000;
      case '3-Tier Royal (Serves ~80-120)':
        return 520000;
      case '4-Tier Grand Showcase (Serves 150+)':
        return 850000;
      case 'Tier Cake + 50 Matching Cupcakes':
        return 420000;
      default:
        return 290000;
    }
  };

  const mandaziAddonPrice = addMandaziBites ? 45000 : 0;
  const bunsAddonPrice = addSweetBuns ? 36000 : 0;
  const deliveryFee = deliveryMethod === 'delivery' ? 20000 : 0;

  const totalUGX = getTierPrice(tierOption) + mandaziAddonPrice + bunsAddonPrice + deliveryFee;
  const totalUSD = totalUGX / 3700;

  const formatAmount = (ugx: number) => {
    if (currency === 'UGX') {
      return `UGX ${ugx.toLocaleString()}`;
    }
    return `$${(ugx / 3700).toFixed(2)}`;
  };

  const handleFlavorToggle = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      if (selectedFlavors.length > 1) {
        setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
      }
    } else {
      if (selectedFlavors.length < 3) {
        setSelectedFlavors([...selectedFlavors, flavor]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !ceremonyDate) return;

    const randomRef = `EB-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(randomRef);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Ceremony Cake Booking Inquiry - Evelyn Bites*
Reference: ${referenceCode}
Customer: ${customerName}
Phone: ${customerPhone}
Ceremony: ${ceremonyType}
Date: ${ceremonyDate}
Guests: ${guestCount}
Cake Size: ${tierOption}
Finish: ${finishStyle}
Flavors: ${selectedFlavors.join(', ')}
Theme Colors: ${themeColors || 'Standard Luxury'}
Inscription: "${customInscription || 'None'}"
Addons: ${addMandaziBites ? '50 Mandazi Cocktail Bites (UGX 45,000)' : 'No Mandazi'}, ${addSweetBuns ? '2 Dozen Sweet Buns' : 'No Buns'}
Delivery: ${deliveryMethod === 'delivery' ? `Delivery to ${deliveryLocation}` : 'Pickup at Plot 8 Kampala-Hoima Rd'}
Estimated Quote: ${formatAmount(totalUGX)}`;

    return `https://wa.me/256701445892?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#43312A]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-3xl my-8 bg-[#FCFAF7] rounded-3xl overflow-hidden shadow-2xl border border-[#D4C3B5]">
        {/* Modal Header */}
        <div className="bg-[#43312A] text-white p-6 sm:p-8 relative border-b border-[#D4C3B5]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#D4C3B5] hover:text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#D4C3B5]">
            <Sparkles className="w-4 h-4 text-[#B45309]" />
            <span>Evelyn Bites Custom Celebrations</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#FCFAF7]">
            Book For Your Ceremony
          </h3>
          <p className="text-xs sm:text-sm text-[#D4C3B5] mt-1 max-w-xl font-sans">
            Custom hand-baked centerpieces for Kwanjula, Weddings, Birthdays & Graduations in Nansana, Kampala, and across Uganda.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto font-sans">
          {isSubmitted ? (
            /* Confirmation View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF3EB] text-[#B45309] border border-[#D4C3B5] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309]">
                  Booking Request Received
                </span>
                <h4 className="font-serif text-3xl font-bold text-[#43312A] mt-1">
                  Thank You, {customerName}!
                </h4>
                <p className="text-sm text-[#5D4037] max-w-md mx-auto mt-2">
                  Your ceremony cake order for <strong>{ceremonyType}</strong> on <strong>{ceremonyDate}</strong> has been logged under reference:
                </p>
                <div className="inline-block px-5 py-2 mt-3 bg-white border border-[#D4C3B5] rounded-full font-mono font-bold text-lg text-[#B45309] shadow-xs">
                  {referenceCode}
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="bg-white p-5 rounded-2xl border border-[#D4C3B5] text-left text-xs text-[#5D4037] space-y-2 max-w-lg mx-auto shadow-xs">
                <div className="flex justify-between pb-2 border-b border-[#D4C3B5]/60 font-bold text-sm text-[#43312A]">
                  <span>{ceremonyType} ({tierOption})</span>
                  <span>{formatAmount(getTierPrice(tierOption))}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Flavors:</span>
                  <span className="font-medium text-right text-[#43312A]">{selectedFlavors.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Style / Finish:</span>
                  <span className="font-medium text-right text-[#43312A]">{finishStyle}</span>
                </div>
                {addMandaziBites && (
                  <div className="flex justify-between">
                    <span>50 Ceremony Mandazi Bites:</span>
                    <span>{formatAmount(mandaziAddonPrice)}</span>
                  </div>
                )}
                {addSweetBuns && (
                  <div className="flex justify-between">
                    <span>2 Dozen Sweet Buns:</span>
                    <span>{formatAmount(bunsAddonPrice)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Fulfillment:</span>
                  <span>{deliveryMethod === 'delivery' ? `Delivery (${deliveryLocation})` : 'Plot 8 Pickup'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#D4C3B5]/60 text-sm font-bold text-[#43312A]">
                  <span>Estimated Total:</span>
                  <span>{formatAmount(totalUGX)}</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="max-w-md mx-auto space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send Order Details to Chef Evelyn on WhatsApp</span>
                </a>

                <p className="text-[11px] text-[#8B5E3C]">
                  Chef Evelyn will review your design notes and confirm the deposit details via WhatsApp (+256 701 445 892).
                </p>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-full border border-[#D4C3B5] text-xs font-sans uppercase tracking-wider font-semibold text-[#8B5E3C] hover:bg-[#F5EFE6] cursor-pointer transition-colors"
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              {/* Step 1: Ceremony Type & Date */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#43312A] text-white text-[11px] flex items-center justify-center font-sans">1</span>
                  <span>Ceremony Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Ceremony Type *
                    </label>
                    <select
                      value={ceremonyType}
                      onChange={(e) => setCeremonyType(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    >
                      <option value="Kwanjula (Introduction)">Kwanjula (Introduction)</option>
                      <option value="Wedding Ceremony">Wedding Ceremony</option>
                      <option value="Kuhingira (Giveaway)">Kuhingira (Giveaway)</option>
                      <option value="Milestone Birthday">Milestone Birthday</option>
                      <option value="Graduation Ceremony">Graduation Ceremony</option>
                      <option value="Baby Shower / Christening">Baby Shower / Christening</option>
                      <option value="Anniversary / Corporate Gala">Anniversary / Corporate Gala</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Ceremony Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={ceremonyDate}
                      onChange={(e) => setCeremonyDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Estimated Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    >
                      <option value="20-40">20 – 40 Guests (Intimate)</option>
                      <option value="50-80">50 – 80 Guests</option>
                      <option value="80-120">80 – 120 Guests (Standard Kwanjula)</option>
                      <option value="150-250">150 – 250 Guests (Large Wedding)</option>
                      <option value="300+">300+ Guests (Grand Celebration)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Cake Size & Finish */}
              <div className="pt-3 border-t border-[#D4C3B5]/60">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#43312A] text-white text-[11px] flex items-center justify-center font-sans">2</span>
                  <span>Cake Tier & Artistry Style</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Tier Size & Servings
                    </label>
                    <select
                      value={tierOption}
                      onChange={(e) => setTierOption(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] font-medium focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    >
                      <option value="1-Tier (Serves ~20-30)">1-Tier Intimate (~20-30 slices) • {formatAmount(160000)}</option>
                      <option value="2-Tier">2-Tier Classic (~50-60 slices) • {formatAmount(290000)}</option>
                      <option value="3-Tier Royal (Serves ~80-120)">3-Tier Royal (~80-120 slices) • {formatAmount(520000)}</option>
                      <option value="4-Tier Grand Showcase (Serves 150+)">4-Tier Grand Showcase (150+ slices) • {formatAmount(850000)}</option>
                      <option value="Tier Cake + 50 Matching Cupcakes">Tier Cake + 50 Matching Cupcakes • {formatAmount(420000)}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Outer Styling & Finish
                    </label>
                    <select
                      value={finishStyle}
                      onChange={(e) => setFinishStyle(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] font-medium focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    >
                      <option value="Royal Fondant with Edible Gold Lace">Royal Fondant with Edible Gold Lace</option>
                      <option value="Traditional Kwanjula Calabash & Beaded Design">Traditional Kwanjula Calabash & Beaded Motif</option>
                      <option value="Velvet Swiss Buttercream & Floral Cascade">Velvet Swiss Buttercream & Floral Cascade</option>
                      <option value="Modern Golden Drip with Fresh Berries & Macarons">Modern Golden Drip with Berries & Macarons</option>
                      <option value="Semi-Naked Rustic Botanical">Semi-Naked Rustic Botanical</option>
                    </select>
                  </div>
                </div>

                {/* Flavors Select */}
                <div className="mt-3">
                  <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1.5">
                    Select Up to 2 Flavors for Different Tiers:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Traditional Spiced Fruit (Kwanjula Special)',
                      'Madagascan Vanilla Bean Sponge',
                      'Rich Belgian Chocolate Fudge',
                      'Velvety Red Rose & Cream Cheese',
                      'Salted Caramel Marble',
                      'Passion Coconut Cream'
                    ].map((flavor) => {
                      const isSelected = selectedFlavors.includes(flavor);
                      return (
                        <button
                          key={flavor}
                          type="button"
                          onClick={() => handleFlavorToggle(flavor)}
                          className={`p-2.5 rounded-xl text-xs text-left font-medium border transition-all flex items-start justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#FAF3EB] border-[#B45309] text-[#43312A]'
                              : 'bg-white border-[#D4C3B5] text-[#5D4037] hover:bg-[#F5EFE6]'
                          }`}
                        >
                          <span className="leading-tight">{flavor}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Theme colors & Inscription */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Theme Colors / Motif
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Emerald & Gold, Burgundy & Blush"
                      value={themeColors}
                      onChange={(e) => setThemeColors(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Cake Inscription (Calligraphy Text)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Introduces Kenneth"
                      value={customInscription}
                      onChange={(e) => setCustomInscription(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Ceremony Pastry Add-ons */}
              <div className="pt-3 border-t border-[#D4C3B5]/60">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#43312A] text-white text-[11px] flex items-center justify-center font-sans">3</span>
                  <span>Ceremony Hospitality Add-ons (Welcome Snacks)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      addMandaziBites
                        ? 'bg-[#FAF3EB] border-[#B45309] text-[#43312A]'
                        : 'bg-white border-[#D4C3B5] text-[#5D4037]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addMandaziBites}
                        onChange={(e) => setAddMandaziBites(e.target.checked)}
                        className="w-4 h-4 rounded text-[#B45309] focus:ring-[#B45309]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#43312A]">50 Spiced Mandazi Cocktail Bites</p>
                        <p className="text-[11px] text-[#8B5E3C]">Cardamom cocktail bites for visitors</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#B45309]">+{formatAmount(45000)}</span>
                  </label>

                  <label
                    className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      addSweetBuns
                        ? 'bg-[#FAF3EB] border-[#B45309] text-[#43312A]'
                        : 'bg-white border-[#D4C3B5] text-[#5D4037]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addSweetBuns}
                        onChange={(e) => setAddSweetBuns(e.target.checked)}
                        className="w-4 h-4 rounded text-[#B45309] focus:ring-[#B45309]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#43312A]">2 Dozen Honey Butter Sweet Buns</p>
                        <p className="text-[11px] text-[#8B5E3C]">Pull-apart buns with Ugandan honey</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#B45309]">+{formatAmount(36000)}</span>
                  </label>
                </div>
              </div>

              {/* Step 4: Contact & Delivery */}
              <div className="pt-3 border-t border-[#D4C3B5]/60">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#43312A] text-white text-[11px] flex items-center justify-center font-sans">4</span>
                  <span>Contact & Fulfillment</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mercy Evelyn Agaba"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0701 445 892"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Fulfillment Method
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`flex-1 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border cursor-pointer transition-colors ${
                          deliveryMethod === 'delivery'
                            ? 'bg-[#43312A] text-white border-[#43312A]'
                            : 'bg-white border-[#D4C3B5] text-[#43312A] hover:bg-[#F5EFE6]'
                        }`}
                      >
                        Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`flex-1 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border cursor-pointer transition-colors ${
                          deliveryMethod === 'pickup'
                            ? 'bg-[#43312A] text-white border-[#43312A]'
                            : 'bg-white border-[#D4C3B5] text-[#43312A] hover:bg-[#F5EFE6]'
                        }`}
                      >
                        Plot 8 Pickup
                      </button>
                    </div>
                  </div>
                </div>

                {deliveryMethod === 'delivery' && (
                  <div className="mt-3">
                    <label className="block text-xs font-semibold text-[#43312A] uppercase tracking-wider mb-1">
                      Ceremony Venue / Delivery Location in Kampala / Wakiso
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nansana Town Council grounds / Namungoona / Kasubi / Kololo"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#B45309]"
                    />
                  </div>
                )}
              </div>

              {/* Price Estimate Bar and Submit */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D4C3B5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div>
                  <span className="text-xs text-[#8B5E3C] font-semibold block uppercase tracking-wider">
                    Estimated Ceremony Quote ({currency})
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-[#43312A]">
                      {formatAmount(totalUGX)}
                    </span>
                    <span className="text-xs text-[#8B5E3C]">
                      {deliveryMethod === 'delivery' ? '(Includes safe cake transport)' : '(Ready at Plot 8)'}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  Submit Ceremony Booking Request →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
