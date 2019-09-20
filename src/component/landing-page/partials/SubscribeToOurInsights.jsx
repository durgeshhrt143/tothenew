import React from "react";
const SubscribeToOurInsights = props => {
  return (
    <section className="is-our-insights">
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <h2 className="is-insights-heading">Subscribe to Our Insights</h2>
            <a className="btn big pink">subscribe now</a>
          </div>
          <div className="column is-blog is-5">
            <p className="is-blog-heading">Latest from our blog</p>
            <h4 className="blog-heading">Credit Risk Management</h4>
            <p>
              Credit Risk Credit risk impacts everyone, including retailers,
              organizations, startups, banks, finan...
            </p>
            <a className="btn white-btn">View All Blogs</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeToOurInsights;
