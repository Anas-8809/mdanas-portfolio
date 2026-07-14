import TabBar from './components/TabBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { profile } from './data/resumeData'

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <TabBar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-border px-4 py-6 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </footer>
    </div>
  )
}
