import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Fade-in sections observer
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.fade-in')
    sections.forEach((section) => fadeObserver.observe(section))

    // Skill badges staggered appearance observer
    // First, mark all badges as animated (opt-in) so CSS fallback stays visible without JS
    const allBadges = document.querySelectorAll('.skill-badge')
    allBadges.forEach((badge) => badge.classList.add('skill-badge--animated'))

    const badgeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const badges = entry.target.querySelectorAll('.skill-badge')
            badges.forEach((badge, i) => {
              setTimeout(() => badge.classList.add('visible'), i * 50)
            })
            badgeObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const skillSections = document.querySelectorAll('.cv-skills')
    skillSections.forEach((el) => badgeObserver.observe(el))

    const badgeFallbackId = setTimeout(() => {
      document.querySelectorAll('.skill-badge--animated').forEach((badge) => {
        badge.classList.add('visible')
      })
    }, 3000)

    return () => {
      fadeObserver.disconnect()
      badgeObserver.disconnect()
      clearTimeout(badgeFallbackId)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
