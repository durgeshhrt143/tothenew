import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import MediaCoverageCon from "./partials/MediaCoverageCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { getMediaCoverage } from "../../services/MediaCoverageService";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
class MediaCoverage extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadMediaCoverage();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, media_coverage_con } = this.props.data;
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
const mapStateToProps = state => {
  return {
    data: state.media_coverage.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadMediaCoverage: () => dispatch(actionCreator.API_MEDIA_COVERAGE())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaCoverage);
