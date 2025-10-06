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
            <p>
             Hi, I’m Bhavesh Purohit — a passionate Software Engineer who loves building technology that solves real problems and makes everyday experiences faster, smarter, and more seamless.</p>
            <p> My journey in software engineering began with a curiosity for how complex systems work behind the scenes, and over the years, that curiosity has evolved into a drive to design and build impactful solutions. I’ve worked on everything from crafting scalable backend architectures and developing secure APIs to designing intuitive front-end interfaces and deploying cloud-native applications.</p>
            <p>I enjoy working across the full stack, bringing together technologies like Python, Django, React.js, Next.js, Docker, Kubernetes, and cloud platforms like AWS and GCP to create software that is reliable, scalable, and user-focused. Whether it’s optimizing performance, automating workflows, or architecting distributed systems, I approach every project with the same goal: to deliver solutions that make a measurable difference.</p>
            <p>Beyond the code, I’m a strong believer in continuous learning and pushing boundaries, exploring new tools, experimenting with ideas, and growing with every challenge. My ambition is to keep expanding my expertise while contributing to projects that have real-world impact and help shape the future of technology.</p>
            <p>Welcome to my portfolio, here, you’ll find some of the work I’m most proud of and a glimpse into how I approach building software that matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
