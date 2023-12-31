import { useEffect, useRef, useState } from 'react';
import Themes from './BtnPropsCanvas';
import './MatrixWallCanvas.css';

function MatrixWallCanvas(props) {
  const ref = useRef(null);
  const intervalIDRef = useRef(null);
  const [policeCanvas, setPoliceCanvas] = useState(
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
  );

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = policeCanvas;
    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      if (Array.isArray(props.colorPoliceCanvas)) {
        context.fillStyle =
          props.colorPoliceCanvas[
            Math.floor(Math.random() * props.colorPoliceCanvas.length)
          ];
      } else {
        context.fillStyle = props.colorPoliceCanvas;
      }

      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    intervalIDRef.current = setInterval(draw, 75);
    return () => {
      cleanupCanvas(canvas, context);
      clearInterval(intervalIDRef.current);
    };
  }, [policeCanvas, props.colorPoliceCanvas]);

  // Fonction externe pour nettoyer le canvas
  const cleanupCanvas = (canvas, context) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const stopInterval = () => {
    clearInterval(intervalIDRef.current);
  };

  const externalCleanupCanvas = (police) => {
    if (police !== policeCanvas) {
      cleanupCanvas(ref.current, ref.current.getContext('2d'));
      stopInterval();
      setPoliceCanvas(police);
    }
  };

  const externalCleanupCanvasAlt = (color) => {
    if (color !== props.colorPoliceCanvas) {
      cleanupCanvas(ref.current, ref.current.getContext('2d'));
      stopInterval();
      props.setColorPoliceCanvas(color);
    }
  };
  return (
    <>
      <canvas ref={ref} {...props} />
      <Themes
        externalCleanupCanvas={externalCleanupCanvas}
        externalCleanupCanvasAlt={externalCleanupCanvasAlt}
        policeCanvas={policeCanvas}
        colorPoliceCanvas={props.colorPoliceCanvas}
        currentLanguage={props.currentLanguage}
      />
      <span className="overlay"></span>
    </>
  );
}
export default MatrixWallCanvas;
