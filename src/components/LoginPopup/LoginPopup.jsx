import React, { useState, useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'password@123') {
        localStorage.setItem('isLoggedIn', 'true');
        setShowLogin(false);
        setError('');
      } else {
        setError('Incorrect username or password');
      }
    };
  
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        setShowLogin(false);
      }
    }, [setShowLogin]);
  
  
    return (
      <div className='login-popup'>
        <div className="login-popup-container">
          <div className="login-popup-title">
            <h2>Login</h2> <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            <input type="text" placeholder='Your username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    );
  };

export default LoginPopup