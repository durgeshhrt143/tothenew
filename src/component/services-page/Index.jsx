import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import ServicesCon from "./partials/ServicesCon";
import LookExpertServices from "./partials/LookingExpertServices";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";
class Services extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadServices();
  }
  state = {};
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, services_con, look_expert_services } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <ServicesCon data={services_con} />
        <LookExpertServices data={look_expert_services} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProp = state => {
  return { data: state.services.data };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadServices: () => dispatch(actionCreater.API_SERVICE())
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Services);
