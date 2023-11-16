import './InfoCard.css';
import BubbleChat from './BubbleChat/BubbleChat';
import {
  AiOutlineHome,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillGithub,
} from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';

const infoCard = [
  {
    icon: <AiOutlineHome className="iconAlt" />,
    text: 'Courbevoie, 92400',
  },
  {
    icon: <AiOutlineMail className="iconAlt" />,
    text: 'thomas.g.birmingham@gmail.com',
  },
  {
    icon: <FaMobileAlt className="iconAlt" />,
    text: '0674767560',
  },
];

function PresentationCard({
  bubbleChatTextTab,
  cleanStatusBubble,
  actifToggleStatusBubble,
  currentLanguage,
}) {
  const copyText = (textToCopy) => {
    // Créez une instance de ClipboardItem
    const clipboardItem = new ClipboardItem({
      'text/plain': new Blob([textToCopy], { type: 'text/plain' }),
    });

    // Copiez le texte dans le presse-papiers
    navigator.clipboard
      .write([clipboardItem])
      .then(() => {
        // Affichez un message de confirmation (optionnel)
        actifToggleStatusBubble('1');
      })
      .catch((err) => {
        console.error('Erreur lors de la copie dans le presse-papiers', err);
      });
  };

  const openWebOnglet = (Link) => {
    window.open(Link, '_blank');
  };

  return (
    <div className="presensationCard">
      <BubbleChat
        bubbleChatTextTab={bubbleChatTextTab}
        cleanStatusBubble={cleanStatusBubble}
      />
      <div className="presentationCardContainer">
        <h2 className="titleCard">
          {currentLanguage === 'FR'
            ? DataFr.infoCardText1
            : DataEn.infoCardText1}
          <br />
          {currentLanguage === 'FR'
            ? DataFr.infoCardText2
            : DataEn.infoCardText2}
        </h2>
        <div className="iconReseauBox">
          <AiOutlineLinkedin
            className="icon"
            onClick={() => {
              openWebOnglet(
                'https://www.linkedin.com/in/thomas-birmingham-aa9345177/'
              );
            }}
          />
          <AiFillGithub
            className="icon"
            onClick={() => {
              openWebOnglet('https://github.com/ArsenGavin');
            }}
          />
        </div>
        <div className="infoCardBox">
          {infoCard?.map((data, index) => {
            return (
              <div
                className="infoCard"
                key={data.text}
                onClick={() => {
                  copyText(data.text);
                }}
                onKeyDown={() => {
                  copyText(data.text);
                }}
              >
                {data.icon}
                <p className="textInfoCard">{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;
