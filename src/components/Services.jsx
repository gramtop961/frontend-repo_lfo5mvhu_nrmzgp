import { Shield, Cloud, Headset, Server, Cpu, Phone, CheckCircle } from 'lucide-react';

const services = [
  { title: 'Managed IT Services', desc: 'Proactive monitoring, patching, asset management, and strategy aligned to your goals.', icon: Cpu },
  { title: 'Cybersecurity', desc: 'Advanced protection, EDR/XDR, vulnerability management, training, and compliance.', icon: Shield },
  { title: 'Cloud (Azure / AWS / M365)', desc: 'Design, migration, and optimization for scalability and cost efficiency.', icon: Cloud },
  { title: '24/7 Helpdesk', desc: 'Responsive support with SLAs, remote and onsite assistance when you need it.', icon: Headset },
  { title: 'Backup & Disaster Recovery', desc: 'Air-gapped backups, rapid recovery, and business continuity planning.', icon: Server },
  { title: 'Hardware & Software', desc: 'Procurement, lifecycle management, and vendor coordination made simple.', icon: CheckCircle },
  { title: 'IT Consulting', desc: 'Roadmapping, audits, and vCIO services to guide smart technology decisions.', icon: Cpu },
  { title: 'VoIP & Collaboration', desc: 'Modern phone systems, contact center, and secure collaboration tools.', icon: Phone },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Services</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Comprehensive, secure, and scalable solutions designed for healthcare, finance, legal, manufacturing, education, and non-profit.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#00A3E0] px-4 py-2 text-sm font-medium text-white hover:bg-[#0093c9] focus:outline-none focus:ring-2 focus:ring-[#0066CC]">
            Get a Customized Plan
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#E6FAFF] text-[#00A3E0]">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#00A3E0]" /> Enterprise-grade security</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#00A3E0]" /> Clear SLAs & reporting</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#00A3E0]" /> Scales with your team</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
