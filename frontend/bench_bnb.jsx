import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

// TODO: testing
import { login, logout } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)

  // TODO: testing
  window.store = store
  // store.dispatch(login({user: {username: 'caleb', password: 'password'}}))
})
