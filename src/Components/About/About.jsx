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
          Passionate data enthusiast skilled in uncovering insights and presenting
          them in clear, compelling ways for non-technical audiences. Excelling in
          big data exploration and machine learning, always eager to learn and adapt
          to new technologies. I see data as a playground for innovation and enjoy
          predicting trends and discovering correlations.
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
            href="mailto:bhaveshpurohiit@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+1 680-356-8409"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/bhavesh-purohit-56354b173/"
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
