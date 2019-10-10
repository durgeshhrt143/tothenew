import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import PrivacyCon from "./partials/privacyCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { getPrivacyPolicy } from "../../services/PrivacyPolicyService";
class PrivacyPolicy extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getPrivacyPolicy();
    this.setState({ privacy_policy: data });
  }
  render() {
    console.log(this.state.privacy_policy);
    if (typeof this.state.privacy_policy === `undefined`) return null;
    const {
      Hero_banner,
      privacy_con,
      your_information
    } = this.state.privacy_policy;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={Hero_banner} />
        <PrivacyCon data={privacy_con} your_information={your_information} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default PrivacyPolicy;
