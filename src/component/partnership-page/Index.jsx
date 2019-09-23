import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import HeroBanner from "./../common/HeroBanner";
import PartnersCon from "./partials/PartnersCon";
const Partnership = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2017-05/partner-banner.jpg?itok=aY8RRr3R`}
        title={`Our Partners`}
        page={"Partners"}
        content={`We partner with forward thinking cloud service providers and other businesses`}
      />
      <PartnersCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Partnership;
