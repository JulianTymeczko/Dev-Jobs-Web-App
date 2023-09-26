import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav.jsx";

export default function RootNav(setJobTitle, setLocation, setFullTime) {
  ReactDOM.createRoot(document.getElementById("nav-bottom-div")).render(
    <React.StrictMode>
      <Nav
        setJobTitle={setJobTitle}
        setLocation={setLocation}
        setFullTime={setFullTime}
      />
    </React.StrictMode>,
  );
}
