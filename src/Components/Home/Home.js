import './Home.css';
import InfoCard from './InfoCard/InfoCard';
import { useState, useCallback, useEffect } from 'react';
import DataFr from '../../Utils/Data-Fr.json';
import DataEn from '../../Utils/Data-En.json';
import PresentationTextHome from './PresentationTextHome/PresentationTextHome';
import Dashboard from './Dashboard/Dashboard';
import Languages from './Languages/Languages';
import CurriculumVitae from './CurriculumVitae/CurriculumVitae';
import Projects from './Projects/Projects';
import Competency from './Competency/Competency';
import MyJourney from './MyJourney/MyJourney';

function Home({ currentLanguage, toggleLanguage }) {
  const [bubbleChatTextTab, setBubbleChatTextTab] = useState(DataFr.BubbleTab);
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
    if (currentLanguage === 'FR') {
      setBubbleChatTextTab(DataFr.BubbleTab);
    } else {
      setBubbleChatTextTab(DataEn.BubbleTab);
    }
  }, [currentLanguage]);
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
        currentLanguage={currentLanguage}
      />
      <InfoCard
        bubbleChatTextTab={bubbleChatTextTab}
        cleanStatusBubble={cleanStatusBubble}
        actifToggleStatusBubble={actifToggleStatusBubble}
      />
      <Languages
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
      />
      {currentComponent === '0' ? (
        <PresentationTextHome
          handleCurrentComponent={handleCurrentComponent}
          actifToggleStatusBubble={actifToggleStatusBubble}
          textPresentation={DataFr.textHome}
        />
      ) : currentComponent === 'TextBackground' ? (
        <p className="textBackground">FRONT END DEVELOPER</p>
      ) : currentComponent === '2' ? (
        <CurriculumVitae />
      ) : currentComponent === '3' ? (
        <Projects />
      ) : currentComponent === '4' ? (
        <Competency currentLanguage={currentLanguage} />
      ) : currentComponent === '5' ? (
        <MyJourney />
      ) : null}
    </div>
  );
}

export default Home;
