import { Shopify, WordPress, Globe2 } from 'lucide-react'

export default function Integrations() {
  const items = [
    { name: 'Shopify', desc: 'Track LLM traffic to your store and push product context to models.', badge: 'App' },
    { name: 'WordPress', desc: 'Sync posts, sitemaps and FAQs; auto-generate llms.txt.', badge: 'Plugin' },
    { name: 'Any site', desc: 'Add a single script or use our API for frameworks like Next.js, Astro, Vite.', badge: 'Snippet' },
  ]

  return (
    <section id="integrations" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Works with your stack</h2>
          <p className="mt-3 text-white/70">Install in minutes with drop‑in plugins and API.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.name} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{i.name}</h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/80">{i.badge}</span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{i.desc}</p>
              <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-white/10 text-xs text-white/70">
                npm i aiviz-{i.name.toLowerCase().replace(' ', '-')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.12),transparent_50%)]" />
    </section>
  )
}
