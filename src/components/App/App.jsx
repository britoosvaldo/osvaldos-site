import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
