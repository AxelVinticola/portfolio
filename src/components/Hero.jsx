import "../styles/hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">

        <div className="hero__blob hero__blob--1"></div>
        <div className="hero__blob hero__blob--2"></div>
        <div className="hero__blob hero__blob--3"></div>
      
        <div className="hero__content">

            <p className="hero__greeting">
            Hola 👋, soy
            </p>

            <h1 className="hero__title">
            Axel Vintícola
            </h1>

            <h2 className="hero__subtitle">
            Desarrollador Full Stack
            </h2>

            <p className="hero__description">
            Desarrollo aplicaciones web y móviles creando soluciones modernas,
            escalables y orientadas a resolver problemas reales.
            </p>

            <div className="hero__buttons">

            <a href="#projects" className="btn btn-primary">
                Ver proyectos
            </a>

            <a href="/cv.pdf" className="btn btn-secondary">
                Descargar CV
            </a>

            </div>

        </div>

      <div className="hero__image">

        FOTO

      </div>

    </section>
  );
}

export default Hero;