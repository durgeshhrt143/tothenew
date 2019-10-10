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
import { getHome } from "./../../services/HomeService";
class Home extends Component {
  scrollSliderHandler = () => {
    window.scrollTo(0, window.innerHeight);
  };
  state = {};
  async componentDidMount() {
    const { data } = await getHome();
    this.setState({ home: data });
  }
  render() {
    if (typeof this.state.home === `undefined`) return null;
    console.log(this.state.home);
    const {
      slider_arr,
      slider_below,
      technologies,
      success_stories,
      insights
    } = this.state.home;
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

export default Home;
