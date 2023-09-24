import "../src/style.css";
import "../src/component.css";

export default function Footer({ title, company, apply }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h3>{company}</h3>
      </div>
      <div>
        <a href={apply} className="padded-anchor">
          Apply Now
        </a>
      </div>
    </>
  );
}
