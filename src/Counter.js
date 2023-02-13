import React, {Component } from 'react';
import { connect } from 'react-redux';
import { onIncrement } from './action';

class Counter extends Component {

    increment = () => {
        this.props.onInc(2);
    };

    render() {
        return (
            <>
                {this.props.count}
                <button onClick={this.increment}>+</button>
            </>
        );
    }
}

//get the data from state (central storage)
const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (value) => dispatch(onIncrement(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);