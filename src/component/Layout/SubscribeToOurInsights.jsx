import React, { Fragment } from "react";
import Form from "../common/Form";
import Joi from "joi-browser";
import Modal from "../common/Model";
class SubscribeToOurInsights extends Form {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  state = {
    modalState: false,
    data: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      code: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    businessEmail: Joi.string()
      .required()
      .label("Business Email"),
    code: Joi.string()
      .required()
      .label("What code is in the image?")
  };
  toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  };
  render() {
    return (
      <Fragment>
        <section className="is-our-insights">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <h2 className="is-insights-heading">
                  Subscribe to Our Insights
                </h2>
                <a className="btn big pink" onClick={this.toggleModal}>
                  subscribe now
                </a>
              </div>
              <div className="column is-blog is-5">
                <p className="is-blog-heading">Latest from our blog</p>
                <h4 className="blog-heading">Credit Risk Management</h4>
                <p>
                  Credit Risk Credit risk impacts everyone, including retailers,
                  organizations, startups, banks, finan...
                </p>
                <a className="btn white-btn">View All Blogs</a>
              </div>
            </div>
          </div>
        </section>
        <Modal closeModal={this.toggleModal} modalState={this.state.modalState}>
          <div className="box has-text-centered">
            <div className="columns is-row">
              <h1 className="column is-12 title">Subscribe to Our Insights</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <ul className="columns is-row">
                <li className="column is-6">
                  {this.renderInput("firstName", "First Name")}
                </li>
                <li className="column is-6">
                  {this.renderInput("lastName", "Last Name")}
                </li>
                <li className="column is-12">
                  {this.renderInput("businessEmail", "Business Email")}
                </li>
                <li className="column is-6">
                  {this.renderInput("code", "What code is in the image?")}
                  <p className="msg">
                    Enter the characters shown in the image.
                  </p>
                </li>
                <li className="column is-12">
                  {this.renderButton("Subscribe Now")}
                </li>
              </ul>
            </form>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default SubscribeToOurInsights;
