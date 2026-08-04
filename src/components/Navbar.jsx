import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Axel Vintícola
      </div>

      <ul className="nav-links">

        <li>
          <a href="#about">Sobre mí</a>
        </li>

        <li>
          <a href="#skills">Tecnologías</a>
        </li>

        <li>
          <a href="#projects">Proyectos</a>
        </li>

        <li>
          <a href="#education">Educación</a>
        </li>

        <li>
          <a href="#contact">Contacto</a>
        </li>

      </ul>

      <div className="social-links">

        <a href="">
          GitHub
        </a>

        <a href="">
          LinkedIn
        </a>

        <a href="">
          CV
        </a>

      </div>

    </nav>
  );
}

export default Navbar;