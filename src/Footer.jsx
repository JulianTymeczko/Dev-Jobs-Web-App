import "../src/style.css";
import "../src/component.css";
import { useEffect, useState } from "react";
import firstTimeDarkModeReact from "./toggleScheme.js";
export default function Footer({ title, company, apply, isDarkMode }) {
  const [dark, setDark] = useState(false);

  if (isDarkMode && dark == false) {
    setDark(isDarkMode);
  }
  useEffect(() => {
    if (dark) {
      firstTimeDarkModeReact();
    }
  }, [dark]);
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h3>{company}</h3>
      </div>

      <a href={apply} className="padded-anchor">
        Apply Now
      </a>
    </>
  );
}
