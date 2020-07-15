import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


class Navigataion extends React.Component {
  render () {
    const {loggedIn} = this.props
    return (
      <>
      { loggedIn === '' ?
      <nav className="nav-bar">

        <Link to="/" className="nav-links">Home </Link >
        <Link to="/login" className="nav-links">Login </Link >
        <Link to="/signup" className="nav-links">Signup</Link >

      </nav>
      : <nav className="nav-bar">

        <Link to="/" className="nav-links">Home </Link >
        <Link to="/profile" className="nav-links">Profile </Link >

      </nav> }
      </>
    )
  }
}

export default Navigataion
