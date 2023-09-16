import "../src/style.css";
import "../src/component.css";
import React, { useState } from "react";
import { changePlaceholder, firstTime } from "./script.js";
export default function Nav() {
  const [placeholder, setPlaceholder] = useState(firstTime());
  changePlaceholder(setPlaceholder);
  return (
    <>
      <div className="search-bar">
        <img src="/assets/desktop/icon-search.svg" alt="" />
        <input type="text" id="search-bar-input" placeholder={placeholder} />
        <div id="mobile-icons">
          <img src="/assets/mobile/icon-filter.svg" alt="" id="mobile-filter" />
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
  );
}
