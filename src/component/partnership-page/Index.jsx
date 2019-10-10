import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import HeroBanner from "./../common/HeroBanner";
import PartnersCon from "./partials/PartnersCon";
import { getPartnership } from "../../services/PartnershipService";
class Partnership extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getPartnership();
    this.setState({ partnership: data });
  }
  render() {
    if (typeof this.state.partnership === `undefined`) return null;
    console.log(this.state.partnership);
    const { hero_banner, partners_con } = this.state.partnership;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <PartnersCon data={partners_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default Partnership;
