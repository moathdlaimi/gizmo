import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <>
        <h3>Login</h3>
        <div>
          <form>
            <input  type="text" placeholder="Username" required/><br/>
            <input  type="password" placeholder="Password" required/><br/>
            <input type="submit" value="Login"/>

          </form>
        </div>
      </>
    )
  }
}

export default Login
