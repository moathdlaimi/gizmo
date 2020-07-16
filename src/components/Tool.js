import React from 'react'
import axios from "axios";
import Navigation from '../components/Navigation.js'

class Tool extends React.Component {
  state = {

  }
  componentDidMount = () => {
        let id = this.props.match.params.id;
        axios.get('/tools/'+id).then(
            response => {
                this.setState({
                  id:response.data.id,
                  title:response.data.title,
                  img:response.data.img,
                  description:response.data.description,
                  price:response.data.price,
                  tags:response.data.tags,
                  rentee:response.data.rentee
                });
            }
        )
    }

  render () {
    return (
      <div>
        <Navigation />
        <div>
        <img src={this.state.img}/>
        <h1>{this.state.title}</h1>
        <h2>description: {this.state.description}</h2>
        <h2>Price per day: ${this.state.price}</h2>
        <h2>Posted by: {this.state.rentee}</h2>
        <button>Rent Now</button>
        </div>
      </div>
    )
  }
}

export default Tool
