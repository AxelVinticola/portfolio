import "../styles/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className={scrolled ? "navbar navbar--scrolled" : "navbar"}>

      {/* LOGO */}

      <div className="navbar__logo">
        <a href="#hero" onClick={closeMenu}>
          <img
            src="/logoAV.png"
            alt="Axel Vintícola"
          />
        </a>
      </div>


      {/* MENÚ */}

      <ul className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>

        <li>
          <a href="#about" onClick={closeMenu}>
            Sobre mí
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Tecnologías
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Proyectos
          </a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>
            Educación
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contacto
          </a>
        </li>

      </ul>


      {/* ICONOS */}

      <div className="navbar__actions">

        <a
          href="https://github.com/AxelVinticola"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/axel-vintícola-2b7245208"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
           href="/CV_Vinticola_Axel_2026.pdf"
           download="CV_Vinticola_Axel_2026.pdf"
           aria-label="Descargar CV"
        >
          <HiOutlineDocumentArrowDown />
        </a>

      </div>


      {/* BOTÓN MOBILE */}

      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
      </button>

    </nav>

  );
}

export default Navbar;