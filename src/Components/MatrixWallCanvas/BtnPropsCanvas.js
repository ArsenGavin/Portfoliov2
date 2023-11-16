import './BtnPropsCanvas.css';
import Data from '../../Utils/Data-Fr.json';

function Themes({
  externalCleanupCanvas,
  externalCleanupCanvasAlt,
  policeCanvas,
  colorPoliceCanvas,
}) {
  return (
    <div>
      <div className="themesBox1">
        {Data.ColorTabMatrixWall.map((data, index) => {
          return (
            <button
              key={data.text}
              className={`btnThemes btnThemesAtl${index + 1} ${
                data.color === colorPoliceCanvas ||
                Array.isArray(colorPoliceCanvas)
                  ? `btnActif${index + 1}`
                  : ''
              }`}
              onClick={() => {
                externalCleanupCanvasAlt(data.color);
              }}
            >
              {data.text}
            </button>
          );
        })}
      </div>
      <div className="themesBox2">
        {Data.PoliceTabMatrixWall.map((data, index) => {
          return (
            <button
              key={data.str}
              className={`btnThemes btnThemesAtl7 ${
                data.str === policeCanvas ? `btnActif7` : ''
              }`}
              onClick={() => {
                externalCleanupCanvas(data.str);
              }}
            >
              {data.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Themes;
