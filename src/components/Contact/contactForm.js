import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      {/* Ligne pour le nom */}
      <div className="form-line">
        <input type="text" placeholder="Votre nom" name="name" required />
      </div>

      {/* Ligne pour le prénom */}
      <div className="form-line">
        <input type="text" placeholder="Votre prénom" name="surname" required />
      </div>

      {/* Ligne pour l'email */}
      <div className="form-line">
        <input type="email" placeholder="Votre adresse mail" name="email" required />
      </div>

      {/* Ligne pour le sujet */}
      <div className="form-line">
        <input type="text" placeholder="Le sujet de votre demande" name="subject" required />
      </div>

      {/* Ligne pour la description */}
      <div className="form-line">
        <textarea
          placeholder="Description de votre demande"
          name="message"
          rows="5"
          required
        ></textarea>
      </div>

      {/* Ligne pour le bouton */}
      <div className="form-line">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};

export default ContactForm;
