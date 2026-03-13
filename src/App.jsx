import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App