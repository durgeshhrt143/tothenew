import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import InsightsCon from "./../insights-page/partials/InsightsCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
class Insights extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadInsights();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, insights_con } = this.props.data;
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
const mapStateToProps = state => {
  return { data: state.insights.data };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadInsights: () => dispatch(actionCreator.API_INSIGHTS())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Insights);
