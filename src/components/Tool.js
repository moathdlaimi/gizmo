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
        { this.state.show ?
        <div>
          <form onSubmit={this.updateTool}>
            <input onKeyUp={this.updateTitle} type="text" placeholder="Title" required/><br/>
            <input onKeyUp={this.updateImg} type="text" placeholder="ImageURL" required/><br/>
            <input onKeyUp={this.updateDescription} type="text" placeholder="Description" required/><br/>
            <input onKeyUp={this.updatePrice} type="text" placeholder="Price" required/><br/>
            <input onKeyUp={this.updateTag} type="text" placeholder="Tags" required/><br/>
            <input type="submit" value="Update Tool"/>
          </form>
        </div>: null }
      </div>

    )
  }
}

export default Tool
