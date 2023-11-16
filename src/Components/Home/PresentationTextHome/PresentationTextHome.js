import './PresentationTextHome.css';
import { TypeAnimation } from 'react-type-animation';
import { IoMdCloseCircleOutline } from 'react-icons/io';

function PresentationTextHome({
  handleCurrentComponent,
  actifToggleStatusBubble,
  textPresentation,
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
          textPresentation,
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
  );
}

export default PresentationTextHome;
