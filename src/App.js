import './App.css';
import MatrixWallCanvas from './Components/MatrixWallCanvas/MatrixWallCanvas';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="app">
      <Home />
      <MatrixWallCanvas className="WallCanva" />
    </div>
  );
}

export default App;
