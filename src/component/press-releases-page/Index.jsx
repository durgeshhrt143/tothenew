import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import HeroBanner from "./../common/HeroBanner";
import PressReleasesCon from "./partials/PressReleasesCon";
import { getPressReleasesService } from "../../services/PressReleasesService";
class PressReleases extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getPressReleasesService();
    this.setState({ press_releases: data });
  }
  render() {
    if (typeof this.state.press_releases === `undefined`) return null;
    console.log(this.state.press_releases);
    const { hero_banner, press_releases_con } = this.state.press_releases;
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
export default PressReleases;
