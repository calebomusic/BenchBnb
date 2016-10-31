import React from 'react'
import { Link } from 'react-router'

const Greeting = (props) => {
  let linkPath, linkText, buttons, message, dispatch;
  // Currently currentUser's default state is null, not an empty object

  if (props.currentUser !== null) {
    message = `Welcome, ${props.currentUser.username}`
    buttons = <div><button onClick={props.logout}>Signout</button></div>
  } else {
    buttons = <div><Link to='#/login'>Log in</Link><Link to='#/signup'>Sign up</Link></div>
    dispatch = props.logout
  }

  return(<div>
    {buttons}
    {message}

    </div>)
}

export default Greeting
