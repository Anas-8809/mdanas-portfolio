import { useState } from 'react'
import { profile } from '../data/resumeData'
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${name || 'someone'}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`

  return (
    <section id="contact">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted"># contact.me</p>
        <h2 className="mt-2 font-mono text-2xl font-semibold text-ink sm:text-3xl">Let's talk</h2>
        <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-ink/75">
          Have a role, project, or question in mind? Fill this in and it opens your email client
          with everything pre-filled — nothing is sent from this page.
        </p>

        <form
          className="mt-8 max-w-xl space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailtoHref
          }}
        >
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-muted">
              name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="focus-ring mt-1 w-full rounded border border-border bg-paper px-3 py-2 font-sans text-sm text-ink outline-none"
              placeholder="Jane Recruiter"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-ring mt-1 w-full rounded border border-border bg-paper px-3 py-2 font-sans text-sm text-ink outline-none"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted">
              message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="focus-ring mt-1 w-full rounded border border-border bg-paper px-3 py-2 font-sans text-sm text-ink outline-none"
              placeholder="We'd love to chat about..."
            />
          </div>
          <button
            type="submit"
            className="focus-ring rounded border border-ink bg-ink px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:bg-ink/80"
          >
            # Send message
          </button>
        </form>

        <div
          className=" mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6
          font-mono
          text-xs
          text-muted
          "
        >

          <a
            href={`mailto:${profile.email}`}
            className="
            focus-ring
            hover:text-ink
            flex
            items-center
            gap-2
            "
          >
            <FaEnvelope className="text-red-400" />
            {profile.email}
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="
            focus-ring
            hover:text-ink
            flex
            items-center
            gap-2
            "
          >
            <FaPhone className="text-green-400" />
            {profile.phone}
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="
            focus-ring
            hover:text-ink
            flex
            items-center
            gap-2
            "
          >
            <FaGithub className="text-black" />
            github.com/Anas-8809
          </a>

          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            className="
            focus-ring
            hover:text-ink
            flex
            items-center
            gap-2
            "
          >
            <SiLeetcode className="text-orange-500" />
            leetcode.com/u/Md-Anas
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
            focus-ring
            hover:text-ink
            flex
            items-center
            gap-2
            "
          >
            <FaLinkedin className="text-blue-500" />
            linkedin.com/in/mdanas8809
          </a>

        </div>
      </div>
    </section>
  )
}
