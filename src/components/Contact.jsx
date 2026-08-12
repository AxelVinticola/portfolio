import "../styles/contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt, FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>Contacto</h2>

        <p>
          ¿Tenés un proyecto o una oportunidad? Hablemos.
        </p>
      </div>


      <div className="contact__container">

        <div className="contact__content">

          <h3>
            Construyamos algo juntos.
          </h3>

          <p>
            Estoy interesado en oportunidades dentro del sector IT,
            especialmente en desarrollo Full Stack y desarrollo de
            aplicaciones web y móviles.
          </p>

          <p>
            Si querés conocer más sobre mi trabajo o conversar sobre
            una oportunidad profesional, podés contactarme.
          </p>

          <div className="contact__location">
            <FaMapMarkerAlt />
            <span>Salta, Argentina</span>
          </div>

        </div>


        <div className="contact__card">

          

          <a
            href="mailto:axelvinticola@gmail.com"
            className="contact__item"
          >
            <FaEnvelope />

            <div>
              <span>Email</span>
              <strong>axelvinticola@gmail.com</strong>
            </div>

          </a>
          
          <a
            href="tel:+5493874477853"
            className="contact__item"
          >
            <FaPhone />

            <div>
              <span>Teléfono</span>
              <strong>+54 9 387 447-7853</strong>
            </div>
          </a>
          
          
          <a
            href="https://github.com/Axel0820"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <FaGithub />

            <div>
              <span>GitHub</span>
              <strong>Ver mis proyectos</strong>
            </div>

          </a>


          <a
            href="https://linkedin.com/in/axel-vinticola-2b7245208"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <FaLinkedin />

            <div>
              <span>LinkedIn</span>
              <strong>Conectemos profesionalmente</strong>
            </div>

          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;