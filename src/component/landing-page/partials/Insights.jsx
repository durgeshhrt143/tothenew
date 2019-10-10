import React from "react";
import { Link } from "react-router-dom";
const Insights = props => {
  const { main_title, content, items } = props.insights;
  return (
    <section className="is-insights">
      <div className="container">
        <div className="columns is-column has-text-centered">
          <h3 className="column">{main_title}</h3>
          <p className="column">{content}</p>
        </div>
        <ul className="columns is-row">
          {items.map((c, i) => (
            <li className="column is-3" key={i}>
              <div className="is-insights-con">
                <div>
                  <img src={c.img} alt={c.alt} />
                </div>
                <p className="insights-heading">{c.title}</p>
                <p className="insights-content">{c.content}</p>
              </div>
            </li>
          ))}
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
