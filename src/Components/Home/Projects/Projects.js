import './Projects.css';
import Carousel from 'react-multi-carousel';
import imgCryptoProject from '../../../img/cryptoDashboard.png';
import imgEpicRoadTripProject from '../../../img/epicRoadTrip.png';
import imgMyYackProject from '../../../img/MyYak.png';
import 'react-multi-carousel/lib/styles.css';
import { AiFillGithub } from 'react-icons/ai';

function Projects() {
  const openWebOnglet = (Link) => {
    window.open(Link, '_blank');
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="ProjectContainer"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="itemProject">
        <h3>EpicRoadTrip</h3>
        <AiFillGithub
          className="icon"
          onClick={() => {
            openWebOnglet('https://github.com/ArsenGavin/epicRoadTrip');
          }}
        />
        <p>
          Une application web de planification de road trip qui simplifie la
          création d'itinéraires personnalisés.{' '}
        </p>
        <img
          src={imgEpicRoadTripProject}
          className="epicRoadTripImg"
          alt="epicRoadTripImg"
        />

        <p className="descriptifItem">
          En entrant simplement le lieu de départ, l'arrivée et les éventuelles
          escales, cette plateforme intelligente offre une expérience immersive
          en suggérant des activités, restaurants, hôtels et points d'intérêt le
          long du parcours. <br />
          En combinant les données de localisation avec des informations
          détaillées sur chaque destination, elle propose des recommandations
          adaptées à chaque escale, permettant aux voyageurs de découvrir des
          expériences uniques tout au long de leur voyage.
        </p>
      </div>
      <div className="itemProject">
        <img
          src={imgMyYackProject}
          className="myYakImg"
          alt="cryptoDashboard"
        />
        <h3>MyYak</h3>
        <AiFillGithub
          className="icon"
          onClick={() => {
            openWebOnglet('https://github.com/ArsenGavin/countofmoney_2020');
          }}
        />
        <p>
          MyYak est une application mobile développée en React Native, qui offre
          une expérience de communication locale. <br />
          Grâce à des canaux de conversation géographiquement centrés, MyYak
          permet aux utilisateurs d'échanger des messages, de partager des
          informations et de discuter en temps réel dans des channels définis
          par la proximité géographique, que ce soit au sein d'un quartier, sur
          un campus ou à proximité immédiate, offrant ainsi une plateforme de
          discussions locales captivante.
        </p>
      </div>
      <div className="itemProject">
        <img
          src={imgCryptoProject}
          className="cryptoImg"
          alt="cryptoDashboard"
        />
        <h3>Dashboard crypto data </h3>
        <AiFillGithub
          className="icon"
          onClick={() => {
            openWebOnglet('https://github.com/ArsenGavin/countofmoney_2020');
          }}
        />
        <p>
          Cette plateforme présente en temps réel les données précises sur les
          différentes crypto-monnaies, telles que les cours actuels, les
          variations, et propose également une section d'actualités traitant des
          tendances émergentes, des événements majeurs et des analyses du monde
          de la crypto.
          <br /> Avec une interface intuitive et interactive, cette application
          offre aux utilisateurs un accès instantané à un ensemble complet
          d'informations pour suivre de près l'univers toujours changeant des
          monnaies numériques.
        </p>
      </div>
      <div className="itemProject">
        <img
          src={imgCryptoProject}
          className="cryptoImg"
          alt="cryptoDashboard"
        />
        <h3>Dashboard crypto data </h3>
        <AiFillGithub
          className="icon"
          onClick={() => {
            openWebOnglet('https://github.com/ArsenGavin/countofmoney_2020');
          }}
        />
        <p>
          Cette plateforme présente en temps réel les données précises sur les
          différentes crypto-monnaies, telles que les cours actuels, les
          variations, et propose également une section d'actualités traitant des
          tendances émergentes, des événements majeurs et des analyses du monde
          de la crypto.
          <br /> Avec une interface intuitive et interactive, cette application
          offre aux utilisateurs un accès instantané à un ensemble complet
          d'informations pour suivre de près l'univers toujours changeant des
          monnaies numériques.
        </p>
      </div>
      <div className="itemProject">
        <img
          src={imgCryptoProject}
          className="cryptoImg"
          alt="cryptoDashboard"
        />
        <h3>Dashboard crypto data </h3>
        <AiFillGithub
          className="icon"
          onClick={() => {
            openWebOnglet('https://github.com/ArsenGavin/countofmoney_2020');
          }}
        />
        <p>
          Cette plateforme présente en temps réel les données précises sur les
          différentes crypto-monnaies, telles que les cours actuels, les
          variations, et propose également une section d'actualités traitant des
          tendances émergentes, des événements majeurs et des analyses du monde
          de la crypto.
          <br /> Avec une interface intuitive et interactive, cette application
          offre aux utilisateurs un accès instantané à un ensemble complet
          d'informations pour suivre de près l'univers toujours changeant des
          monnaies numériques.
        </p>
      </div>
      <div className="itemProject">
        <img
          src={imgCryptoProject}
          className="cryptoImg"
          alt="cryptoDashboard"
        />
        <h3>Dashboard crypto data </h3>
        <AiFillGithub
          className="icon"
          onClick={() => {
            openWebOnglet('https://github.com/ArsenGavin/countofmoney_2020');
          }}
        />
        <p>
          Cette plateforme présente en temps réel les données précises sur les
          différentes crypto-monnaies, telles que les cours actuels, les
          variations, et propose également une section d'actualités traitant des
          tendances émergentes, des événements majeurs et des analyses du monde
          de la crypto.
          <br /> Avec une interface intuitive et interactive, cette application
          offre aux utilisateurs un accès instantané à un ensemble complet
          d'informations pour suivre de près l'univers toujours changeant des
          monnaies numériques.
        </p>
      </div>
    </Carousel>
  );
}

export default Projects;
