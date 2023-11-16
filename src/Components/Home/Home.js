import './Home.css';
import InfoCard from './InfoCard/InfoCard';
import { useState, useCallback, useEffect } from 'react';
import Data from '../../Utils/Data-Fr.json';
import PresentationTextHome from './PresentationTextHome/PresentationTextHome';
import Dashboard from './Dashboard/Dashboard';
import CurriculumVitae from './CurriculumVitae/CurriculumVitae';
import MyJourney from './MyJourney/MyJourney';

function Home() {
  const [bubbleChatTextTab, setBubbleChatTextTab] = useState(Data.BubbleTab);
  const [currentComponent, setCurrentComponent] = useState('TextBackground');
  const cleanStatusBubble = useCallback(() => {
    setBubbleChatTextTab((prevArray) =>
      prevArray.map((item) =>
        item.status === true ? { ...item, status: !item.status } : item
      )
    );
  }, [setBubbleChatTextTab]);
  const actifToggleStatusBubble = (currentItemId) => {
    setBubbleChatTextTab((prevArray) =>
      prevArray.map((item) =>
        item.id === currentItemId ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleCurrentComponent = (currentComponent) => {
    setCurrentComponent(currentComponent);
  };

  useEffect(() => {
    // eslint-disable-next-line
    const timerId = setTimeout(() => {
      // eslint-disable-next-line
      setCurrentComponent('0');
      // eslint-disable-next-line
    }, 8000);
    // eslint-disable-next-line
    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <Dashboard
        actifToggleStatusBubble={actifToggleStatusBubble}
        cleanStatusBubble={cleanStatusBubble}
        handleCurrentComponent={handleCurrentComponent}
        currentComponent={currentComponent}
      />
      <InfoCard
        bubbleChatTextTab={bubbleChatTextTab}
        cleanStatusBubble={cleanStatusBubble}
        actifToggleStatusBubble={actifToggleStatusBubble}
      />
      {currentComponent === '0' ? (
        <PresentationTextHome
          handleCurrentComponent={handleCurrentComponent}
          actifToggleStatusBubble={actifToggleStatusBubble}
        />
      ) : currentComponent === 'TextBackground' ? (
        <p className="textBackground">FRONT END DEVELOPER</p>
      ) : currentComponent === '2' ? (
        <CurriculumVitae />
      ) : currentComponent === '5' ? (
        <MyJourney />
      ) : null}
    </div>
  );
}

export default Home;
