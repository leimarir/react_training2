import React, { Component } from "react";
import { connect } from "react-redux";
import { onUp, onDown } from "./action";

class EmployeeData extends Component {
  render() {
    const employeeList = this.props.employeeData.map((employee) => {
        console.log(employee);
        return (
          <div key={employee.id}>
            <p>Employee Name: {employee.name}</p>
            <p>Employee Salary: {employee.salary}</p>
            <button onClick={() => this.props.onIncrease(employee.id - 1, 1)}>
              +
            </button>
            <button onClick={() => this.props.onDecrease(employee.id - 1, 2)}>
              -
            </button>
          </div>
        );
      });
    console.log(this.props.employeeData);
    console.log(employeeList);
    return (
      <div>
        <h3>Class Based</h3>
        {employeeList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { employeeData: state.employeeData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (value1, value2) =>
      dispatch(onUp({ index: value1, num: value2 })),
    onDecrease: (value1, value2) =>
      dispatch(onDown({ index: value1, num: value2 })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeData);
