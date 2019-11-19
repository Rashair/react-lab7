/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: this.props.employeeData,
      error: ""
    };
  }

  render() {
    const { employee, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div
        key={employee._id}
        className={"row " + (employee.isActive === true ? "text-primary" : "text-danger")}
      >
        {employee.name}, age: {employee.age}
      </div>
    );
  }
}

export default EmployeeRow;
