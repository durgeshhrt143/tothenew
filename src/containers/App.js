import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../component/landing-page/Index";
import Services from "./../component/services-page/Index";
import Solutions from "./../component/solution-page/Index";

import "../css/App.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Route path={`/`} exact component={Home} />
        <Route path={`/services`} component={Services} />
        <Route path={`/solutions`} component={Solutions} />
      </BrowserRouter>
    );
  }
}

export default App;
