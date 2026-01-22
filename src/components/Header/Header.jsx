export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav__logo" src="./src/images/ob-logo.svg" />
        <ul className="nav__links">
          <li>
            <a className="nav__link">Sobre</a>
          </li>
          <li>
            <a className="nav__link">Projetos</a>
          </li>
          <li>
            <a className="nav__link">Contatos</a>
          </li>
          <li>
            <button className="nav__link nav__button">Fale Comigo</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
