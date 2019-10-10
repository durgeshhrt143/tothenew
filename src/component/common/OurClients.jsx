import React, { Component } from "react";
import { getOurClients } from "../../services/OurClientsService";
class OurClients extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await getOurClients();
    this.setState({ clients: data });
  }
  render() {
    if (typeof this.state.clients === "undefined") return null;
    const { main_title, content, items } = this.state.clients;
    return (
      <section className="is-our-client">
        <div className="container">
          <div className="columns is-column">
            <div className="column is-12">
              <h3 className="has-text-centered">{main_title}</h3>
              <p className="has-text-centered">{content}</p>
            </div>
            <div className="column is-12">
              <ul className="columns is-row">
                {items.map((c, i) => (
                  <li className="column is-2" key={i}>
                    <img src={c.img} alt={c.alt} title={c.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurClients;
