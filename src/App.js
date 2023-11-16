import './App.css';
import MatrixWallCanvas from './Components/MatrixWallCanvas/MatrixWallCanvas';
import Home from './Components/Home/Home';
import { useState } from 'react';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const toggleLanguage = (currentLanguage) => {
    setCurrentLanguage(currentLanguage);
  };

  return (
    <div className="app">
      <Home currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} />
      <MatrixWallCanvas
        className="WallCanva"
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

export default App;
