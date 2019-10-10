import React, { Component } from "react";
class Input extends Component {
  state = {
    focus: false
  };
  onFocus = () => {
    this.setState({ focus: true });
  };
  onBlur = () => {
    this.setState({ focus: false });
  };
  render() {
    const { name, label, error, ...rest } = this.props;
    const toggleClasses =
      this.state.focus === false && this.props.value === "" ? "" : "active";
    return (
      <div className="input-field" onBlur={this.onBlur}>
        <label htmlFor={name} className={toggleClasses}>
          {label}
        </label>
        <input id={name} name={name} {...rest} onFocus={this.onFocus} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
