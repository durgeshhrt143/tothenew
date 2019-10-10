import React, { Component } from "react";
import From from "../../common/Form";
import Modal from "../../common/Model";
import Joi from "joi-browser";
class JobsCon extends From {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  state = {
    modalState: false,
    data: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      skill: "",
      location: "",
      upload: "",
      code: ""
    },
    errors: {}
  };
  schema = {
    fullName: Joi.string()
      .required()
      .label("Full Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    phone: Joi.string()
      .required()
      .label("Phone"),
    experience: Joi.string()
      .required()
      .label("Experience"),
    skill: Joi.string()
      .required()
      .label("Skill"),
    location: Joi.string()
      .required()
      .label("Location"),
    upload: Joi.string()
      .required()
      .label("Upload CV"),
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
    const { items } = this.props.data;
    return (
      <main className="jobs-container">
        <section className="job-block">
          <div className="container">
            <ul className="columns is-row">
              {items.map((c, i) => (
                <li className="column is-4" key={i + c}>
                  <div className="box">
                    <h3 className="job-title">{c.title}</h3>
                    <p className="job-con">{c.year}</p>
                    <p className="job-con">{c.place}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="columns has-text-centered">
              <div className="column">
                <a className="btn white-btn">See More</a>
              </div>
            </div>
          </div>
        </section>
        <section className="resume-block has-text-centered">
          <div className="container">
            <ul className="columns">
              <li className="column">
                <h1 className="resume-title">
                  <span>Excited to work with us...</span>
                  But don't see your positions listed
                </h1>
                <a className="btn white-btn" onClick={this.toggleModal}>
                  Send Your Resume
                </a>
              </li>
            </ul>
          </div>
        </section>
        <Modal closeModal={this.toggleModal} modalState={this.state.modalState}>
          <div className="box has-text-centered">
            <div className="columns is-row">
              <h1 className="column is-12 title">Submit Your Application</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <ul className="columns is-row">
                <li className="column is-6">
                  {this.renderInput("fullName", "Full Name")}
                </li>
                <li className="column is-6">
                  {this.renderInput("email", "Email")}
                </li>
                <li className="column is-6">
                  {this.renderInput("phone", "Phone")}
                </li>
                <li className="column is-6">
                  {this.renderInput("experience", "Experience")}
                </li>
                <li className="column is-6">
                  {this.renderInput("skill", "Skill")}
                </li>
                <li className="column is-6">
                  {this.renderInput("location", "Location")}
                </li>
                <li className="column is-6">
                  {this.renderInput("upload", "Upload CV")}
                </li>
                <li className="column is-6">
                  {this.renderInput("code", "What code is in the image?")}
                  <p>Enter the characters shown in the image.</p>
                </li>
                <li className="column is-12">{this.renderButton("Apply")}</li>
              </ul>
            </form>
          </div>
        </Modal>
      </main>
    );
  }
}
export default JobsCon;
