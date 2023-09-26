import React, { useState } from "react";
import "../src/style.css";
import "../src/component.css";
import "../src/job.css";
import hideNav from "./hideNav.js";
import data from "./data.json";
import { useEffect } from "react";
import RootFooter from "./main3.jsx";
import RootNav from "./main2.jsx";
export default function App() {
  const [screen, setScreen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  useEffect(() => {
    if (selectedJob) {
      RootFooter(selectedJob);
    }
  }, [selectedJob]);
  useEffect(() => {
    RootNav(setJobTitle, setLocation, setFullTime);
  }, []);

  return (
    <>
      {!screen ? (
        data
          .filter((el) => {
            if (jobTitle == "") {
              return true;
            } else if (jobTitle != "") {
              return (
                el.position.includes(jobTitle) || el.company.includes(jobTitle)
              );
            }
          })
          .filter((el) => {
            if (location == "") {
              return true;
            } else if (location != "") {
              return el.location.includes(location);
            }
          })
          .filter((el) => {
            if (fullTime) {
              return el.contract == "Full Time";
            }
            return true;
          })
          .map((el) => {
            return (
              <div className="job-card" key={el.id}>
                <img
                  src={el.logo}
                  alt=""
                  style={{ backgroundColor: el.logoBackground }}
                />
                <div>
                  <h2>
                    {el.postedAt} <span> . </span>
                    {el.contract}
                  </h2>
                  <h1
                    onClick={() => {
                      setScreen(true);
                      setSelectedJob(el);
                      hideNav();
                    }}
                  >
                    {el.position}
                  </h1>
                  <h2>{el.company}</h2>
                  <h3>{el.location}</h3>
                </div>
              </div>
            );
          })
      ) : (
        <>
          <div>
            <header className="job-header">
              <img
                src={selectedJob.logo}
                alt=""
                style={{ backgroundColor: selectedJob.logoBackground }}
              />

              <div>
                <div>
                  <h1>{selectedJob.company}</h1>
                  <h2>{`${selectedJob.company}.com`}</h2>
                </div>

                <a href={selectedJob.Website} className="padded-anchor">
                  Company Site
                </a>
              </div>
            </header>
            <section className="job-section">
              <h2>
                {selectedJob.postedAt} <span> . </span>
                {selectedJob.contract}
              </h2>
              <div>
                <h1>{selectedJob.position}</h1>
                <a
                  href={selectedJob.apply}
                  className="padded-anchor"
                  id="dissapear-mobile"
                >
                  Apply Now
                </a>
              </div>
              <h3>{selectedJob.location}</h3>
              <a
                href={selectedJob.apply}
                className="padded-anchor"
                id="appear-mobile"
              >
                Apply Now
              </a>
              <p id="first-para">{selectedJob.description}</p>

              <div id="requirements-div">
                <h2>Requirements</h2>
                <p id="second-para">{selectedJob.requirements.content}</p>
                <ul>
                  {selectedJob.requirements.items.map((item, index) => (
                    <li key={index}>
                      <span>•</span>
                      <p> {item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="what-you-div">
                <h2>What You Will Do</h2>
                <p id="third-para">{selectedJob.role.content}</p>
                <ul>
                  {selectedJob.role.items.map((itemRole, index) => (
                    <li key={index}>
                      <span>{parseInt(index) + 1}</span>
                      <p> {itemRole}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
