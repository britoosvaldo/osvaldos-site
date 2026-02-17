import obLogo from "../../images/ob-logo.svg";
import gitIcon from "../../images/github-icon-grey.svg";
import linkedinIcon from "../../images/linkedin-icon-grey.svg";
import instaIcon from "../../images/instagram-icon-grey.svg";
import gitIconOrange from "../../images/github-icon-orange.svg";
import linkedinIconOrange from "../../images/linkedin-icon-orange.svg";
import instaIconOrange from "../../images/instagram-icon-orange.svg";

import HoverIcon from "../HoverIcons/HoverIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__icon" src={obLogo} />
      </div>
      <div className="footer__copyright">
        <p className="footer__description">
          2026 &copy; Desenvolvido por Osvaldo Brito
        </p>
      </div>
      <div className="footer__socialNetwork">
        <div className="footer__git-icon">
          <a href="https://github.com/britoosvaldo">
            <HoverIcon
              firstColor={gitIcon}
              secondColor={gitIconOrange}
              alt="GitHub"
            />
          </a>
        </div>
        <div className="footer__git-icon">
          <a href="https://www.linkedin.com/in/osvaldo-brito/">
            <HoverIcon
              firstColor={linkedinIcon}
              secondColor={linkedinIconOrange}
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="footer__git-icon">
          <a href="">
            <HoverIcon
              firstColor={instaIcon}
              secondColor={instaIconOrange}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
