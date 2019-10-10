import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import InsightsCon from "./../insights-page/partials/InsightsCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { getInsights } from "../../services/InsightsService";
class Insights extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getInsights();
    this.setState({ insights: data });
  }
  render() {
    if (typeof this.state.insights === `undefined`) return null;
    console.log(this.state.insights);
    const { hero_banner, insights_con } = this.state.insights;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <InsightsCon data={insights_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default Insights;
