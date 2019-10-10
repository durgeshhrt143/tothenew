import React from "react";
const IndustryCon = props => {
  const {
    c_i,
    e_commerce,
    f_s,
    i_s_v,
    m_e,
    main_content,
    main_title,
    travel
  } = props.data;
  console.log(props);
  return (
    <section className="solution-con">
      <div className="container">
        <div className="columns is-column">
          <h1 className="column is-12 has-text-centered">{main_title}</h1>
          <p className="column is-12 has-text-centered">{main_content}</p>
          <div className="column solution">
            <ul className="columns is-row dotted-border">
              <li className="column has-text-right solutions-item is-6">
                <h3>{i_s_v.title}</h3>
                <p>{i_s_v.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column is-6">
                <img src={i_s_v.img} alt={i_s_v.alt} />
              </li>
              <li className="column is-6">
                <img src={m_e.img} alt={m_e.img} />
              </li>
              <li className="column has-text-left solutions-item is-6">
                <h3>{m_e.title}</h3>
                <p>{m_e.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column has-text-right solutions-item is-6">
                <h3>{f_s.title}</h3>
                <p>{f_s.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column is-6">
                <img src={f_s.img} alt={f_s.alt} />
              </li>
              <li className="column is-6">
                <img src={c_i.img} alt={c_i.alt} />
              </li>
              <li className="column has-text-left solutions-item is-6">
                <h3>{c_i.title}</h3>
                <p>{c_i.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column has-text-right solutions-item is-6">
                <h3>{travel.title}</h3>
                <p>{travel.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column is-6">
                <img src={travel.img} alt={travel.alt} />
              </li>
              <li className="column is-6">
                <img src={e_commerce.img} alt={e_commerce.alt} />
              </li>
              <li className="column has-text-left solutions-item is-6">
                <h3>{e_commerce.title}</h3>
                <p>{e_commerce.content}</p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCon;
