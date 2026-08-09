import "../styles/projects.css";
import { useState } from "react";

import {
  FaPython,
  FaReact,
  FaImages,
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

  const [gallery, setGallery] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = {
    erp: {
      title: "Alma Canina ERP",
        images: [
              {
                src: "/projects/erp/AdminTurnos.png",
                title: "Administración de turnos",
              },
              {
                src: "/projects/erp/CajaAbierta.png",
                title: "Gestión y apertura de caja",
              },
              {
                src: "/projects/erp/CalendarioTurno.png",
                title: "Calendario de turnos",
              },
              {
                src: "/projects/erp/Empleados.png",
                title: "Gestión de empleados",
              },
              {
                src: "/projects/erp/HistorialCaja.png",
                title: "Historial de caja",
              },
              {
                src: "/projects/erp/Perfil.png",
                title: "Perfil de usuario",
              },
              {
                src: "/projects/erp/Productos.png",
                title: "Gestión de productos e inventario",
              },
              {
                src: "/projects/erp/Proveedores.png",
                title: "Gestión de proveedores",
              },
              {
                src: "/projects/erp/TurnoCli.png",
                title: "Reserva de turnos",
              },
            ],
          },
    mobile: {
        title: "Alma Canina Mobile",

        images: [
          {
            src: "/projects/mobile/inicio.jpeg",
            title: "Pantalla de inicio",
          },
          {
            src: "/projects/mobile/login.jpeg",
            title: "Inicio de sesión",
          },
          {
            src: "/projects/mobile/produ.jpeg",
            title: "Gestión de productos",
          },
          {
            src: "/projects/mobile/crearp.jpeg",
            title: "Crear producto",
          },
          {
            src: "/projects/mobile/editar.jpeg",
            title: "Editar producto",
          },
          {
            src: "/projects/mobile/perfil.jpeg",
            title: "Perfil de usuario",
          },
        ],
      },
    };

    const openGallery = (project) => {
      setGallery(projects[project]);
      setCurrentImage(0);
    };

    const closeGallery = () => {
      setGallery(null);
    };

    const nextImage = () => {
      setCurrentImage((prev) =>
        prev === gallery.images.length - 1 ? 0 : prev + 1
      );
    };

    const previousImage = () => {
      setCurrentImage((prev) =>
        prev === 0 ? gallery.images.length - 1 : prev - 1
      );
    };

  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <h2>Proyectos</h2>

        <p>
          Proyectos desarrollados durante mi formación y experiencia práctica.
        </p>
      </div>


      <div className="projects__grid">

        {/* =========================
            ALMA CANINA ERP
        ========================== */}

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

            <button
              className="project-card__gallery-button"
              onClick={() => openGallery("erp")}
            >
              <FaImages />
              Ver imágenes del proyecto
            </button>

          </div>

        </article>


        {/* =========================
            ALMA CANINA MOBILE
        ========================== */}

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
              dispositivos móviles mediante una interfaz moderna y adaptable.
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

            <button
              className="project-card__gallery-button"
              onClick={() => openGallery("mobile")}
            >
              <FaImages />
              Ver imágenes del proyecto
            </button>

          </div>

        </article>

      </div>


      {/* =========================
          GALERÍA
      ========================== */}

      {gallery && (

        <div
          className="gallery-modal"
          onClick={closeGallery}
        >

          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="gallery-modal__close"
              onClick={closeGallery}
              aria-label="Cerrar galería"
            >
              ×
            </button>

            <h3>{gallery.title}</h3>

            <div className="gallery-modal__image-container">

              <button
                className="gallery-modal__arrow gallery-modal__arrow--left"
                onClick={previousImage}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <div className="gallery-modal__image-wrapper">

                <img
                  src={gallery.images[currentImage].src}
                  alt={gallery.images[currentImage].title}
                />

                <div className="gallery-modal__image-title">
                  {gallery.images[currentImage].title}
                </div>

              </div>

              <button
                className="gallery-modal__arrow gallery-modal__arrow--right"
                onClick={nextImage}
                aria-label="Imagen siguiente"
              >
                ›
              </button>

            </div>

            <div className="gallery-modal__counter">
              {currentImage + 1} / {gallery.images.length}
            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;