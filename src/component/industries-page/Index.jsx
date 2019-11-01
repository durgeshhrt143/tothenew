import React, { Fragment, Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import IndustryCon from "./partials/IndustryCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { getIndustries } from "./../../services/IndustriesService";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";
class Industries extends Component {
  constructor(props) {
    super(props);
    // this.props.onLoadIndustries();
  }
  state = {};

  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { industry_con, hero_banner } = this.props.data;
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
const mapStateToProps = state => {
  return {
    data: state.industries.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadIndustries: dispatch(actionCreater.API_INDUSTRIES())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Industries);
