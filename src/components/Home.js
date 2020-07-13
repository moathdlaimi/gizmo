import React from 'react'
import Tool from './Tool.js'
import Profile from './Profile.js'

class Home extends React.Component {
  render () {
    const {tools} = this.props
    return (
      <div>
        <h1>All Tools</h1>
        <div>
        {tools.map(
          (tool) => {
            return <h1>{tool.title} || Price/Day ${tool.price}</h1>
        })}
        </div>
      </div>
    )
  }
}

export default Home
