import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Bhavesh.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="about">
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>
        <div className={`introduction ${themename}`}>
          <div className="introduction_logocontainer">
            <img src={profilePic} alt="Bhavesh Purohit" />
          </div>
          <div className="introduction_datacontainer">
            <p>Hi, I'm Bhavesh 👋 "I Build, I Scale, I Automate." 🛠️</p>
            <p>Welcome to my space! I'm a Software Engineer who gets energized by turning complex business challenges into elegant, scalable code.</p>
            <p>Right now, I'm fascinated by the intersection of traditional backend engineering and the Generative AI revolution. I enjoy moving beyond the theoretical to build practical applications—like the AI agents I developed that auto-generate data or the microservices I refactored to reduce trading latency by 200 microseconds.</p>
            <p>This portfolio is a showcase of the systems I’ve designed, the problems I’ve solved, and the technologies I'm constantly learning. Feel free to explore my projects! If you see something you like, I'd love to connect.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
