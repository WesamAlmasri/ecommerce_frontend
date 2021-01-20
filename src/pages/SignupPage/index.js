import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        console.log(email, password);
    }

  return (
    <div className="signup">
      <div className="signup__container">
        <Link to="/">
          <img 
            className="signup__logo"
            src={logo}
            alt=""
          />
        </Link>
          <div className="signup__card">
            <h1 className="signup__title">Signup</h1>
            <div className="signup_inputContainer">
                <p className="signup__inputLabel">Email</p>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="signup_inputContainer">
                <p className="signup__inputLabel">Passwrd</p>
                <input type="password" name="passwrod" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSignup}>Signup</button>
            <p className="signup__cardText">Already have an account!,<Link to="/login">Login</Link> now.</p>
            <p className="signup__cardText">By continuing, you agree to JOCO's Conditions of Use and Privacy Notice.</p>
          </div>
      </div>
    </div> 
  );
}

export default SignupPage;