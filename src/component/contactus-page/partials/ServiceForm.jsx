import React from "react";
import Joi from "joi-browser";
import Form from "../../common/Form";
class ServiceForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      phone: "",
      company: "",
      requirement: "",
      code: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .required()
      .label("first name"),
    lastName: Joi.string()
      .required()
      .label("last name"),
    businessEmail: Joi.string()
      .required()
      .label("business email"),
    phone: Joi.string()
      .required()
      .label("phone"),
    company: Joi.string()
      .required()
      .label("company"),
    requirement: Joi.string()
      .required()
      .label("requirement"),
    code: Joi.string()
      .required()
      .label("code")
  };
  doSubmit = () => {
    alert("service-form");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="service-form common">
        <div className="columns is-column">
          <div className="column is-8">
            <div className="columns">
              <div className="column">
                {this.renderInput("firstName", "First Name")}
              </div>
              <div className="column">
                {this.renderInput("lastName", "Last Name")}
              </div>
            </div>

            {this.renderInput("businessEmail", "Business Email")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("company", "Company")}
            {this.renderInput("requirement", "Requirement")}
            {this.renderInput("code", "What code is in the image?")}
            <p className="form-p">Enter the characters shown in the image.</p>
            {this.renderButton("Talk to our Solutions Expert!")}
          </div>
        </div>
      </form>
    );
  }
}

export default ServiceForm;
