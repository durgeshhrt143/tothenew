import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SuccessStoriesCon from "./partials/SuccessStoriesCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { getSuccessStories } from "../../services/SuccessStoriesService";
class SuccessStories extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getSuccessStories();
    this.setState({ success_stories: data });
  }
  render() {
    if (typeof this.state.success_stories === `undefined`) return null;
    console.log(this.state.success_stories);
    const { hero_banner, success_stories_con } = this.state.success_stories;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <SuccessStoriesCon data={success_stories_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}

export default SuccessStories;
