import React from 'react';

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
        <h2>Counter</h2>
        <button onClick={this.handleClick}>Increase</button>
        <p>{this.state.count}</p>
      </section>
    );
  }
}

export default CounterClass;
