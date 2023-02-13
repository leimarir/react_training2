import React, { Component } from "react";
import { onIncrement, onDecrement } from "./action";
import { connect } from "react-redux";

class CounterDecInc extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.onInc(2)}>+</button>
                <button onClick={() => this.props.onDec(1)}>-</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (value) => dispatch(onIncrement(value)),
        onDec: (value) => dispatch(onDecrement(value))
    }
};

export default connect(null, mapDispatchToProps)(CounterDecInc);