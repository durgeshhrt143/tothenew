import React from "react";
import { Link } from "react-router-dom";
const MediaCoverage = props => {
  return (
    <section className="coverage-container">
      <div className="container wrap">
        <div className="columns is-row">
          <div className="column is-6">
            <h3 className="title">Events</h3>
            <ul>
              <li>
                <h3 className="sub-title">10/July/2019</h3>
                <p className="content">TO THE NEW Sponsors the 4th Annual…</p>
              </li>
              <li>
                <h3 className="sub-title">10/July/2019</h3>
                <p className="content">TO THE NEW Sponsors the 4th Annual…</p>
              </li>
              <li>
                <h3 className="sub-title">10/July/2019</h3>
                <p className="content">TO THE NEW Sponsors the 4th Annual…</p>
              </li>
              <li>
                <Link to={`/`} className="btn white-btn">
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div className="column is-6">
            <h3 className="title">Media Coverage</h3>
            <ul>
              <li>
                <h3 className="sub-title">10/July/2019</h3>
                <p className="content">TO THE NEW Sponsors the 4th Annual…</p>
              </li>
              <li>
                <h3 className="sub-title">10/July/2019</h3>
                <p className="content">TO THE NEW Sponsors the 4th Annual…</p>
              </li>
              <li>
                <h3 className="sub-title">10/July/2019</h3>
                <p className="content">TO THE NEW Sponsors the 4th Annual…</p>
              </li>
              <li>
                <Link to={`/`} className="btn white-btn">
                  View All
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
