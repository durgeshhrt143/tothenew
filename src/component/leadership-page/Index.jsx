import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import FoundingTeam from "./partials/FoundingTeam";
// import { getLeadership } from "../../services/LeadershipService";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
class Leadership extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadLeadership();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const {
      hero_banner,
      founding_team,
      delivery_leadership,
      sales_team,
      enabling_functions
    } = this.props.data;
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
const mapStateToProps = state => {
  return {
    data: state.leadership.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadLeadership: () => dispatch(actionCreator.API_LEADERSHIP())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leadership);
