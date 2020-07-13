import React from 'react'
import {Link} from 'react-router-dom'

class Navigataion extends React.Component {
  render () {
    return (
      <nav className="nav-bar">
        <Link to="/">Home</Link >
        <Link to="/profile">Profile</Link >
        <Link to="/login">Login</Link >
        <Link to="/signup">Signup</Link >
      </nav>
    )
  }
}

export default Navigataion
