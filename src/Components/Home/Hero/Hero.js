import './Hero.css';
import imgLogo from '../../../img/imgLogo.png';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

function Hero() {
  return (
    <div className="heroContainer">
      <h2 className="h2Hero">Développeur Freelance</h2>
      <h3 className="h3Hero">Contactez-moi pour tous vos projets</h3>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Web',
          1000,
          'JavaScript',
          1000,
          'React',
          1000,
          'Web App',
          1000,
          'Front-End',
          1000,
        ]}
        wrapper="span"
        speed={30}
        style={{
          fontSize: '2em',
          display: 'inline-block',
          marginTop: '30px',
          color: '#ece4de',
          whiteSpace: 'pre-line',
          fontWeight: 'bold',
          wordBreak: 'break-all',
          userSelect: 'none',
        }}
        repeat={Infinity}
      />
    </div>
  );
}

export default Hero;
