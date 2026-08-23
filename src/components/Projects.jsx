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

function Projects({ t }) {

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
        title: "Yume Sakura Salon",

        images: [
          {
            src: "/projects/mobile/inicio.png",
            title: "Inicio / Dashboard: Resumen rápido del día",
          },
          {
            src: "/projects/mobile/login.jpeg",
            title: "Agenda: Vista completa del calendario",
          },
          {
            src: "/projects/mobile/produ.jpeg",
            title: "Catálogo de Servicios & Productos:",
          },
          {
            src: "/projects/mobile/crearp.jpeg",
            title: "Gestión de Personal:",
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
        <h2>{t.projects.title}</h2>
        <p>{t.projects.subtitle}</p>
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
              {t.projects.erp.type}
            </span>

            <h3>{t.projects.erp.title}</h3>

            <p className="project-card__description">
              {t.projects.erp.description}

            </p>

            <h4>{t.projects.erp.technologies}</h4>

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

            <h4>{t.projects.erp.features}</h4>

            <ul className="project-card__features">

              <li>{t.projects.erp.feature1}</li>
              <li>{t.projects.erp.feature2}</li>

              <li>{t.projects.erp.feature3}</li>
              <li>{t.projects.erp.feature4}</li>

              <li>{t.projects.erp.feature5}</li>
              <li>{t.projects.erp.feature6}</li>

              <li>{t.projects.erp.feature7}</li>
              <li>{t.projects.erp.feature8}</li>

              <li>{t.projects.erp.feature9}</li>
              <li>{t.projects.erp.feature10}</li>

            </ul>

            <button
              className="project-card__gallery-button"
              onClick={() => openGallery("erp")}
            >
              <FaImages />
              {t.projects.erp.galleryButton}
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
              {t.projects.salon.type}
            </span>

            <h3>{t.projects.salon.title}</h3>

            <p className="project-card__description">
              {t.projects.salon.description}
            </p>

            <h4>{t.projects.salon.technologies}</h4>

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

            <h4>{t.projects.salon.features}</h4>

            <ul className="project-card__features">

              <li>{t.projects.salon.feature1}</li>
              <li>{t.projects.salon.feature2}</li>
              <li>{t.projects.salon.feature3}</li>
              <li>{t.projects.salon.feature4}</li>
              <li>{t.projects.salon.feature5}</li>
              <li>{t.projects.salon.feature6}</li>
              <li>{t.projects.salon.feature7}</li>
              <li>{t.projects.salon.feature8}</li>

            </ul>

            <button
              className="project-card__gallery-button"
              onClick={() => openGallery("mobile")}
            >
              <FaImages />
              {t.projects.salon.galleryButton}
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
              aria-label={t.projects.gallery.close}
            >
              ×
            </button>

            <h3>{gallery.title}</h3>

            <div className="gallery-modal__image-container">

              <button
                className="gallery-modal__arrow gallery-modal__arrow--left"
                onClick={previousImage}
                aria-label={t.projects.gallery.previous}
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
                aria-label={t.projects.gallery.next}
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