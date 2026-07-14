import { achievements, certifications, positions } from '../data/resumeData'

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">achievements.log</p>
        <h2 className="mt-2 font-mono text-2xl font-semibold text-ink sm:text-3xl">Numbers &amp; recognition</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {achievements.map((a, i) => (
            <div
              key={a.label}
              className="rounded-lg border-t-4 border-border bg-paper p-5 shadow-sm"
              style={{ borderTopColor: ['#7C3AED', '#0EA5C4', '#0F9D63'][i % 3] }}
            >
              <p className="font-mono text-[11px] text-muted">#{a.label}</p>
              <p className="gradient-text mt-2 font-mono text-3xl font-semibold">{a.value}</p>
              <p className="mt-1 font-sans text-sm text-ink/70">{a.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">certifications</p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className={`flex items-center justify-between gap-3 rounded border px-4 py-3 ${
                    c.featured ? 'border-func bg-func/10' : 'border-border bg-paper'
                  }`}
                >
                  <div>
                    <p className="font-sans text-sm font-medium text-ink">{c.name}</p>
                    <p className="font-mono text-xs text-muted">{c.meta}</p>
                  </div>
                  {c.featured && (
                    <span className="shrink-0 rounded-full border border-func px-2 py-0.5 font-mono text-[10px] text-func">
                      featured
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">positions_of_responsibility</p>
            <ul className="mt-4 space-y-3">
              {positions.map((p) => (
                <li key={p.role} className="rounded border border-border bg-paper px-4 py-3">
                  <p className="font-sans text-sm font-medium text-ink">{p.role}</p>
                  <p className="font-sans text-sm text-ink/70">{p.org}</p>
                  <p className="font-mono text-xs text-muted">{p.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
