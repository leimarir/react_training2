import * as actions from './actionType';

// Central Storage
const initialState = {
    count: 0,
    employeeData: [{
            id: 1,
            name: "Batman",
            salary: 15,
        }, {
            id: 2,
            name: "Superman",
            salary: 25
        }, {
            id: 3,
            name: "Black Panther",
            salary: 35
        }
    ]
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actions.INC:
            return { ...state, count: state.count + action.payload };
        case actions.DEC:
            return { ...state, count: state.count - action.payload };
        case actions.UP:
            console.log(action.payload);
            let tempEmp = state.employeeData;
            console.log(tempEmp[action.payload.index]);
            tempEmp[action.payload.index].salary += action.payload.num;
            return { ...state, employeeData: [...tempEmp]};
        case actions.DOWN:
            let emp = state.employeeData;
            emp[action.payload.index].salary -= action.payload.num;
            return { ...state, employeeData: [...emp]};
        default:
            return state;
    }   

};

export default reducer;