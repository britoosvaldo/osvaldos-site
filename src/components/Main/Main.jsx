import gitIcon from "../../images/github-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import instaIcon from "../../images/instagram-icon.svg";
import arrowIcon from "../../images/arrow-icon.svg";
import gitIconOrange from "../../images/github-icon-orange.svg";
import linkedinIconOrange from "../../images/linkedin-icon-orange.svg";
import instaIconOrange from "../../images/instagram-icon-orange.svg";
import arrowIconBlack from "../../images/arrow-icon.svg";

import { useRef, useState } from "react";
import "./main.css";
import HoverIcon from "../HoverIcons/HoverIcons";

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
        Osvaldo <span>Brito</span>
      </h1>

      <p className="main__description">
        Desenvolvedor Web focado em performance, resultado e experiência.
      </p>

      <div className="main__contacts">
        <div className="main__social">
          <a className="main__links" href="https://github.com/britoosvaldo">
            <HoverIcon white={gitIcon} orange={gitIconOrange} alt="GitHub" />
          </a>
        </div>
        <div className="main__social">
          <a
            className="main__links"
            href="https://www.linkedin.com/in/osvaldo-brito/"
          >
            <HoverIcon
              white={linkedinIcon}
              orange={linkedinIconOrange}
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="main__social">
          <a className="main__links" href="">
            <HoverIcon
              HoverIcon
              white={instaIcon}
              orange={instaIconOrange}
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <button className="main__bt">
        Ver Projetos
        <img className="bt__icon" src={arrowIcon} />
      </button>
    </main>
  );
}
