import React from "react";
import one from "../../../images/300_232.png";
import { Link } from "react-router-dom";
const Insights = props => {
  return (
    <section className="is-insights">
      <div className="container">
        <div className="columns is-column has-text-centered">
          <h3 className="column">Insights</h3>
          <p className="column">Best of industry knowledge for you!</p>
        </div>
        <ul className="columns">
          <li className="column">
            <div className="is-insights-con">
              <div>
                <img src={one} alt="300_232" />
              </div>
              <p className="insights-heading">whitepaper</p>
              <p className="insights-content">
                [NASSCOM Whitepaper Series- I] How Is Digital Transformation
                Reshaping Businesses To Meet The Digital Age? The Customer
                Experience Context!
              </p>
            </div>
          </li>
          <li className="column">
            <div className="is-insights-con">
              <div>
                <img src={one} alt="300_232" />
              </div>
              <p className="insights-heading">whitepaper</p>
              <p className="insights-content">
                [NASSCOM Whitepaper Series- I] How Is Digital Transformation
                Reshaping Businesses To Meet The Digital Age? The Customer
                Experience Context!
              </p>
            </div>
          </li>
          <li className="column">
            <div className="is-insights-con">
              <div>
                <img src={one} alt="300_232" />
              </div>
              <p className="insights-heading">whitepaper</p>
              <p className="insights-content">
                [NASSCOM Whitepaper Series- I] How Is Digital Transformation
                Reshaping Businesses To Meet The Digital Age? The Customer
                Experience Context!
              </p>
            </div>
          </li>
          <li className="column">
            <div className="is-insights-con">
              <div>
                <img src={one} alt="300_232" />
              </div>
              <p className="insights-heading">whitepaper</p>
              <p className="insights-content">
                [NASSCOM Whitepaper Series- I] How Is Digital Transformation
                Reshaping Businesses To Meet The Digital Age? The Customer
                Experience Context!
              </p>
            </div>
          </li>
        </ul>
        <div className="columns">
          <div className="column has-text-centered">
            <Link to={`/insights`} className="btn white-btn">
              Get More Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
