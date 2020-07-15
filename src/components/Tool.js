import React from 'react'
import axios from "axios";

class Tool extends React.Component {
  state = {
    tools:[]
  }

  componentDidMount = (event) => {

      axios.get('/tools/' + event.target.value).then(
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
      {
        this.state.tools.map(
          (tool) => {
          return (
            <h1>{tool.title}</h1>
          )
        })
      }
      </div>

    )
  }
}

export default Tool
