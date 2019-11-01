import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import HeroBanner from "./../common/HeroBanner";
import PressReleasesCon from "./partials/PressReleasesCon";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
class PressReleases extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadPressReleases();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, press_releases_con } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <PressReleasesCon data={press_releases_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.press_releases.data };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPressReleases: () => dispatch(actionCreator.API_PRESSRELEASES())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PressReleases);
