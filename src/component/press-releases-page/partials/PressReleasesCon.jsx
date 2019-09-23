import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const PressReleasesCon = props => {
  return (
    <Fragment>
      <section className="press-container has-text-centered">
        <div className="container">
          <ul className="columns">
            <li className="column">
              <Link to={`/`}>Press Releases</Link>
            </li>
            <li className="column">
              <Link to={`/`}>Events</Link>
            </li>
            <li className="column">
              <Link to={`/`}>Media Coverage</Link>
            </li>
            <li className="column">
              <Link to={`/`}>Awards</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="press-content-container">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-4">
              <div className="box">
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
          </ul>
          <div className="columns has-text-centered">
            <p className="column">
              <Link to={`/`} className="btn white-btn">
                Load More
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PressReleasesCon;
