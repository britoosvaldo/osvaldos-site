import gitHubIcon from "../../images/github-icon-grey.svg";
import siteIcon from "../../images/link-icon-grey.svg";
import usersIcon from "../../images/users-icon.svg";
import newsPaperIcon from "../../images/newspaper-icon.svg";

export default function About() {
  return (
    <section className="projects" id="projects">
      <p className="my-projects">// meus projetos</p>
      <h2 className="projects__title">
        Trabalhos <span>recentes</span>
      </h2>

      <div className="projects__grid">
        <div className="projects__card">
          <img className="card__icon" src={usersIcon} />
          <a
            className="github__link"
            href="https://github.com/britoosvaldo/web_project_api_full"
          >
            <img className="github__icon" src={gitHubIcon} />
          </a>
          <a className="site__link" href="https://around-the-usa.mooo.com">
            <img className="site__icon" src={siteIcon} />
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

        <div className="projects__card">
          <img className="card__icon" src={newsPaperIcon} />
          <a
            className="github__link"
            href="https://github.com/britoosvaldo/web-news-frontend"
          >
            <img className="github__icon" src={gitHubIcon} />
          </a>
          <a className="site__link" href="">
            <img className="site__icon" src={siteIcon} />
          </a>
          <h3 className="site__title">Web News</h3>
          <p className="site__description">
            Site de pesquisa de notícias, onde o usuário, após ter feito
            registro e login, pode salvar em sua conta as notícias de seu
            interesse. (TripleTen)
          </p>
          <p className="site__techs">
            HTML / CSS / JavaScript / React / Node.js / MongoDB
          </p>
        </div>

        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
      </div>
      <a
        href="https://github.com/britoosvaldo?tab=repositories"
        className="projects__link"
      >
        Veja mais no GitHub
        <img className="projects__link-icon" src={siteIcon} />
      </a>
    </section>
  );
}
