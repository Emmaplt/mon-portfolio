import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({ status: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFormStatus({
        status: "error",
        message: "Erreur de configuration EmailJS.",
      });
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setFormStatus({ status: "success", message: "Message envoyé avec succès !" });
        e.target.reset();
      })
      .catch(() => {
        setFormStatus({
          status: "error",
          message: "Une erreur s'est produite lors de l'envoi.",
        });
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-line">
        <label htmlFor="name" className="sr-only">Votre nom</label>
        <input type="text" id="name" placeholder="Votre nom" name="name" required />
      </div>
      <div className="form-line">
        <label htmlFor="surname" className="sr-only">Votre prénom</label>
        <input type="text" id="surname" placeholder="Votre prénom" name="surname" required />
      </div>
      <div className="form-line">
        <label htmlFor="email" className="sr-only">Votre adresse mail</label>
        <input type="email" id="email" placeholder="Votre adresse mail" name="email" required />
      </div>
      <div className="form-line">
        <label htmlFor="subject" className="sr-only">Le sujet de votre demande</label>
        <input type="text" id="subject" placeholder="Le sujet de votre demande" name="subject" required />
      </div>
      <div className="form-line">
        <label htmlFor="message" className="sr-only">Description de votre demande</label>
        <textarea id="message" placeholder="Description de votre demande" name="message" rows="5" required />
      </div>
      <div className="form-line">
        <button type="submit">Envoyer</button>
      </div>
      {formStatus.status === "success" && <p className="success-message">{formStatus.message}</p>}
      {formStatus.status === "error" && <p className="error-message">{formStatus.message}</p>}
    </form>
  );
};

export default ContactForm;
