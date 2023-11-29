import './ToggleLightDark.css';

import { useState } from 'react';

function ToggleLightDark({
  handleClickToggleLightDark,
  toggleLightDark,
  colorPoliceCanvas,
}) {
  const ClickToggle = () => {
    handleClickToggleLightDark(toggleLightDark);
  };
  const toggleClass1 = () => {
    switch (colorPoliceCanvas) {
      case '#FE4760':
        return 'checkboxToggleLightDarkAlt1';
      case '#F76B15':
        return 'checkboxToggleLightDarkAlt2';
      case '#0F0':
        return 'checkboxToggleLightDarkAlt3';
      case '#007bff':
        return 'checkboxToggleLightDarkAlt4';
      case '#6f42c1':
        return 'checkboxToggleLightDarkAlt5';
      default:
        return 'toggleToggleLightDark';
    }
  };
  const toggleClass2 = () => {
    switch (colorPoliceCanvas) {
      case '#FE4760':
        return 'toggleToggleLightDarkAlt1';
      case '#F76B15':
        return 'toggleToggleLightDarkAlt2';
      case '#0F0':
        return 'toggleToggleLightDarkAlt3';
      case '#007bff':
        return 'toggleToggleLightDarkAlt4';
      case '#6f42c1':
        return 'toggleToggleLightDarkAlt5';
      default:
        return 'toggleToggleLightDark';
    }
  };
  return (
    <div className="toggleLightDarkContainer">
      <input
        id="checkbox_toggle"
        type="checkbox"
        className="checkToggleLightDark"
        onClick={() => {
          ClickToggle();
        }}
      />
      <div className={`checkboxToggleLightDark ${toggleClass1()}`}>
        <label className="slideToggleLightDark" for="checkbox_toggle">
          <label
            className={`toggleToggleLightDark ${toggleClass2()}`}
            for="checkbox_toggle"
          ></label>
          <label className="textToggleLightDark" for="checkbox_toggle">
            Dark M
          </label>
          <label className="textToggleLightDark" for="checkbox_toggle">
            Light M
          </label>
        </label>
      </div>
    </div>
  );
}

export default ToggleLightDark;
