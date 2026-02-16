import obLogo from "../../images/ob-logo.svg";
import gitHubIcon from "../../images/github-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import instaIcon from "../../images/instagram-icon.svg";

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
        <a href="https://github.com/britoosvaldo">
          <img className="footer__icons" src={gitHubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/osvaldo-brito/">
          <img className="footer__icons" src={linkedinIcon} />
        </a>
        <a href="">
          <img className="footer__icons" src={instaIcon} />
        </a>
      </div>
    </footer>
  );
}
