import { useEffect } from 'react';
import { Rocket, Phone, Mail, Shield, Cloud, Headset } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    document.title = 'Osiris IT — Your Trusted Technology Partner';
  }, []);

  return (
    <header className="relative bg-white">
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0066CC] text-white font-semibold">OI</div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">Osiris IT</p>
                <p className="text-xs text-gray-500">Your Trusted Technology Partner</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="text-gray-700 hover:text-[#0066CC]">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-[#0066CC]">Industries</a>
              <a href="#resources" className="text-gray-700 hover:text-[#0066CC]">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-[#0066CC]">Contact</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-[#0066CC] px-4 py-2 text-sm font-medium text-[#0066CC] hover:bg-[#0066CC]/5 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]">
                <Phone className="h-4 w-4" /> Schedule Consultation
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#0066CC] px-4 py-2 text-sm font-medium text-white hover:bg-[#005bb8] focus:outline-none focus:ring-2 focus:ring-[#00A3E0]">
                <Rocket className="h-4 w-4" /> Free Assessment
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E6F3FF] via-white to-[#E6FAFF]" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Managed IT and Cybersecurity for Growing Teams
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
                  Osiris IT keeps your business secure, compliant, and always-on. From 24/7 helpdesk to cloud, backup, and VoIP — we manage it all so you can focus on growth.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#0066CC] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#005bb8] focus:outline-none focus:ring-2 focus:ring-[#00A3E0]">
                    <Rocket className="h-4 w-4" /> Get Free Assessment
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]">
                    <Mail className="h-4 w-4" /> Request Quote
                  </a>
                </div>
                <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <dt className="font-medium text-gray-900">99.95% Uptime</dt>
                    <dd className="mt-1 text-gray-600">SLAs you can trust</dd>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <dt className="font-medium text-gray-900">24/7 Helpdesk</dt>
                    <dd className="mt-1 text-gray-600">Real humans, real-time</dd>
                  </div>
                </dl>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <FeatureCard icon={Shield} title="Cybersecurity" desc="Protection, monitoring, compliance" />
                  <FeatureCard icon={Cloud} title="Cloud" desc="Azure, AWS, Microsoft 365" />
                  <FeatureCard icon={Headset} title="Helpdesk" desc="24/7 support with SLAs" />
                  <FeatureCard icon={Phone} title="VoIP" desc="Modern unified communications" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#E6F3FF] text-[#0066CC]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
