import './ContactForm.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ currentLanguage, colorPoliceCanvas, toggleLightDark }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0ac5af8',
        'template_dza7bo6',
        form.current,
        'nUszB-aHmFgeDogqS'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactFormContainer">
      <div
        className={`card2Project ${
          colorPoliceCanvas === '#FE4760'
            ? 'card2Project1'
            : colorPoliceCanvas === '#F76B15'
            ? 'card2Project2'
            : colorPoliceCanvas === '#0F0'
            ? 'card2Project3'
            : colorPoliceCanvas === '#007bff'
            ? 'card2Project4'
            : colorPoliceCanvas === '#6f42c1'
            ? 'card2Project5'
            : ''
        }`}
      >
        <h2
          className={
            toggleLightDark === false ? 'titleForm' : 'titleForm FontBlack '
          }
        >
          CONTACT
        </h2>
        <form className="formBox" ref={form} onSubmit={sendEmail}>
          <label className={toggleLightDark === false ? '' : 'FontBlack '}>
            {currentLanguage === 'FR' ? 'Votre nom :' : 'Your name :'}
          </label>
          <input
            className={`${
              colorPoliceCanvas === '#FE4760'
                ? 'inputForm1'
                : colorPoliceCanvas === '#F76B15'
                ? 'inputForm2'
                : colorPoliceCanvas === '#0F0'
                ? 'inputForm3'
                : colorPoliceCanvas === '#007bff'
                ? 'inputForm4'
                : colorPoliceCanvas === '#6f42c1'
                ? 'inputForm5'
                : ''
            }`}
            type="text"
            name="user_name"
          />
          <label className={toggleLightDark === false ? '' : 'FontBlack '}>
            {currentLanguage === 'FR' ? 'Votre e-mail :' : 'Your email :'}
          </label>
          <input
            className={`${
              colorPoliceCanvas === '#FE4760'
                ? 'inputForm1'
                : colorPoliceCanvas === '#F76B15'
                ? 'inputForm2'
                : colorPoliceCanvas === '#0F0'
                ? 'inputForm3'
                : colorPoliceCanvas === '#007bff'
                ? 'inputForm4'
                : colorPoliceCanvas === '#6f42c1'
                ? 'inputForm5'
                : ''
            }`}
            type="email"
            name="user_email"
          />
          <label className={toggleLightDark === false ? '' : 'FontBlack '}>
            {currentLanguage === 'FR' ? 'Votre message :' : 'Your message :'}
          </label>
          <textarea
            className={`${
              colorPoliceCanvas === '#FE4760'
                ? 'textAreaForm1'
                : colorPoliceCanvas === '#F76B15'
                ? 'textAreaForm2'
                : colorPoliceCanvas === '#0F0'
                ? 'textAreaForm3'
                : colorPoliceCanvas === '#007bff'
                ? 'textAreaForm4'
                : colorPoliceCanvas === '#6f42c1'
                ? 'textAreaForm5'
                : ''
            }`}
            name="message"
          />
          <button
            className={
              toggleLightDark === false ? 'buttonForm' : 'buttonForm FontBlack '
            }
            type="submit"
            value="Send"
          >
            {currentLanguage === 'FR' ? 'Envoyer' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
