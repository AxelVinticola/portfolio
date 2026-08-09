import "../styles/education.css";

function Education() {
  return (
    <section id="education" className="education">

      <div className="section-title">
        <h2>Educación</h2>
        <p>
          Formación académica y preparación profesional.
        </p>
      </div>

      <div className="education__container">

        <article className="education-card">

            <div className="education-card__year">
                FORMACIÓN PRINCIPAL
            </div>

            <div className="education-card__content">

                <h3>
                Técnico Superior en Análisis de Sistemas Informáticos
                </h3>

                <h4>
                Instituto Superior Doctor Ramón Carrillo
                </h4>

                <p>
                Formación superior enfocada en el desarrollo de software,
                análisis y diseño de sistemas, bases de datos, desarrollo web
                y aplicaciones móviles.
                </p>

                <div className="education-card__tags">
                <span>Programación</span>
                <span>Desarrollo Web</span>
                <span>Desarrollo Móvil</span>
                <span>Bases de Datos</span>
                <span>Análisis de Sistemas</span>
                <span>Seguridad Informática</span>
                <span>Teleinformática</span>
                <span>Práctica Profesional</span>
                </div>

            </div>

        </article>


        <article className="education-card education-card--secondary">

            <div className="education-card__year">
                FORMACIÓN COMPLEMENTARIA
            </div>

            <div className="education-card__content">

                <h3>
                Licenciatura en Criminalística
                </h3>

                <h4>
                Universidad Católica de Salta (UCASAL)
                </h4>

                <p>
                Formación orientada al análisis e investigación, que aportó una base sólida 
                en pensamiento crítico, análisis de datos, resolución de problemas complejos 
                y aplicación de metodologías estructuradas — habilidades que complementan 
                mi perfil técnico como Analista de Sistemas.
                </p>

                <div className="education-card__tags">
                    <span>Pensamiento analítico</span>
                    <span>Resolución de problemas</span>
                    <span>Metodología de investigación</span>
                    <span>Razonamiento lógico-deductivo</span>
                    <span>Elaboración de informes técnicos</span>
                </div>

            </div>

        </article>

      </div>

    </section>
  );
}

export default Education;