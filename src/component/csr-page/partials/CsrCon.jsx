import React from "react";
const CsrCon = props => {
  const {
    main_title,
    main_content,
    title,
    items,
    csr_initiatives
  } = props.data;
  return (
    <section className="csr-container">
      <div className="overview has-text-centered">
        <div className="container">
          <div className="columns is-row">
            <h1 className="title column is-12">{main_title}</h1>
            <p className="content column is-12">{main_content}</p>
          </div>
        </div>
      </div>
      <div className="efforts">
        <div className="container">
          <div className="columns is-row">
            <h1 className="title column is-12 has-text-centered">{title}</h1>
            <ul className="column is-12">
              {items.map((c, i) => (
                <li className="columns is-row v-align is-gapless" key={i + c}>
                  <figure className="column is-3">
                    <img src={c.img} alt={c.alt} />
                  </figure>
                  <div className="column is-9 shadow">
                    <div className="box">
                      <h2 className="sub-title">{c.title}</h2>
                      <p className="content">{c.content1}</p>
                      <p className="content">{c.content2}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="CSR-initiatives-con has-text-centered">
        <div className="container inner">
          <div className="columns is-row">
            <h1 className="title column is-12">{csr_initiatives.main_title}</h1>
            <ul className="columns is-row">
              {csr_initiatives.items.map((c, i) => (
                <li className="column is-4" key={c + i}>
                  <div className="con">
                    <figure style={{ height: "167px", overflow: "hidden" }}>
                      <img src={c.img} alt={c.alt} />
                    </figure>
                    <div className="box">
                      <h3 className="sub-title">{c.title}</h3>
                      <p className="content">{c.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="testimonials has-text-centered">
        <div className="container inner">
          <ul className="columns is-row">
            <li className="column is-12">
              <p className="content">
                "Somebody once asked me what made me happy. I realized it was
                other people's smiling faces that brought me true happiness."
              </p>
              <span>
                -Naman Goel, Quality Engineer
                <br />
                (Volunteer, Team Pahal)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CsrCon;
