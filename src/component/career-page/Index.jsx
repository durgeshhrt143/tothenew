import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import JobsCon from "./partials/JobsCon";
const Jobs = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/themes/ttnd/images/Join-Us.jpg`}
        title={`Jobs`}
        page={"Jobs"}
        content={`Explore The New with us!`}
      />
      <JobsCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Jobs;
