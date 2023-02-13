import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDecrement } from './action';

const UpdateCount = () => {

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleDec = () => {
        dispatch(onDecrement(1));
    };

    return (
        <div>
            {count}
            <button onClick={handleDec}>Dec</button>
        </div>
    );
};

export default UpdateCount;