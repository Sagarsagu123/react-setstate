import React, { Component } from 'react';

// Higher-Order Component (HOC)
const withCounter = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};

// Counter Component
const Counter = ({ count, incrementCount }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={incrementCount}>Increment</button>
  </div>
);

// Enhanced Counter
const EnhancedCounter = withCounter(Counter);
export default  EnhancedCounter