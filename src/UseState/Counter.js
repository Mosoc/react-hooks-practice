import React, { useState } from 'react';

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <section>
        <h3>Class Counter</h3>
        <button onClick={this.handleClick}>Increase</button>
        <p>{this.state.count}</p>
      </section>
    );
  }
}

function CounterFunction() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prevCount => {
      return prevCount + 1;
    });
  };
  return (
    <div>
      <h3>Function Counter with useState hook</h3>
      <button onClick={handleClick}>Increase</button>
      <p>{count}</p>
    </div>
  );
}

export default () => (
  <section>
    <h2>Compare Class with Hook</h2>
    <CounterClass />
    <CounterFunction />
  </section>
);
