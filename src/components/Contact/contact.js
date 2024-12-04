import React from "react";
import ContactForm from "./ContactForm";
import "./contact.scss";
import mailboxImage from "../../assets/images/mailbox.png";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <img src={mailboxImage} alt="Boîte aux lettres" className="mailbox-image" />
          <p>Pour toutes questions ou précisions, n’hésitez pas à me contacter.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
