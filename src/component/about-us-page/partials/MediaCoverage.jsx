import React from "react";
import { Link } from "react-router-dom";
const MediaCoverage = props => {
  const { main_title, items } = props.events;
  const { main_title: t2, items: Items } = props.media_coverage;

  return (
    <section className="coverage-container">
      <div className="container wrap">
        <div className="columns is-row">
          <div className="column is-6">
            <h3 className="title">{main_title}</h3>
            <ul>
              {items.map((c, i) => (
                <li key={c + i}>
                  <h3 className="sub-title">{c.title}</h3>
                  <p className="content">{c.content}</p>
                </li>
              ))}

              <li>
                <Link to={`/`} className="btn white-btn">
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div className="column is-6">
            <h3 className="title">{t2}</h3>
            <ul>
              {Items.map((c, i) => (
                <li key={i + c}>
                  <h3 className="sub-title">{c.title}</h3>
                  <p className="content">{c.content}</p>
                </li>
              ))}

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
