import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
import { IoIosSpeedometer } from 'react-icons/io';
import { MdComputer } from 'react-icons/md';
import { RiHomeWifiLine } from 'react-icons/ri';
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

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Web',
            1000,
            'JavaScript',
            1000,
            'React',
            1000,
            'Web App',
            1000,
            'Front-End',
            1000,
          ]}
          wrapper="span"
          speed={30}
          style={{
            fontSize: '2em',
            display: 'inline-block',
            marginTop: '30px',
            color: '#ece4de',
            whiteSpace: 'pre-line',
            fontWeight: 'bold',
            wordBreak: 'break-all',
            userSelect: 'none',
          }}
          repeat={Infinity}
        />
      </div>
      <div className="heroBox2">
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
      <div className="heroBox3">
        <div className="boxPara">
          <div
            className={`boxIconPara ${
              colorPoliceCanvas === '#FE4760'
                ? 'boxIconPara1'
                : colorPoliceCanvas === '#F76B15'
                ? 'boxIconPara2'
                : colorPoliceCanvas === '#ffff62'
                ? 'boxIconPara3'
                : colorPoliceCanvas === '#0F0'
                ? 'boxIconPara4'
                : colorPoliceCanvas === '#007bff'
                ? 'boxIconPara5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'boxIconPara6'
                : Array.isArray(colorPoliceCanvas)
                ? 'boxIconPara7'
                : ''
            }`}
          >
            <IoIosSpeedometer className="iconHero" />
          </div>
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
          <div
            className={`boxIconPara ${
              colorPoliceCanvas === '#FE4760'
                ? 'boxIconPara1'
                : colorPoliceCanvas === '#F76B15'
                ? 'boxIconPara2'
                : colorPoliceCanvas === '#ffff62'
                ? 'boxIconPara3'
                : colorPoliceCanvas === '#0F0'
                ? 'boxIconPara4'
                : colorPoliceCanvas === '#007bff'
                ? 'boxIconPara5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'boxIconPara6'
                : Array.isArray(colorPoliceCanvas)
                ? 'boxIconPara7'
                : ''
            }`}
          >
            <MdComputer className="iconHero" />
          </div>
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
          <div
            className={`boxIconPara ${
              colorPoliceCanvas === '#FE4760'
                ? 'boxIconPara1'
                : colorPoliceCanvas === '#F76B15'
                ? 'boxIconPara2'
                : colorPoliceCanvas === '#ffff62'
                ? 'boxIconPara3'
                : colorPoliceCanvas === '#0F0'
                ? 'boxIconPara4'
                : colorPoliceCanvas === '#007bff'
                ? 'boxIconPara5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'boxIconPara6'
                : Array.isArray(colorPoliceCanvas)
                ? 'boxIconPara7'
                : ''
            }`}
          >
            <RiHomeWifiLine className="iconHero" />
          </div>
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
