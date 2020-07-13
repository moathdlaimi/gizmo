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
      tools:[]
  }

  componentDidMount = () => {
      axios.get('/tools').then(
        (response) => {
          this.setState({
              tools:response.data
          })
        }
      )
  }

  createTool = (event) => {
    event.preventDefault();
    axios.post(
        '/tools',
        {
          title:this.state.newTitle,
          img:this.state.newImg,
          description:this.state.newDes,
          price:this.state.newPrice,
          tags:this.state.newTags,

        }
    ).then(
      (response) => {
        this.setState({
          tools:response.data
        })
      }
    )

  }

  createTitle = (event) => {
    this.setState({
        newTitle:event.target.value
    })
  }

  createImg = (event) => {
    this.setState({
        newImg:event.target.value
    })
  }

  createDes = (event) => {
    this.setState({
        newDes:event.target.value
    })
  }

  createPrice = (event) => {
    this.setState({
        newPrice:event.target.value
    })
  }

  createTags = (event) => {
    this.setState({
        newTags:event.target.value
    })
  }

  deleteTool = (event) => {
    axios.delete('/tools/' + event.target.value).then(
      (response) => {
        this.setState({
            tools:response.data
        })
      }
    )
}

updateTool = (event) => {
  event.preventDefault()
  const id = event.target.getAttribute('id')
  axios.put(
    '/tools/' + id,
    {
      title:this.state.updatedTitle,
      img:this.state.updatedImg,
      description:this.state.updatedDescription,
      price:this.state.updatedPrice,
      tags:this.state.updatedTag


    }
  ).then(
      (response) => {
          this.setState({
              tools:response.data
          })
      }
  )
}

updateTitle = (event) => {
  this.setState({
    updatedTitle:event.target.value,

  })
}
updateImg = (event) => {
  this.setState({
    updatedImg:event.target.value,

  })
}
updateDescription = (event) => {
  this.setState({
    updatedDescription:event.target.value,

  })
}
updatePrice = (event) => {
  this.setState({
    updatedPrice:event.target.value,

  })
}
updateTag = (event) => {
  this.setState({
    updatedTag:event.target.value,

  })
}
    render(){
        return (

            <div className="container">
            <h1>Gizmo</h1>
            <Router>
            <Navigation/>
              <Switch>
                <Route path="/" exact>
                <Home tools={this.state.tools} />
                </Route>

                <Route path="/profile">

                      <Profile tools={this.state.tools}

                                  createTool={this.createTool}
                                  createTitle={this.createTitle}
                                  createImg={this.createImg}
                                  createDes={this.createDes}
                                  createPrice={this.createPrice}
                                  createTags={this.createTags}

                                  deleteTool={this.deleteTool}
                                  updateTool={this.updateTool}
                                  updateTitle={this.updateTitle}
                                  updateImg={this.updateImg}
                                  updateDescription={this.updateDescription}
                                  updatePrice={this.updatePrice}
                                  updateTag={this.updateTag}
                                  />

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
