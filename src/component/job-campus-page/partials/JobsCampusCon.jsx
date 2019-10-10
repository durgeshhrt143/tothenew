import React from "react";
import Modal from "../../common/Model";
import Form from "../../common/Form";
import Joi from "joi-browser";
class JobsCampusCon extends Form {
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
    const { main_title, main_content, items } = this.props.lookig_for;
    const { main_title: title, items: for_youItems } = this.props.for_you;
    return (
      <main className="campus-container has-text-centered">
        <section className="campus-looking-for">
          <div className="container">
            <div className="columns is-row">
              <h1 className="column is-12 main-title">{main_title}</h1>
              <p className="column is-12 content">{main_content}</p>
            </div>
            <ul className="columns is-row campas-for-ul">
              {items.map((c, i) => (
                <li className="column is-4" key={i + c}>
                  <img src={c.img} alt="abc" />
                  <h3 className="title">{c.title}</h3>
                  <p className="content">{c.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="campus-for-you">
          <div className="container">
            <h1 className="main-title">{title}</h1>
            <ul className="columns is-row">
              {for_youItems.map((c, i) => (
                <li className="column is-3" key={i + c}>
                  <div className="li-wraper">
                    <img src={c.img} />
                    <h3 className="title">{c.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="campus-boost">
          <div className="container">
            <h1>Boost your career with us</h1>
            <a className="btn" onClick={this.toggleModal}>
              Apply
            </a>
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
                <li className="column is-12">{this.renderButton("Apply")}</li>
              </ul>
            </form>
          </div>
        </Modal>
      </main>
    );
  }
}
export default JobsCampusCon;
