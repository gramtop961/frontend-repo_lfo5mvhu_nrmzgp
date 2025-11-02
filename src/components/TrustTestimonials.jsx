import { useEffect, useState } from 'react';
import { Star, Award, Shield, Users, Building, ChevronLeft, ChevronRight } from 'lucide-react';

const badges = [
  { label: '10+ Years', sub: 'enterprise experience', icon: Award },
  { label: '200+ Clients', sub: 'SMB to mid-market', icon: Users },
  { label: 'SOC 2-Aware', sub: 'secure by design', icon: Shield },
  { label: 'Certified', sub: 'Microsoft, AWS', icon: Building },
];

const testimonials = [
  {
    quote:
      'Osiris IT transformed our security posture. Their team is responsive, proactive, and truly a partner to our business.',
    name: 'Caroline M.',
    role: 'CFO, Healthcare Group',
  },
  {
    quote:
      'The 24/7 helpdesk and cloud management let our team work without interruption. Uptime and service are exceptional.',
    name: 'James P.',
    role: 'COO, Manufacturing',
  },
  {
    quote:
      'Clear communication, measurable SLAs, and real results. Our audit went smoother than ever.',
    name: 'Alicia R.',
    role: 'Partner, Legal Firm',
  },
];

export default function TrustTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-900">Trusted by leaders</h3>
            <p className="mt-1 text-sm text-gray-600">Certifications, experience, and results that build confidence.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#E6F3FF] text-[#0066CC]">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{b.label}</p>
                    <p className="text-xs text-gray-600">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm">
              <span className="inline-flex items-center gap-1 text-[#0066CC]"><Star className="h-4 w-4" /> 4.9/5 rating</span>
              <span className="text-gray-500">•</span>
              <span>Case studies available</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">What our clients say</h3>
              <div className="flex gap-2">
                <button aria-label="Previous" onClick={prev} className="rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button aria-label="Next" onClick={next} className="rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-4 overflow-hidden">
              <div className="relative w-full">
                {testimonials.map((t, i) => (
                  <blockquote
                    key={i}
                    className={`rounded-2xl border border-gray-200 bg-white p-6 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                  >
                    <p className="text-lg text-gray-900">“{t.quote}”</p>
                    <footer className="mt-4 text-sm text-gray-600">— {t.name}, {t.role}</footer>
                  </blockquote>
                ))}
              </div>
              <div className="mt-3 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#0066CC]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
