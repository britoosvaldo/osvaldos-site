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
            <img src="src/images/email-icon-orange.svg" alt="" />
            <p className="contacts__email">
              E-mail <br />
              <span>osvaldobrito.dev@gmail.com</span>
            </p>
          </div>
          <div className="contacts__contacts">
            <img src="src/images/location-icon-orange.svg" alt="" />
            <p className="contacts__location">
              Localização <br />
              <span>Roraima, Brasil</span>
            </p>
          </div>
          <div className="contacts__follow">
            <p>Me siga nas redes sociais</p>
            <div className="contacts__socials">
              <div className="contacts__social">
                <img
                  src="src/images/github-icon-grey.svg"
                  className="main__icons"
                  alt="GitHub"
                />
              </div>
              <div className="contacts__social">
                <img
                  src="src/images/linkedin-icon-grey.svg"
                  className="main__icons"
                  alt="LinkedIn"
                />
              </div>
              <div className="contacts__social">
                <img
                  src="src/images/instagram-icon-grey.svg"
                  className="main__icons"
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__form"></div>
    </section>
  );
}
