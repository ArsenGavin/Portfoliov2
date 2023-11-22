import './Dashboard.css';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';
import imgLogo from '../../../img/imgLogo.png';
import { FaHome } from 'react-icons/fa';

function Dashboard({
  actifToggleStatusBubble,
  cleanStatusBubble,
  handleCurrentComponent,
  currentComponent,
  currentLanguage,
  colorPoliceCanvas,
}) {
  const handleClick = (currentComponent) => {
    cleanStatusBubble();
    actifToggleStatusBubble(currentComponent);
    handleCurrentComponent(currentComponent);
  };
  return (
    <div className="dashboardContainer">
      <ul className="ulNavBox">
        <li
          className={`imgBoxUl liNavAlt ${
            currentComponent === '2' && colorPoliceCanvas === '#FE4760'
              ? 'actifNav1'
              : currentComponent === '2' && colorPoliceCanvas === '#F76B15'
              ? 'actifNav2'
              : currentComponent === '2' && colorPoliceCanvas === '#ffff62'
              ? 'actifNav3'
              : currentComponent === '2' && colorPoliceCanvas === '#0F0'
              ? 'actifNav4'
              : currentComponent === '2' && colorPoliceCanvas === '#007bff'
              ? 'actifNav5'
              : currentComponent === '2' && colorPoliceCanvas === '#6f42c1'
              ? 'actifNav6'
              : currentComponent === '2' && Array.isArray(colorPoliceCanvas)
              ? 'actifNav7'
              : ''
          }`}
          onClick={() => {
            handleClick('2');
          }}
        >
          <img src={imgLogo} className="LogoTBMenu" alt="LogoTB" />
        </li>

        <li
          className={`liNav2 ${
            currentComponent === '4' && colorPoliceCanvas === '#FE4760'
              ? 'actifNav1'
              : currentComponent === '4' && colorPoliceCanvas === '#ffc107'
              ? 'actifNav2'
              : currentComponent === '4' && colorPoliceCanvas === '#ffff62'
              ? 'actifNav3'
              : currentComponent === '4' && colorPoliceCanvas === '#0F0'
              ? 'actifNav4'
              : currentComponent === '4' && colorPoliceCanvas === '#007bff'
              ? 'actifNav5'
              : currentComponent === '4' && colorPoliceCanvas === '#6f42c1'
              ? 'actifNav6'
              : currentComponent === '4' && Array.isArray(colorPoliceCanvas)
              ? 'actifNav7'
              : ''
          }`}
          onClick={() => {
            handleClick('4');
          }}
        >
          {currentLanguage === 'FR' ? DataFr.DashBoard[1] : DataEn.DashBoard[1]}
        </li>
        <li
          className={`liNav3 ${
            currentComponent === '3' && colorPoliceCanvas === '#FE4760'
              ? 'actifNav1'
              : currentComponent === '3' && colorPoliceCanvas === '#ffc107'
              ? 'actifNav2'
              : currentComponent === '3' && colorPoliceCanvas === '#ffff62'
              ? 'actifNav3'
              : currentComponent === '3' && colorPoliceCanvas === '#0F0'
              ? 'actifNav4'
              : currentComponent === '3' && colorPoliceCanvas === '#007bff'
              ? 'actifNav5'
              : currentComponent === '3' && colorPoliceCanvas === '#6f42c1'
              ? 'actifNav6'
              : currentComponent === '3' && Array.isArray(colorPoliceCanvas)
              ? 'actifNav7'
              : ''
          }`}
          onClick={() => {
            handleClick('3');
          }}
        >
          {currentLanguage === 'FR' ? DataFr.DashBoard[0] : DataEn.DashBoard[0]}
        </li>
        <li
          className={`liNav4 ${
            currentComponent === '5' && colorPoliceCanvas === '#FE4760'
              ? 'actifNav1'
              : currentComponent === '5' && colorPoliceCanvas === '#ffc107'
              ? 'actifNav2'
              : currentComponent === '5' && colorPoliceCanvas === '#ffff62'
              ? 'actifNav3'
              : currentComponent === '5' && colorPoliceCanvas === '#0F0'
              ? 'actifNav4'
              : currentComponent === '5' && colorPoliceCanvas === '#007bff'
              ? 'actifNav5'
              : currentComponent === '5' && colorPoliceCanvas === '#6f42c1'
              ? 'actifNav6'
              : currentComponent === '5' && Array.isArray(colorPoliceCanvas)
              ? 'actifNav7'
              : ''
          }`}
          onClick={() => {
            handleClick('5');
          }}
        >
          {currentLanguage === 'FR' ? DataFr.DashBoard[2] : DataEn.DashBoard[2]}
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
