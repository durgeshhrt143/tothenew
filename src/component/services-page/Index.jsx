import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import ServicesCon from "./partials/ServicesCon";
import LookExpertServices from "./partials/LookingExpertServices";
import SubscribeToOurInsights from "./../landing-page/partials/SubscribeToOurInsights";

const Services = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner />
      <ServicesCon />
      <LookExpertServices />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Services;
