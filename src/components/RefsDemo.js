import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // Create a reference
  }

  componentDidMount() {
    console.log(this.inputRef); // Logs the reference object
    // Example: Focus the input field when the component is mounted
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} /> 
      </div>
    );
  }
}

export default RefsDemo;
