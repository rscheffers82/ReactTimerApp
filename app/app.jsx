var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>                          // open a router component
    <Route path="/" component={Main}>                     // Set the main route to /
      <Route path="countdown" component={Countdown}/>     // Define any sub-routes after /
      <IndexRoute component={Timer}/>                     // Set the default to fall back to (main page to display)
    </Route>
  </Router>,
  document.getElementById('app')
);
