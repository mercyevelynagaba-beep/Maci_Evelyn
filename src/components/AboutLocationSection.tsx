import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Award, CheckCircle2, Car, Heart } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface AboutLocationSectionProps {
  onOpenBooking: () => void;
  onOpenClassBooking: () => void;
}

export const AboutLocationSection: React.FC<AboutLocationSectionProps> = ({
  onOpenBooking,
  onOpenClassBooking,
}) => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FCFAF7] border-t border-[#D4C3B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D9CC] text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.25em] font-bold shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#B45309]" />
              <span>The Story of Evelyn Bites</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#43312A] tracking-tight">
              Rooted in Nansana, Baked with Pure Heart & Tradition.
            </h2>

            <p className="text-base text-[#5D4037] leading-relaxed font-sans">
              Founded on the belief that everyday moments and milestone ceremonies deserve the uncompromised warmth of authentic, freshly baked goods. Located at <strong className="text-[#43312A]">Plot 8, Kampala-Hoima Road</strong> in the vibrant heart of Nansana Municipality, Evelyn Bites is where early morning dough is hand-kneaded with farm butter and freshly ground spices.
            </p>

            <p className="text-sm text-[#5D4037] leading-relaxed font-sans">
              Whether you are stopping by for piping hot <strong className="text-[#B45309]">cardamom mandazi</strong> before your commute to Kampala, picking up a golden sweet milk loaf for your family, or commissioning a towering <strong className="text-[#B45309]">royal Kwanjula cake</strong>, our master ovens never compromise on quality. Over the weekends, we open our kitchen to empower students, home bakers, and entrepreneurs with professional hands-on baking skills.
            </p>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-sans">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#43312A]">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Zero Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#43312A]">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Pure Churned Butter & Milk</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#43312A]">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Safe Cake Transport Across Wakiso</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#43312A]">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Certified Masterclass Mentorship</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
              >
                Book Your Ceremony Cake
              </button>
              <button
                onClick={onOpenClassBooking}
                className="px-6 py-3 rounded-full border border-[#D4C3B5] bg-white text-[#43312A] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#F5EFE6] transition-all shadow-xs cursor-pointer active:scale-95"
              >
                Join Weekend Classes
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#FAF3EB]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
                alt="Evelyn Bites kitchen and artisan breads"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#43312A]/90 via-[#43312A]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4C3B5] block mb-1">
                  Our Artisanal Guarantee
                </span>
                <p className="font-serif text-2xl font-bold text-[#FCFAF7]">
                  Fresh Batches Every Two Hours
                </p>
                <p className="text-xs text-[#D4C3B5] mt-1 font-sans">
                  Plot 8, Kampala-Hoima Road • Open 7 days a week for walk-ins and consultations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact Information Hub */}
        <div className="bg-white rounded-3xl border border-[#D4C3B5] shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Contact & Hours Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309]">
                  Find & Visit Us
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#43312A] mt-1">
                  Plot 8, Kampala-Hoima Road
                </h3>
                <p className="text-sm text-[#5D4037] mt-1 font-sans">
                  Easily accessible right on the main highway in Nansana Municipality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 font-sans">
                {/* Physical Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#B45309]" />
                    <span>Exact Location</span>
                  </div>
                  <p className="text-sm font-semibold text-[#43312A]">
                    Plot 8, Kampala-Hoima Road
                  </p>
                  <p className="text-xs text-[#5D4037] leading-relaxed">
                    Nansana Municipality, Wakiso District, Uganda (Opposite Masito Stage, 200m from Nansana Town Council).
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-[#B45309] font-medium">
                    <Car className="w-3.5 h-3.5" />
                    <span>Free, secure parking for pickups & class students</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#B45309]" />
                    <span>Bakery & Class Hours</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#5D4037]">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#43312A]">Monday – Friday:</span>
                      <span>6:30 AM – 8:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#43312A]">Saturday:</span>
                      <span>7:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#43312A]">Sunday:</span>
                      <span>7:30 AM – 7:30 PM</span>
                    </div>
                    <p className="text-[11px] text-[#B45309] font-medium pt-1">
                      Weekend Classes: Sat 9am–6pm & Sun 10am–5pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-[#D4C3B5]/60 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <a
                  href={`tel:${BAKERY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-2xl bg-[#FAF3EB] border border-[#D4C3B5] flex items-center gap-3 hover:bg-[#F5EFE6] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#43312A] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#8B5E3C] uppercase tracking-wider block">Direct Orders</span>
                    <span className="text-sm font-bold text-[#43312A]">{BAKERY_INFO.phonePrimary}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/256701445892?text=${encodeURIComponent("Hello Evelyn Bites! I would like to make an inquiry about fresh bakes / ceremony cake / weekend classes.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center gap-3 hover:bg-[#25D366]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider block">WhatsApp Direct Chat</span>
                    <span className="text-sm font-bold text-emerald-950">Instant Quote & Reply</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Map Visual & Route Guide */}
            <div className="lg:col-span-5 bg-[#FAF3EB] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#D4C3B5] flex flex-col justify-between font-sans">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    Directions From Kampala
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white border border-[#D4C3B5] text-[#8B5E3C]">
                    ~15–20 Mins from City Center
                  </span>
                </div>

                {/* Highway Route Schematic */}
                <div className="bg-white p-4 rounded-2xl border border-[#D4C3B5] shadow-xs space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-[#FAF3EB] border border-[#D4C3B5] text-[#43312A] flex items-center justify-center font-bold text-[10px]">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-[#43312A]">Kampala Roundabout / Nakulabye</p>
                      <p className="text-[11px] text-[#8B5E3C]">Take Hoima Road passing Kasubi Tombs</p>
                    </div>
                  </div>

                  <div className="h-4 border-l-2 border-dashed border-[#D4C3B5] ml-3" />

                  <div className="flex items-center gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-[#FAF3EB] border border-[#D4C3B5] text-[#43312A] flex items-center justify-center font-bold text-[10px]">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-[#43312A]">Namungoona & Nansana Junction</p>
                      <p className="text-[11px] text-[#8B5E3C]">Continue straight along Kampala-Hoima Highway</p>
                    </div>
                  </div>

                  <div className="h-4 border-l-2 border-dashed border-[#D4C3B5] ml-3" />

                  <div className="flex items-center gap-3 text-xs bg-[#FCFAF7] p-2.5 rounded-xl border border-[#D4C3B5]">
                    <div className="w-6 h-6 rounded-full bg-[#B45309] text-white flex items-center justify-center font-bold text-[10px]">
                      ★
                    </div>
                    <div>
                      <p className="font-bold text-[#43312A]">Evelyn Bites • Plot 8</p>
                      <p className="text-[11px] text-[#5D4037]">Opposite Masito Stage, right by the roadside</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Button */}
              <div className="pt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Plot 8 Kampala-Hoima Road Nansana Municipality Uganda")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#D4C3B5]" />
                  <span>Open in Google Maps / Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
