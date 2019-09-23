import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SolutionCon from "./partials/SolutionCon";
import LookExpertServices from "./../services-page/partials/LookingExpertServices";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";

const Solutions = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2018-09/solutions-banner.png?itok=6V6mJvJx`}
        title={`Our Solutions`}
        page="Solutions"
        content={`Innovative solutions to address your hard pressing business challenges and requirements`}
      />
      <SolutionCon />
      <LookExpertServices />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Solutions;
