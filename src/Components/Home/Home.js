import './Home.css';
import InfoCard from './InfoCard/InfoCard';
import { useState, useCallback, useEffect } from 'react';
import DataFr from '../../Utils/Data-Fr.json';
import DataEn from '../../Utils/Data-En.json';
import Hero from './Hero/Hero';
import NavBar from './NavBar/NavBar';
import Languages from './Languages/Languages';
import Projects from './Projects/Projects';
import Competency from './Competency/Competency';
import ContactForm from './ContactForm/ContactForm';

function Home({ currentLanguage, toggleLanguage, colorPoliceCanvas }) {
  const [bubbleChatTextTab, setBubbleChatTextTab] = useState(DataFr.BubbleTab);
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

  return (
    <div className="home">
      <NavBar
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
        <section id="Home">
          <Hero
            currentLanguage={currentLanguage}
            colorPoliceCanvas={colorPoliceCanvas}
          />
        </section>
        <section id="Competency">
          <Competency currentLanguage={currentLanguage} />
        </section>
        <section id="Project">
          <Projects colorPoliceCanvas={colorPoliceCanvas} />
        </section>
        <section id="Contact">
          <ContactForm
            currentLanguage={currentLanguage}
            colorPoliceCanvas={colorPoliceCanvas}
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
