import './PresentationTextHome.css';
import { TypeAnimation } from 'react-type-animation';
import { IoMdCloseCircleOutline } from 'react-icons/io';

function PresentationTextHome({
  handleCurrentComponent,
  actifToggleStatusBubble,
}) {
  const handleClick = () => {
    handleCurrentComponent('2');
    actifToggleStatusBubble('2');
  };
  return (
    <div className="typeAnimation">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Bonjour ! \n\nMon nom est Thomas Birmingham et je suis développeur. \n\nActuellement à la recherche d'un poste je suis disponible en Ile de France ou en full remote. \n\nN'hésitez pas à partager avec moi l'un de vos prochains projets !",
        ]}
        wrapper="span"
        speed={60}
        style={{
          fontSize: '1em',
          display: 'inline-block',
          color: 'black',
          whiteSpace: 'pre-line',
          fontWeight: 'bold',
          wordBreak: 'break-all',
          userSelect: 'none',
        }}
      />
      <IoMdCloseCircleOutline
        className="closeIcon"
        onClick={() => {
          handleClick();
        }}
      />
    </div>

    //   repeat={Infinity}
  );
}

export default PresentationTextHome;
