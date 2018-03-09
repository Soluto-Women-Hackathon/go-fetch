import React, { Component } from 'react';
import login from '../App';
import logo from '../resources/logo.svg';
import './Login.css';
import '../App.css';

class Login extends Component {
     
    render() {
        const onRadioChange = (event) => {
            this.setState({value: event.target.value});
        }
        
      return (      
        <div>
            <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet" />
            <div className="Logins-header">
                <img src={logo} className="logo" alt="logo"/>
                <p className="Logins-intro">
                    Get to know your next pet friend
                </p>
                <p className="LOOKING">Looking...</p>
            </div>
            
            <div className="Logins-footer">
                <form className="Page-logins">
                    <label>
                        <input type="radio" className="ChoosePage" name="Looking" value="Adopt" onChange={onRadioChange} />
                        <img src="'img/resources/to-adopt-icon-active.svg" />
                        <div className="TO-ADOPT">To Adopt</div>
                    </label>
                    <label>
                        <input type="radio" className="ChoosePage" name="Looking" value="Owner" onChange={onRadioChange} />
                        <img src="'../resources/for-a-home-icon-inactive.svg" />
                        <div className="FOR-A-HOME">For a Home</div>
                    </label>
                </form>
            </div>
            <p className="User-logins">
                <button onClick={() => this.props.loginFacebook(this.props, this.state.value)}>Facebook Login</button>
                <br/>
                <button onClick={() => this.props.loginGoogle(this.props, this.state.value)}>Google Login</button>
            </p>
        </div>
      );
    }
  }
  
  export default Login;
  