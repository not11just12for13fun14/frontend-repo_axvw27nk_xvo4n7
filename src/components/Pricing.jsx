export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, usage‑based pricing</h2>
          <p className="mt-3 text-white/70">Start free. Scale as your AI visibility grows.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Plan name="Starter" price="$0" note="Free forever" features={["10k LLM events/mo", "llms.txt generator", "1 website"]} cta="Get started" />
          <Plan name="Growth" price="$99" note="per month" featured features={["250k LLM events/mo", "Answer optimization", "3 websites", "Priority support"]} cta="Start trial" />
          <Plan name="Scale" price="Custom" note="Let's talk" features={["Millions of events", "SLA & SSO", "On-prem options"]} cta="Contact sales" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(99,102,241,0.10),transparent_50%)]" />
    </section>
  )
}

function Plan({ name, price, note, features, cta, featured }) {
  return (
    <div className={`${featured ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'} p-6 rounded-2xl border` }>
      <div className="flex items-baseline justify-between">
        <h3 className="text-white font-semibold">{name}</h3>
        {featured && <span className="px-2 py-0.5 text-xs rounded-full bg-white text-slate-900">Popular</span>}
      </div>
      <div className="mt-4 text-white">
        <div className="text-3xl font-bold">{price}</div>
        <div className="text-white/70 text-sm">{note}</div>
      </div>
      <ul className="mt-4 space-y-2 text-white/80 text-sm">
        {features.map(f => <li key={f}>• {f}</li>)}
      </ul>
      <button className={`mt-6 w-full px-4 py-2 rounded-xl font-medium transition ${featured ? 'bg-white text-slate-900' : 'border border-white/20 text-white/90 hover:bg-white/5'}`}>{cta}</button>
    </div>
  )
}
