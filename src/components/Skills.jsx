import { skills } from '../data/resumeData'

const rows = [
  { key: 'languages', label: 'languages', items: skills.languages },
  { key: 'web', label: 'web_and_backend', items: skills.web },
  { key: 'databases', label: 'databases', items: skills.databases },
  { key: 'apis', label: 'apis_and_auth', items: skills.apis },
  { key: 'ml', label: 'ai_ml', items: skills.ml },
  { key: 'tools', label: 'tools', items: skills.tools },
]

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">skills.json</p>
        <h2 className="mt-2 font-mono text-2xl font-semibold text-ink sm:text-3xl">What I build with</h2>

        <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-ink/[0.02] p-5 sm:p-6">
          <pre className="font-mono text-[13px] leading-loose text-ink sm:text-sm">
            <span className="text-muted">{'{'}</span>
            {rows.map((row, i) => (
              <span key={row.key} className="block pl-4">
                <span className="text-keyword">"{row.label}"</span>
                <span className="text-muted">: [</span>
                {row.items.map((item, idx) => (
                  <span key={item}>
                    <span className="text-string">"{item}"</span>
                    {idx < row.items.length - 1 && <span className="text-muted">, </span>}
                  </span>
                ))}
                <span className="text-muted">]{i < rows.length - 1 ? ',' : ''}</span>
              </span>
            ))}
            <span className="text-muted">{'}'}</span>
          </pre>
        </div>
      </div>
    </section>
  )
}
