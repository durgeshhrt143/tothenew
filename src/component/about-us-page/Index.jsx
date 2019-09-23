import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import OursPartner from "./partials/OursPartner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import OurClients from "./../common/OurClients";
import WhoWeAre from "./partials/WhoWeAre";
import MediaCoverage from "./partials/MediaCoverage";
const AboutUs = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/About-us.jpg?itok=tGfr44Dh`}
        title={`About`}
        page={"About"}
        content={`We are a digital technology company that drives digital transformation and builds disruptive technology solutions`}
      />
      <WhoWeAre />
      <OursPartner />
      <MediaCoverage />
      <OurClients />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
