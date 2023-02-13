import * as actions from './actionType';

export const onIncrement = (value) => {
    return {
        type: actions.INC,
        payload: value,
    };
};

export const onDecrement = (value) => {
    return {
        type: actions.DEC,
        payload: value
    };
};

export const onUp = (value) => {
    return {
        type: actions.UP,
        payload: value
    }
}

export const onDown = (value) => {
    return {
        type: actions.DOWN,
        payload: value
    }
}