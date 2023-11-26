import './ToggleLightDark.css';

import { useState } from 'react';

function ToggleLightDark({ handleClickToggleLightDark, toggleLightDark }) {
  const ClickToggle = () => {
    handleClickToggleLightDark(toggleLightDark);
  };

  return (
    <div className="toggleLightDarkContainer">
      <input
        id="checkbox_toggle"
        type="checkbox"
        className="checkToggleLightDark"
      />
      <div className="checkboxToggleLightDark">
        <label className="slideToggleLightDark" for="checkbox_toggle">
          <label
            className="toggleToggleLightDark"
            for="checkbox_toggle"
          ></label>
          <label
            className="textToggleLightDark"
            for="checkbox_toggle"
            onClick={() => {
              ClickToggle();
            }}
          >
            Light M
          </label>
          <label
            className="textToggleLightDark"
            for="checkbox_toggle"
            onClick={() => {
              ClickToggle();
            }}
          >
            Dark M
          </label>
        </label>
      </div>
    </div>
  );
}

export default ToggleLightDark;
