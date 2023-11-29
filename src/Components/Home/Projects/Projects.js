import './Projects.css';
import hNY from '../../../img/HNY.gif';
import takoma from '../../../img/takoma.gif';
import popcote from '../../../img/Malt3.png';
import { FaFigma, FaReact, FaWordpress, FaGithub } from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiExpress,
  SiAdobeillustrator,
} from 'react-icons/si';

function Projects({ currentLanguage, toggleLightDark }) {
  return (
    <div className="projectContainer">
      <h2
        className={
          toggleLightDark === false ? 'projectTitle' : 'projectTitle FontBlack'
        }
      >
        {currentLanguage === 'FR' ? 'Projets' : 'Projects'}
      </h2>
      <div className="cardBox">
        <img className="project1" src={takoma} alt="gif projet" />
        <p
          className={
            toggleLightDark === false ? 'heading' : 'heading FontBlack'
          }
        >
          {currentLanguage === 'FR'
            ? 'Wordpress Theme sur mesure'
            : 'Custom Wordpress Theme'}
        </p>
        <div className="compéBox">
          <FaFigma className="iconSkill iconSkillAlt1 iconSkillProject" />
          <SiAdobephotoshop className="iconSkill iconSkillAlt2 iconSkillProject" />
          <FaWordpress className="iconSkill iconSkillAlt7 iconSkillProject" />
          <FaGithub className="iconSkill iconSkillAlt10 iconSkillProject" />
        </div>
      </div>
      <div className="cardBox">
        <img className="project2" src={hNY} alt="gif projet" />
        <p
          className={
            toggleLightDark === false ? 'heading' : 'heading FontBlack'
          }
        >
          {currentLanguage === 'FR'
            ? 'Carte de voeux nouvelle an Web App'
            : 'New Years Greeting Card Web App'}
        </p>
        <div className="compéBox">
          <FaFigma className="iconSkill iconSkillAlt1 iconSkillProject" />
          <SiAdobephotoshop className="iconSkill iconSkillAlt2 iconSkillProject" />
          <SiAdobeillustrator className="iconSkill iconSkillAlt3 iconSkillProject" />
          <FaReact className="iconSkill iconSkillAlt5 iconSkillProject" />
          <FaGithub className="iconSkill iconSkillAlt10 iconSkillProject" />
        </div>
      </div>
      <div className="cardBox">
        <img className="project3" src={popcote} alt="gif projet" />
        <p
          className={
            toggleLightDark === false ? 'heading' : 'heading FontBlack'
          }
        >
          Application React Native / Node js
        </p>
        <div className="compéBox">
          <FaFigma className="iconSkill iconSkillAlt1 iconSkillProject" />
          <SiAdobephotoshop className="iconSkill iconSkillAlt2 iconSkillProject" />
          <FaReact className="iconSkill iconSkillAlt5 iconSkillProject" />
          <SiExpress className="iconSkill iconSkillAlt8 iconSkillProject" />
          <FaGithub className="iconSkill iconSkillAlt10 iconSkillProject" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
