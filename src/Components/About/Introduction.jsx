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
            I'm Bhavesh Purohit, a results-driven Data & BI Analyst with 4 years of hands-on experience transforming raw data into actionable business insights across the insurance and automotive industry. I specialize in SQL, Python, Power BI, and Snowflake, with a strong focus on building scalable ETL pipelines, automating reporting, and enabling data-informed decisions.

At Allstate, I uncovered a $4.2M claims overrun using Python and SQL and built automated data pipelines with PySpark and dbt. At KPIT, I scaled dashboarding for automotive clients and saved 30+ hours/month through ETL automation with Informatica, SSIS, and Power Automate.

With a Master’s in Information Systems from Syracuse University, I bring a blend of technical expertise and business acumen, always striving to make data more accessible, insightful, and impactful for stakeholders.
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
