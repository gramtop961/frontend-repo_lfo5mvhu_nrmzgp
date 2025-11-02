import Hero from './components/Hero';
import Services from './components/Services';
import TrustTestimonials from './components/TrustTestimonials';
import BlogContact from './components/BlogContact';

function Industries() {
  const items = [
    'Healthcare',
    'Finance',
    'Legal',
    'Manufacturing',
    'Education',
    'Non-Profit',
  ];
  return (
    <section id="industries" className="bg-[#0F172A] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Industries we serve</h2>
            <p className="mt-2 max-w-2xl text-[#E2E8F0]">Tailored solutions for regulated and growth-focused teams.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-gray-100">Request Quote</a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {items.map((name) => (
            <div key={name} className="rounded-lg border border-white/10 bg-white/5 p-4 text-[#E2E8F0]">
              <p className="font-medium text-white">{name}</p>
              <p className="text-sm text-[#CBD5E1]">Risk-reduced, compliant, and scalable.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <Industries />
      <TrustTestimonials />
      <BlogContact />
    </div>
  );
}
