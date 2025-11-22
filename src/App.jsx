import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Loader />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
