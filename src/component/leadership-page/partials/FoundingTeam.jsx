import React from "react";
const FoundingTeam = props => {
  const { main_title, items } = props.data;
  return (
    <div className="leadership-container">
      <section className="founding-container has-text-centered">
        <div className="container">
          <div className="wrap">
            <div className="columns is-row">
              <h1 className="main-title column is-12">{main_title}</h1>
              <div className="column is-12">
                <ul className="columns is-row is-space-a">
                  {items.map((c, i) => (
                    <li className="box is-4" key={i + c}>
                      <figure>
                        <img src={c.img} alt={c.alt} />
                      </figure>
                      <p className="title">{c.title}</p>
                      <p className="content">{c.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundingTeam;
