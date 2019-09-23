import React, { Fragment } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import IndustryCon from "./partials/IndustryCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
const Industries = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2018-11/industries-we-serve_0.jpg?itok=b9d3d_2Y`}
        title={`Industries We Serve`}
        page="industries"
        content={`Leveraging the power of disruptive digital technologies, we empower businesses across industries to transform digitally`}
      />
      <IndustryCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Industries;
