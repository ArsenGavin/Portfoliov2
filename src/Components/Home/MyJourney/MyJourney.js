import React from 'react';
import './MyJourney.css'; // Assurez-vous d'avoir le bon chemin pour votre fichier CSS

function MyJourney() {
  const videoLinks = [
    '../../../video/tiktok1.mp4',
    '../../../video/tiktok2.mp4',
    '../../../video/tiktok3.mp4',
    '../../../video/tiktok4.mp4',
  ];
  return (
    <div>
      {/* {videoLinks.map((videoLink, index) => (
        <video key={4 + index} width="100%" height="240" controls>
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))} */}
    </div>
  );
}

export default MyJourney;
