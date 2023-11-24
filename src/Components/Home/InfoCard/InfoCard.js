import './InfoCard.css';
import BubbleChat from './BubbleChat/BubbleChat';
import CV from '../../../doc/Thomas Birmingham CV 2023.pdf';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsEnvelopeAt } from 'react-icons/bs';
import DataFr from '../../../Utils/Data-Fr.json';
import DataEn from '../../../Utils/Data-En.json';

function PresentationCard({
  bubbleChatTextTab,
  cleanStatusBubble,
  actifToggleStatusBubble,
  currentLanguage,
}) {
  const infoCard = [
    {
      text: 'Courbevoie, 92400',
    },
    {
      text: 'thomas.g.birmingham@gmail.com',
    },
  ];
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

  const dlCV = () => {
    actifToggleStatusBubble('6');
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
          {currentLanguage === 'FR' ? DataFr.infoCardText : DataEn.infoCardText}
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
          <a
            href={CV}
            onClick={() => {
              dlCV();
            }}
            download="Thomas Birmingham CV 2023.pdf" // Nom du fichier à télécharger
            alt="CV Thomas Birmingham"
            className="aIcon"
          >
            <LuFileSpreadsheet className="icon iconCV" />
          </a>
          <BsEnvelopeAt
            onClick={() => {
              copyText(infoCard[1].text);
            }}
            onKeyDown={() => {
              copyText(infoCard[1].text);
            }}
            className="icon "
          />
        </div>
        <div className="infoCardBox">
          <p className="textInfoCard">{infoCard[0].text}</p>
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;
