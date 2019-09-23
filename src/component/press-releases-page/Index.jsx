import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import HeroBanner from "./../common/HeroBanner";
import PressReleasesCon from "./partials/PressReleasesCon";
const PressReleases = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/News_0.jpg?itok=JCg0VMAm`}
        title={`Press Releases`}
        page={"Press Releases"}
        content={`We are making headlines. Take a look.`}
      />
      <PressReleasesCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default PressReleases;
