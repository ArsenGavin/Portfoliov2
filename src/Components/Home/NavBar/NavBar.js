import './NavBar.css';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';
import imgLogo from '../../../img/imgLogo.png';
import imgLogoB from '../../../img/imgLogoB.png';
import { Link } from 'react-scroll';

function NavBar({
  actifToggleStatusBubble,
  cleanStatusBubble,
  handleCurrentComponent,
  currentComponent,
  currentLanguage,
  colorPoliceCanvas,
  toggleLightDark,
}) {
  const handleClick = (currentComponent) => {
    cleanStatusBubble();
    actifToggleStatusBubble(currentComponent);
    handleCurrentComponent(currentComponent);
  };
  const currentLogo = toggleLightDark === false ? imgLogo : imgLogoB;
  return (
    <nav className="dashboardContainer">
      <ul
        className={
          toggleLightDark === false ? 'ulNavBox' : 'ulNavBox ulNavBoxBlack'
        }
      >
        <li>
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={() => {
              handleClick('2');
            }}
            onClick={() => {
              handleClick('2');
            }}
            className={toggleLightDark === false ? '' : 'liNavBlack'}
            activeClass={`imgBoxUl liNavAlt ${
              colorPoliceCanvas === '#FE4760'
                ? 'actifNav1'
                : colorPoliceCanvas === '#F76B15'
                ? 'actifNav2'
                : colorPoliceCanvas === '#ffff62'
                ? 'actifNav3'
                : colorPoliceCanvas === '#0F0'
                ? 'actifNav4'
                : colorPoliceCanvas === '#007bff'
                ? 'actifNav5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'actifNav6'
                : Array.isArray(colorPoliceCanvas)
                ? 'actifNav7'
                : ''
            }`}
          >
            <img src={currentLogo} className="LogoTBMenu" alt="LogoTB" />
          </Link>
        </li>

        <li>
          <Link
            to="Competency"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={() => {
              handleClick('4');
            }}
            onClick={() => {
              handleClick('4');
            }}
            className={toggleLightDark === false ? '' : 'liNavBlack'}
            activeClass={`liNav2 ${
              colorPoliceCanvas === '#FE4760'
                ? 'actifNav1'
                : colorPoliceCanvas === '#ffc107'
                ? 'actifNav2'
                : colorPoliceCanvas === '#ffff62'
                ? 'actifNav3'
                : colorPoliceCanvas === '#0F0'
                ? 'actifNav4'
                : colorPoliceCanvas === '#007bff'
                ? 'actifNav5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'actifNav6'
                : Array.isArray(colorPoliceCanvas)
                ? 'actifNav7'
                : ''
            }`}
          >
            {currentLanguage === 'FR'
              ? DataFr.DashBoard[1]
              : DataEn.DashBoard[1]}
          </Link>
        </li>
        <li>
          <Link
            to="Project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={() => {
              handleClick('3');
            }}
            onClick={() => {
              handleClick('3');
            }}
            className={toggleLightDark === false ? '' : 'liNavBlack'}
            activeClass={`liNav3 ${
              colorPoliceCanvas === '#FE4760'
                ? 'actifNav1'
                : colorPoliceCanvas === '#ffc107'
                ? 'actifNav2'
                : colorPoliceCanvas === '#ffff62'
                ? 'actifNav3'
                : colorPoliceCanvas === '#0F0'
                ? 'actifNav4'
                : colorPoliceCanvas === '#007bff'
                ? 'actifNav5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'actifNav6'
                : Array.isArray(colorPoliceCanvas)
                ? 'actifNav7'
                : ''
            }`}
          >
            {currentLanguage === 'FR'
              ? DataFr.DashBoard[0]
              : DataEn.DashBoard[0]}
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={() => {
              handleClick('5');
            }}
            onClick={() => {
              handleClick('5');
            }}
            className={toggleLightDark === false ? '' : 'liNavBlack'}
            activeClass={`liNav4 ${
              colorPoliceCanvas === '#FE4760'
                ? 'actifNav1'
                : colorPoliceCanvas === '#ffc107'
                ? 'actifNav2'
                : colorPoliceCanvas === '#ffff62'
                ? 'actifNav3'
                : colorPoliceCanvas === '#0F0'
                ? 'actifNav4'
                : colorPoliceCanvas === '#007bff'
                ? 'actifNav5'
                : colorPoliceCanvas === '#6f42c1'
                ? 'actifNav6'
                : Array.isArray(colorPoliceCanvas)
                ? 'actifNav7'
                : ''
            }`}
          >
            {currentLanguage === 'FR'
              ? DataFr.DashBoard[2]
              : DataEn.DashBoard[2]}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
