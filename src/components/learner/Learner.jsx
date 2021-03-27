import React from "react";
import "./Learner.css";

export default function Learner() {
  return (
    <div id="learner-container">
      <div id="learner-img">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40"
          alt="learner"
        />
      </div>
      <div id="learner-description">
        <div id="learner-title">Learner outcomes on Coursera</div>
        <div id="learner-body">
          <b>87% of people learning</b> for professional development
          <br /> <b>report career benefits</b> like getting a<br /> promotion, a
          raise, or starting a new career
          <br />
          <br />- Coursera Learner Outcomes Survey (2019)
        </div>
        <div id="buttons">
          <button id="learner-join-button" className="blue-button">
            <b>Join for Free</b>
          </button>
          <button id="coursera-business-button">
            <b>Try Coursera for Business</b>
          </button>
        </div>
      </div>
    </div>
  );
}
