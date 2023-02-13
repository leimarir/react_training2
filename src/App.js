import React, { Component } from 'react';
import Counter from './Counter';
import EmployeeData from './EmployeeData';
import CounterDecInc from './CounterDecInc';
import UpdateCount from './UpdateCount';
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