import React from "react";
import { Link } from "react-router-dom";
const SuccessStories = props => {
  const { content, img1, img2, img3, img4, main_title } = props.success_stories;
  return (
    <section className="is-success-stories">
      <div className="columns is-column">
        <h3 className="column is-12">{main_title}</h3>
        <p className="column is-12">{content}</p>
        <div className="column is-12">
          <div className="columns is-row">
            <div className="column is-4">
              <img
                src={img1.img1}
                alt={img1.alt}
                style={{ minHeight: "535px" }}
              />
            </div>
            <div className="column is-8">
              <div className="columns is-row">
                <div className="column is-6">
                  <img src={img2.img2} alt={img2.alt} />
                </div>
                <div className="column is-6">
                  <img src={img3.img3} alt={img3.alt} />
                </div>
                <div className="column is-12">
                  <img src={img4.img4} alt={img4.alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Link to={`/success-stories`} className="btn white-btn">
            Read All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
