import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import { getBlog } from "../../services/BlogService";
class Blog extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getBlog();
    this.setState({ blog: data });
  }
  render() {
    console.log("durgesh");
    if (typeof this.state.blog === `undefined`) return null;
    console.log(this.state.blog.hero_banner);
    return (
      <Fragment>
        <Header />
        <HeroBanner data={this.state.blog.hero_banner} />
        <Footer />
      </Fragment>
    );
  }
}
export default Blog;
