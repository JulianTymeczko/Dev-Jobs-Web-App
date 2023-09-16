import React from "react";
import "../src/style.css";
import "../src/component.css";
import data from "./data.json";

export default function App() {
  return (
    <>
      {data.map((el) => {
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
              <h1>{el.position}</h1>
              <h2>{el.company}</h2>
              <h3>{el.location}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}
