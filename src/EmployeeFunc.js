import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onUp, onDown } from './action';

const EmployeeFunc = () => {

    const employeeList = useSelector((state) => state.employeeData);
    const dispatch = useDispatch();

    const handleRaise = (val1, val2) => {
        dispatch(onUp({index: val1, num: val2}));
    };

    const handleReduce = (val1, val2) => {
        dispatch(onDown({index: val1, num: val2}));
    }

    return (
        <div>
            <h3>Function Based</h3>
            {
                employeeList.map((employee) => {
                    return (
                        <div key={employee.id}>
                            <p>Employee Name: {employee.name}</p>
                            <p>Employee Salary: {employee.salary}</p>
                            <button onClick={() => handleRaise(employee.id - 1, 1)}>Raise</button>
                            <button onClick={() => handleReduce(employee.id - 1, 2)}>Reduce</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default EmployeeFunc;