import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import AwardsCon from "./partials/AwardsCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
class Awards extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadAwards();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    const { hero_banner, awards_con } = this.props.data;
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
const mapStateToProps = state => {
  return { data: state.awards.data };
};
const mapDispatchToProps = dispatch => {
  return { onLoadAwards: () => dispatch(actionCreator.API_AWARDS()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Awards);
