import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SolutionCon from "./partials/SolutionCon";
import LookExpertServices from "./partials/LookExpertServices";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import { getSolutions } from "../../services/SolutionsService";
class Solutions extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getSolutions();
    this.setState({ solutions: data });
  }
  render() {
    if (typeof this.state.solutions === `undefined`) return null;
    console.log(this.state.solutions);
    const {
      hero_banner,
      solution_con,
      look_expert_service
    } = this.state.solutions;
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

export default Solutions;
