import "../styles/skills.css";

import {
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaRocket
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiMysql,
  SiFirebase,
  SiBootstrap,
  SiTrello, SiFigma, SiJquery , SiDocker, SiAngular
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>Tecnologías</h2>
        <p>
          Estas son las herramientas y tecnologías con las que desarrollo mis
          proyectos.
        </p>
      </div>

      <div className="skills__grid">

        <div className="skill-card">
          <h3>Frontend</h3>

          <span><FaReact /> React</span>
          <span><SiJavascript /> JavaScript</span>
          <span><FaHtml5 /> HTML</span>
          <span><FaCss3Alt /> CSS</span>
          <span><SiBootstrap /> Bootstrap</span>
          <span><SiJquery /> jQuery</span>
          <span><SiAngular/> Angular</span>
          
          
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <span><FaPython /> Python</span>
          <span><SiDjango /> Django</span>
          <span><FaJava /> Java</span>
          <span><FaPhp /> PHP</span>
          <span>C#</span>
        </div>

        <div className="skill-card">
          <h3>Bases de Datos</h3>

          <span><SiMysql /> MySQL</span>
          <span><SiFirebase /> Firebase</span>
          <span><FaDatabase /> SQL</span>
        </div>

        <div className="skill-card">
          <h3>Herramientas</h3>

          <span><FaGitAlt /> Git</span>
          <span><FaGithub /> GitHub</span>
          <span><FaCode /> VS Code</span>
          <span><FaReact /> React Native</span>
          <span><SiTrello /> Trello</span>
          <span><SiFigma /> Figma</span> 
          <span><SiDocker /> Docker</span>
          
  <span><FaRocket /> Expo</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;