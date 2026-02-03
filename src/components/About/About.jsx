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
        <div className="about__card"></div>
        <div className="about__card"></div>
        <div className="about__card"></div>
        <div className="about__card"></div>
      </div>
      <h3 className="about__tech">Tecnologias Utilizadas</h3>
      <div className="about__skills">
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
    </section>
  );
}
