import React from 'react'
import axios from "axios";

class Signup extends React.Component {
  state = {
    users:[]
  }
  
  createUser = (event) => {
    event.preventDefault();
    axios.post(
        '/users',
        {
          name:this.state.newName,
          password:this.state.newPassword,
        }
    ).then(
      (response) => {
        this.setState({
          users:response.data
        })
      }
    )

  }

  createName = (event) => {
    this.setState({
        newName:event.target.value
    })
  }

  createPassword = (event) => {
    this.setState({
        newPassword:event.target.value
    })
  }



  render () {
    return (
    <div>
      <h3>Signup</h3>

      <div>
        <form onSubmit={this.createUser}>
          <input onKeyUp={this.createName} type="text" placeholder="Username" required/><br/>
          <input onKeyUp={this.createPassword} type="password" placeholder="Password" required/><br/>
          <input type="submit" value="Create New User"/>

        </form>
      </div>
    </div>
    )
  }
}

export default Signup
