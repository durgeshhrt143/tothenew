import React from "react";
import Alibaba from "../../../images/Alibaba_Cloud _ Home_Page.jpg";
import westcon from "../../../images/westcon_450_261.jpg";
import warner from "../../../images/warner.jpg";
import matse from "../../../images/matse.jpg";
import { Link } from "react-router-dom";
const SuccessStories = props => {
  return (
    <section className="is-success-stories">
      <div className="columns is-column">
        <h3 className="column is-12">Success Stories</h3>
        <p className="column is-12">
          Trusted by leading brands including Fortune 500 enterprises and
          Silicon Valley startups
        </p>
        <div className="column is-12">
          <div className="columns is-row">
            <div className="column is-4">
              <img src={Alibaba} alt="abc" style={{ minHeight: "535px" }} />
            </div>
            <div className="column is-8">
              <div className="columns is-row">
                <div className="column is-6">
                  <img src={westcon} alt="abc" />
                </div>
                <div className="column is-6">
                  <img src={warner} alt="abc" />
                </div>
                <div className="column is-12">
                  <img src={matse} alt="abc" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Link to={`/success-stories`} className="btn white-btn">
            Read All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
