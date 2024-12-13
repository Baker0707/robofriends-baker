import React from 'react';

class CounterButton extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Only re-render if count has changed
        return nextState.count !== this.state.count;
    }

    render() {
        console.log('CounterButton render');
        return (
            <button 
                style={{ color: this.props.color }} 
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}
            >
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;
