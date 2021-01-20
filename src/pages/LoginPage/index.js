import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const LoginPage = () => {

  return (
    <div className="login">
      <div className="login__container">
          <img 
            className="login__logo"
            src={logo}
            alt=""
          />
          <div className="login__card">
            <h1 className="login__title">Login</h1>
            <div className="login_inputContainer">
                <p className="login__inputLabel">Email</p>
                <input type="email" name="email" />
            </div>
            <div className="login_inputContainer">
                <p className="login__inputLabel">Passwrd</p>
                <input type="password" name="passwrod" />
            </div>
            <button onClick="">Login</button>
            <p className="login__cardText">Don't have an account!,<Link to="/signup">Sign up</Link> now.</p>
            <p className="login__cardText">By continuing, you agree to JOCO's Conditions of Use and Privacy Notice.</p>
          </div>
      </div>
    </div> 
  );
}

export default LoginPage;