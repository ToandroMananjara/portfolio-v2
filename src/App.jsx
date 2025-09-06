import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Loader from "./components/Loader";

function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const handleMenu = () => {
    setOrderPopUp(!orderPopUp);
  };

  return (
    <>
      <Loader />
      <ParticleBackground />
      <Navbar
        handleMenu={handleMenu}
        orderPopUp={orderPopUp}
        setOrderPopUp={setOrderPopUp}
      />
      <Hero handleMenu={handleMenu} orderPopUp={orderPopUp} />
      <About handleMenu={handleMenu} orderPopUp={orderPopUp} />
      <Project handleMenu={handleMenu} orderPopUp={orderPopUp} />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
