import React from "react";
import Hero from "../heroSection/Hero";
import HowItWorks from "../howItWorks/HowItWorks";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";
import LatestTuitions from "../latestTuitions/LatestTuitions";

const Home = () => {
  return (
    <div>
      Home
      <Hero></Hero>
      <LatestTuitions></LatestTuitions>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
