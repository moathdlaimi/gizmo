import React from 'react'
import axios from "axios";
import '../App.css'
import {Link} from 'react-router-dom'


class Navigataion extends React.Component {
  state = {
    username:''
  }

  componentDidMount = () => {
      axios.get('/sessions').then(
        (response) => {
          this.setState({
            username: response.data.username
          })
        }
      )


  }
  render () {

    return (
      <>
      { this.state.username === '' ?
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
