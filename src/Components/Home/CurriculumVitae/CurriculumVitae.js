import './CurriculumVitae.css';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';
import CV from '../../../doc/Thomas Birmingham CV 2023.pdf';
import imgCv from '../../../img/cvImg.png';
import { useEffect } from 'react';

function CurriculumVitae({ currentLanguage }) {
  let Data = DataFr;
  useEffect(() => {
    currentLanguage === 'FR' ? (Data = DataFr) : (Data = DataEn);
    console.log('ca rentre');
  }, [currentLanguage]);
  return (
    <div className="cvContainer">
      <div className="cvBox">
        <a
          href={CV}
          download="Thomas Birmingham CV 2023.pdf" // Nom du fichier à télécharger
        >
          <img src={imgCv} className="imgCv" alt="Cv" />
        </a>
      </div>

      <div div className="cvBox">
        <div className="cvSection">
          <h3 className="cvTitle">
            {Data.CurriculumVitae[0].experience[0].title}
          </h3>
          <div>
            <h4>{Data.CurriculumVitae[0].experience[1].title}</h4>
            <h5>{Data.CurriculumVitae[0].experience[1].companyDate}</h5>
            <ul>
              {Data.CurriculumVitae[0].experience[1].responsibilities.map(
                (data) => {
                  return <li key={data}>•{data}</li>;
                }
              )}
            </ul>
            <p>{Data.CurriculumVitae[0].experience[1].description}</p>
          </div>
          <div>
            <h4>{Data.CurriculumVitae[0].experience[2].title}</h4>
            <h5>{Data.CurriculumVitae[0].experience[2].companyDate}</h5>
            <ul>
              {Data.CurriculumVitae[0].experience[2].responsibilities.map(
                (data) => {
                  return <li key={data}>•{data}</li>;
                }
              )}
            </ul>
          </div>
        </div>
        <div className="cvSection">
          <h3 className="cvTitle">
            {Data.CurriculumVitae[0].education[0].title}
          </h3>
          <div>
            <h4>{Data.CurriculumVitae[0].education[1].title}</h4>
            <h5>{Data.CurriculumVitae[0].education[1].degreeDate}</h5>
            <p>{Data.CurriculumVitae[0].education[1].description}</p>
          </div>
          <div>
            <h4>{Data.CurriculumVitae[0].education[2].title}</h4>
            <h5>{Data.CurriculumVitae[0].education[2].degreeDate}</h5>
            <p>{Data.CurriculumVitae[0].education[2].description}</p>
          </div>
          <div>
            <h4>{Data.CurriculumVitae[0].education[3].title}</h4>
            <h5>{Data.CurriculumVitae[0].education[3].date}</h5>
            <p>{Data.CurriculumVitae[0].education[3].description}</p>
          </div>
          <div>
            <h4>{Data.CurriculumVitae[0].education[4].title}</h4>
            <h5>{Data.CurriculumVitae[0].education[4].date}</h5>
            <p>{Data.CurriculumVitae[0].education[4].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumVitae;
