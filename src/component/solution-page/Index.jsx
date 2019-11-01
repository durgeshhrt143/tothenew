import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SolutionCon from "./partials/SolutionCon";
import LookExpertServices from "./partials/LookExpertServices";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
// import { getSolutions } from "../../services/SolutionsService";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";
class Solutions extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadSolutions();
  }

  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, solution_con, look_expert_service } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <SolutionCon data={solution_con} />
        <LookExpertServices data={look_expert_service} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.solutions.data };
};
const mapDispatchToProps = dispatch => {
  return { onLoadSolutions: () => dispatch(actionCreater.API_SOLUTIONS()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Solutions);
