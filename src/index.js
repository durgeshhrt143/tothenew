import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import homeReducer from "./store/reducers/home";
import servicesReducer from "./store/reducers/services";
import industriesReducer from "./store/reducers/industries";
import solutionsReducer from "./store/reducers/solutions";
import technologiesReducer from "./store/reducers/technologies";
import successStoriesReducer from "./store/reducers/success_stories";
import insightsReducer from "./store/reducers/insights";
import careerReducer from "./store/reducers/career";
import contactReducer from "./store/reducers/contact_us";
import aboutReducer from "./store/reducers/about_us";
import leadershipReducer from "./store/reducers/leadership";
import partnershipReducer from "./store/reducers/partnership";
import press_releasesReducer from "./store/reducers/press_releases";
import eventsReducer from "./store/reducers/events";
import media_coverageReducer from "./store/reducers/media_coverage";
import awardsReducer from "./store/reducers/awards";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./containers/App";
import logger from "redux-logger";
import * as serviceWorker from "./serviceWorker";
import "bulma/css/bulma.css";
const rootReducer = combineReducers({
  home: homeReducer,
  services: servicesReducer,
  industries: industriesReducer,
  solutions: solutionsReducer,
  technologies: technologiesReducer,
  success_stories: successStoriesReducer,
  insights: insightsReducer,
  career: careerReducer,
  contact: contactReducer,
  about: aboutReducer,
  leadership: leadershipReducer,
  partnership: partnershipReducer,
  press_releases: press_releasesReducer,
  events: eventsReducer,
  media_coverage: media_coverageReducer,
  awards: awardsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
