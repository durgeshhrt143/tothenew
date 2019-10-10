import React, { Fragment } from "react";
import SocialsBlock from "../../common/SocialsBlock";
import { Link } from "react-router-dom";
const PressReleasesCon = props => {
  const { items } = props.data;
  return (
    <Fragment>
      <SocialsBlock />
      <section className="press-content-container">
        <div className="container">
          <ul className="columns is-row">
            {items.map((c, i) => (
              <li className="column is-4" key={c + i}>
                <div className="box">
                  <p className="content">{c.content}</p>
                  <span className="date">{c.date}</span>
                </div>
              </li>
            ))}
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
