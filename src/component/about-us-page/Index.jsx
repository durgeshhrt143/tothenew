import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import OursPartner from "./partials/OursPartner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import OurClients from "./../common/OurClients";
import WhoWeAre from "./partials/WhoWeAre";
import MediaCoverage from "./partials/MediaCoverage";
import { getAbout } from "../../services/AboutService";
class AboutUs extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getAbout();
    this.setState({ about_us: data });
  }
  render() {
    if (typeof this.state.about_us === `undefined`) return null;
    console.log(this.state.about_us);
    const {
      hero_banner,
      who_we_are,
      what_do_we_stand_for,
      our_partners,
      events,
      media_coverage
    } = this.state.about_us;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <WhoWeAre
          who_we_are={who_we_are}
          what_do_we_stand_for={what_do_we_stand_for}
        />
        <OursPartner data={our_partners} />
        <MediaCoverage events={events} media_coverage={media_coverage} />
        <OurClients />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default AboutUs;
