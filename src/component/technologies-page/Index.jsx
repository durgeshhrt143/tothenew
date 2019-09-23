import React, { Fragment } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import TechnologyCon from "./partials/TechnologyCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import LookExpertServices from "./../services-page/partials/LookingExpertServices";

const Technologies = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Technology_0.jpg?itok=ndptHTs`}
        title={`Technologies`}
        page="Technologies"
        content={`Product development done right, with breakthrough technologies and Agile processes`}
      />
      <TechnologyCon />
      <LookExpertServices />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Technologies;
