import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import JobsNav from "../common/JobsNav";
import JobsCampusCon from "./partials/JobsCampusCon";
import { getCampus } from "../../services/CampusService";
class JobsCampas extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getCampus();
    this.setState({ job_campas: data });
  }
  render() {
    if (typeof this.state.job_campas === `undefined`) return null;
    console.log(this.state.job_campas);
    const { hero_banner, lookig_for, for_you } = this.state.job_campas;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <JobsNav />
        <JobsCampusCon lookig_for={lookig_for} for_you={for_you} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default JobsCampas;
