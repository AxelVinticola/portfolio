import "../styles/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={scrolled ? "navbar navbar--scrolled" : "navbar"}>

      <div className="navbar__logo">
        <a href="#hero">Axel<span>.</span></a>
      </div>

      <ul className="navbar__menu">

        <li><a href="#about">Sobre mí</a></li>

        <li><a href="#skills">Tecnologías</a></li>

        <li><a href="#projects">Proyectos</a></li>

        <li><a href="#education">Educación</a></li>

        <li><a href="#contact">Contacto</a></li>

      </ul>

      <div className="navbar__actions">

        <a
          href="https://github.com/TU_USUARIO"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/TU_USUARIO"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="/cv.pdf"
          aria-label="Descargar CV"
        >
          <HiOutlineDocumentArrowDown />
        </a>

      </div>

    </nav>

  );
}

export default Navbar;