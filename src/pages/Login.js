import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.svg';
import forahome_inactive from '../resources/for-a-home-icon-inactive.svg';
import forahome_active from '../resources/for-a-home-icon-active.svg';
import toadopt_active from '../resources/to-adopt-icon-active.svg';
import toadopt_inactive from '../resources/to-adopt-icon-inactive.svg';
import path from '../resources/path.svg';
import './Login.css';

class Login extends Component {
    state = {
        selectedValue: ''
    };
     
    render() {
        const onRadioChange = (event) => {
            this.setState({selectedValue: event.target.value});
        }
        
      return (      
        <div align="center">
            <div className="Logins-header">
                <img src={logo} className="logo" alt="logo"/>
                <div className="Logins-intro">
                    Get to know your next pet friend
                </div>
                <div className="LOOKING">Looking</div>
            
                <form className="Page-logins">
                    <div className="buttonSquare">
                        <label>
                            <input type="radio" className="ChoosePage" name="Looking" value="Adopt" onChange={onRadioChange} />
                            <img src={toadopt_inactive} className="Button-icon" />
                            <div className="TO-ADOPT">To Adopt</div>
                        </label>
                    </div>
                    <div className="buttonSquare">
                        <label>
                            <input type="radio" className="ChoosePage" name="Looking" value="Owner" onChange={onRadioChange} />
                            <img src={forahome_active} className="Button-icon" />
                            <div className="FOR-A-HOME">For a Home</div>
                            <img src={path} />
                        </label>
                    </div>
                </form>
            
                    <div className="User-logins">
                        <Link to={this.state.selectedValue} >Facebook Login</Link>
                        
                        {/* <button onClick={() => this.props.loginFacebook(this.props, this.state.value)}>Facebook Login</button> */}
                    </div>
                        <br/>
                    <div className="User-logins">
                        <Link to={this.state.selectedValue} >Google Login</Link>
                        {/* <button onClick={() => this.props.loginGoogle(this.props, this.state.value)}>Google Login</button> */}
                    </div>
            </div>
        </div>
      );
    }
  }
  
  export default Login;
  