import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live AI visibility analytics
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Know when ChatGPT, Claude and other bots see your site.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
            Track which LLMs visit your pages, your AI Visibility Score, and get playbooks to boost your presence in conversational answers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:shadow-xl shadow-white/20 transition">Start free trial</a>
            <a href="#demo" className="px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/5 transition">See live demo</a>
          </div>
          <div className="mt-6 text-white/70 text-sm">
            Works with Shopify, WordPress, Webflow, custom stacks and more.
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur-md p-5">
            <div className="grid grid-cols-2 gap-4 text-white">
              <Stat label="AI Visibility Score" value="82" suffix="/100" trend="up" />
              <Stat label="LLM visits (7d)" value="1,284" trend="up" />
              <Stat label="Indexed pages" value="347" />
              <Stat label="LLMs detected" value="9" />
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 border border-white/10">
              <div className="text-white/90 text-sm font-medium mb-1">Action suggestion</div>
              <p className="text-white/75 text-sm">Add an llms.txt to guide AI crawlers. We generated one for you including product descriptions and FAQ schema.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_35%)]" />
    </section>
  )
}

function Stat({ label, value, suffix, trend }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="text-white/70 text-xs">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white flex items-baseline gap-1">
        <span>{value}</span>
        {suffix && <span className="text-white/60 text-sm">{suffix}</span>}
        {trend === 'up' && <span className="ml-1 text-emerald-400 text-xs">▲</span>}
        {trend === 'down' && <span className="ml-1 text-rose-400 text-xs">▼</span>}
      </div>
    </div>
  )
}
