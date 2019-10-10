import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SocialsBlock from "../../common/SocialsBlock";
const EventsCon = props => {
  const { items } = props.data;
  return (
    <Fragment>
      <SocialsBlock />
      <section className="press-content-container awards-con">
        <div className="container">
          <ul className="columns is-row">
            {items.map((c, i) => (
              <li className="column is-4" key={c + i}>
                <div className="box">
                  <figure className="has-text-centered">
                    <img src={c.img} alt={c.alt} />
                  </figure>
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

export default EventsCon;
