import React from "react";
import "./Projects.css";
import { FaPython, FaJava, FaHtml5 } from "react-icons/fa";
<<<<<<< HEAD
import { SiRstudio, SiJupyter, SiHtml5, SiTwitter, SiAlteryx, SiAzurefunctions, SiMicrosoftazure } from "react-icons/si";
=======
import { SiRstudio, SiJupyter, SiHtml5, SiTwitter, SiAdobeillustrator } from "react-icons/si";
>>>>>>> 142f534 (Initial commit)
import { DiDatabase } from "react-icons/di"; 
import { AiOutlineRobot } from "react-icons/ai"; 
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://raw.githubusercontent.com/BhaveshxPurohit/Automated-Stock-Data-Management/784b6e43001a6cfe4689b01b2877ef068d248c80/Asset.png" 
                  alt="Project Visualization" />

                </div>
              </div>
              <div className="project_information">
                <h2>Automated Stock Data Management</h2>
                <p>
                This project harnesses Python and Alteryx for efficient data wrangling, coupled with a cloud-based ELT pipeline via Azure Functions, Logic Apps, and Azure Synapse Analytics for streamlined stock data handling. This setup automates data extraction, and transformation, and updates notifications, while Synapse Pipelines facilitate data refreshes and resource optimization. 
                </p>
                <div>
                  <FaPython />
                  <SiAlteryx />
                  <SiAzurefunctions />
                  <SiMicrosoftazure />
                  <DiDatabase />
                  
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Automated-Stock-Data-Management.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Analyzing-NYC-Green-Taxi-Trips/43b2b5cea9ef37fb15c2018492bb4bb76bdfb3b1/Asset.png"
                    alt="Analyzing-NYC-Green-Taxi-Trips"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stock Data Pipeline</h2>
                <p>
                In the era of rapid financial information exchange, our project introduces an automated ELT pipeline utilizing Python, Alteryx, and Azure services to revolutionize stock data processing. By automating the extraction, transformation, and loading of historical stock data from indexes and companies over the past decade, we ensure seamless integration with Power BI for advanced analysis and reporting. This integration spans several Azure cloud services and data processing tools, including Azure Functions for daily data retrieval, Alteryx for data cleansing and transformation, and Azure Synapse Analytics for efficient data loading and transformation. Our approach streamlines the monitoring and analysis of stock market trends and company financials, offering a comprehensive solution that enhances decision-making in the financial sector.
                </p>
                <div>
                  <DiDatabase />
                  <FaPython />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Analyzing-NYC-Green-Taxi-Trips.git "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Analyzing-Social-Media-Sentiment/c9b5eed9b6780bbf32b2febbc70112e9f9e7d571/Asset.png"
                    alt="Analyzing-Social-Media-Sentiment"
                   />
                </div>
              </div>
              <div className="project_information">
                <h2>Video Game Analysis</h2>
                <p>
                This project analyzes a rich dataset of video game sales, leveraging R to clean, process, and visualize the data to uncover industry trends and preferences across different regions and platforms. Through targeted visualizations like bar graphs, pie charts, and scatter plots, we explore global sales distribution, the relationship between critic and user scores, and the impact of genres and platforms on market performance. This concise analysis offers insights into regional sales preferences and the evolving video game industry landscape, providing valuable information for stakeholders and enthusiasts looking to understand the drivers of video game success.
                </p>
                <div>
                  <SiRstudio />
                  <SiAdobeillustrator/>
                  <SiJupyter />
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Analyzing-Social-Media-Sentiment.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://raw.githubusercontent.com/BhaveshxPurohit/Exploring-Spotify-with-Natural-Language-Processing/f0bebf3cb54c409c9d4aca81b73c3b52ce4df191/Asset.png" alt="Project Visualization" />

                </div>
              </div>
              <div className="project_information">
                <h2>Exploring Spotify with Natural Language Processing</h2>
                <p>
                This project delves into user preferences, playlist creation, and track patterns to enrich music enjoyment. By uncovering insights, we aim to enhance the user experience and offer tailored recommendations, ultimately contributing to the dynamic landscape of digital music consumption.
                </p>
                <div>
                  <FaPython />
                  <SiJupyter />
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Exploring-Spotify-with-Natural-Language-Processing.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Analyzing-NYC-Green-Taxi-Trips/43b2b5cea9ef37fb15c2018492bb4bb76bdfb3b1/Asset.png"
                    alt="Analyzing-NYC-Green-Taxi-Trips"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Analyzing NYC Green Taxi Trips</h2>
                <p>
                A study on NYC Green Taxi Trip Data (Jan 2022 - Jan 2023) uses machine learning to predict fares and find profitable pickup spots, extending service beyond Manhattan and airports. This aims to optimize earnings for drivers and improve service quality for passengers, enhancing efficiency in the taxi industry.
                </p>
                <div>
                  <SiRstudio />
                  <SiJupyter />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Analyzing-NYC-Green-Taxi-Trips.git "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/PowerSC-Forecasting-Residential-Energy-Usage-Across-South-Carolina/ba43e3caebafebc4d748cb48bb39a79556b29e82/Asset.png"
                    alt="PowerSC Forecasting Residential Energy Usage Across South Carolina"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PowerSC</h2>
                <p>
                PowerSC aims to tackle the challenge of managing electricity demand in South Carolina and nearby areas during peak summer months, focusing on preventing blackouts without building new infrastructure. By analyzing detailed house data, hourly energy usage, and weather patterns, the project seeks to understand consumption drivers and promote energy conservation among customers, aligning operational efficiency with environmental sustainability.
                </p>
                <div>
                  <SiRstudio />
             
                </div>
                <div>
                  <a
                    //href="https://github.com/BhaveshxPurohit/PowerSC-Forecasting-Residential-Energy-Usage-Across-South-Carolina.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Upcoming Project
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
