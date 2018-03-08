import React, { Component } from 'react';
import './Login.css';
import '../App.css';

class Login extends Component {
    render() {
      return (
        <div>
          <header className="App-header">
            <h1 className="App-title">Looking</h1>
          
            <p className="Page-logins">
                <button className="Logins-buttons">To Adopt</button>
                <button className="Logins-buttons">For a Home</button>
            </p>
          </header>
          <p>
            <button>Facebook Login</button>
            <br/>
            <button>Google Login</button>
          </p>
        </div>
      );
    }
  }
  
  export default Login;
  