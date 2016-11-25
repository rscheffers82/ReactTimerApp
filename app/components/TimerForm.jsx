var React = require('react');
var Controls = require('Controls');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    this.props.onStart();
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
