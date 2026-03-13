import './App.css'
import Header from './components/Header'
import About from './components/About'
import CV from './components/CV'
import Footer from './components/Footer'

function App() {
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