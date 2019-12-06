import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then( response => {
      if (response.data.type === 'error') {
        console.log(`🚨 Error`, response.data.message)
        // TODO: maybe put this message in state?
      } else {
        localStorage.setItem('mernToken', response.data.token)
        this.props.liftToken(response.data)
      }
    }).catch( err => {
      // This block catches rate limiter errors 
      console.log(err);
    })
  }

  render() {
    return(
      <div className="Signup">
        <h3>Signup for free: </h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/> <br />
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/> <br />
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" /> <br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default Signup;