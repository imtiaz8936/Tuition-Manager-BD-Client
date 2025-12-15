import React from "react";
import Hero from "../heroSection/Hero";
import HowItWorks from "../howItWorks/HowItWorks";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";
import LatestTuitions from "../latestTuitions/LatestTuitions";
import LatestTutors from "../latestTutors/LatestTutors";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestTuitions></LatestTuitions>
      <LatestTutors></LatestTutors>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
