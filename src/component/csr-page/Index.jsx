import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
const Csr = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2019-04/csr-banner.jpg?itok=dsb0nfMM`}
        title={`Our Social Impact`}
        page={"CSR"}
        content={`We measure our success by the positive impact we leave on our people and society`}
      />
      <SubscribeToOurInsights />
      <Footer />
    </Fragment>
  );
};

export default Csr;
