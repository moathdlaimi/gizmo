import React from 'react'
import '../css/Home.css'
import Tool from './Tool.js'
import Profile from './Profile.js'

class Home extends React.Component {
  render () {
    const {tools} = this.props
    return (
      <div>
        <div className="tools-container">
        {tools.map(
          (tool) => {
            return <div className="tool">
            <img className="tool-img" src={tool.img}/>
            <div className="tool-info">
            <h1>{tool.title}</h1>
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
