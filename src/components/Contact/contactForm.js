import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-line">
        <input type="text" placeholder="Votre nom" name="name" required />
      </div>
      <div className="form-line">
        <input type="text" placeholder="Votre prénom" name="surname" required />
      </div>
      <div className="form-line">
        <input type="email" placeholder="Votre adresse mail" name="email" required />
      </div>
      <div className="form-line">
        <input type="text" placeholder="Le sujet de votre demande" name="subject" required />
      </div>
      <div className="form-line">
        <textarea placeholder="Description de votre demande" name="message" rows="5" required />
      </div>
      <div className="form-line">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};

export default ContactForm;
