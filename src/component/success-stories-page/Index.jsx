import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SuccessStoriesCon from "./partials/SuccessStoriesCon";
import SubscribeToOurInsights from "../Layout/SubscribeToOurInsights";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
class SuccessStories extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadSuccessStories();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, success_stories_con } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <SuccessStoriesCon data={success_stories_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.success_stories.data };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadSuccessStories: () => dispatch(actionCreator.API_SUCCESS_STORIES())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuccessStories);
