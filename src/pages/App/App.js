import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render() {
    
    return (
      <div>
        <header className='header-footer'>CRITEATS</header>
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              hello
            </div>
          }/>
         
          <Route exact path='/signup' render={({ history }) => 
            <SignUpPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
         
        </Switch>
      </div>
    );
  }
}

export default App;
