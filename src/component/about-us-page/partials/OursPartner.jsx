import React from "react";
const OursPartner = props => {
  const { main_title, main_content, items } = props.data;
  return (
    <section className="ours-partner">
      <div className="container">
        <div className="columns is-row has-text-centered">
          <h2 className="column is-12 partner-heading">{main_title}</h2>
          <p className="column is-12 partner-content">{main_content}</p>
        </div>
        <ul className="columns is-row">
          {items.map((c, i) => (
            <li className="column is-2" key={i + c}>
              <img src={c.img} alt={c.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OursPartner;
