import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import ServicesCon from "./partials/ServicesCon";
import LookExpertServices from "./partials/LookingExpertServices";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { getServices } from "./../../services/ServicesService";
class Services extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getServices();
    this.setState({ services: data });
  }
  render() {
    if (typeof this.state.services === `undefined`) return null;
    console.log(this.state.services);
    const {
      hero_banner,
      services_con,
      look_expert_services
    } = this.state.services;
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

export default Services;
