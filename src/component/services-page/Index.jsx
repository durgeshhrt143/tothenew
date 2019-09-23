import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import ServicesCon from "./partials/ServicesCon";
import LookExpertServices from "./partials/LookingExpertServices";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
const Services = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Services_0.jpg?itok=Xgdm-7Zl`}
        title={`Services`}
        page={`Service`}
        content={`Agility combined with design-­led engineering, cloud and analytics driven marketing results in great products, faster`}
      />
      <ServicesCon />
      <LookExpertServices />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Services;
