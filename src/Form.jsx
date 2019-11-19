/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
      isSaving: false,
      currentNameValue: "",
      currentInputValue: "",
      validationError: "",
      isValid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/success");
  }

  handleAgeChange(e) {
    const value = parseInt(e.target.value, 10);
    // eslint-disable-next-line no-console
    console.log(value);
    if (Number.isInteger(value)) {
      this.setState({
        age: value,
        currentNameValue: "",
        currentInputValue: "",
        validationError: "",
        isValid: false
      });
    }
  }

  validateEmail(e) {
    this.validate(
      e.target.value,
      /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)+@[a-zA-Z0-9]+(\.[A-Za-z]+)+$/,
      "Input should be valid e-mail"
    );
  }

  validatePhone(e) {
    this.validate(
      e.target.value,
      /^[0-9]{9}$/,
      "Input should be valid phone, containing only 9 digits"
    );
  }

  validate(value, pattern, msg) {
    let valError = "";
    let valid = true;
    const pat = new RegExp(pattern);
    if (!pat.test(value)) {
      valError = msg;
      valid = false;
    }

    this.setState({
      validationError: valError,
      isValid: valid,
      currentInputValue: value
    });
  }

  render() {
    const {
      age,
      isSaving,
      currentNameValue,
      currentInputValue,
      validationError,
      isValid
    } = this.state;

    const child = () => {
      return (
        <div>
          <div className="form-group">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Parent name"
              value={currentNameValue}
              onChange={e => this.setState({ currentNameValue: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{9}"
              className="form-control"
              placeholder="Parent phone"
              title="Phone number should only contain 9 digits"
              onChange={this.validatePhone}
              value={currentInputValue}
              required="required"
            />
            <span className="text-danger">{validationError}</span>
          </div>
        </div>
      );
    };

    const parent = () => {
      return (
        <div>
          <div className="form-group">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={currentNameValue}
              onChange={e => this.setState({ currentNameValue: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="E-mail"
              onChange={this.validateEmail}
              value={currentInputValue}
              required="required"
            />
            <span className="text-danger">{validationError}</span>
          </div>
        </div>
      );
    };

    if (isSaving) {
      return (
        <div>
          <div className="spinner-border" role="status">
            <span className="sr-only">Saving...</span>
          </div>
          Saving...
        </div>
      );
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              id="age"
              onChange={this.handleAgeChange}
              type="number"
              className="form-control"
              placeholder="Age"
              required="required"
            />
          </div>

          {age < 18 ? child("") : parent("")}

          <div className="list-group">
            <button
              type="submit"
              className="btn btn-primary m-1"
              disabled={isValid ? "" : "disabled"}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary m-1"
              onClick={() => this.props.history.push("/")}
            >
              Back to list
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
