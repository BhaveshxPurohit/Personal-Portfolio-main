import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Bhavesh.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">

            <h4>
            Hi, I'm Bhavesh Purohit, a Data Analyst with over 4 years of experience turning complex datasets into clear, actionable insights that drive business value. I specialize in SQL, Python, Power BI, and Tableau, and have a proven track record of improving decision-making across insurance, automotive, and manufacturing sectors.

I’ve worked with top companies like Allstate, KPIT Technologies, and Dixon Technologies, where I built scalable ETL pipelines, automated reporting, and led end-to-end dashboard development that cut manual effort by 50%+ and improved visibility into KPIs like LTV, DAU/MAU, and claim efficiency.

I hold my Master's degree in Information Systems from Syracuse University, I bring a strong blend of technical expertise and business acumen. My approach combines hands-on data engineering with impactful data storytelling to support product, marketing, and operations teams.

Whether it's optimizing factory operations, detecting insurance fraud, or uncovering patterns in customer behavior, I’m passionate about solving problems with data.
            </h4>
              



            {/* 
            
            <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4>
            
            */}
              
            </div>
          </div>
          </div>
        </section>
      </>
  );
};
