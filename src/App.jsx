import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <Loader />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
