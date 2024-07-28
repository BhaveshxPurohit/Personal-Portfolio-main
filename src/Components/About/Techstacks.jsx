import React from "react";
import "./Techstacks.css";
// Correctly updated import statements for each technology
import { SiPython, SiRstudio, SiSnowflake, SiTableau, SiPowerbi, SiMicrosoftazure, SiDatabricks, SiAlteryx, SiApacheairflow } from "react-icons/si";
import { PiFileSql, PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaAws } from "react-icons/fa";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiRstudio />
            <h5>R</h5>
          </div>
          <div>
            <PiFileSql />
            <h5>SQL</h5>
          </div>
          <div>
            <SiSnowflake />
            <h5>Snowflake</h5>
          </div>
          <div>
            <SiTableau />
            <h5>Tableau</h5>
          </div>
          <div>
            <SiPowerbi />
            <h5>Power BI</h5>
          </div>
          <div>
            <PiMicrosoftExcelLogoFill />
            <h5>Microsoft Excel</h5>
          </div>
          <div>
            <FaAws />
            <h5>Amazon Web Service</h5>
          </div>
          <div>
            <SiMicrosoftazure />
            <h5>Microsoft Azure</h5>
          </div>
          <div>
            <SiDatabricks />
            <h5>Databricks</h5>
          </div>
          <div>
            <SiAlteryx />
            <h5>Alteryx</h5>
          </div>
          <div>
            <SiApacheairflow />
            <h5>Apache Airflow</h5>
          </div>
        </div>
      </div>
    </>
  );
};
