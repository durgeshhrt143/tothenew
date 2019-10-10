import React from "react";
import { NavLink } from "react-router-dom";
const JobsNav = props => {
  return (
    <section className="job-nav-container has-text-centered">
      <div className="container">
        <ul className="columns is-row">
          <li className="column">
            <NavLink to={`/jobs`}>Join us</NavLink>
          </li>
          <li className="column">
            <NavLink to={`/job-newers-world`}>Newers World</NavLink>
          </li>
          <li className="column">
            <NavLink to={`/job-campus`}>Campus</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default JobsNav;
