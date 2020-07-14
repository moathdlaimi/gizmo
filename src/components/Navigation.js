import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

class Navigataion extends React.Component {
  render () {
    return (
      <nav className="nav-bar">
        <Link to="/" className="nav-links">Home </Link >
        <Link to="/profile" className="nav-links">Profile </Link >
        <Link to="/login" className="nav-links">Login </Link >
        <Link to="/signup" className="nav-links">Signup</Link >
      </nav>
    )
  }
}

export default Navigataion
