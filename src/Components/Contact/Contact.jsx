import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const openCalendly = () => {
    window.open(
      "https://calendly.com/purohitbhavesh/30min",
      "Schedule Time with Me",
      "height=700,width=600"
    );
  };

  return (
    <div className="section contact-wrap" data-aos="fade-up">
      <h2 className="section__title">
        Get in <span className="different">Touch</span>
      </h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </p>
      <div className="contact-card">
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/purohitbhavesh/" target="_blank" rel="noreferrer" className="contact-icon-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/BhaveshxPurohit" target="_blank" rel="noreferrer" className="contact-icon-link" aria-label="GitHub">
            <VscGithub />
          </a>
          <a href="mailto:bhaveshhpurohit@gmail.com" target="_blank" rel="noreferrer" className="contact-icon-link" aria-label="Email">
            <CgMail />
          </a>
          <a href="tel:+13154968715" className="contact-icon-link" aria-label="Phone">
            <BsFillTelephoneFill style={{ fontSize: "1.1rem" }} />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-row">
            <CgMail />
            <a href="mailto:bhaveshhpurohit@gmail.com">bhaveshhpurohit@gmail.com</a>
          </div>
          <div className="contact-row">
            <BsFillTelephoneFill style={{ fontSize: "0.95rem" }} />
            <a href="tel:+13154968715">+1 315-496-8715</a>
          </div>
        </div>
        <div className="contact-cta">
          <button onClick={openCalendly} className="calendly-button">
            📅 Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};
