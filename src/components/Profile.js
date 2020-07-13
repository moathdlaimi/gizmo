import React from 'react'
import axios from "axios";
import Tool from './Tool.js'


class Profile extends React.Component {
  // ==============
  // STATE
  // ==============

    render () {
      const {tools,
        createTool,createTitle,createImg,createDes,createPrice,createTags,
        deleteTool,
        updateTool,updateTitle,updateImg,updateDescription,updatePrice,updateTag} = this.props

      return (
        <div>
        <h1>Your Tools</h1>
        {tools.map(
          (tool) => {
            return (
              <>
              <h1>{tool.title} || Price/Day ${tool.price}</h1>
              <button value={tool.id} onClick={deleteTool}>Delete Tool</button>
              </>
            )

        })}

        <div className="create-form-div">
          <form className="create-form" onSubmit={createTool}>
            <input className="create-input" onKeyUp={createTitle} type="text" placeholder="Title" required/><br/>
            <input className="create-input" onKeyUp={createImg} type="text" placeholder="ImageURL" required/><br/>
            <input className="create-input"onKeyUp={createDes} type="text" placeholder="Description" required/><br/>
            <input className="create-input" onKeyUp={createPrice} type="text" placeholder="Price" required/><br/>
            <input className="create-input" onKeyUp={createTags} type="text" placeholder="Tags" required/><br/>
            <input className="create-submit" type="submit" value="Post New Tool"/>
          </form>
        </div>
        </div>
      )
    }
  }

export default Profile