import HoverIcon from "../HoverIcons/HoverIcons";
import gitIconOrange from "../../images/github-icon-orange.svg";
import siteIcon from "../../images/link-icon-grey.svg";
import siteIconOrange from "../../images/link-icon-orange.svg";
import { projectsCardsData } from "../../data/projectsCardsData";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="my-projects reveal">// meus projetos</p>
      <h2 className="projects__title reveal">
        Trabalhos <span>recentes</span>
      </h2>

      <div className="projects__grid reveal-group">
        {projectsCardsData.map((project) => (
          <div className="projects__card reveal" key={project.id}>
            <img className="card__icon" src={project.icon} />
            <a className="github__link" href={project.gitHubLink}>
              <HoverIcon
                firstColor={project.linkIcon}
                secondColor={gitIconOrange}
                alt="GitHub"
              />
            </a>

            <h3 className="site__title">{project.title}</h3>
            <p className="site__description">{project.description}</p>
            <p className="site__techs">{project.skills}</p>
          </div>
        ))}
      </div>

      <div className="projects__link reveal">
        <a
          href="https://github.com/britoosvaldo?tab=repositories"
          className="projects__link-text"
        >
          Veja mais no GitHub
          <HoverIcon
            firstColor={siteIcon}
            secondColor={siteIconOrange}
            alt="Link to GitHub"
          />
        </a>
      </div>
    </section>
  );
}
