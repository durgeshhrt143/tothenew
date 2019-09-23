import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const MediaCoverageCon = props => {
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
      <section className="press-content-container awards-con">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-4">
              <div className="box">
                <figure className="has-text-centered">
                  <img
                    src={`http://static1.tothenew.com/sites/default/files/styles/news_media/public/2019-07/GPTW_ET_PNG_1_3.png?itok=tqyN_51l`}
                    alt=""
                  />
                </figure>
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <figure className="has-text-centered">
                  <img
                    src={`http://static1.tothenew.com/sites/default/files/styles/news_media/public/2019-07/GPTW_ET_PNG_1_3.png?itok=tqyN_51l`}
                    alt=""
                  />
                </figure>
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <figure className="has-text-centered">
                  <img
                    src={`http://static1.tothenew.com/sites/default/files/styles/news_media/public/2019-07/GPTW_ET_PNG_1_3.png?itok=tqyN_51l`}
                    alt=""
                  />
                </figure>
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <figure className="has-text-centered">
                  <img
                    src={`http://static1.tothenew.com/sites/default/files/styles/news_media/public/2019-07/GPTW_ET_PNG_1_3.png?itok=tqyN_51l`}
                    alt=""
                  />
                </figure>
                <p className="content">
                  TO THE NEW Develops ‘Performance Smartboard’ for the Ministry
                  of External Affairs
                </p>
                <span className="date">2019-08-22</span>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <figure className="has-text-centered">
                  <img
                    src={`http://static1.tothenew.com/sites/default/files/styles/news_media/public/2019-07/GPTW_ET_PNG_1_3.png?itok=tqyN_51l`}
                    alt=""
                  />
                </figure>
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

export default MediaCoverageCon;
