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
              Hi, I’m <strong>Bhavesh Purohit</strong> — the guy companies call when their data is a mess, dashboards are outdated, and insights are nowhere to be found.
            </p>
            <p>
              With <strong>4.5+ years</strong> of experience turning chaotic datasets into clean, decision-ready intelligence, I don’t just build reports — I build automated ecosystems that scale. I’ve sliced through 10M+ records in PySpark, deployed dbt models in Snowflake, visualized spikes in delinquency at PNC, and built dashboards that actually get used (yes, really).
            </p>
            <p>
              I’ve helped secure <strong>$500K+ in research funding</strong>, delivered <strong>$2M in operational savings</strong>, and caught bugs in EV sensor data that even the machines missed. Whether it's Redshift pipelines, Power BI dashboards, or ML-driven tweet bots — I bring the tech, the speed, and the results — minus the fluff.
            </p>
            <p>
              If you want dashboards that bite, data pipelines that don’t break, and insights that speak for themselves — you know where to find me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
