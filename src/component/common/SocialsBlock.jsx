import React from "react";
import { NavLink } from "react-router-dom";
const SocialsBlock = props => {
  return (
    <section className="press-container has-text-centered">
      <div className="container">
        <ul className="columns">
          <li className="column">
            <NavLink to={`/press-releases`}>Press Releases</NavLink>
          </li>
          <li className="column">
            <NavLink to={`/events`}>Events</NavLink>
          </li>
          <li className="column">
            <NavLink to={`/media-coverage`}>Media Coverage</NavLink>
          </li>
          <li className="column">
            <NavLink to={`/awards`}>Awards</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SocialsBlock;
