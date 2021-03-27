import React from "react";
import Card from "../cards/Card";
import "./Goals.css";

export default function Goals() {
  return (
    <div id="goal-container">
      <div id="goals-title">Achieve your goals with Coursera</div>
      <div id="card-container">
        <Card
          url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Learn.svg?auto=format%2Ccompress&dpr=1&w=&h=55"
          title="Learn the
    latest skills"
          description="like business analytics, graphic design, Python, and more"
        />
        <Card
          url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Get-Ready.svg?auto=format%2Ccompress&dpr=1&w=&h=55"
          title="Get ready
          for a career"
          description="in high-demand fields like IT, AI and cloud engineering"
        />
        <Card
          url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Earn-Degree.svg?auto=format%2Ccompress&dpr=1&w=&h=55"
          title="Earn
          a degree"
          description="from a leading university in business, computer science, and more"
        />
        <Card
          url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Upskill-your-org.svg?auto=format%2Ccompress&dpr=1&w=&h=55"
          title="Upskill your
          organization"
          description="with on-demand training and development programs"
        />
      </div>
    </div>
  );
}
