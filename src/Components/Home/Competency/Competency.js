import './Competency.css';
import {
  FaFigma,
  FaReact,
  FaWordpress,
  FaDocker,
  FaGithub,
} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiTypescript,
  SiExpress,
  SiAdobeillustrator,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

function Competency({ currentLanguage }) {
  return (
    <div className="containerSkill">
      <span className="overlaySkill"></span>
      <h2>{currentLanguage === 'FR' ? 'COMPÉTENCES' : 'SKILLS'}</h2>
      <div className="cardSkillBox">
        <div className="cardSkill">
          <FaFigma className="iconSkill iconSkillAlt1" />
          <SiAdobephotoshop className="iconSkill iconSkillAlt2" />
          <SiAdobeillustrator className="iconSkill iconSkillAlt3" />
        </div>
        <div className="cardSkill">
          <SiTypescript className="iconSkill iconSkillAlt4" />
          <FaReact className="iconSkill iconSkillAlt5" />
          <TbBrandThreejs className="iconSkill iconSkillAlt6" />
        </div>
        <div className="cardSkill">
          <FaWordpress className="iconSkill iconSkillAlt7" />
          <SiExpress className="iconSkill iconSkillAlt8" />
          <FaDocker className="iconSkill iconSkillAlt9" />
        </div>
        <div className="cardSkill cardSkillAlt">
          <FaGithub className="iconSkill iconSkillAlt10" />
        </div>
      </div>

      <div className="containerTextSkill">
        <div className="boxTextSkill">
          <h3>Design</h3>
          <ul>
            <li className="textSkillAlt1">Figma</li>
            <li className="textSkillAlt2">Photoshop</li>
            <li className="textSkillAlt3">Illustrator</li>
          </ul>
        </div>
        <div className="boxTextSkill">
          <h3>Front-End</h3>
          <ul>
            <li className="textSkillAlt4">JavaScript - TypeScript</li>
            <li className="textSkillAlt5">React js - Next js</li>
            <li className="textSkillAlt6">Three js</li>
          </ul>
        </div>
        <div className="boxTextSkill">
          <h3>Back-End</h3>
          <ul>
            <li className="textSkillAlt7">Wordpress</li>
            <li className="textSkillAlt9">Node js - Express js</li>
          </ul>
        </div>
        <div className="boxTextSkill">
          <h3>{currentLanguage === 'FR' ? 'Autre' : 'Other'}</h3>
          <ul>
            <li className="textSkillAlt8">Docker</li>
            <li className="textSkillAlt10">git & github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Competency;
