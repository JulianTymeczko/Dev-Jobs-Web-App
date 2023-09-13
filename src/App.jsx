import React from "react";
import '../src/style.css';
import '../src/component.css';
export default function App (props){
  return (
    <>
   <div className="job-card">
    <img src="./devjobs-web-app/starter-code/assets/logos/creative.svg" alt=""/>
        <div>
            <h2>20h ago<span> . </span>Part Time</h2>
            <h1>Haskell and PureScript Dev</h1>
            <h2>Blogr</h2>
            <h3>United States</h3>
        </div>
    </div>
    </>
  )
}