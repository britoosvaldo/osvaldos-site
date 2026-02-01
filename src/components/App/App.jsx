import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

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
