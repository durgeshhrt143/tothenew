import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/grils.png";
const TechnologyCon = props => {
  const {
    blo,
    dat,
    web,
    tes,
    dev,
    mo,
    fe,
    be,
    main_content,
    main_title
  } = props.data;
  return (
    <section className="technology-con">
      <div className="container">
        <div className="columns is-row has-text-centered">
          <p className="column is-12 tech-main-con">{main_content}</p>
          <h1 className="column tech-main-title">{main_title}</h1>
        </div>
      </div>
      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <h3 className="tech-title">{be.title}</h3>
              <p className="tech-con">{be.content}</p>
              <p className="tech-offer">
                <span>{be.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {be.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
            <li className="column is-6">
              <ul className="columns is-row">
                {be.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <ul className="columns is-row">
                {fe.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
            <li className="column is-6">
              <h3 className="tech-title">{fe.title}</h3>
              <p className="tech-con">{fe.content}</p>
              <p className="tech-offer">
                <span>{fe.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {fe.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <h3 className="tech-title">{mo.title}</h3>
              <p className="tech-con">{mo.content}</p>
              <p className="tech-offer">
                <span>{mo.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {mo.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    c.content
                  </Link>
                ))}
              </p>
            </li>
            <li className="column is-6">
              <ul className="columns is-row">
                {mo.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <ul className="columns is-row">
                {dev.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
            <li className="column is-6">
              <h3 className="tech-title">{dev.title}</h3>
              <p className="tech-con">{dev.content}</p>
              <p className="tech-offer">
                <span>{dev.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {dev.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <h3 className="tech-title">{tes.title}</h3>
              <p className="tech-con">{tes.content}</p>
              <p className="tech-offer">
                <span>{tes.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {tes.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
            <li className="column is-6">
              <ul className="columns is-row">
                {tes.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <ul className="columns is-row">
                {web.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
            <li className="column is-6">
              <h3 className="tech-title">{web.title}</h3>
              <p className="tech-con">{web.content}</p>
              <p className="tech-offer">
                <span>{web.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {web.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <h3 className="tech-title">{dat.title}</h3>
              <p className="tech-con">{dat.content}</p>
              <p className="tech-offer">
                <span>{dat.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {dat.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
            <li className="column is-6">
              <ul className="columns is-row">
                {dat.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-isfull">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <ul className="columns is-row">
                {blo.img_items.map((c, i) => (
                  <li className="column is-3" key={i + c}>
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            </li>
            <li className="column is-6">
              <h3 className="tech-title">{blo.title}</h3>
              <p className="tech-con">{blo.content}</p>
              <p className="tech-offer">
                <span>{blo.sub_title}</span>
              </p>
              <p className="tech-btn-list">
                {blo.items.map((c, i) => (
                  <Link to="/" className="btn pinkt-btn" key={i + c}>
                    {c.content}
                  </Link>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCon;
