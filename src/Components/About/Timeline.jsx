import React from "react";
import "./Timeline.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const timelineData = [
  {
    type: "work",
    role: "Software Engineer",
    org: "PNC Financial Services",
    date: "Jun 2024 – Present",
  },
  {
    type: "education",
    role: "Master of Science in Information Systems",
    org: "Syracuse University",
    date: "Aug 2023 – May 2025",
  },
  {
    type: "work",
    role: "Software Development Engineer",
    org: "Goldman Sachs",
    date: "Mar 2021 – May 2023",
  },
];

export const Timeline = () => {
  return (
    <div className="section timeline-wrap" data-aos="fade-up">
      <h2 className="section__title">
        My <span className="different">Timeline 💫</span>
      </h2>
      <div className="timeline-track">
        {timelineData.map((item, i) => (
          <div className="timeline-entry" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-type-badge">
                {item.type === "work" ? <WorkIcon fontSize="inherit" /> : <SchoolIcon fontSize="inherit" />}
                {item.type}
              </div>
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-org">{item.org}</div>
                </div>
                <span className="timeline-date">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="timeline-entry">
          <div className="timeline-dot timeline-dot--star" />
        </div>
      </div>
    </div>
  );
};
