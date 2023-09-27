import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";

export default function RootFooter(selectedJob, darkMode) {
  ReactDOM.createRoot(document.getElementById("footer")).render(
    <React.StrictMode>
      <Footer
        title={selectedJob.position}
        company={selectedJob.company}
        apply={selectedJob.apply}
        isDarkMode={darkMode}
      ></Footer>
    </React.StrictMode>,
  );
}
