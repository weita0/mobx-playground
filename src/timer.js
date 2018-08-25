import React from 'react'
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

var appState = observable({
  timer: 0,
  resetTimer: action(function reset() {
    appState.timer = 0
  })
})

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000);

@observer
export class TimerView extends React.Component {
  render() {
    return (<button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>);
  }

  onReset () {
    this.props.appState.resetTimer();
  }
};

export default () => <TimerView appState={appState} />
