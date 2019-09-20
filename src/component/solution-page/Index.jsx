import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SolutionCon from "./partials/SolutionCon";
import LookExpertServices from "./../services-page/partials/LookingExpertServices";
import SubscribeToOurInsights from "./../landing-page/partials/SubscribeToOurInsights";

const Solutions = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner />
      <SolutionCon />
      <LookExpertServices />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Solutions;
