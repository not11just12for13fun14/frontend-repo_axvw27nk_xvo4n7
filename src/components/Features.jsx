import { Bot, Eye, LineChart, FileText, ShieldCheck, Rocket } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Eye, title: 'LLM traffic analytics', desc: 'See which models accessed your pages and how often — GPT-4, Claude, Perplexity, Gemini and more.' },
    { icon: LineChart, title: 'AI Visibility Score', desc: 'A single score that reflects how visible your brand is across conversational answers.' },
    { icon: FileText, title: 'llms.txt generator', desc: 'Generate and validate an llms.txt file to guide AI crawlers to your best content.' },
    { icon: Bot, title: 'Answer optimization', desc: 'Playbooks to improve how LLMs summarize your products and services.' },
    { icon: ShieldCheck, title: 'Consent + governance', desc: 'Respect robots rules, add allowlists/denylists, and control embeddings of your content.' },
    { icon: Rocket, title: 'One-click integrations', desc: 'Drop-in plugins for Shopify, WordPress, Webflow, Next.js and more.' },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to be visible in AI</h2>
          <p className="mt-3 text-white/70">From detection to optimization and promotion — all in one place.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/7.5 transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center mb-4">
                <it.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.15),transparent_50%)]" />
    </section>
  )
}
