import React from "react";
import Joi from "joi-browser";
import Form from "../../common/Form";
class JoinTeamForm extends Form {
  state = {
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
      .label("Upload"),
    code: Joi.string()
      .required()
      .label("Code")
  };
  doSubmit = () => {
    alert("join-team-form");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="service-form common">
        <div className="columns is-column">
          <div className="column is-8">
            <div className="columns is-row">
              <div className="column is-6">
                {this.renderInput("fullName", "Full Name")}
              </div>
              <div className="column is-6">
                {this.renderInput("email", "Email")}
              </div>
              <div className="column is-6">
                {this.renderInput("phone", "Phone")}
              </div>
              <div className="column is-6">
                {this.renderInput("experience", "Experience")}
              </div>
              <div className="column is-6">
                {this.renderInput("skill", "Skill")}
              </div>
              <div className="column is-6">
                {this.renderInput("location", "Location")}
              </div>
            </div>

            {this.renderInput("upload", "Upload")}
            {this.renderInput("code", "Code")}
            {this.renderButton("Submit Now!")}
          </div>
        </div>
      </form>
    );
  }
}

export default JoinTeamForm;
