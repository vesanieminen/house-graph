'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

var routes = (
  <Route path="/" component={require('./components/app.jsx')}>
    <IndexRoute component={require('./components/homePage.jsx')} />
    <Route path="/house" component={require('./components/house/house.jsx')} />
	<Route path="*" component={require('./components/notFoundPage.jsx')} />
  </Route>
)

module.exports = routes;
