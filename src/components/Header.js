import React from 'react';

class CounterButton extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    // Prevent unnecessary re-renders by checking state changes
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count;
    }

    render() {
        console.log('CounterButton render');
        return (
            <button 
                style={{ color: this.props.color }} // Use style to apply color
                onClick={() => this.setState(state => ({ count: state.count + 1 }))} // Properly update state
            >
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;
