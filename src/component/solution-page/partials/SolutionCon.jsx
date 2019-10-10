import React from "react";
import Img from "../../../images/ott-platform-development.png";
const SolutionCon = props => {
  const { haw, main_content, main_title, mfr, opc, opd, myc } = props.data;
  return (
    <section className="solution-con">
      <div className="container">
        <div className="columns is-column">
          <h1 className="column is-12 has-text-centered">{main_title}</h1>
          <p className="column is-12 has-text-centered">{main_content}</p>
          <div className="column solution">
            <ul className="columns is-row dotted-border">
              <li className="column has-text-right solutions-item is-6">
                <h3>{opd.title}</h3>
                <p>{opd.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column is-6">
                <img src={opd.img} alt={opd.alt} />
              </li>
              <li className="column is-6">
                <img src={mfr.img} alt={mfr.alt} />
              </li>
              <li className="column has-text-left solutions-item is-6">
                <h3>{mfr.title}</h3>
                <p>{mfr.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column has-text-right solutions-item is-6">
                <h3>{opc.title}</h3>
                <p>{opc.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column is-6">
                <img src={opc.img} alt={opc.alt} />
              </li>
              <li className="column is-6">
                <img src={myc.img} alt={myc.alt} />
              </li>
              <li className="column has-text-left solutions-item is-6">
                <h3>{myc.title}</h3>
                <p>{myc.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>

              <li className="column has-text-right solutions-item is-6">
                <h3>{haw.title}</h3>
                <p>{haw.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column is-6">
                <img src={haw.img} alt={haw.alt} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCon;
