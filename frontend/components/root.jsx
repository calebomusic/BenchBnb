import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
      <Route path="/login" component={SessionFormContainer}></Route>
      <Route path="/signup" component={SessionFormContainer}></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root
