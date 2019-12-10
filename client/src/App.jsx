import React, {Component} from 'react';
import './App.css';
import AppDetail from './AppDetail';
import AddApp from './AddApp';
import AddNote from './AddNote';
import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import Profile from './Profile';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route,
  Link } from 'react-router-dom';

class App extends Component {

  state = {
    token: '',
    user: null,
    errorMessage: '',
    lockedResult: ''
  }

  checkForLocalToken = () => {
    // Look in localStorage for a token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // if no token, remove all evidence of mernToken from localStorage and state 
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // if found a token, verify it on the backen 
      axios.post('/auth/me/from/token', {token})
        .then( response => {
          if (response.data.type === 'error') {
            localStorage.removeItem('mernToken') 
            this.setState({
              token: '',
              user: null, 
              errorMessage: response.data.message
            })
          } else {
            // if verified, store it back in localStorage and state 
            localStorage.setItem('mernToken', response.data.token)
            this.setState({
              token: response.data.token,
              user: response.data.user
            })
          }
        })
    }
  }

  componentDidMount = () => {
    this.checkForLocalToken()
  }

  liftToken = ({token, user}) => {
    this.setState({
      token,
      user
    })
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('mernToken');
    this.setState({
      token: '',
      user: null
    })
  }


  render () {   
    let navContents;
    if(this.state.user) {
      navContents = (
        <div className="nav-wrapper"> 
          <nav>
            <Link to='/' onClick={this.logout}> Logout </Link> { ' | ' }
            <Link to='/profile'>Profile</Link>{ ' | ' }
            <Link to='/AddApp'>Add A New Job</Link>{ ' | ' }
          </nav>
        </div>
      )
    } else {
      navContents = (
      <div className="nav-wrapper"> 
        <nav>
          <Link to='/signup'> Signup </Link> { ' | ' }
          <Link to='/login'> Login </Link> { ' | ' }
        </nav>
      </div>
    )
  }
  return (
    <Router>
      <h1>Welcome to JobTrackers! </h1>
      {navContents}
      <Route exact path='/' render={ () => <Homepage token={this.state.token} />  } />
      <Route exact path='/profile' render={ (props) => <Profile {...props} token={this.state.token} />  } />
      <Route exact path="/signup" render={ () => <Signup liftToken={this.liftToken} /> } />
      <Route exact path="/login" render={ () => <Login liftToken={this.liftToken} /> } />
      <Route exact path='/app/:id' component={AppDetail} />
      <Route exact path='/AddApp' render={ () => <AddApp token={this.state.token} />  } />
      <Route exact path='/app/:id/note' component={AddNote}  />
      <footer>
        <span> Created By: </span>
        <a className="link" href="https://github.com/AriG150" target="_blank" rel="noopener noreferrer" > Ari </a> and
        <a className="link" href="https://github.com/hunterhanna2010" target="_blank" rel="noopener noreferrer" > Josh </a>
      </footer>
  </Router>
  )
  }
}



export default App;
