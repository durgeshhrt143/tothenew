import React, { Component, Fragment } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Slider from "../landing-page/partials/Slider";
import SliderBelow from "./partials/SliderBelow";
import Technologies from "./partials/Technologies";
import SuccessStories from "./partials/SuccessStories";
import Insights from "./partials/Insights";
import OurClients from "./../common/OurClients";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import img from "../../images/arrow-down.png";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadHome();
  }
  scrollSliderHandler = () => {
    window.scrollTo(0, window.innerHeight);
  };

  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const {
      slider_arr,
      slider_below,
      technologies,
      success_stories,
      insights
    } = this.props.data;
    return (
      <Fragment>
        <div className="parent">
          <Header />
          <div className className="wrapper-container">
            <Slider sliders={slider_arr} />
            <span className="scrollV" onClick={this.scrollSliderHandler}>
              <img src={img} alt="abc" />
            </span>
          </div>
          <SliderBelow content={slider_below} />
          <Technologies technologies={technologies} />
          <SuccessStories success_stories={success_stories} />
          <Insights insights={insights} />
          <OurClients />
          <SubscribeToOurInsights />
          <Footer />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProp = state => {
  return { data: state.home.data };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadHome: () => dispatch(actionCreater.API_HOME())
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Home);
