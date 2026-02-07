import emailIcon from "../../images/email-icon-orange.svg";
import locationIcon from "../../images/location-icon-orange.svg";
import gitHubIcon from "../../images/github-icon-grey.svg";
import linkedinIcon from "../../images/linkedin-icon-grey.svg";
import instagramIcon from "../../images/instagram-icon-grey.svg";
import mensageIcon from "../../images/mensage-icon.svg";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <p className="contacts__talk">// vamos conversar</p>
      <h2 className="contacts__title">
        Entre em <span>contato</span>
      </h2>
      <div className="contacts__grid">
        <div className="contacts__information">
          <h3 className="contacts__subtitle">
            Vamos criar algo incrível juntos?
          </h3>
          <p className="contacts__description">
            Estou sempre pronto para realizar novos projetos e agarrar
            oportunidades. Se você tem uma ideia ou precisa de ajuda com seu
            projeto, entre em contato!
          </p>
          <div className="contacts__contacts">
            <img src={emailIcon} alt="E-mail Icon" />
            <p className="contacts__mail">
              E-mail <br />
              <span>osvaldobrito.dev@gmail.com</span>
            </p>
          </div>
          <div className="contacts__contacts">
            <img src={locationIcon} alt="" />
            <p className="contacts__location">
              Localização <br />
              <span>Roraima, Brasil</span>
            </p>
          </div>
          <div className="contacts__follow">
            <p>Me siga nas redes</p>
            <div className="contacts__socials">
              <div className="contacts__social">
                <img src={gitHubIcon} className="main__icons" alt="GitHub" />
              </div>
              <div className="contacts__social">
                <img
                  src={linkedinIcon}
                  className="main__icons"
                  alt="LinkedIn"
                />
              </div>
              <div className="contacts__social">
                <img
                  src={instagramIcon}
                  className="main__icons"
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contacts__box">
          <form className="contacts__form">
            <h3 className="form__description">Nome</h3>
            <input
              className="contacts__name"
              type="text"
              placeholder="Seu nome"
            />
            <h3 className="form__description">E-mail</h3>
            <input
              className="contacts__email"
              type="text"
              placeholder="seu@email.com"
            />
            <h3 className="form__description">Mensagem</h3>
            <textarea
              className="contacts__mensage"
              type="text"
              placeholder="Conte-me sobre o seu projeto..."
            />
            <button className="contacts__btn">
              Enviar Mensagem
              <img className="contacts__btn-icon" src={mensageIcon} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
