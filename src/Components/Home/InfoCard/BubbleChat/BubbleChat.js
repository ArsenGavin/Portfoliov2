import './BubbleChat.css';
import profilThomas from '../../../../img/ThomasManga.png';
import { useEffect } from 'react';

function BubbleChat({ bubbleChatTextTab, cleanStatusBubble }) {
  useEffect(() => {
    const activeBubble = bubbleChatTextTab.find((data) => data.status);

    if (activeBubble) {
      const timerId = setTimeout(() => {
        cleanStatusBubble();
      }, activeBubble.msgTime * 1000);

      return () => clearTimeout(timerId);
    }
  }, [bubbleChatTextTab, cleanStatusBubble]);
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
