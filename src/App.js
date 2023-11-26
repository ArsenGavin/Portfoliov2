import './App.css';
import MatrixWallCanvas from './Components/MatrixWallCanvas/MatrixWallCanvas';
import Home from './Components/Home/Home';
import { useState } from 'react';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const toggleLanguage = (currentLanguage) => {
    setCurrentLanguage(currentLanguage);
  };
  const colors = ['#FE4760', '#0F0', '#007bff', '#6f42c1'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const [colorPoliceCanvas, setColorPoliceCanvas] = useState(randomColor);
  const [toggleLightDark, setToggleLightDark] = useState(true);
  const handleClickToggleLightDark = () => {
    let toggle = toggleLightDark;
    setToggleLightDark(!toggle);
  };
  return (
    <div className="app">
      <Home
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
        colorPoliceCanvas={colorPoliceCanvas}
        handleClickToggleLightDark={handleClickToggleLightDark}
        toggleLightDark={toggleLightDark}
      />
      {toggleLightDark === false ? (
        <MatrixWallCanvas
          className="WallCanva"
          currentLanguage={currentLanguage}
          colorPoliceCanvas={colorPoliceCanvas}
          setColorPoliceCanvas={setColorPoliceCanvas}
        />
      ) : (
        <div className="backgroundSite">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

export default App;
