import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import ContactCon from "./partials/ContactCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";

const ContactUs = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_small/public/2016-10/Contact-Us_banner_0.png?itok=LLJkVteP`}
        title={`Contact Us`}
        page={`Contact Us`}
        content={``}
      />
      <ContactCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
