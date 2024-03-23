import React, { useState, useEffect } from 'react';
import '../LoginPopup/LoginPopup.css'

const Testing = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');
  

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setIsLoggedIn(true);
        }
      }, []);

    const handleLogin = () => {
      if (username === 'user' && password === 'password') {
        setIsLoggedIn(true);
        localStorage.setItem('user', username);
        setShowPopup(false);
        setError('');
      } else {
        setError('Incorrect username or password');
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem('user');
    };
  
    return (

<>
<div>
        <nav>
          <ul>
            {isLoggedIn ? (
              <li><button onClick={handleLogout}>Logout</button></li>
            ) : (
              <li><button onClick={() => setShowPopup(true)}>Login</button></li>
            )}
          </ul>
        </nav>
        {showPopup && (
          <div className='login-popup'>
            <div className="popup-content">
              <span onClick={() => setShowPopup(false)} className="close">
                &times;
              </span>
              <h2>Login</h2>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleLogin}>Login</button>
              {error && <p>{error}</p>}
            </div>
          </div>
        )}
        {isLoggedIn && <p>Welcome, {username}!</p>}
      </div>




{/* <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Sign Up"?<input type="text" placeholder='Your name' />:<></>}
                <input type="email" placeholder='Your email' />
                <input type="password" placeholder='Password' />
            </div>
            <button>{currState==="Login"?"Login":"Create account"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
            }
        </div>
    </div> */}

</>
      
    );
  };
  
  

export default Testing