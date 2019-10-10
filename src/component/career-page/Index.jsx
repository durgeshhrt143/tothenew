import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import JobsCon from "./partials/JobsCon";
import JobsNav from "./../common/JobsNav";
import { getCareer } from "../../services/CareerService";
class Jobs extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getCareer();
    this.setState({ jobs: data });
  }
  render() {
    if (typeof this.state.jobs === `undefined`) return null;
    console.log(this.state.jobs);
    const { hero_banner, jobs_con } = this.state.jobs;
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
export default Jobs;
