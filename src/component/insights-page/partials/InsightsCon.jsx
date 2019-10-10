import React, { Fragment } from "react";
import insights from "../../../images/insights.jpg";
const InsightsCon = props => {
  const { items } = props.data;
  console.log(items);
  return (
    <Fragment>
      <section className="dropdown-container">
        <div className="container">
          <ul className="columns">
            <li className="column title">Services</li>
            <li className="column title">Technologies</li>
            <li className="column title">Resource Type</li>
          </ul>
        </div>
      </section>
      <section className="insights-cantainer">
        <div className="container">
          <ul className="columns is-row">
            {items.map((c, i) => (
              <li className="column is-3" key={i + c}>
                <div className="box">
                  <img src={c.img} alt={c.alt} />
                  <p className="insights-title">{c.title}</p>
                  <p className="insights-con">{c.content}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="columns has-text-centered">
            <div className="column">
              <a className="btn white-btn">Load More</a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InsightsCon;
