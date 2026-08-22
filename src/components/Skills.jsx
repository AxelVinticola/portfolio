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

function Skills({ t }) {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>{t.skills.title}</h2>
        <p>
          {t.skills.subtitle}
        </p>
      </div>

      <div className="skills__grid">

        <div className="skill-card">
          <h3>{t.skills.frontend}</h3>

          <span><FaReact /> React</span>
          <span><SiJavascript /> JavaScript</span>
          <span><FaHtml5 /> HTML</span>
          <span><FaCss3Alt /> CSS</span>
          <span><SiBootstrap /> Bootstrap</span>
          <span><SiJquery /> jQuery</span>
          <span><SiAngular/> Angular</span>
          
          
        </div>

        <div className="skill-card">
          <h3>{t.skills.backend}</h3>

          <span><FaPython /> Python</span>
          <span><SiDjango /> Django</span>
          <span><FaJava /> Java</span>
          <span><FaPhp /> PHP</span>
          <span>C#</span>
        </div>

        <div className="skill-card">
          <h3>{t.skills.databases}</h3>

          <span><SiMysql /> MySQL</span>
          <span><SiFirebase /> Firebase</span>
          <span><FaDatabase /> SQL</span>
        </div>

        <div className="skill-card">
          <h3>{t.skills.tools}</h3>

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