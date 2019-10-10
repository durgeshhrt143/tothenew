import React from "react";
import Joi from "joi-browser";
import Form from "../../common/Form";
class MediaQueryForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      phone: "",
      company: "",
      query: "",
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
    phone: Joi.string()
      .required()
      .label("Phone"),
    company: Joi.string()
      .required()
      .label("Company"),
    query: Joi.string()
      .required()
      .label("Query"),
    code: Joi.string()
      .required()
      .label("Code")
  };
  doSubmit = () => {
    alert("media-query-form");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="service-form common">
        <div className="columns is-column">
          <div className="column is-8">
            <div className="columns">
              <div className="column">
                {this.renderInput("firstName", "first name")}
              </div>
              <div className="column">
                {this.renderInput("lastName", "last name")}
              </div>
            </div>

            {this.renderInput("businessEmail", "business email")}
            {this.renderInput("phone", "phone")}
            {this.renderInput("company", "company")}
            {this.renderInput("query", "requirement")}
            {this.renderInput("code", "code")}
            <p className="form-p">Enter the characters shown in the image.</p>
            {this.renderButton("Talk to our Media Contact!")}
          </div>
        </div>
      </form>
    );
  }
}

export default MediaQueryForm;
