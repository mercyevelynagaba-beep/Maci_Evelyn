import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F5EFE6] border-t border-[#D4C3B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D9CC] text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.25em] font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#B45309]" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#43312A] tracking-tight">
            Loved By Families & Graduates Across Uganda
          </h2>
          <p className="text-[#5D4037] text-sm sm:text-base mt-2 font-sans">
            From wedding centerpieces to weekend baking students, read what our community has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D4C3B5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D4C3B5] mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B45309] text-[#B45309]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed italic font-sans">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D4C3B5]/50 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#D4C3B5]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#43312A] font-sans">{item.name}</h4>
                  <p className="text-xs text-[#B45309] font-semibold font-sans">{item.ceremony}</p>
                  <p className="text-[11px] text-[#8B5E3C] font-sans">{item.location} • {item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
