import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import EventsCon from "./partials/EventsCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
const Events = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Events_0.jpg?itok=RsF9Z35H`}
        title={`Events`}
        page={"Events"}
        content={`Building a great place to work with variety of events`}
      />
      <EventsCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Events;
