import { Menu, Zap } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-indigo-500/30 grid place-items-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">AIViz</span>
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/80">Beta</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#integrations" className="text-white/80 hover:text-white transition">Integrations</a>
          <a href="#how" className="text-white/80 hover:text-white transition">How it works</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 rounded-lg text-white/90 hover:text-white border border-white/15 hover:border-white/25 transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition">Get started</button>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
    </header>
  )
}
