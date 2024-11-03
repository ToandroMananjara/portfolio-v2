import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";

function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const handleMenu = () => {
    setOrderPopUp(!orderPopUp);
  };

  return (
    <>
      <Navbar
        handleMenu={handleMenu}
        orderPopUp={orderPopUp}
        setOrderPopUp={setOrderPopUp}
      />
      <Hero handleMenu={handleMenu} orderPopUp={orderPopUp} />
      <About handleMenu={handleMenu} orderPopUp={orderPopUp} />
      <Project handleMenu={handleMenu} orderPopUp={orderPopUp} />
      <Education />
    </>
  );
}

export default App;
