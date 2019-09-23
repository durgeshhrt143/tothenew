import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../component/landing-page/Index";
import Services from "./../component/services-page/Index";
import Solutions from "./../component/solution-page/Index";
import Industries from "./../component/industries-page/Index";
import Technologies from "./../component/technologies-page/Index";
import SuccessStories from "./../component/success-stories-page/Index";
import Insights from "./../component/insights-page/Index";
import ContactUs from "./../component/contactus-page/Index";
import Jobs from "./../component/career-page/Index";
import AboutUs from "./../component/about-us-page/Index";
import Leadership from "./../component/leadership-page/Index";
import Partnership from "./../component/partnership-page/Index";
import PressReleases from "./../component/press-releases-page/Index";
import Awards from "./../component/awards-page/Index";
import MediaCoverage from "./../component/media-coverage-page/Index";
import Events from "./../component/events-page/Index";
import Csr from "./../component/csr-page/Index";
import PrivacyPolicy from "./../component/privacy-policy-page/Index";
import Blog from "./../component/blog-page/Index";
import "../css/App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path={`/`} exact component={Home} />
        <Route path={`/services`} component={Services} />
        <Route path={`/solutions`} component={Solutions} />
        <Route path={`/industries`} component={Industries} />
        <Route path={`/technologies`} component={Technologies} />
        <Route path={`/success-stories`} component={SuccessStories} />
        <Route path={`/insights`} component={Insights} />
        <Route path={`/contact-us`} component={ContactUs} />
        <Route path={`/jobs`} component={Jobs} />
        <Route path={`/about-us`} component={AboutUs} />
        <Route path={`/leadership`} component={Leadership} />
        <Route path={`/partnership`} component={Partnership} />
        <Route path={`/press-releases`} component={PressReleases} />
        <Route path={`/awards`} component={Awards} />
        <Route path={`/media-coverage`} component={MediaCoverage} />
        <Route path={`/events`} component={Events} />
        <Route path={`/our-social-impact`} component={Csr} />
        <Route path={`/privacy-policy`} component={PrivacyPolicy} />
        <Route path={`/blog`} component={Blog} />
      </BrowserRouter>
    );
  }
}

export default App;
