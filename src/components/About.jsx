import "../styles/about.css";
import {
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaBullseye,
} from "react-icons/fa";

function About({ t }) {
  return (
    <section id="about" className="about">

        <div className="section-title">
          <h2>{t.about.title}</h2>
          <p>{t.about.subtitle}</p>
        </div>

        <div className="about__container">

          <div className="about__content">

            <p>
              {t.about.paragraph1}
            </p>

            <p>
              {t.about.paragraph2}
            </p>

            <p>
              {t.about.paragraph3}
            </p>

            <p>
              {t.about.paragraph4}
            </p>

          </div>

          <div className="about__cards">

            <div className="about__card">
              <FaLaptopCode />
              <h3>{t.about.mainStack}</h3>
              <span>{t.about.mainStackTech}</span>
            </div>

            <div className="about__card">
              <FaCode />
              <h3>{t.about.development}</h3>
              <span>{t.about.developmentTech}</span>
            </div>

            <div className="about__card">
              <FaDatabase />
              <h3>{t.about.databases}</h3>
              <span>{t.about.databasesTech}</span>
            </div>

            <div className="about__card">
              <FaBullseye />
              <h3>{t.about.objective}</h3>
              <span>{t.about.objectiveTech}</span>
            </div>

          </div>

        </div>

      </section>
  );
}

export default About;