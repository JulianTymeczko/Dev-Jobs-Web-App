import "../src/job.css";
import "../src/style.css";
import "../src/component.css";
import React, { useState, useEffect } from "react";
import { changePlaceholder, firstTime } from "./script.js";
export default function Nav() {
  const [display, setDisplay] = useState("none");
  const [placeholder, setPlaceholder] = useState(firstTime());
  useEffect(() => {
    if (display == "inline-block") {
      document.querySelector("html").setAttribute("style", "opacity: 0.4965;");
    } else if (display == "none") {
      document.querySelector("html").setAttribute("style", "opacity: 1");
    }
  }, [display]);
  changePlaceholder(setPlaceholder);
  return (
    <>
      <div style={{ display: display }}>dvfsdvds</div>
      <>
        <div className="search-bar">
          <img src="/assets/desktop/icon-search.svg" alt="" />
          <input type="text" id="search-bar-input" placeholder={placeholder} />
          <div id="mobile-icons">
            <img
              src="/assets/mobile/icon-filter.svg"
              alt=""
              id="mobile-filter"
              onClick={() => {
                if (display == "none") {
                  setDisplay("inline-block");
                } else if (display == "inline-block") {
                  setDisplay("none");
                }
              }}
            />
            <a href="#" className="padded-anchor">
              <img src="/assets/desktop/white-icon-search.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="filter-location">
          <img src="/assets/desktop/icon-location.svg" alt="" />
          <input type="text" placeholder="Filter by location..." />
        </div>
        <div className="full-time-only">
          <input type="checkbox" id="myCheckbox" className="custom-checkbox" />
          <label htmlFor="myCheckbox" className="checkbox-label"></label>
          <h3>
            Full Time <span>Only</span>
          </h3>
          <a href="#" className="padded-anchor">
            Search
          </a>
        </div>
      </>
    </>
  );
}
