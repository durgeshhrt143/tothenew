import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SuccessStoriesCon from "./partials/SuccessStoriesCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
const SuccessStories = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Success-Stories.jpg?itok=-cwgxevq`}
        title={`Success Stories`}
        page="Success stories"
        content={`Trusted by leading brands including Fortune 500 companies and Silicon Valley startups`}
      />
      <SuccessStoriesCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default SuccessStories;
