import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import AwardsCon from "./partials/AwardsCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { getAwards } from "../../services/AwardsService";
class Awards extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getAwards();
    this.setState({ awards: data });
  }
  render() {
    if (typeof this.state.awards === `undefined`) return null;
    console.log(this.state.awards);
    const { hero_banner, awards_con } = this.state.awards;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <AwardsCon data={awards_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default Awards;
