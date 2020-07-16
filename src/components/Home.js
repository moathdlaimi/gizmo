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

  handleSearch = (event) => {
    console.log('Searching');
  }


  render () {

    return (
      <div>
      <Navigation />
      <input type="text" id="mySearch" onKeyUp={this.handleSearch} placeholder="Search for a tool"/>
        <div className="tools-container">

        {this.state.tools.map(
          (tool,index) => {
            return <div className="tool" key={index}>
            <img className="tool-img" src={tool.img} alt="tool-pic"/>
            <div className="tool-info">
            <h2>{tool.title}</h2>
            <h4>Posted By: {tool.rentee}</h4>
            <h4>Price/Day ${tool.price}</h4>
            <h4>Available Today</h4>
            <Link to={"/Tool/"+tool.id}><button className="details-btn">View Details</button></Link >
            </div>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default Home
