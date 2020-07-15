import React from 'react'
import axios from "axios";

class Login extends React.Component {
  state = {
    username:'',
    password:'',
  }

  createSession = (event) => {
    event.preventDefault();
    axios.post(
        '/sessions',
        {
          name:this.state.username,
          password:this.state.password

        }
    ).then(
      (response) => {
        if (response.data === '') {
            alert('Username or password wrong')
        } else {
          alert('Welcome ' + this.state.username)
          this.props.history.push('/profile');
        }
      }
    )

  }

  onChangeUsername = (e) =>{
    this.setState({
      username:e.target.value
    })
  }

  onChangePassword = (e) =>{
    this.setState({
      password:e.target.value
    })
  }


  render () {
    return (
      <>
        <h3>Login</h3>
        <div>
          <form onSubmit={this.createSession}>
            <input  type="text" onChange={this.onChangeUsername} placeholder="Username" required/><br/>
            <input  type="password" onChange={this.onChangePassword} placeholder="Password" required/><br/>
            <input type="submit" value="Login"/>

          </form>
        </div>
      </>
    )
  }
}

export default Login
