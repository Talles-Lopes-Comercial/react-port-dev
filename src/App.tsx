import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
/*import Testimonials from "./components/Testimonials"*/
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />

       <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
/*entre skills e contact e os <Testingminials />*/
