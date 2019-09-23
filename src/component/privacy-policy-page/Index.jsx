import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import PrivacyCon from "./partials/privacyCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
const PrivacyPolicy = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Privacy_0.jpg?itok=U0jGLCKb`}
        title={`Privacy`}
        page={`Privacy`}
        content={`Words to live by!`}
      />
      <PrivacyCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicy;
