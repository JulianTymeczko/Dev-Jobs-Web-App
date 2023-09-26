import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav.jsx";
const root = ReactDOM.createRoot(document.getElementById("nav-bottom-div"));
export default function RootNav(
  setJobTitle,
  setLocation,
  setFullTime,
  setMobileLocation,
  setMobileFullTime,
) {
  root.render(
    <React.StrictMode>
      <Nav
        setJobTitle={setJobTitle}
        setLocation={setLocation}
        setFullTime={setFullTime}
        setMobileLocation={setMobileLocation}
        setMobileFullTime={setMobileFullTime}
      />
    </React.StrictMode>,
  );
}
