import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import CV from './components/CV'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
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
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div id="root">
      <Header />
      <main>
        <About />
        <CV />
      </main>
      <Footer />
    </div>
  )
}

export default App