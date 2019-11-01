import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import HeroBanner from "./../common/HeroBanner";
import PartnersCon from "./partials/PartnersCon";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
// import { getPartnership } from "../../services/PartnershipService";
class Partnership extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadPartnership();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, partners_con } = this.props.data;
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
const mapStateToProps = state => {
  return {
    data: state.partnership.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPartnership: () => dispatch(actionCreator.API_PARTNERSHIP())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Partnership);
