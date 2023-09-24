import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav.jsx";

export default function RootNav() {
  ReactDOM.createRoot(document.getElementById("nav-bottom-div")).render(
    <React.StrictMode>
      <Nav />
    </React.StrictMode>,
  );
}
