import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import CsrCon from "./partials/CsrCon";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import { getOurSocialImpact } from "../../services/OurSocialImpactService";
class Csr extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getOurSocialImpact();
    this.setState({ csr: data });
  }
  render() {
    if (typeof this.state.csr === `undefined`) return null;
    console.log(this.state.csr);
    const { hero_banner, csr_con } = this.state.csr;
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <CsrCon data={csr_con} />
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default Csr;
