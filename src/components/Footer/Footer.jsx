export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__icon" src="./src/images/ob-logo.svg" />
      </div>
      <div className="footer__copyright">
        <p className="footer__description">
          2026 &copy; Desenvolvido por Osvaldo Brito
        </p>
      </div>
      <div className="footer__socialNetwork">
        <img
          className="footer__icons"
          src="./src/images/github-icon-grey.svg"
        />
        <img
          className="footer__icons"
          src="./src/images/linkedin-icon-grey.svg"
        />
        <img
          className="footer__icons"
          src="./src/images/instagram-icon-grey.svg"
        />
      </div>
    </footer>
  );
}
