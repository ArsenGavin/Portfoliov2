import './Dashboard.css';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';
import { IoMdHome } from 'react-icons/io';

function Dashboard({
  actifToggleStatusBubble,
  cleanStatusBubble,
  handleCurrentComponent,
  currentComponent,
  currentLanguage,
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
          className={`liNavAlt ${currentComponent === '2' ? 'actifNav' : ''}`}
          onClick={() => {
            handleClick('2');
          }}
        >
          <IoMdHome
            className={`iconDashboardAlt ${
              currentComponent === '2' ? 'actifNav' : ''
            }`}
          />
        </li>
        <li
          className={`liNav ${currentComponent === '3' ? 'actifNav' : ''}`}
          onClick={() => {
            handleClick('3');
          }}
        >
          {currentLanguage === 'FR' ? DataFr.DashBoard[0] : DataEn.DashBoard[0]}
        </li>
        <li
          className={`liNav ${currentComponent === '4' ? 'actifNav' : ''}`}
          onClick={() => {
            handleClick('4');
          }}
        >
          {currentLanguage === 'FR' ? DataFr.DashBoard[1] : DataEn.DashBoard[1]}
        </li>
        {/* <li
          className={`liNav ${currentComponent === '5' ? 'actifNav' : ''}`}
          onClick={() => {
            handleClick('5');
          }}
        >
          {currentLanguage === 'FR' ? DataFr.DashBoard[2] : DataEn.DashBoard[2]}
        </li> */}
      </ul>
    </div>
  );
}

export default Dashboard;
