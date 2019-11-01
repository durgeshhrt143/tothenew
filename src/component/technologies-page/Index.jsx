import React, { Fragment, Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import TechnologyCon from "./partials/TechnologyCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import LookExpertServices from "./partials/LookExpertServices";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
class Technologies extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadTechnologies();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const {
      hero_banner,
      technology_con,
      look_expert_services
    } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <TechnologyCon data={technology_con} />
        <LookExpertServices data={look_expert_services} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.technologies.data };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadTechnologies: () => dispatch(actionCreator.API_TECHNOLOGIES())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Technologies);
