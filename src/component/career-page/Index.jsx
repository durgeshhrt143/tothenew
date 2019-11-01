import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import JobsCon from "./partials/JobsCon";
import JobsNav from "./../common/JobsNav";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
class Jobs extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadCareer();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, jobs_con } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <JobsNav />
        <JobsCon data={jobs_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.career.data };
};
const mapDispatchToProps = dispatch => {
  return { onLoadCareer: () => dispatch(actionCreator.API_CAREER()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);
