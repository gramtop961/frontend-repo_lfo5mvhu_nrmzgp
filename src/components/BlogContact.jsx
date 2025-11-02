import { useState } from 'react';
import { Mail, MapPin, Clock, Lock } from 'lucide-react';

const posts = [
  {
    title: 'How to Build a Resilient BDR Strategy in 2025',
    excerpt: 'A practical roadmap for backups, disaster recovery, and business continuity for SMB and mid-market teams.',
    tag: 'Guide',
  },
  {
    title: 'Microsoft 365 Security Baselines You Should Enable Today',
    excerpt: 'The top configurations that meaningfully reduce risk without getting in the way of productivity.',
    tag: 'Security',
  },
  {
    title: 'Budgeting IT for Growth: From 25 to 250 Employees',
    excerpt: 'How to plan your technology investments with measurable ROI and predictable costs.',
    tag: 'Strategy',
  },
];

export default function BlogContact() {
  const [submitted, setSubmitted] = useState(false);
  const [spamField, setSpamField] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (spamField) return; // basic spam honeypot
    setSubmitted(true);
  }

  return (
    <section id="resources" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Latest resources</h3>
            <p className="mt-2 text-gray-600">Actionable guides and insights from our engineering team.</p>
            <div className="mt-6 grid gap-4">
              {posts.map((p) => (
                <article key={p.title} className="rounded-xl border border-gray-200 p-5 hover:shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#0066CC]"><span className="rounded bg-[#E6F3FF] px-2 py-0.5">{p.tag}</span></div>
                  <h4 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
                  <a href="#" className="mt-3 inline-block text-sm font-medium text-[#0066CC] hover:underline">Read more</a>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-gray-200 bg-[#F8FAFC] p-4 text-sm text-gray-700">
              <p>Subscribe to our newsletter for monthly security updates and best practices.</p>
              <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="you@company.com" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3E0]" />
                <button className="rounded-md bg-[#0066CC] px-4 py-2 text-sm font-medium text-white hover:bg-[#005bb8]">Subscribe</button>
              </form>
            </div>
          </div>

          <div id="contact" className="lg:pl-8">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Request a consultation</h3>
            <p className="mt-2 text-gray-600">Get a free assessment, project scoping, or quick quote. We respond within one business hour.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Contact form">
              <input
                type="text"
                value={spamField}
                onChange={(e) => setSpamField(e.target.value)}
                className="hidden"
                aria-hidden="true"
                tabIndex="-1"
                autoComplete="off"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3E0]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3E0]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3E0]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3E0]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">What can we help with?</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3E0]" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-[#00A3E0] px-4 py-2 text-sm font-medium text-white hover:bg-[#0093c9]">
                  <Mail className="h-4 w-4" /> Send request
                </button>
                <p className="flex items-center gap-1 text-xs text-gray-500"><Lock className="h-4 w-4" /> We protect your data</p>
              </div>
              {submitted && (
                <p role="status" className="text-sm font-medium text-green-700">Thanks! We\'ll be in touch shortly.</p>
              )}
            </form>

            <div className="mt-8 grid gap-4 rounded-xl border border-gray-200 p-4 text-sm text-gray-700 sm:grid-cols-3">
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#0066CC]" /> Nationwide, remote-first</div>
              <div className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-[#0066CC]" /> 24/7/365 Support</div>
              <div className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[#0066CC]" /> hello@osirisit.example</div>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-600">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Osiris IT. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Cookie Policy</a>
              <a href="#" className="hover:text-gray-900">Careers</a>
              <a href="#" className="hover:text-gray-900">Client Portal</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
