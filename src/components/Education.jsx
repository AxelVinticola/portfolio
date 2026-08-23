import "../styles/education.css";

function Education({ t }) {
  return (
    <section id="education" className="education">

      <div className="section-title">
        <h2>{t.education.title}</h2>
        <p>{t.education.subtitle}</p>
      </div>

      <div className="education__container">

        <article className="education-card">

            <div className="education-card__year">
                {t.education.main.type}
            </div>

            <div className="education-card__content">

                <h3>
                {t.education.main.title}

                </h3>

                <h4>
                Instituto Superior del Milagro N.º 8207
                </h4>

                <p>
                {t.education.main.description}
                </p>

                <div className="education-card__tags">
                <span>{t.education.main.tag1}</span>
                <span>{t.education.main.tag2}</span>
                <span>{t.education.main.tag3}</span>
                <span>{t.education.main.tag4}</span>
                <span>{t.education.main.tag5}</span>
                <span>{t.education.main.tag6}</span>
                <span>{t.education.main.tag7}</span>
                <span>{t.education.main.tag8}</span>
                </div>

            </div>

        </article>


        <article className="education-card education-card--secondary">

            <div className="education-card__year">
                {t.education.secondary.type}
            </div>

            <div className="education-card__content">

                <h3>
                {t.education.secondary.title}
                </h3>

                <h4>
                Universidad Católica de Salta (UCASAL)
                </h4>

                <p>
                {t.education.secondary.description}
                </p>

                <div className="education-card__tags">
                    <span>{t.education.secondary.tag1}</span>
                    <span>{t.education.secondary.tag2}</span>
                    <span>{t.education.secondary.tag3}</span>
                    <span>{t.education.secondary.tag4}</span>
                    <span>{t.education.secondary.tag5}</span>
                    <span>{t.education.secondary.tag6}</span>
                </div>

            </div>

        </article>

      </div>

    </section>
  );
}

export default Education;