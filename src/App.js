// =============================
// DEPENDENCIES
// =============================
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import './App.css'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Login from './components/Login'
import Signup from './components/Signup.js'
import Navigation from './components/Navigation.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {

  state = {
      tools:[],
      loggedIn:''
  }

  componentDidMount = () => {
      axios.get('/tools').then(
        (response) => {
          this.setState({
              tools:response.data
          })
        }
      )
      axios.get('/sessions').then(
        (response) => {
          this.setState({
            loggedIn:response.data.name
          })
        }
      )


  }

    render(){
        return (

            <div className="container">
            <h1 className="app-name">Gizmo</h1>
            <Router>
            <Navigation loggedIn={this.state.loggedIn}/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup">
                <Signup/>
                </Route>
              </Switch>
            </Router>



            </div>

        )
    }
}
export default App;
