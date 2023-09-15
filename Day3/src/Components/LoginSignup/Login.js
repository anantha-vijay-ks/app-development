import React from "react";
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
            </div>
            <div className="submit-container">
                <Link to="/signup">
                    <div className="submit gray">Sign Up</div>
                </Link>
                <div className="submit">Login</div>
            </div>
        </div>
    );
};

export default Login;
