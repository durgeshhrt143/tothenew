import React, { Fragment } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
const Blog = props => {
  return (
    <Fragment>
      <Header />
      <HeroBanner
        img={`http://static1.tothenew.com/blog/wp-content/themes/ttn/images/banner/blog-banner.jpg`}
        title={`Blogs`}
        page={`Blog`}
        content={`Told you, we love sharing!`}
      />
      <Footer />
    </Fragment>
  );
};

export default Blog;
