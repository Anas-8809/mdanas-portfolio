import { profile, education } from '../data/resumeData'

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-border">
      <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-[13px] text-muted">/**</p>
        <p className="font-mono text-[13px] leading-relaxed text-muted">
          {' '} <b>{profile.objective}</b>
        </p>
        <p className="font-mono text-[13px] text-muted"> **/</p>

        <h1 className="mt-6 font-mono text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          const <span className="text-keyword">anas</span> ={' '}
          <span className="text-ink">{'{'}</span>
        </h1>
        <div className="mt-2 pl-4 font-mono text-lg leading-relaxed text-ink sm:text-2xl">
          <p>
            name: <span className="text-string">"{profile.name}"</span>,
          </p>
          <p>
            role: <span className="text-string">"{profile.role}"</span>,
          </p>
          <p>
            focus: [<span className="text-string">"MERN"</span>, <span className="text-string">"DSA"</span>,{' '}
            <span className="text-string">"AI/ML"</span>],
          </p>
          <p>
            education: <span className="text-string">"{education.school}"</span>,
          </p>
          <p className="cursor-blink">
            status: <span className="text-func">"open to opportunities"</span>
          </p>
        </div>
        <p className="font-mono text-2xl text-ink sm:text-4xl">{'}'}</p>
        
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-func bg-func/10 px-4 py-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-func" aria-hidden="true" />
          <span className="font-mono text-xs text-func sm:text-sm">
            🏆 Qualified — Amazon ML Summer School 2026
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">

  {/* Primary Buttons */}

  <a
    href="#projects"
    className="
    focus-ring
    rounded
    border
    border-purple-700
    bg-purple-700
    px-5
    py-2.5
    font-mono
    text-sm
    text-white
    shadow-sm
    transition-all
    hover:scale-105
    hover:bg-purple-800
    "
  >
    view projects
  </a>

  <a
    href="/resume.pdf"
    download="Md_Anas_Resume.pdf"
    className="
    focus-ring
    rounded
    border
    border-purple-700
    bg-purple-700
    px-5
    py-2.5
    font-mono
    text-sm
    text-white
    shadow-sm
    transition-all
    hover:scale-105
    hover:bg-purple-800
    "
  >
    download resume
  </a>

  {/* Secondary Buttons */}

  <a
    href={profile.github}
    target="_blank"
    rel="noreferrer"
    className="
    focus-ring
    rounded
    border
    border-gray-300
    bg-white
    px-5
    py-2.5
    font-mono
    text-sm
    text-gray-800
    transition-all
    hover:border-purple-700
    hover:text-purple-700
    "
  >
    github ↗
  </a>

  <a
    href={profile.linkedin}
    target="_blank"
    rel="noreferrer"
    className="
    focus-ring
    rounded
    border
    border-gray-300
    bg-white
    px-5
    py-2.5
    font-mono
    text-sm
    text-gray-800
    transition-all
    hover:border-purple-700
    hover:text-purple-700
    "
  >
    linkedin ↗
  </a>

  <a
    href={profile.leetcode}
    target="_blank"
    rel="noreferrer"
    className="
    focus-ring
    rounded
    border
    border-gray-300
    bg-white
    px-5
    py-2.5
    font-mono
    text-sm
    text-gray-800
    transition-all
    hover:border-purple-700
    hover:text-purple-700
    "
  >
    leetcode ↗
  </a>

</div>
      </div>
    </section>
  )
}
