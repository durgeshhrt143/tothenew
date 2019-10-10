import React, { Fragment, Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import HeroBanner from "./../common/HeroBanner";
import SubscribeToOurInsights from "./../Layout/SubscribeToOurInsights";
import JobsNav from "../common/JobsNav";
import { Link } from "react-router-dom";
import { getJobNewersWorld } from "../../services/JobsNewWorldService";
class NewersWorld extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  state = {
    scrolly: false
  };
  async componentDidMount() {
    const { data } = await getJobNewersWorld();
    this.setState({ newers_world: data });
    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll = () => {
    if (window.scrollY >= 430 && window.screenY <= 700) {
      this.setState({ scrolly: true });
    } else {
      this.setState({ scrolly: false });
    }
  };
  render() {
    if (typeof this.state.newers_world === `undefined`) return null;
    console.log(this.state.newers_world);
    const { hero_banner, newers_con } = this.state.newers_world;
    const { main_title, items } = this.state.newers_world.newers_con.learning;
    const { growth } = this.state.newers_world.newers_con;
    const { fun } = this.state.newers_world.newers_con;
    const classes = this.state.scrolly
      ? "newers-conatiner active"
      : "newers-conatiner";
    return (
      <Fragment>
        <Header />
        <HeroBanner data={hero_banner} />
        <JobsNav />
        <main className={classes}>
          <section className="jobs-new-world has-text-centered">
            <div className="container">
              <div className="columns is-row">
                <p className="column is-12 main-content">
                  {newers_con.mainContent}
                </p>
              </div>
              <ul className="columns learnings is-row">
                <li className="column learning is-4">Learning</li>
                <li className="column growth is-4">Growth</li>
                <li className="column fun is-4">Fun</li>
              </ul>
            </div>
          </section>
          <section className="campus-for-you has-text-centered">
            <div className="container">
              <h1 className="main-title">{main_title}</h1>
              <ul className="columns is-row">
                {items.map((c, i) => (
                  <li className="column is-3" key={c + i}>
                    <div className="li-wraper">
                      <img src={c.img} alt={c.alt} />
                      <h3 className="title">{c.title}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="jobs-growth has-text-centered">
            <div className="container">
              <div className="columns is-row">
                <h1 className="main-title is-12 column">{growth.main_title}</h1>
                <p className="main-content is-12 column">
                  {growth.main_content}
                </p>
              </div>
              <ul className="columns is-row">
                {growth.items.map((c, i) => (
                  <li className="column is-4" key={i + c}>
                    <div className="box">
                      <img src={c.img} alt="abc" />
                      <div className="box">
                        <p className="content">{c.content}</p>
                        <h3 className="title">{c.title}</h3>
                        <p className="content">{c.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="columns">
                <div className="column">
                  <Link to={`/jobs`} className="btn white-btn">
                    View Current Openings
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="funtothenew-container has-text-centered">
            <div className="container">
              <div className="columns is-row">
                <h1 className="column is-12 title">{fun.main_title}</h1>
                <p className="column is-12 content">{fun.main_content}</p>
              </div>
              <ul className="columns is-row">
                <li className="is-4 column">
                  <img src={fun.img1} alt="abc" />
                </li>
                <li className="is-4 column">
                  <img src={fun.img2} alt="abc" />
                </li>
                <li className="is-4 column">
                  <img src={fun.img3} alt="abc" />
                </li>
                <li className="is-8 column">
                  <img src={fun.img4} alt="abc" />
                </li>
                <li className="is-4 column">
                  <ul className="columns is-row">
                    <li className="column is-12">
                      <img src={fun.img5} alt="abc" />
                    </li>
                    <li className="column is-12">
                      <img src={fun.img6} alt="abc" />
                    </li>
                  </ul>
                </li>
                <li className="is-4 column">
                  <img src={fun.img7} alt="abc" />
                </li>
                <li className="is-4 column">
                  <img src={fun.img8} alt="abc" />
                </li>
                <li className="is-4 column">
                  <img src={fun.img9} alt="abc" />
                </li>
              </ul>
            </div>
          </section>
        </main>
        <SubscribeToOurInsights />
        <Footer />
      </Fragment>
    );
  }
}
export default NewersWorld;
