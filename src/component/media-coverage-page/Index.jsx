import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import MediaCoverageCon from "./partials/MediaCoverageCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
const MediaCoverage = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Media%20Coverage.jpg?itok=dua9DsER`}
        title={`Media Coverage`}
        page={"Media Coverage"}
        content={`We are well-recognized across the press`}
      />
      <MediaCoverageCon />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default MediaCoverage;
