var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var TimerForm = require('TimerForm');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmound called');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval( () => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000 );
  },
  handleStart: function (seconds) {
    this.setState({
      countdownStatus: 'started'
    });
  },
  handleStateChange: function (newStatus) {
    this.setState({ countdownStatus: newStatus });
  },

  render: function () {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus !== 'stopped' ) {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStateChange}/>;
      } else {
        return <TimerForm onStart={this.handleStart}/>;
      }
    };

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
