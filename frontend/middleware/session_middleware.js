import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions'

import { login, signup, logout } from '../util/session_api_util'

export default ({getstate, dispatch}) => (next) => (action) => {
  const success = (user) => dispatch(receiveCurrentUser(user))
  const errors = (errors) => dispatch(receiveErrors(errors))

  switch (action.type) {
    case LOGIN:
      login(action.user, success, errors)
      return next(action)
    case LOGOUT:
      logout(success, errors)
      return next(action)
    case SIGNUP:
      signup(action.user, success, errors)
      return next(action)
    default:
      return next(action)
  }
}
