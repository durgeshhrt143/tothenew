import React, { Fragment, Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import TechnologyCon from "./partials/TechnologyCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import LookExpertServices from "./partials/LookExpertServices";
import { getTechnologies } from "../../services/technologiesService";
class Technologies extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getTechnologies();
    this.setState({ technologies: data });
  }
  render() {
    if (typeof this.state.technologies === `undefined`) return null;
    console.log(this.state.technologies);
    const {
      hero_banner,
      technology_con,
      look_expert_services
    } = this.state.technologies;
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
export default Technologies;
