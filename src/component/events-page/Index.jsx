import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import EventsCon from "./partials/EventsCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/events";
class Events extends Component {
  constructor(props) {
    super(props);
    this.props.onLoadEvents();
  }
  render() {
    if (Object.keys(this.props.data).length === 0) return null;
    console.log(this.props.data);
    const { hero_banner, events_con } = this.props.data;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <EventsCon data={events_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.events.data };
};
const mapDispatchToProps = dispatch => {
  return { onLoadEvents: () => dispatch(actionCreator.fetchData()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
