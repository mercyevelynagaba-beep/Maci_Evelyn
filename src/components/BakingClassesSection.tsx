import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, UserCheck, CheckCircle, GraduationCap, ArrowRight, X, Phone } from 'lucide-react';
import { BAKING_CLASSES, BAKERY_INFO } from '../data/bakeryData';
import { ClassCourse } from '../types';

interface BakingClassesSectionProps {
  currency: 'UGX' | 'USD';
  preselectedClassId?: string;
  onOpenBooking: () => void;
}

export const BakingClassesSection: React.FC<BakingClassesSectionProps> = ({
  currency,
}) => {
  const [activeCourse, setActiveCourse] = useState<ClassCourse | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('This Saturday');
  const [isRegistered, setIsRegistered] = useState(false);

  const formatPrice = (course: ClassCourse) => {
    if (currency === 'UGX') {
      return `UGX ${course.priceUGX.toLocaleString()}`;
    }
    return `$${course.priceUSD.toFixed(2)}`;
  };

  const handleOpenRegister = (course: ClassCourse) => {
    setActiveCourse(course);
    setIsRegistered(false);
    setShowRegisterModal(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone) return;
    setIsRegistered(true);
  };

  return (
    <section id="classes" className="py-16 sm:py-24 bg-[#F5EFE6] border-t border-[#D4C3B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D9CC] text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.25em] font-bold mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4 text-[#B45309]" />
            <span>Weekend Masterclasses</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#43312A] tracking-tight">
            Learn To Bake Like A Professional
          </h2>
          <p className="text-[#5D4037] text-base sm:text-lg mt-3 font-sans">
            Every Saturday and Sunday at our kitchen on Plot 8, Kampala-Hoima Road. Master ceremony cake decorating, secret mandazi techniques, and rustic artisan loaves with Chef Evelyn.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BAKING_CLASSES.map((course) => {
            const seatsRemaining = course.seatsTotal - course.seatsBooked;

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4C3B5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-56 overflow-hidden bg-[#EADCCB]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#43312A]/90 via-[#43312A]/30 to-transparent" />

                    {/* Day & Level Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B45309] text-white shadow-xs">
                        {course.day}s
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold bg-[#FCFAF7]/95 text-[#43312A] backdrop-blur-xs border border-[#D4C3B5]">
                        {course.level}
                      </span>
                    </div>

                    {/* Seats Left Notification */}
                    <div className="absolute top-4 right-4 bg-[#FCFAF7] border border-[#D4C3B5] text-[#B45309] text-[10px] font-sans font-bold px-3 py-1 rounded-full shadow-xs">
                      {seatsRemaining} Seats Left
                    </div>

                    {/* Course Title Over Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs text-[#D4C3B5] font-sans font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B45309]" />
                        <span>{course.time} ({course.duration})</span>
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-[#FCFAF7] leading-snug mt-1">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Course Details Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-[#5D4037] leading-relaxed font-sans">
                      {course.description}
                    </p>

                    {/* What You'll Learn / Syllabus */}
                    <div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B45309] mb-2.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                        <span>Curriculum Highlights</span>
                      </h4>
                      <ul className="space-y-2">
                        {course.curriculum.map((item, idx) => (
                          <li key={idx} className="text-xs text-[#43312A] flex items-start gap-2 font-sans">
                            <CheckCircle className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Perks Box */}
                    <div className="bg-[#FAF3EB] p-3.5 rounded-2xl border border-[#D4C3B5] text-xs text-[#5D4037] font-sans flex items-center justify-between">
                      <span>✓ Ingredients & Aprons Provided</span>
                      <span className="font-semibold text-[#B45309]">✓ Take Home All You Bake</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-[#D4C3B5]/50 mt-2 flex items-center justify-between gap-4 pt-4">
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-[#8B5E3C] uppercase tracking-widest block">
                      Enrollment Fee
                    </span>
                    <span className="text-2xl font-bold text-[#43312A] font-serif">
                      {formatPrice(course)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenRegister(course)}
                    className="px-6 py-2.5 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white text-xs font-sans uppercase tracking-widest font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4C3B5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private / Group Masterclass Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#D4C3B5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#43312A]">
              Private 1-on-1 Mentorship or Bridal Party Baking?
            </h3>
            <p className="text-sm text-[#5D4037] max-w-2xl font-sans">
              We host private weekend bridal showers, church group masterclasses, and commercial bakery launch mentorship at Plot 8 or at your venue.
            </p>
          </div>

          <a
            href={`https://wa.me/256701445892?text=${encodeURIComponent("Hello Chef Evelyn, I am interested in private baking mentorship / group classes at Plot 8.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-semibold text-xs uppercase tracking-wider shadow-xs flex items-center gap-2 shrink-0 cursor-pointer transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Chat on WhatsApp for Custom Classes</span>
          </a>
        </div>
      </div>

      {/* Class Registration Modal */}
      {showRegisterModal && activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#43312A]/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#FCFAF7] rounded-3xl overflow-hidden shadow-2xl border border-[#D4C3B5]">
            {/* Modal Header */}
            <div className="bg-[#43312A] text-white p-6 relative border-b border-[#D4C3B5]">
              <button
                onClick={() => setShowRegisterModal(false)}
                className="absolute top-4 right-4 text-[#D4C3B5] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4C3B5]">
                Weekend Class Enrollment
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1 text-[#FCFAF7]">
                {activeCourse.title}
              </h3>
              <p className="text-xs text-[#D4C3B5] mt-1 font-sans">
                {activeCourse.day} • {activeCourse.time} • Fee: {formatPrice(activeCourse)}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isRegistered ? (
                <div className="text-center py-6 space-y-4 font-sans">
                  <div className="w-14 h-14 rounded-full bg-[#FAF3EB] text-[#B45309] flex items-center justify-center mx-auto border border-[#D4C3B5]">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#43312A]">
                    Seat Reserved, {studentName}!
                  </h4>
                  <p className="text-sm text-[#5D4037] max-w-sm mx-auto">
                    We have reserved your apron for <strong>{activeCourse.title}</strong> on <strong>{selectedDate}</strong> at Evelyn Bites, Plot 8, Kampala-Hoima Road.
                  </p>
                  <div className="p-3 bg-[#FAF3EB] rounded-2xl text-xs text-[#43312A] border border-[#D4C3B5]">
                    We have sent class directions and preparation notes to your phone: <strong>{studentPhone}</strong>.
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/256701445892?text=${encodeURIComponent(`Hello Chef Evelyn, I just registered for ${activeCourse.title} for ${selectedDate}. My name is ${studentName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Confirm via WhatsApp ({BAKERY_INFO.phonePrimary})</span>
                    </a>
                    <button
                      onClick={() => setShowRegisterModal(false)}
                      className="w-full py-2.5 rounded-full border border-[#D4C3B5] text-xs font-sans uppercase tracking-wider font-semibold text-[#8B5E3C] hover:bg-[#F5EFE6]"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-sans font-bold text-[#43312A] uppercase tracking-wider mb-1">
                      Select Preferred Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    >
                      <option value="This Saturday">This Saturday (Upcoming Session)</option>
                      <option value="Next Saturday">Next Saturday (Next Week)</option>
                      <option value="This Sunday">This Sunday (Upcoming Session)</option>
                      <option value="Next Sunday">Next Sunday (Next Week)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-[#43312A] uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mercy Agaba"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans font-bold text-[#43312A] uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0701 445 892"
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-bold text-[#43312A] uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. mercy@gmail.com"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#D4C3B5] text-[#43312A] placeholder:text-[#8B5E3C] focus:ring-2 focus:ring-[#B45309] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF3EB] rounded-xl text-xs text-[#5D4037] border border-[#D4C3B5] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B45309] shrink-0" />
                    <span>Venue: Evelyn Bites Studio, Plot 8 Kampala-Hoima Rd, Nansana.</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#43312A] hover:bg-[#B45309] text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-xs transition-all cursor-pointer"
                    >
                      Confirm Reservation ({formatPrice(activeCourse)})
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
