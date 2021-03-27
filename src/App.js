import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import HomeContainer from "./components/Home-container/HomeContainer";
import Company from "./components/company/Company";
import Goals from "./components/Goals/Goals";
import Learner from "./components/learner/Learner";
import Label from "./components/label/Label";
import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";
function App() {
  return (
    <div id="screen">
      <Header />
      <HomeContainer />
      <Company />
      <Goals />
      <Learner />
      <Label />
      <LeftContainer
        header="Top Quality"
        title="Learn from leading universities and companies"
        body="Start streaming on-demand video lectures today from top instructors in subjects like business, computer science, data science, language learning, & more."
        url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/79oOuCjA73r8MIX8Vj8KO2/b758aef174e8f68f6e265e6c3085befc/top-quality-image.png?auto=format%2Ccompress&dpr=1&w=624&h=463&q=40&fit=clip"
      />
      <RightContainer
        url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/accessible-updated-certs.svg?auto=format%2Ccompress&dpr=1&w=518&h=501&q=40&fit=clip"
        header="Accessible"
        title="Find flexible, affordable options"
        body="Choose from many options including free courses and university degrees at a breakthrough price. Learn at your own pace, 100% online."
      />
      <LeftContainer
        header="Applied Learning"
        title="Master skills with in-depth learning"
        body="Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners."
        url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/applied-learning.png?auto=format%2Ccompress&dpr=1&w=655&h=481&q=40&fit=clip"
      />
      <RightContainer
        url="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5RajKP4FyCTMPB0RruSwvK/33699d7599c2a69b7df6cc7bce006cfd/certificate-crop.png?auto=format%2Ccompress&dpr=1&w=580&h=440&q=40&fit=clip"
        header="
     Shareable Certificates"
        title="Earn industry-recognized credentials"
        body="Demonstrate your new skills by sharing your Course Certificate, Professional Certificate, MasterTrack™ Certificate, or diploma with your network."
      />
    </div>
  );
}

export default App;
