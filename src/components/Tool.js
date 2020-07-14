import React from 'react'
import Profile from './Profile.js'

class Tool extends React.Component {
  state = {
    show:false
  }

  toggleShow = () => {
    this.setState({
        show:!this.state.show
    })
  }

  render () {
    const {tool,index,deleteTool,updateTool,updateTitle,updateImg,updateDescription,updatePrice,updateTag} = this.props
    console.log(tool);
    return (

      <div>
        <h3>This is the Tool Component</h3>
        <h3>{tool.title}</h3>
        <button onClick={this.toggleShow}>Edit Tool</button>
        <button value={tool} onClick={deleteTool}>Delete Tool</button>
      </div>

    )
  }
}

export default Tool
