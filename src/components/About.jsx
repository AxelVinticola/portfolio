import "../styles/about.css";
import {
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaBullseye,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="section-title">
        <h2>Sobre mí</h2>
        <p>Conocé un poco más sobre mi perfil profesional.</p>
      </div>

      <div className="about__container">

        <div className="about__content">

          <p>
            Soy <strong>Técnico Superior en Análisis de Sistemas Informáticos</strong>,
            con formación en desarrollo Full Stack y una fuerte orientación al
            desarrollo de aplicaciones web y móviles.
          </p>

          <p>
            Durante mi formación desarrollé soluciones completas utilizando
            <strong> Python, Django, React, React Native, MySQL y Firebase</strong>,
            participando en todas las etapas del desarrollo: análisis,
            diseño, implementación, bases de datos y despliegue.
          </p>

          <p>
            Actualmente busco mi primera oportunidad profesional en el sector IT,
            donde pueda aportar mis conocimientos, continuar aprendiendo y crecer
            como desarrollador.
          </p>

        </div>

        <div className="about__cards">

          <div className="about__card">
            <FaLaptopCode />
            <h3>Stack Principal</h3>
            <span>JavaScript · Python · Django · React</span>
          </div>

          <div className="about__card">
            <FaCode />
            <h3>Desarrollo</h3>
            <span>Web · Mobile · Full Stack</span>
          </div>

          <div className="about__card">
            <FaDatabase />
            <h3>Bases de Datos</h3>
            <span>MySQL · Firebase</span>
          </div>

          <div className="about__card">
            <FaBullseye />
            <h3>Objetivo</h3>
            <span>Desarrollador Full Stack</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;