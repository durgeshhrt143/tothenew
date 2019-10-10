import React from "react";
const WhoWeAre = props => {
  const { main_title, main_content, img } = props.who_we_are;
  const { main_title: t2, items } = props.what_do_we_stand_for;
  return (
    <section className="Who-we-Container">
      <div className="container">
        <div className="columns is-row">
          <h3 className="column is-12 title">{main_title}</h3>
          <div className="className column is-12">
            <img
              style={{ float: "right", paddingLeft: "20px" }}
              src={img}
              alt={`abc`}
            />
            <p className="content">{main_content}</p>
          </div>

          <h3 className="column is-12 title">{t2}</h3>
        </div>
        <ul className="columns is-row">
          {items.map((c, i) => (
            <li className="column is-6" key={c + i}>
              <div className="columns is-row">
                <figure className="column is-2">
                  <img src={c.img} alt={c.alt} />
                </figure>
                <div className="column is-10">
                  <h3 className="sub-title">{c.title}</h3>
                  <p className="sub-content">{c.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoWeAre;
