import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Slider from "../landing-page/partials/Slider";
import SliderBelow from "./partials/SliderBelow";
import Technologies from "./partials/Technologies";
import SuccessStories from "./partials/SuccessStories";
import Insights from "./partials/Insights";
import OurClients from "./partials/OurClients";
import SubscribeToOurInsights from "./partials/SubscribeToOurInsights";
const Home = Props => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <SliderBelow />
      <Technologies />
      <SuccessStories />

      <Insights />
      <OurClients />
      <SubscribeToOurInsights />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
