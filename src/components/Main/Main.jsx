import gitHubIcon from "../../images/github-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import instaIcon from "../../images/instagram-icon.svg";

import { useRef, useState } from "react";
import "./main.css";

export default function Main() {
  const mainRef = useRef(null);
  const [active, setActive] = useState(false);

  function handleMove(e) {
    const el = mainRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  }

  return (
    <main
      ref={mainRef}
      className={`main ${active ? "main--active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={handleMove}
    >
      <div className="main__glow" aria-hidden="true" />

      <div className="main__icon">
        <p className="main__developer">&lt;desenvolvedor/&gt;</p>
      </div>

      <h1 className="main__title">
        Osvaldo <span className="main__subtitle">Brito</span>
      </h1>

      <p className="main__description">
        Desenvolvedor Web focado em performance, resultado e experiência.
      </p>

      <div className="main__contacts">
        <div className="main__social">
          <img src={gitHubIcon} className="main__icons" alt="GitHub Icon" />
        </div>
        <div className="main__social">
          <img src={linkedinIcon} className="main__icons" alt="LinkedIn" />
        </div>
        <div className="main__social">
          <img src={instaIcon} className="main__icons" alt="Instagram" />
        </div>
      </div>

      <button className="main__bt">Ver Projetos</button>
    </main>
  );
}
