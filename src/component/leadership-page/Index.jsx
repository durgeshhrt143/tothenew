import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import FoundingTeam from "./partials/FoundingTeam";
const Leadership = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Leadership_0.jpg?itok=RDzs1OOa`}
        title={`Leadership`}
        page={"Leadership"}
        content={`Meet the seasoned leaders who made TO THE NEW possible.`}
      />
      <FoundingTeam />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Leadership;
