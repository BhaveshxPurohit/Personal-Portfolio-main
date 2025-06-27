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
              Hi, I’m Bhavesh, a data and BI analyst with 4.5+ years of industry and academic experience transforming raw data into insights. I specialize in Python, SQL, Power BI, Snowflake, and Excel, and I’ve built analytics solutions that optimized operations and influenced multimillion-dollar decisions.
            </p>
            <p>
              🚀 I’m passionate about simplifying complex datasets and enabling smarter business moves, especially within fintech, edtech, and retail domains. I’m looking for a full-time data analyst or analytics engineer role where I can contribute my technical expertise and problem-solving mindset.
            </p>
            <p>
             ⚙️ Tech Stack: Python, SQL, Power BI, Excel, Snowflake, R, dbt, Apache Airflow, Alteryx
            </p>
            <p>
              📍Open to remote or hybrid roles across the U.S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
