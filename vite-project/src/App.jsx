import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Dsa from "./components/Dsa/Dsa";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";



const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Dsa/>
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;