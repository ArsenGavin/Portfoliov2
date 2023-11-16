import './Dashboard.css';
import { IoMdHome } from 'react-icons/io';
function Dashboard({
  actifToggleStatusBubble,
  cleanStatusBubble,
  handleCurrentComponent,
  currentComponent,
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
          Projets
        </li>
        <li
          className={`liNav ${currentComponent === '4' ? 'actifNav' : ''}`}
          onClick={() => {
            handleClick('4');
          }}
        >
          Compétences
        </li>
        <li
          className={`liNav ${currentComponent === '5' ? 'actifNav' : ''}`}
          onClick={() => {
            handleClick('5');
          }}
        >
          MyJourney
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
