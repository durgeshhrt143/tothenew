import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import IndustryCon from "./../industries-page/partials/IndustryCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
const Insights = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Insights_0.jpg?itok=Xj1mh4l9`}
        title={`Insights`}
        page={"Insights"}
        content={`Best of industry knowledge for you!`}
      />
      <IndustryCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Insights;
