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
            I'm Bhavesh Purohit, a data analyst with 3.5 years of experience turning raw datasets into actionable insights. My expertise lies in building scalable data pipelines, conducting in-depth statistical analysis, and developing interactive dashboards using tools like Power BI, Looker, and Tableau.

At CLAB AI, I worked on a national education platform where I automated data ingestion from AWS S3 to Neo4j, streamlined workflows using Apache Airflow and Spark, and empowered 90+ schools with insight-driven dashboards. Before that, at KPIT Technologies, I led reporting automation for global automotive clients using SQL, Alteryx, and Azure Databricks, reducing data delivery time by over 35%.

I'm also skilled in ETL tools like Informatica and SSIS, and experienced in documenting pipelines and workflows using Confluence and Power Automate, ensuring clarity and continuity across teams.

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
