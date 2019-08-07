import React from 'react';
import './App.css';

import { StopWatch } from './StopWatch';

class App extends React.Component {
  state = {
    name: '',
    timers: []
  };

  addTimer() {
    const name = this.state.name;
    this.setState({
      name: '',
      timers: [...this.state.timers, name]
    })
  }

  getTimers() {
    return this.state.timers.map(timerName => (
      <div>
        {timerName}:
        <StopWatch key={timerName} />
        <button onClick={() => this.removeTimer(timerName)}>Remove</button>
      </div>
    ));
  }

  removeTimer(timerName) {
    this.setState({
      timers: this.state.timers.filter(name => name !== timerName)
    });
  }

  render() {
    return (
      <div className="App">
        {this.getTimers()}
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={() => this.addTimer()}>Add timer</button>
      </div>
    );
  }
}


export default App;
