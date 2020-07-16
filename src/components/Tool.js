import React from 'react'
import axios from "axios";

class Tool extends React.Component {
  state = {
    user_tools:[]
  }
  componentDidMount = () => {
        console.log(this.props);
        let id = this.props.match.params.id;
        console.log(id);
        axios.get('/tools/' + id).then(
            response => {
                console.log(response);
                this.setState({
                  user_tools:response.data
                });
            }
        )
    }

  render () {
    return (

      <div>
      <h1>show page</h1>
      {
        this.state.user_tools.map(
          (tool,index)=> {
            return (
              <h1>tool{tool.name}</h1>
            )
          }
        )
      }

      </div>

    )
  }
}

export default Tool
