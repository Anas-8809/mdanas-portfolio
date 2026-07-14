import { projects, profile } from '../data/resumeData'

const ACCENTS = ['border-l-keyword', 'border-l-info', 'border-l-string']

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">projects</p>
            <h2 className="mt-2 font-mono text-2xl font-semibold text-ink sm:text-3xl">Things I've shipped</h2>
          </div>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded border border-func px-3 py-1.5 font-mono text-xs text-func transition-colors hover:bg-func hover:text-paper"
          >
            700+ solved on leetcode ↗
          </a>
        </div>

        <div className="mt-10 space-y-6">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`overflow-hidden rounded-lg border border-l-4 border-border bg-paper shadow-sm ${ACCENTS[i % ACCENTS.length]}`}
            >
              <div className="flex items-center justify-between border-b border-border bg-surface/70 px-4 py-2">
                <span className="font-mono text-xs text-muted">{project.file}</span>
                <span className="font-mono text-xs text-muted">{project.date}</span>
              </div>
              <div className="px-5 py-5 sm:px-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-sans text-lg font-semibold text-ink sm:text-xl">{project.name}</h3>
                  <div className="flex shrink-0 gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring rounded border border-string bg-string px-3 py-1 font-mono text-xs text-paper transition-colors hover:bg-string/85"
                      >
                        live demo ↗
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring rounded border border-border px-3 py-1 font-mono text-xs text-ink transition-colors hover:border-ink"
                    >
                      source ↗
                    </a>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm leading-relaxed text-ink/85">
                      <span className="mt-0.5 select-none font-mono text-string" aria-hidden="true">
                        +
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
