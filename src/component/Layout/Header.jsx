import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  state = {
    scrolled: false,
    toggle: false
  };
  searchHandler = () => {
    const toggleClass =
      this.state.toggle === false ? !this.state.toggle : false;
    this.setState({ toggle: toggleClass });
  };
  async componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll() {
    const isTop = window.scrollY < 100;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }
  render() {
    return (
      <header className={this.state.scrolled ? "sticky" : ""}>
        <div className={this.state.toggle ? "open-search" : ""}>
          <div className="header one">
            <div className="container">
              <div className="columns align-item">
                <div className="column is-2">
                  <NavLink to={`/`} className="logo logo2">
                    logo
                  </NavLink>
                </div>

                <ul className="column is-9 nav-bar">
                  <li>
                    <NavLink to={`/services`}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/industries`}>Industries</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/solutions`}>Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/technologies`}>Technologies</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/success-stories`}>Success Stories</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/insights`}>insights</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/jobs`}>career</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/contact-us`}>contact us</NavLink>
                  </li>
                </ul>
                <ul className="column is-1 is-search-con">
                  <li className="search" onClick={this.searchHandler}>
                    <a to={`/`}>search</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header two">
            <div className="container">
              <div className="columns align-item">
                <div className="column is-2">
                  <NavLink to={`/`} className="logo">
                    logo
                  </NavLink>
                </div>

                <ul className="column is-9 nav-bar">
                  <li>
                    <NavLink to={`/services`}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/industries`}>Industries</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/solutions`}>Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/technologies`}>Technologies</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/success-stories`}>Success Stories</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/insights`}>insights</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/jobs`}>career</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/contact-us`}>contact us</NavLink>
                  </li>
                </ul>
                <ul className="column is-1 is-search-con">
                  <li className="search" onClick={this.searchHandler}>
                    <a>search</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
