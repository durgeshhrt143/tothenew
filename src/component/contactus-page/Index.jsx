import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import ContactCon from "./partials/ContactCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServiceForm from "./partials/ServiceForm";
import JoinTeamForm from "./partials/JoinTeamForm";
import MediaQueryForm from "./partials/MediaQueryForm";
import { getContact } from "../../services/ContactService";
class ContactUs extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getContact();
    this.setState({ contact_us: data });
  }
  render() {
    if (typeof this.state.contact_us === `undefined`) return null;
    console.log(this.state.contact_us);
    const { hero_banner } = this.state.contact_us;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <section className="query-container">
          <div className="container">
            <Tabs className="columns is-row">
              <TabList className="column is-4 tabs-title">
                <Tab>Request for services</Tab>
                <Tab>Join our team</Tab>
                <Tab>Media queries</Tab>
              </TabList>
              <div className="column is-8 is-right">
                <TabPanel>
                  <h2 className="title">We would love to hear from you</h2>
                  <ServiceForm />
                </TabPanel>
                <TabPanel>
                  <h2 className="title">
                    Be a part of our high performing team
                  </h2>
                  <JoinTeamForm />
                </TabPanel>
                <TabPanel>
                  <h2 className="title">
                    We create a media frenzy across the globe
                  </h2>
                  <MediaQueryForm />
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </section>
        <ContactCon />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default ContactUs;
