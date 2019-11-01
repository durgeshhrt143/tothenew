import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import OursPartner from "./partials/OursPartner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import OurClients from "./../common/OurClients";
import WhoWeAre from "./partials/WhoWeAre";
import MediaCoverage from "./partials/MediaCoverage";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
import { type } from "os";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadAbout();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const {
      hero_banner,
      who_we_are,
      what_do_we_stand_for,
      our_partners,
      events,
      media_coverage
    } = this.props.data;
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
const mapStateToProps = state => {
  return {
    data: state.about.data
  };
};
const mapDispatchToProps = dispatch => {
  return { onLoadAbout: () => dispatch(actionCreator.API_ABOUT()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);
