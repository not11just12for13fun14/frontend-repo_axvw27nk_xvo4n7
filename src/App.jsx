import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(139,92,246,0.25),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(232,121,249,0.15),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <HowItWorks />
      <Pricing />

      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <div>© {new Date().getFullYear()} AIViz — AI visibility analytics for the LLM era.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
