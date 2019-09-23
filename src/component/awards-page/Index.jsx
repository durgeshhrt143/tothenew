import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import AwardsCon from "./partials/AwardsCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
const Awards = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Awards_0.jpg?itok=VL24Ae2O`}
        title={`Awards & Recognitions`}
        page={"Awards"}
        content={`Our journey towards success is marked with moments and milestones of pride and esteem`}
      />
      <AwardsCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Awards;
