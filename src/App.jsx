import React, { useState } from "react";
import "../src/style.css";
import "../src/component.css";
import hideNav from "./hideNav.js";
import data from "./data.json";

export default function App() {
  const [screen, setScreen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      {!screen ? (
        data.map((el) => {
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
          <header>
            <div style={{ backgroundColor: selectedJob.logoBackground }}>
              {selectedJob.logo}
            </div>
            <div>
              <div>
                <h1>{selectedJob.company}</h1>
                <h2>{`${selectedJob.company}.com`}</h2>
              </div>
              <div>
                <a href={selectedJob.Website} className="padded-anchor">
                  Company Site
                </a>
              </div>
            </div>
          </header>
          <section>
            <h2>
              {selectedJob.postedAt} <span> . </span>
              {selectedJob.contract}
            </h2>
            <div>
              <h1>{selectedJob.position}</h1>
              <a href={selectedJob.apply} className="padded-anchor">
                Apply Now
              </a>
            </div>
            <h3>{selectedJob.location}</h3>
            <p>{selectedJob.description}</p>

            <div>
              <h2>Requirements</h2>
              <p>{selectedJob.requirements.content}</p>
              <ul>
                {selectedJob.requirements.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>What You Will Do</h2>
              <p>{selectedJob.role.content}</p>
              <ul>
                {selectedJob.role.items.map((itemRole, index) => (
                  <li key={index}>{itemRole}</li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
}
