import './Languages.css';

function Languages({ currentLanguage, toggleLanguage }) {
  const handleClick = (current) => {
    toggleLanguage(current);
  };

  return (
    <div className="languagesContainer">
      {' '}
      <button
        className={`btnLanguage ${
          currentLanguage === 'FR' ? `btnLanguageActif` : ''
        }`}
        onClick={() => {
          handleClick('FR');
        }}
      >
        FR
      </button>
      <button
        className={`btnLanguage ${
          currentLanguage === 'EN' ? `btnLanguageActif` : ''
        }`}
        onClick={() => {
          handleClick('EN');
        }}
      >
        EN
      </button>
    </div>
  );
}

export default Languages;
