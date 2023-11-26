import './Projects.css';

function Projects({ colorPoliceCanvas }) {
  return (
    <div className="projectContainer">
      <div className="cardBox">
        <div
          className={`cardProject ${
            colorPoliceCanvas === '#FE4760'
              ? 'cardProject1'
              : colorPoliceCanvas === '#F76B15'
              ? 'cardProject2'
              : colorPoliceCanvas === '#0F0'
              ? 'cardProject3'
              : colorPoliceCanvas === '#007bff'
              ? 'cardProject4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'cardProject5'
              : ''
          }`}
        >
          <p className="heading">Project 1</p>
        </div>
      </div>
      <div className="cardBox">
        <div
          className={`cardProject ${
            colorPoliceCanvas === '#FE4760'
              ? 'cardProject1'
              : colorPoliceCanvas === '#F76B15'
              ? 'cardProject2'
              : colorPoliceCanvas === '#0F0'
              ? 'cardProject3'
              : colorPoliceCanvas === '#007bff'
              ? 'cardProject4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'cardProject5'
              : ''
          }`}
        >
          <p className="heading">Project 2</p>
        </div>
      </div>
      <div className="cardBox">
        <div
          className={`cardProject ${
            colorPoliceCanvas === '#FE4760'
              ? 'cardProject1'
              : colorPoliceCanvas === '#F76B15'
              ? 'cardProject2'
              : colorPoliceCanvas === '#0F0'
              ? 'cardProject3'
              : colorPoliceCanvas === '#007bff'
              ? 'cardProject4'
              : colorPoliceCanvas === '#6f42c1'
              ? 'cardProject5'
              : ''
          }`}
        >
          <p className="heading">Project 3</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
