import React, { Fragment, Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import IndustryCon from "./partials/IndustryCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { getIndustries } from "./../../services/IndustriesService";
class Industries extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getIndustries();
    this.setState({ industries: data });
  }
  render() {
    if (typeof this.state.industries === `undefined`) return null;
    console.log(this.state.industries);
    const { industry_con, hero_banner } = this.state.industries;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <IndustryCon data={industry_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}

export default Industries;
