import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import MediaCoverageCon from "./partials/MediaCoverageCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { getMediaCoverage } from "../../services/MediaCoverageService";
class MediaCoverage extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getMediaCoverage();
    this.setState({ media_coverage: data });
  }
  render() {
    if (typeof this.state.media_coverage === `undefined`) return null;
    console.log(this.state.media_coverage);
    const { hero_banner, media_coverage_con } = this.state.media_coverage;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <MediaCoverageCon data={media_coverage_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default MediaCoverage;
