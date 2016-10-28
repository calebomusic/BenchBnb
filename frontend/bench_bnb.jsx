import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'

// TODO: testing
import { receiveCurrentUser,
         receiveErrors,
         login, signup, logout,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root)

  // TODO: testing
  window.store = store.dispatch(login({user: {username: 'caleb11', password: 'password'}}))
  let test =
  console.log(test);
})

// TODO: testing
window.login = login;
window.logout = logout;
window.signup = signup;
