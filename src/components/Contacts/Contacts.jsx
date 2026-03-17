import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../../images/email-icon-orange.svg";
import locationIcon from "../../images/location-icon-orange.svg";
import mensageIcon from "../../images/mensage-icon.svg";

export default function Contacts() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- COLOQUE SEUS IDs AQUI ---
    const SERVICE_ID = "service_5peuzvl"; // Encontrado em "Email Services"
    const TEMPLATE_ID = "template_r3xrhk4"; // Encontrado em "Email Templates"
    const PUBLIC_KEY = "OgUDj2VmbZuXqeioI"; // Encontrado em "Account" -> "API Keys"
    // ----------------------------

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert("Mensagem enviada com sucesso! 🚀");
        e.target.reset(); // Limpa o formulário após o envio
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        alert("Ops! Algo deu errado. Verifique o console ou tente novamente.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contacts" id="contacts">
      <p className="contacts__talk reveal" style={{ "--delay": "0ms" }}>
        // fale comigo
      </p>

      <h2 className="contacts__title reveal" style={{ "--delay": "80ms" }}>
        Entre em <span>contato</span>
      </h2>

      <div className="contacts__grid">
        <div
          className="contacts__information reveal"
          style={{ "--delay": "160ms" }}
        >
          <h3 className="contacts__subtitle">
            Vamos criar algo incrível juntos?
          </h3>
          <p className="contacts__description">
            Estou sempre pronto para aprender e realizar novos projetos. Se você
            tem uma ideia ou precisa de ajuda com seu projeto, entre em contato!
          </p>

          <div className="contacts__contacts">
            <img src={emailIcon} alt="E-mail Icon" />
            <p className="contacts__mail">
              E-mail <br />
              <span>osvaldobrito.dev@gmail.com</span>
            </p>
          </div>

          <div className="contacts__contacts">
            <img src={locationIcon} alt="Location Icon" />
            <p className="contacts__location">
              Localização <br />
              <span>Roraima, Brasil</span>
            </p>
          </div>
        </div>

        <div className="contacts__box reveal" style={{ "--delay": "240ms" }}>
          <form ref={form} onSubmit={sendEmail} className="contacts__form">
            <h3 className="form__description">Nome</h3>
            <input
              name="name" // Mapeia para {{name}} no seu template
              className="contacts__name"
              type="text"
              placeholder="Seu nome"
              required
            />

            <h3 className="form__description">E-mail</h3>
            <input
              name="email" // Mapeia para {{email}} no seu template
              className="contacts__email"
              type="email"
              placeholder="seu@email.com"
              required
            />

            <h3 className="form__description">Mensagem</h3>
            <textarea
              name="message" // Mapeia para {{message}} no seu template
              className="contacts__mensage"
              placeholder="Conte-me sobre o seu projeto..."
              required
            />

            <button
              type="submit"
              className="contacts__btn"
              disabled={isSending}
              style={{
                opacity: isSending ? 0.7 : 1,
                cursor: isSending ? "not-allowed" : "pointer",
              }}
            >
              {isSending ? "Enviando..." : "Enviar Mensagem"}
              <img className="contacts__btn-icon" src={mensageIcon} alt="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
