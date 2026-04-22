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
      <div id="home" className="about center">
        <p className="about__greeting">Hello, World 👋</p>
        <h1 className="about__name-wrap">
          I'm <span className="about__name">Bhavesh Purohit</span>
        </h1>
        <div className="about__type">
          <Type />
        </div>
        <p className="about__desc">
          Passionate Software Engineer who loves solving complex problems and turning ideas into impactful, real-world solutions.
        </p>
        <div className="about__contact">
          <a href="https://github.com/BhaveshxPurohit" aria-label="github" target="_blank" rel="noreferrer" className="about__icon-link">
            <GitHubIcon style={{ fontSize: "1.2rem" }} />
          </a>
          <a href="https://www.linkedin.com/in/purohitbhavesh/" aria-label="linkedin" target="_blank" rel="noreferrer" className="about__icon-link">
            <LinkedInIcon style={{ fontSize: "1.2rem" }} />
          </a>
          <a href="mailto:bhaveshhpurohit@gmail.com" aria-label="mail" target="_blank" rel="noreferrer" className="about__icon-link">
            <EmailIcon style={{ fontSize: "1.2rem" }} />
          </a>
          <a href="tel:+13154968715" aria-label="phone" target="_blank" rel="noreferrer" className="about__icon-link">
            <PhoneIcon style={{ fontSize: "1.2rem" }} />
          </a>
        </div>
        <div className="about__scroll">
          <div className="about__scroll-line" />
          scroll
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
