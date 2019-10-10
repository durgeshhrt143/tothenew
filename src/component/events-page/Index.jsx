import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import EventsCon from "./partials/EventsCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { getEvents } from "../../services/EventsService";
class Events extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getEvents();
    this.setState({ events: data });
  }
  render() {
    if (typeof this.state.events === `undefined`) return null;
    console.log(this.state.events);
    const { hero_banner, events_con } = this.state.events;
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
export default Events;
