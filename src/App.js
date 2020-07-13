// =============================
// DEPENDENCIES
// =============================
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
    render(){
        return (

            <div className="container">
            <h1>Gizmo</h1>
            <Router>
            <Navigation/>
              <Switch> 
                <Route path="/" exact>
                <Home/>
                </Route>

                <Route path="/profile">
                <Profile/>
                </Route>

                <Route path="/login">
                <Login/>
                </Route>

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
