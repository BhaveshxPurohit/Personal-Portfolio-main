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
            Hey there! I'm currently pursuing my Master of Science in Information Systems at Syracuse University, with a fervent passion for data analytics and cloud technology. My academic and hands-on experience has equipped me with expertise in Python, Pandas, SQL, AWS, Azure, Docker, and Databricks, enabling me to tackle complex data analysis, visualization, and the deployment of cloud-based solutions. Certified in Blockchain and Python Scripting, I'm continuously expanding my skill set. Eager to apply my knowledge in real-world settings, I'm seeking summer internship opportunities in data analytics and cloud engineering to further my career and contribute to innovative projects. I look forward to connecting with professionals and enthusiasts in the field to exchange ideas and collaborate on transformative initiatives.
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
