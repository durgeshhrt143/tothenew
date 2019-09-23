import React from "react";
import insights from "../../../images/insights.jpg";
const InsightsCon = props => {
  return (
    <section className="insights-cantainer">
      <div className="container">
        <ul className="columns is-row">
          <li className="column is-3">
            <div className="box">
              <img src={insights} alt="insights" />
              <p className="insights-title">Whitepaper</p>
              <p className="insights-con">
                Core Elements of Continuous Testing
              </p>
            </div>
          </li>
          <li className="column is-3">
            <div className="box">
              <img src={insights} alt="insights" />
              <p className="insights-title">Whitepaper</p>
              <p className="insights-con">
                Core Elements of Continuous Testing
              </p>
            </div>
          </li>
          <li className="column is-3">
            <div className="box">
              <img src={insights} alt="insights" />
              <p className="insights-title">Whitepaper</p>
              <p className="insights-con">
                Core Elements of Continuous Testing
              </p>
            </div>
          </li>
          <li className="column is-3">
            <div className="box">
              <img src={insights} alt="insights" />
              <p className="insights-title">Whitepaper</p>
              <p className="insights-con">
                Core Elements of Continuous Testing
              </p>
            </div>
          </li>
          <li className="column is-3">
            <div className="box">
              <img src={insights} alt="insights" />
              <p className="insights-title">Whitepaper</p>
              <p className="insights-con">
                Core Elements of Continuous Testing
              </p>
            </div>
          </li>
          <li className="column is-3">
            <div className="box">
              <img src={insights} alt="insights" />
              <p className="insights-title">Whitepaper</p>
              <p className="insights-con">
                Core Elements of Continuous Testing
              </p>
            </div>
          </li>
        </ul>
        <div className="columns has-text-centered">
          <div className="column">
            <a className="btn white-btn">Load More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsCon;
