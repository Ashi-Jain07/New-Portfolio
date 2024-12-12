import AboutPage from "./Component/AboutPage"
import Certifications from "./Component/Certifications"
import Contact from "./Component/Contact"
import Header from "./Component/Header"
import HomePage from "./Component/HomePage"
import Projects from "./Component/Projects"
import Skills from "./Component/Skills"

function App() {
  return (
    <div className="bg-gray-900 text-white w-full min-h-screen h-auto m-0 ">
      <Header />
      <HomePage />
      <AboutPage />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  )
};

export default App;