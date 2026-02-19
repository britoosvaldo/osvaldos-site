import brainIcon from "../../images/brain-icon.svg";
import gearIcon from "../../images/gear-icon.svg";
import rocketIcon from "../../images/rocket-icon.svg";
import bookIcon from "../../images/book-icon.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <p className="about__me">// sobre mim</p>
      <h2 className="about__title">
        Quem sou <span>eu</span>
      </h2>
      <div className="about__grid">
        <p className="about__description">
          Olá! Sou contador e desenvolvedor web. Minha jornada de programação
          começou por gostar de tecnologias digitais e curiosidade.Busco sempre
          entregar código limpo, de fácil entendimento e de fácil manutenção
          assim como esse site que você está vendo.
          <br />
          <br />
          Quando não estou programando, estou procurando aprender novas
          tecnologias na área de programação e buscando aprender cada vez mais
          sobre novas tecnolgias e ferramentas que ajudem no desenvolvimento de
          sites e aplicativos eficientes .
        </p>
        <div className="about__card">
          <img className="about__icon" src={brainIcon} />
          <h3 className="card__title">Como eu penso?</h3>
          <p className="card__subtitle">
            Gosto de quebrar problemas grandes em partes pequenas e resolver uma
            por uma.
          </p>
        </div>
        <div className="about__card">
          <img className="about__icon" src={gearIcon} />
          <h3 className="card__title">Como eu trabalho?</h3>
          <p className="card__subtitle">
            Clean Code, componentização, reaproveitamento e atenção a UX.
          </p>
        </div>
        <div className="about__card">
          <img className="about__icon" src={rocketIcon} />
          <h3 className="card__title">O que estou buscando?</h3>
          <p className="card__subtitle">
            Oportunidade como dev / projetos freelancer / vagas remotas.
          </p>
        </div>
        <div className="about__card">
          <img className="about__icon" src={bookIcon} />
          <h3 className="card__title">Em aprendizado constante</h3>
          <p className="card__subtitle">
            Boas práticas JS, React, APIs e IA aplicada.
          </p>
        </div>
      </div>

      <h3 className="about__tech">Tecnologias Utilizadas</h3>

      <div className="about__skills-wrapper">
        <div className="about__skills-marquee">
          <div className="about__skills-track">
            <div className="about__skill">
              <p>HTML</p>
            </div>
            <div className="about__skill">
              <p>CSS</p>
            </div>
            <div className="about__skill">
              <p>JavaScript</p>
            </div>
            <div className="about__skill">
              <p>React</p>
            </div>
            <div className="about__skill">
              <p>Node.js</p>
            </div>
            <div className="about__skill">
              <p>Express</p>
            </div>
            <div className="about__skill">
              <p>Git</p>
            </div>
            <div className="about__skill">
              <p>HTML</p>
            </div>
            <div className="about__skill">
              <p>CSS</p>
            </div>
            <div className="about__skill">
              <p>JavaScript</p>
            </div>
            <div className="about__skill">
              <p>React</p>
            </div>
            <div className="about__skill">
              <p>Node.js</p>
            </div>
            <div className="about__skill">
              <p>Express</p>
            </div>
            <div className="about__skill">
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
