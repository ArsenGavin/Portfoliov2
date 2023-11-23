import './Hero.css';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';

function Hero({ currentLanguage, colorPoliceCanvas }) {
  return (
    <div className="heroContainer">
      <div className="heroBox1">
        <h2 className="h2Hero">
          {currentLanguage === 'FR'
            ? DataFr.heroText.textH2
            : DataEn.heroText.textH2}
        </h2>
        <h3 className="h3Hero">
          {currentLanguage === 'FR'
            ? DataFr.heroText.textH3
            : DataEn.heroText.textH3}
        </h3>
        <div className="boxH3Hero">
          <h3 className="h3HeroAlt1">
            <span
              className={`${
                colorPoliceCanvas === '#FE4760'
                  ? 'spanAlt1'
                  : colorPoliceCanvas === '#F76B15'
                  ? 'spanAlt2'
                  : colorPoliceCanvas === '#0F0'
                  ? 'spanAlt3'
                  : colorPoliceCanvas === '#007bff'
                  ? 'spanAlt4'
                  : colorPoliceCanvas === '#6f42c1'
                  ? 'spanAlt5'
                  : ''
              }`}
            >
              W
            </span>
            eb
          </h3>
          <h3 className="h3HeroAlt2">
            {currentLanguage === 'FR' ? 'Intégration' : 'Integration'}
          </h3>
          <h3 className="h3HeroAlt1">
            <span
              className={`${
                colorPoliceCanvas === '#FE4760'
                  ? 'spanAlt1'
                  : colorPoliceCanvas === '#F76B15'
                  ? 'spanAlt2'
                  : colorPoliceCanvas === '#0F0'
                  ? 'spanAlt3'
                  : colorPoliceCanvas === '#007bff'
                  ? 'spanAlt4'
                  : colorPoliceCanvas === '#6f42c1'
                  ? 'spanAlt5'
                  : ''
              }`}
            >
              J
            </span>
            avaScript
          </h3>
          <h3 className="h3HeroAlt2">React</h3>
          <h3 className="h3HeroAlt1">
            <span
              className={`${
                colorPoliceCanvas === '#FE4760'
                  ? 'spanAlt1'
                  : colorPoliceCanvas === '#F76B15'
                  ? 'spanAlt2'
                  : colorPoliceCanvas === '#0F0'
                  ? 'spanAlt3'
                  : colorPoliceCanvas === '#007bff'
                  ? 'spanAlt4'
                  : colorPoliceCanvas === '#6f42c1'
                  ? 'spanAlt5'
                  : ''
              }`}
            >
              W
            </span>
            eb App
          </h3>
          <h3 className="h3HeroAlt2">Front-End</h3>
        </div>
      </div>
      <div className="heroBox2">
        <div
          className={`loader triangle loaderAlt ${
            colorPoliceCanvas === '#FE4760'
              ? 'loadAlt1'
              : colorPoliceCanvas === '#F76B15'
              ? 'loadAlt2'
              : colorPoliceCanvas === '#0F0'
              ? 'loadAlt3'
              : colorPoliceCanvas === '#007bff'
              ? 'loadAlt4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'loadAlt5'
              : ''
          }`}
        >
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>
        <p
          className={`text1Hero ${
            colorPoliceCanvas === '#FE4760'
              ? 'textAltColor1'
              : colorPoliceCanvas === '#F76B15'
              ? 'textAltColor2'
              : colorPoliceCanvas === '#ffff62'
              ? 'textAltColor3'
              : colorPoliceCanvas === '#0F0'
              ? 'textAltColor4'
              : colorPoliceCanvas === '#007bff'
              ? 'textAltColor5'
              : colorPoliceCanvas === '#6f42c1'
              ? 'textAltColor6'
              : Array.isArray(colorPoliceCanvas)
              ? 'textAltColor7'
              : ''
          }`}
        >
          {currentLanguage === 'FR'
            ? DataFr.heroText.textP1
            : DataEn.heroText.textP1}
        </p>
        <p className="text2Hero">
          {currentLanguage === 'FR'
            ? DataFr.heroText.textP2
            : DataEn.heroText.textP2}
        </p>
        <p className="text3Hero">
          {currentLanguage === 'FR'
            ? DataFr.heroText.textP3
            : DataEn.heroText.textP3}
        </p>
      </div>
      <div className="loadHero">
        <div
          className={`loader ${
            colorPoliceCanvas === '#FE4760'
              ? 'loadAlt1'
              : colorPoliceCanvas === '#F76B15'
              ? 'loadAlt2'
              : colorPoliceCanvas === '#0F0'
              ? 'loadAlt3'
              : colorPoliceCanvas === '#007bff'
              ? 'loadAlt4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'loadAlt5'
              : ''
          }`}
        >
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
        <div
          className={`loader ${
            colorPoliceCanvas === '#FE4760'
              ? 'loadAlt1'
              : colorPoliceCanvas === '#F76B15'
              ? 'loadAlt2'
              : colorPoliceCanvas === '#0F0'
              ? 'loadAlt3'
              : colorPoliceCanvas === '#007bff'
              ? 'loadAlt4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'loadAlt5'
              : ''
          }`}
        >
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div
          className={`loader ${
            colorPoliceCanvas === '#FE4760'
              ? 'loadAlt1'
              : colorPoliceCanvas === '#F76B15'
              ? 'loadAlt2'
              : colorPoliceCanvas === '#0F0'
              ? 'loadAlt3'
              : colorPoliceCanvas === '#007bff'
              ? 'loadAlt4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'loadAlt5'
              : ''
          }`}
        >
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>

      <div className="heroBox3">
        <div className="boxPara">
          <h5 className="h5Hero">
            {currentLanguage === 'FR'
              ? DataFr.heroText.product[0].title
              : DataEn.heroText.product[0].title}
          </h5>{' '}
          <p className="text4Hero">
            {currentLanguage === 'FR'
              ? DataFr.heroText.product[0].text
              : DataEn.heroText.product[0].text}
          </p>
        </div>
        <div className="boxPara">
          <h5 className="h5Hero">
            {currentLanguage === 'FR'
              ? DataFr.heroText.product[1].title
              : DataEn.heroText.product[1].title}
          </h5>{' '}
          <p className="text4Hero">
            {currentLanguage === 'FR'
              ? DataFr.heroText.product[1].text
              : DataEn.heroText.product[1].text}
          </p>
        </div>
        <div className="boxPara cards">
          <h5 className="h5Hero">
            {currentLanguage === 'FR'
              ? DataFr.heroText.product[2].title
              : DataEn.heroText.product[2].title}
          </h5>{' '}
          <p className="text4Hero">
            {currentLanguage === 'FR'
              ? DataFr.heroText.product[2].text
              : DataEn.heroText.product[2].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
