import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import FoundingTeam from "./partials/FoundingTeam";
import { getLeadership } from "../../services/LeadershipService";
class Leadership extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getLeadership();
    this.setState({ leadership: data });
  }
  render() {
    if (typeof this.state.leadership === `undefined`) return null;
    console.log(this.state.leadership);
    const {
      hero_banner,
      founding_team,
      delivery_leadership,
      sales_team,
      enabling_functions
    } = this.state.leadership;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <FoundingTeam data={founding_team} />
        <FoundingTeam data={delivery_leadership} />
        <FoundingTeam data={sales_team} />
        <FoundingTeam data={enabling_functions} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default Leadership;
