import './Competency.css';

function Competency({ currentLanguage }) {
  return (
    <div className="competencyContainer">
      <div className="competencyUnderContainer">
        <div className="competencyBox">
          <h4>
            {currentLanguage === 'FR' ? 'Intégration Web' : 'Web Integration'}
          </h4>

          <div className="competencys">
            <div className="skillIconBox">
              <div className="icon1"></div>
              <h5>HTML5</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon2"></div>
              <h5>CSS3</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon3"></div>
              <h5>SASS</h5>
            </div>
          </div>
        </div>
        <span className="span1"></span>
        <div className="competencyBox">
          <h4>
            {currentLanguage === 'FR'
              ? 'Conception Graphique'
              : 'Graphic Design'}
          </h4>
          <div className="competencys">
            <div className="skillIconBox">
              <div className="icon4"></div>
              <h5>PHOTOSHOP</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon5"></div>
              <h5>ILLUSTRATOR</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon6"></div>
              <h5>FIGMA</h5>
            </div>
          </div>
        </div>
      </div>
      <span className="span2"></span>
      <div className="competencyUnderContainer">
        <div className="competencyBoxAlt">
          <h4>Front-End</h4>

          <div className="competencys">
            <div className="skillIconBox">
              <div className="icon7"></div>
              <h5>JAVASCRIPT </h5>
            </div>
            <div className="skillIconBox">
              <div className="icon8"></div>
              <h5>JQUERY </h5>
            </div>
            <div className="skillIconBox">
              <div className="icon9"></div>
              <h5>REACT </h5>
            </div>
            <div className="skillIconBox">
              <div className="icon10"></div>
              <h5>NEXT</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon11"></div>
              <h5>VUE</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon12"></div>
              <h5>ANGULAR</h5>
            </div>
          </div>
        </div>
        {/* <span className="span1"></span>
        <div className="competencyBox">
          <h4>CMS</h4>
          <div className="competencys">
            <div className="skillIconBox">
              <div className="icon4"></div>
              <h5>PHOTOSHOP</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon5"></div>
              <h5>ILLUSTRATOR</h5>
            </div>
            <div className="skillIconBox">
              <div className="icon6"></div>
              <h5>CANVA</h5>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Competency;
