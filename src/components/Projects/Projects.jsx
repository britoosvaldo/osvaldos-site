export default function About() {
  return (
    <section className="projects" id="projects">
      <p className="my-projects">// meus projetos</p>
      <h2 className="projects__title">
        Trabalhos <span>recentes</span>
      </h2>
      <div className="projects__grid">
        <div className="projects__card">
          <img className="site__icon" src="src/images/users-icon.svg" />
          <a href="https://github.com/britoosvaldo/web_project_api_full">
            <img
              className="github__icon"
              src="src/images/github-icon-grey.svg"
            />
          </a>
          <a href="https://around-the-usa.mooo.com">
            <img className="link__icon" src="src/images/link-icon-grey.svg" />
          </a>
          <h3 className="site__title">Around the USA</h3>
          <p className="site__description">
            Rede Social que permite aos usuários compartilhar fotos, editar seu
            perfil, curtir e deletar publicações. (TripleTen)
          </p>
          <p className="site__techs">
            HTML / CSS / JavaScript / React / Node.js / MongoDB
          </p>
        </div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
      </div>
      <h3 className="projects__link">Veja mais no GitHub</h3>
    </section>
  );
}
