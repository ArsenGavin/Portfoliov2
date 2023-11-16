import './BubbleChat.css';
import profilThomas from '../../../../img/ThomasManga.png';
import { useEffect } from 'react';

function BubbleChat({ bubbleChatTextTab, cleanStatusBubble }) {
  // eslint-disable-next-line
  useEffect(() => {
    let currentTimer = 6;
    bubbleChatTextTab.map((data) => {
      return data.status === true ? (currentTimer = data.msgTime) : null;
    });
    // eslint-disable-next-line
    const timerId = setTimeout(() => {
      // eslint-disable-next-line
      cleanStatusBubble();
      // eslint-disable-next-line
    }, currentTimer * 1000);
    // eslint-disable-next-line
    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, [bubbleChatTextTab]);
  return (
    <div className="chatBox">
      <img src={profilThomas} className="imgProfil" alt="Logo" />
      <p className="nameImg">
        Thomas <br />
        Birmingham
      </p>
      {bubbleChatTextTab.map((data) => {
        return (
          <div
            key={data.id}
            className={`${
              data.status === true
                ? `activeBubble${data.msgTime}`
                : 'inactiveBubble'
            } bubble left`}
          >
            <p>{data.text}</p>
            {data.citation ? <p>{data.citation}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default BubbleChat;
