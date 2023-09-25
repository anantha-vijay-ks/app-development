import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './css/LoginSignup.css';
import { login } from './redux/authSlice';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
      });
      

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginData.email));
        console.log(loginData);
        navigate('/dashboard');
      };
      const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };
    return (
        <form className="container" onSubmit={handleLoginSubmit}>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" name="email" placeholder="Email Id" onChange={handleLoginChange} />

                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
                </div>
            </div>
            
            <div className="submit-container">
                <Link to="/signup">
                    <div className="submit gray">Sign Up</div>
                </Link>
                
                    <button type="submit"className='submit'>Login</button>
                
            </div>
        </form>
    );
};
export default Login;