import React, { Component } from 'react';
import login from '../App';
import logo from '../logo.svg';
import './Login.css';
import '../App.css';

class Login extends Component {
    render() {
      return (
        <div>
            <header className="Login-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="Login-title">GoFetch</h1>
            </header>
            <p className="App-intro">
                Get to know your next pet friend
            </p>
            <header className="Logins-header">
                <h1 className="App-title">Looking...</h1>
            
                <form className="Page-logins">
                    <input type="radio" className="Logins-buttons" name="Looking" value="Adopt" />To Adopt
                    <input type="radio" className="Logins-buttons" name="Looking" value="Owner" />For a Home
                </form>
            </header>
            <p className="User-logins">
                <button onClick={this.props.loginFacebook}>Facebook Login</button>
                <br/>
                <button onClick={this.props.loginFacebook}>Google Login</button>
            </p>
        </div>
      );
    }
  }
  
  export default Login;
  