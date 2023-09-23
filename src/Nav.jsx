import "../src/style.css";
import "../src/component.css";
import mobilePop from "./mobilePop.js";
import React, { useState } from "react";
import { changePlaceholder, firstTime } from "./script.js";
export default function Nav() {
  const [placeholder, setPlaceholder] = useState(firstTime());
  changePlaceholder(setPlaceholder);
  return (
    <>
      <dialog id="mobile-pop-up">
        <div>
          <img src="/assets/desktop/icon-location.svg" alt="" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Filter by location..."
          />
        </div>
        <hr />
        <div id="mobile-pop-up-bottom">
          <div>
            <input
              type="checkbox"
              id="myCheckbox2"
              className="custom-checkbox"
            />
            <label htmlFor="myCheckbox2" className="checkbox-label"></label>
            <h3>
              Full Time <span>Only</span>
            </h3>
          </div>
          <a href="#" className="padded-anchor">
            Search
          </a>
        </div>
      </dialog>
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
                mobilePop();
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
