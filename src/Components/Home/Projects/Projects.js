import './Projects.css';
import hNY from '../../../img/hpn.png';
import takoma from '../../../img/takoma.gif';
import popcote from '../../../img/Malt3.png';
import { FaFigma, FaReact, FaWordpress, FaGithub } from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiExpress,
  SiAdobeillustrator,
} from 'react-icons/si';

function Projects({ currentLanguage }) {
  return (
    <div className="projectContainer">
      <h2 className="projectTitle">
        {currentLanguage === 'FR' ? 'Projets' : 'Projects'}
      </h2>
      <div className="cardBox">
        <img className="project1" src={takoma} alt="gif projet" />
        <p className="heading">
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
        <p className="heading">
          {currentLanguage === 'FR'
            ? 'Carte de voeux nouvel ans Web App'
            : 'New Years Greeting Card Web App'}
        </p>
        <a
          href="https://www.youtube.com/watch?v=WXVT7SfVfpM&ab_channel=ThomasBirmingham"
          className="linkVid"
        >
          Video link 🔗
        </a>
        <div className="compéBox">
          <FaFigma className="iconSkill iconSkillAlt1 iconSkillProject" />
          <SiAdobephotoshop className="iconSkill iconSkillAlt2 iconSkillProject" />
          <SiAdobeillustrator className="iconSkill iconSkillAlt3 iconSkillProject" />
          <FaReact className="iconSkill iconSkillAlt5 iconSkillProject" />
          <FaGithub className="iconSkill iconSkillAlt10 iconSkillProject" />
        </div>
        -
      </div>
      <div className="cardBox">
        <img className="project3" src={popcote} alt="gif projet" />
        <p className="heading">Application React Native / Node js</p>
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
