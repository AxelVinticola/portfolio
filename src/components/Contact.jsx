import "../styles/contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt, FaPhone, FaTiktok, FaInstagram,
} from "react-icons/fa";

function Contact({ t }) {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
      </div>


      <div className="contact__container">

        <div className="contact__content">

          <h3>
            {t.contact.heading}
          </h3>

          <p>
            {t.contact.paragraph1}
          </p>

          <p>
            {t.contact.paragraph2}
          </p>

          <div className="contact__location">
            <FaMapMarkerAlt />
            <span>{t.contact.location}</span>
          </div>

        </div>


        <div className="contact__card">

          

          <a
            href="mailto:axelvinticola@gmail.com"
            className="contact__item"
          >
            <FaEnvelope />

            <div>
              <span>{t.contact.email}</span>
              <strong>axelvinticola@gmail.com</strong>
            </div>

          </a>
          
          <a
            href="tel:+5493874477853"
            className="contact__item"
          >
            <FaPhone />

            <div>
              <span>{t.contact.phone}</span>
              <strong>+54 9 387 447-7853</strong>
            </div>
          </a>
          
          
          <a
            href="https://github.com/AxelVinticola"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <FaGithub />

            <div>
              <span>{t.contact.github}</span>
              <strong>{t.contact.githubAction}</strong>
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
              <span>{t.contact.linkedin}</span>
              <strong>{t.contact.linkedinAction}</strong>
            </div>

          </a>

        </div>

      </div>
{/* Sección inferior de Redes Sociales */}
<div className="contact__socials">
  <h4>{t.contact.socialTitle || "Redes Sociales"}</h4>

  <div className="contact__socials-grid">
    <a
      href="https://www.instagram.com/axel_na.vi/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact__item"
    >
      <FaInstagram />
      <div>
        <span>{t.contact.instagram || "Instagram"}</span>
        <strong>@axel_na.vi</strong>
      </div>
    </a>

    <a
      href="https://www.tiktok.com/@axel.navi"
      target="_blank"
      rel="noopener noreferrer"
      className="contact__item"
    >
      <FaTiktok />
      <div>
        <span>{t.contact.tiktok || "TikTok"}</span>
        <strong>@axel.navi</strong>
      </div>
    </a>
  </div>
</div>
    </section>
  );
}

export default Contact;