/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
      isSaving: false,
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleAgeChange(e) {
    const value = parseInt(e.target.value, 10);
    // eslint-disable-next-line no-console
    console.log(value);
    if (Number.isInteger(value)) {
      this.setState({ age: value });
    }
  }

  render() {
    const { age, isSaving, error } = this.state;

    const child = () => {
      return (
        <div>
          <div className="form-group">
            <input id="name" type="text" className="form-control" placeholder="Parent name" />
          </div>
          <div className="form-group">
            {
              // chrome - pattern does not work !!
            }
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{9}"
              className="form-control"
              placeholder="Parent phone"
              title="Phone number should only contain 9 digits"
              required="required"
            />
          </div>
        </div>
      );
    };

    const parent = () => {
      return (
        <div>
          <div className="form-group">
            <input id="name" type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="E-mail"
              required="required"
            />
          </div>
        </div>
      );
    };

    if (error) {
      return <p>{error}</p>;
    }

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
            />
          </div>

          {age < 18 ? child() : parent()}

          <div className="list-group">
            <button type="submit" className="btn btn-primary m-1">
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
