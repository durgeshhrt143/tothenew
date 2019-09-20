import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AWS from "../../../images/AWS_HPB_2.png";
import slider from "../../../images/slider.jpg";
class Slider extends Component {
  state = {};
  render() {
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div className="slider-main">
          <div className="slider-con">
            <div className="has-text-left">
              <h3>
                Proud to be named among India’s Best Companies To Work For
              </h3>
              <h2>
                TO THE NEW is proud to be named in the prestigious “India’s Best
                Companies to Work For - 2019” list by Great Place to Work
                Institute® India
              </h2>
              <p>
                <a className="btn know-btn">Know More</a>
              </p>
            </div>
          </div>
          <div className="bg">
            <img src={AWS} />
          </div>
        </div>
        <div className="slider-main">
          <div className="slider-con">
            <div className="has-text-left">
              <h3>
                Proud to be named among India’s Best Companies To Work For
              </h3>
              <h2>
                TO THE NEW is proud to be named in the prestigious “India’s Best
                Companies to Work For - 2019” list by Great Place to Work
                Institute® India
              </h2>
              <p>
                <a className="btn know-btn">Know More</a>
              </p>
            </div>
          </div>
          <div className="bg">
            <img src={slider} />
          </div>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
