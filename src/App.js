// =============================
// DEPENDENCIES
// =============================
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Login from './components/Login'
import Signup from './components/Signup.js'
import Navigation from './components/Navigation.js'
import Main from './components/Main.js'


// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
    render(){
        return (

            <div className="container">
            <h1>Gizmo</h1>
            <Router>
              <Navigation />
                <Route path="/" exact component={Home}>
                <Main/>
                </Route>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Router>



            </div>

        )
    }
}
export default App;
