import React from 'react'
import axios from "axios";
import Tool from './Tool.js'

class Profile extends React.Component {
  // ==============
  // STATE
  // ==============
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



    render () {
      return (
        <div>
        <div className="create-form-div">
          <form className="create-form" onSubmit={this.createTool}>
            <input className="create-input" onKeyUp={this.createTitle} type="text" placeholder="Title" required/><br/>
            <input className="create-input" onKeyUp={this.createImg} type="text" placeholder="ImageURL" required/><br/>
            <input className="create-input"onKeyUp={this.createDes} type="text" placeholder="Description" required/><br/>
            <input className="create-input" onKeyUp={this.createPrice} type="text" placeholder="Price" required/><br/>
            <input className="create-input" onKeyUp={this.createTags} type="text" placeholder="Tags" required/><br/>
            <input className="create-submit" type="submit" value="Post New Tool"/>
          </form>
        </div>
        {
          this.state.tools.map(
            (tool,index) => {
              return<Tool tool={tool}
                          index={index}
                          deleteTool={this.deleteTool}
                          updateTool={this.updateTool}
                          updateTitle={this.updateTitle}
                          updateImg={this.updateImg}
                          updateDescription={this.updateDescription}
                          updatePrice={this.updatePrice}
                          updateTag={this.updateTag}
                          ></Tool>
            }
          )
        }
        </div>
      )
    }
  }

export default Profile
