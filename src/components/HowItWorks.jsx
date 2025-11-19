import { Eye, FileText, Send } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Eye, title: 'Detect', desc: 'Install a lightweight script that identifies LLM bots and logs structured visits.' },
    { icon: FileText, title: 'Guide', desc: 'Generate llms.txt and structured content packs to steer models to the right facts.' },
    { icon: Send, title: 'Promote', desc: 'Publish to our model distribution feed so assistants can fetch fresh updates.' },
  ]

  return (
    <section id="how" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-white/70">From first signal to first answer that mentions your brand.</p>
        </div>
        <ol className="grid md:grid-cols-3 gap-6 counter-reset">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center mb-4">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{idx + 1}. {s.title}</h3>
              <p className="mt-1.5 text-white/70 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(251,191,36,0.10),transparent_50%)]" />
    </section>
  )
}
