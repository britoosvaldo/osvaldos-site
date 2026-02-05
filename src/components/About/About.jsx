export default function About() {
  return (
    <section className="about" id="about">
      <p className="about__me">// sobre mim</p>
      <h2 className="about__title">
        Quem sou <span>eu</span>
      </h2>
      <div className="about__grid">
        <p className="about__description">
          Olá! Sou um contador que migrou para a área de tecnologia e hoje sou
          um desenvolvedor full stack. Minha jornada de programação começou por
          curiosidade e se transformou em uma paixão.
          <br />
          <br />
          Busco sempre entregar código limpo, de fácil entendimento e de fácil
          manutenção.
          <br />
          <br />
          Quando não estou codando, estou procurando aprender novas tecnologias
          tanto na área de programação quanto na área de IA e buscando aprender
          cada vez mais sobre tecnologias.
        </p>
        <div className="about__card">
          <img className="card__icon" src="src/images/brain-icon.svg" />
          <h3 className="card__title">Como eu penso?</h3>
          <p className="card__subtitle">
            Gosto de quebrar problemas grandes em partes pequenas e resolver uma
            por uma.
          </p>
        </div>
        <div className="about__card">
          <img className="card__icon" src="src/images/gear-icon.svg" />
          <h3 className="card__title">Como eu trabalho?</h3>
          <p className="card__subtitle">
            Clean Code, componentização, reaproveitamento e atenção a UX.
          </p>
        </div>
        <div className="about__card">
          <img className="card__icon" src="src/images/rocket-icon.svg" />
          <h3 className="card__title">O que estou buscando?</h3>
          <p className="card__subtitle">
            Oportunidade como dev / projetos freelancer / vagas remotas.
          </p>
        </div>
        <div className="about__card">
          <img className="card__icon" src="src/images/book-icon.svg" />
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
