import "../styles/projects.css";

import {
  FaGithub,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiJquery,
  SiChartdotjs,
  SiExpo,
  SiFirebase,
} from "react-icons/si";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <h2>Proyectos</h2>
        <p>
          Proyectos desarrollados durante mi formación y experiencia práctica.
        </p>
      </div>

      <div className="projects__grid">

        {/* ALMA CANINA ERP */}

        <article className="project-card">

          <div className="project-card__number">
            01
          </div>

          <div className="project-card__content">

            <span className="project-card__type">
              SISTEMA ERP · FULL STACK
            </span>

            <h3>Alma Canina ERP</h3>

            <p className="project-card__description">
              Sistema ERP web desarrollado para la gestión integral de una
              forrajería y peluquería canina. Centraliza las principales
              operaciones del negocio en una única plataforma.
            </p>

            <h4>Tecnologías</h4>

            <div className="project-card__technologies">

              <span>
                <FaPython />
                Python
              </span>

              <span>
                <SiDjango />
                Django
              </span>

              <span>
                <SiMysql />
                MySQL
              </span>

              <span>
                <SiBootstrap />
                Bootstrap
              </span>

              <span>
                <SiJavascript />
                JavaScript
              </span>

              <span>
                <SiJquery />
                jQuery
              </span>

              <span>
                <SiChartdotjs />
                Chart.js
              </span>

            </div>

            <h4>Funcionalidades</h4>

            <ul className="project-card__features">
              <li>Inventario y alertas de stock</li>
              <li>Sistema POS de ventas</li>
              <li>Gestión de caja y movimientos</li>
              <li>Clientes, proveedores y empleados</li>
              <li>Sistema de turnos con calendario</li>
              <li>Roles y permisos de usuarios</li>
              <li>Dashboard con métricas y gráficos</li>
              <li>Reportes y generación de PDFs</li>
              <li>Emails transaccionales</li>
              <li>Catálogo y carrito de compras</li>
            </ul>

            <a
              href="https://github.com/Benjaback/Almacanina"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <FaGithub />
              Ver en GitHub
            </a>

          </div>

        </article>


        {/* ALMA CANINA MOBILE */}

        <article className="project-card">

          <div className="project-card__number">
            02
          </div>

          <div className="project-card__content">

            <span className="project-card__type">
              APLICACIÓN MÓVIL
            </span>

            <h3>Alma Canina Mobile</h3>

            <p className="project-card__description">
              Aplicación móvil desarrollada como complemento del ecosistema
              Alma Canina, permitiendo gestionar información desde
              dispositivos móviles mediante una interfaz moderna y
              adaptable.
            </p>

            <h4>Tecnologías</h4>

            <div className="project-card__technologies">

              <span>
                <FaReact />
                React Native
              </span>

              <span>
                <SiExpo />
                Expo
              </span>

              <span>
                <SiJavascript />
                JavaScript
              </span>

              <span>
                <SiFirebase />
                Firebase
              </span>

            </div>

            <h4>Funcionalidades</h4>

            <ul className="project-card__features">
              <li>Autenticación de usuarios</li>
              <li>Gestión de productos</li>
              <li>CRUD con Firestore</li>
              <li>Base de datos en tiempo real</li>
              <li>Carga y gestión de imágenes</li>
              <li>Perfiles de usuario</li>
              <li>Integración con Firebase</li>
              <li>Interfaz adaptada a dispositivos móviles</li>
            </ul>

            <a
              href="#"
              className="project-card__link"
            >
              <FaGithub />
              Ver en GitHub
            </a>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Projects;