import React from "react";
import { Link } from "react-router-dom";
const Technologies = props => {
  const { main_title, content, sub_content } = props.technologies;
  return (
    <section className="is-technologies has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <h3>{main_title}</h3>
            <p>{content}</p>
            <p>{sub_content}</p>
            <Link to={`/technologies`} className="btn technologies-btn">
              View All Technologies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
