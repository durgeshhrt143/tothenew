import React, { Fragment } from "react";
const PartnersCon = props => {
  const { main_content, items } = props.data;
  console.log(props);
  return (
    <Fragment>
      <section className="partners-container has-text-centered">
        <div className="container">
          <div className="columns is-row">
            <p className="column content">{main_content}</p>
          </div>
        </div>
      </section>
      <section className="partner has-text-centered">
        <div className="container">
          <ul className="columns is-row">
            {items.map((c, i) => (
              <li className="column is-6" key={c + i}>
                <figure>
                  <img src={c.img} alt={c.alt} />
                </figure>
                <p className="content">{c.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default PartnersCon;
