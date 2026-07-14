import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/resumeData'
import { AnimatePresence, motion } from 'framer-motion'

const TABS = [
  { id: 'about', label: 'about', dot: 'bg-keyword' },
  { id: 'projects', label: 'projects', dot: 'bg-info' },
  { id: 'skills', label: 'skills.json', dot: 'bg-string' },
  { id: 'achievements', label: 'achievements.log', dot: 'bg-func' },
  { id: 'contact', label: 'contact.me', dot: 'bg-warn' },
]

const initials = profile.name
  .split(' ')
  .map((n) => n[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

function Avatar({ size = 'h-8 w-8 text-xs' }) {
  if (profile.avatar) {
    return (
      <img
        src={profile.avatar}
        alt={profile.name}
        className={`${size} shrink-0 rounded-full border border-border object-cover`}
      />
    )
  }

  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center rounded-full border border-border font-mono font-semibold text-paper`}
      style={{
        background:
          'linear-gradient(135deg, #7C3AED, #0EA5C4)',
      }}
    >
      {initials}
    </span>
  )
}

export default function TabBar() {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const menuRef = useRef(null)

  useEffect(() => {
    const sections = TABS.map((t) =>
      document.getElementById(t.id)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id)
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    )

    sections.forEach((s) =>
      observer.observe(s)
    )

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    )

    return () =>
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
  }, [])

  return (
    <>
      <nav
        className="
        sticky
        top-0
        z-40
        border-b
        border-border
        bg-paper/95
        backdrop-blur
        supports-[backdrop-filter]:bg-paper/80
        "
      >
        <div
          className="
          mx-auto
          flex
          max-w-4xl
          items-center
          justify-between
          px-3
          sm:px-4
          "
        >
          {/* Logo Section */}

          <div className="flex items-center gap-2 py-2.5 sm:py-0">

            <button
              onClick={() =>
                setShowProfile(true)
              }
              className="
              focus-ring
              transition
              hover:scale-110
              "
            >
              <Avatar />
            </button>

            <a
              href="#about"
              className="
              font-mono
              text-sm
              font-semibold
              text-ink
              "
            >
              {profile.name}
            </a>

          </div>

          {/* Desktop Tabs */}

          <div
            className="
            hidden
            items-stretch
            sm:flex
            "
          >
            {TABS.map((tab) => {
              const isActive =
                active === tab.id

              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`
                    focus-ring
                    group
                    relative
                    flex
                    shrink-0
                    items-center
                    gap-2
                    whitespace-nowrap
                    border-l
                    border-border
                    px-4
                    py-3
                    font-mono
                    text-[13px]
                    transition-colors
                    ${
                      isActive
                        ? 'bg-paper text-ink'
                        : 'bg-surface/60 text-muted hover:bg-paper hover:text-ink'
                    }
                  `}
                >
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      ${
                        isActive
                          ? tab.dot
                          : 'bg-border group-hover:bg-muted'
                      }
                    `}
                  />

                  {tab.label}

                  {isActive && (
                    <span
                      className={`
                        absolute
                        inset-x-0
                        bottom-0
                        h-[2px]
                        ${tab.dot}
                      `}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu */}

          <div
            className="relative sm:hidden"
            ref={menuRef}
          >
            <button
              type="button"
              onClick={() =>
                setMenuOpen((o) => !o)
              }
              className="
              focus-ring
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded
              border
              border-border
              "
            >
              ⋮
            </button>

            {menuOpen && (
              <div
                className="
                absolute
                right-0
                top-full
                mt-2
                w-52
                overflow-hidden
                rounded-lg
                border
                border-border
                bg-paper
                shadow-lg
                "
              >
                {TABS.map((tab) => {
                  const isActive =
                    active === tab.id

                  return (
                    <a
                      key={tab.id}
                      href={`#${tab.id}`}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className={`
                        flex
                        items-center
                        gap-2
                        border-b
                        border-border
                        px-4
                        py-3
                        font-mono
                        text-[13px]
                        ${
                          isActive
                            ? 'bg-surface text-ink'
                            : 'text-muted'
                        }
                      `}
                    >
                      {tab.label}
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        <div
          className="accent-bar h-[3px] w-full"
          aria-hidden="true"
        />
      </nav>

      {/* PROFILE POPUP */}

      <AnimatePresence>
        {showProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setShowProfile(false)
            }
            className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.5,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="relative"
            >
              <button
                onClick={() =>
                  setShowProfile(false)
                }
                className="
                absolute
                -top-4
                -right-4
                h-10
                w-10
                rounded-full
                bg-white
                text-black
                font-bold
                shadow-lg
                "
              >
                ✕
              </button>

              <img
                src={profile.avatar}
                alt={profile.name}
                className="
                h-80
                w-80
                rounded-full
                object-cover
                border-4
                border-cyan-400
                shadow-2xl
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}