import React, { Component, Fragment } from "react";
import Form from "../../common/Form";
import Joi from "joi-browser";
import Modal from "./../../common/Model";
class LookExpertServices extends Form {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  state = {
    modalState: false,
    data: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      businessEmail: "",
      message: ""
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
    company: Joi.string()
      .required()
      .label("Company"),
    phone: Joi.string()
      .required()
      .label("Phone"),
    businessEmail: Joi.string()
      .required()
      .label("Business Email"),
    message: Joi.string()
      .required()
      .label("Message")
  };
  toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  };
  render() {
    const { title } = this.props.data;
    return (
      <Fragment>
        <section className="look-expert">
          <div className="container">
            <div className="columns has-text-centered is-column">
              <h1 className="column is-12">{title}</h1>
              <p className="column is-12">
                <a className="btn technologies-btn" onClick={this.toggleModal}>
                  Talk to our Experts!
                </a>
              </p>
            </div>
          </div>
        </section>
        <Modal closeModal={this.toggleModal} modalState={this.state.modalState}>
          <div className="box has-text-centered">
            <div className="columns is-row">
              <h1 className="column is-12 title">Let's Talk</h1>
              <p className="column is-12 content">
                Our solutions expert will contact you to discuss your
                requirements.
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <ul className="columns is-row">
                <li className="column is-6">
                  {this.renderInput("firstName", "First Name")}
                </li>
                <li className="column is-6">
                  {this.renderInput("lastName", "Last Name")}
                </li>
                <li className="column is-6">
                  {this.renderInput("company", "Company")}
                </li>
                <li className="column is-6">
                  {this.renderInput("phone", "Phone")}
                </li>
                <li className="column is-6">
                  {this.renderInput("businessEmail", "Business Email")}
                </li>
                <li className="column is-6">
                  {this.renderInput("message", "Message")}
                </li>
                <li className="column is-12">
                  {this.renderButton("Talk to our Experts!")}
                </li>
              </ul>
            </form>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default LookExpertServices;
