import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password);
    }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
            <img 
              className="login__logo"
              src={logo}
              alt=""
            />
          </Link>
          <div className="login__card">
            <h1 className="login__title">Login</h1>
            <div className="login_inputContainer">
                <p className="login__inputLabel">Email</p>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login_inputContainer">
                <p className="login__inputLabel">Passwrd</p>
                <input type="password" name="passwrod" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
            <p className="login__cardText">Don't have an account!,<Link to="/signup">Sign up</Link> now.</p>
            <p className="login__cardText">By continuing, you agree to JOCO's Conditions of Use and Privacy Notice.</p>
          </div>
      </div>
    </div> 
  );
}

export default LoginPage;