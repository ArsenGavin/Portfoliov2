import './BtnPropsCanvas.css';
import DataFr from '../../Utils/Data-Fr.json';
import DataEn from '../../Utils/Data-En.json';

function Themes({
  externalCleanupCanvas,
  externalCleanupCanvasAlt,
  policeCanvas,
  colorPoliceCanvas,
  currentLanguage,
}) {
  return (
    <>
      <div className="themesBox1">
        {currentLanguage === 'FR'
          ? DataFr.ColorTabMatrixWall.map((data, index) => {
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
            })
          : DataEn.ColorTabMatrixWall.map((data, index) => {
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
        {currentLanguage === 'FR'
          ? DataFr.PoliceTabMatrixWall.map((data, index) => {
              return (
                <button
                  key={data.str}
                  className={`btnThemes btnThemesAtl6 ${
                    data.str === policeCanvas ? `btnActif6` : ''
                  }`}
                  onClick={() => {
                    externalCleanupCanvas(data.str);
                  }}
                >
                  {data.text}
                </button>
              );
            })
          : DataEn.PoliceTabMatrixWall.map((data, index) => {
              return (
                <button
                  key={data.str}
                  className={`btnThemes btnThemesAtl6 ${
                    data.str === policeCanvas ? `btnActif6` : ''
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
    </>
  );
}

export default Themes;
