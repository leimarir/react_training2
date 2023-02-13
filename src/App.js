import React, { Component } from 'react';
import EmployeeData from './EmployeeData';
import EmployeeFunc from './EmployeeFunc';

class App extends Component {
  render() {
    return (
      <div>
        <EmployeeData />
        <EmployeeFunc />
      </div>
    );
  }
}

export default App;