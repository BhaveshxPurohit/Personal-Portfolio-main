import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Bhavesh Purohit</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate Software Engineer who loves solving complex problems and turning ideas into impactful, real-world solutions. With hands-on experience in building scalable web applications, designing robust backend systems, and deploying cloud-native solutions, I enjoy working at the intersection of technology and innovation.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/BhaveshxPurohit"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:bhaveshhpurohit@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+1 315-496-8715"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/purohitbhavesh/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="skills">
        <Techstacks />
      </section>
    </>
  );
};
