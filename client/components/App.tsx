import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let meow: String = 'hello world!'
      return (
        <div>
            <p>{meow}</p>
        </div>
      );
  }
}

export default App;