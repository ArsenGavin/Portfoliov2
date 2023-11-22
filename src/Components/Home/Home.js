import './Home.css';
import InfoCard from './InfoCard/InfoCard';
import { useState, useCallback, useEffect } from 'react';
import DataFr from '../../Utils/Data-Fr.json';
import DataEn from '../../Utils/Data-En.json';
import PresentationTextHome from './PresentationTextHome/PresentationTextHome';
import Hero from './Hero/Hero';
import Dashboard from './Dashboard/Dashboard';
import Languages from './Languages/Languages';
import CurriculumVitae from './CurriculumVitae/CurriculumVitae';
import Projects from './Projects/Projects';
import Competency from './Competency/Competency';
import MyJourney from './MyJourney/MyJourney';

function Home({ currentLanguage, toggleLanguage, colorPoliceCanvas }) {
  const [bubbleChatTextTab, setBubbleChatTextTab] = useState(DataFr.BubbleTab);
  // const [currentComponent, setCurrentComponent] = useState('TextBackground');
  const [currentComponent, setCurrentComponent] = useState('2');
  const cleanStatusBubble = useCallback(() => {
    setBubbleChatTextTab((prevArray) =>
      prevArray.map((item) => (item.status ? { ...item, status: false } : item))
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
      // setCurrentComponent('2');
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
        colorPoliceCanvas={colorPoliceCanvas}
      />
      <InfoCard
        bubbleChatTextTab={bubbleChatTextTab}
        cleanStatusBubble={cleanStatusBubble}
        actifToggleStatusBubble={actifToggleStatusBubble}
        currentLanguage={currentLanguage}
      />
      <Languages
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
      />
      <div className="homeComponentsContainer">
        {currentComponent === 'TextBackground' ? (
          <p className="textBackground">FRONT END DEVELOPER</p>
        ) : currentComponent === '2' ? (
          <>
            {/* <PresentationTextHome
            handleCurrentComponent={handleCurrentComponent}
            actifToggleStatusBubble={actifToggleStatusBubble}
            textPresentation={DataFr.textHome}
          /> */}
            <Hero
              currentLanguage={currentLanguage}
              colorPoliceCanvas={colorPoliceCanvas}
            />

            {
              /* <CurriculumVitae currentLanguage={currentLanguage} />
            <Projects />*/
              <Competency currentLanguage={currentLanguage} />
            }
          </>
        ) : currentComponent === '2' ? null : currentComponent === // <CurriculumVitae currentLanguage={currentLanguage} />
          '3' ? null : currentComponent === '4' ? null : currentComponent === // <Projects /> // <Competency currentLanguage={currentLanguage} />
          '5' ? (
          <MyJourney />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
