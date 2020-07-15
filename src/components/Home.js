import React from 'react'
import axios from "axios";
import '../css/Home.css'
import {Link} from 'react-router-dom'
import Navigation from '../components/Navigation.js'

class Home extends React.Component {
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


  render () {

    return (
      <div>
      <Navigation />
        <div className="tools-container">
        {this.state.tools.map(
          (tool,index) => {
            return <div className="tool" key={index}>
            <img className="tool-img" src={tool.img} alt="tool-pic"/>
            <div className="tool-info">
            <Link to={"/Tool/"+tool.id} ><h1> {tool.title}</h1></Link >
            <h4>Price/Day ${tool.price}</h4>
            </div>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default Home
