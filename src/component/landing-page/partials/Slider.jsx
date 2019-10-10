import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
class Slider extends Component {
  render() {
    const { sliders } = this.props;
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        {sliders.map((s, index) => (
          <div className="slider-main" key={index}>
            <div className="slider-con">
              <div className="has-text-left">
                <h3>{s.main_title}</h3>
                <h2>{s.sub_title}</h2>
                <p>
                  <Link to={`/`} className="btn know-btn">
                    {s.know_more}
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg">
              <img src={s.img} alt={s.alt} />
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Slider;
