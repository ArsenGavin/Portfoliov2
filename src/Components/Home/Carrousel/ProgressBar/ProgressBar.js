import './ProgressBar.css';

function ProgressBar({ bgcolor, completed }) {
  let containerStyles;
  if (window.matchMedia('(max-width: 450px)').matches) {
    containerStyles = {
      height: 30,
      width: '70%',
      backgroundColor: '#e0e0de6e',
      borderRadius: 50,
      margin: 'auto',
      border: '2px solid black',
      position: 'fixed',
      bottom: '3%',
      left: '5%',
    };
  } else if (window.matchMedia('(min-width: 450px)').matches) {
    containerStyles = {
      height: 30,
      width: '80%',
      backgroundColor: '#e0e0de6e',
      borderRadius: 50,
      margin: 'auto',
      border: '2px solid black',
      position: 'fixed',
      bottom: '5%',
      left: '5%',
    };
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    verticalAlign: 'sub',
  };

  return (
    <div style={containerStyles} className="barXpBox">
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
