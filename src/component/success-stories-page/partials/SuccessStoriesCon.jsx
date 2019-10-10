import React, { Fragment, Component } from "react";
class SuccessStoriesCon extends Component {
  state = {
    data: [],
    count: 6,
    click: 0
  };
  componentDidMount(props, state) {
    const items = this.props.data.slice(0, this.state.count);
    this.setState({ data: items });
  }
  incrementHandler = () => {
    let { count, click } = this.state;
    click++;
    count += 6;
    this.setState({ count });
  };
  componentDidUpdate(props, state) {
    if (state.count !== this.state.count) {
      const items = this.props.data.slice(0, this.state.count);
      this.setState({ data: items });
    }
  }
  render() {
    const { data: items, count } = this.state;
    return (
      <Fragment>
        <section className="dropdown-container">
          <div className="container">
            <ul className="columns">
              <li className="column title">Services</li>
              <li className="column title">Technologies</li>
            </ul>
          </div>
        </section>
        <section className="success-container">
          <div className="container">
            <ul className="columns is-row">
              {items.map((c, i) => (
                <li className="column is-4" key={i + c}>
                  <div className="box">
                    <div className="columns is-column">
                      <div className="column data-img">
                        <img src={c.main_img} alt="main_img" />
                        <span className="data-thumbs">
                          <img src={c.thumb} alt="thumbs" />
                        </span>
                      </div>
                      <div className="column">
                        <div className="text-con">
                          <p className="data-con">{c.content}</p>
                          <p className="data-tags">{c.tags}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {count <= items.length && (
              <div className="columns has-text-centered">
                <div className="column">
                  <a className="btn white-btn" onClick={this.incrementHandler}>
                    Load More
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}
export default SuccessStoriesCon;
