import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import { Link } from 'react-router-dom';

const SignUpComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users', {
        user: {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      console.log('Sign up successful:', response.data);
      // Update message state with the success message from response
      setMessage(response.data.http_status.message || '');
    } catch (error) {
      console.error('Sign up failed:', error);
      // Update message state with the error message from response
      setMessage(error.response.data.http_status.errors || 'Sign up failed');
    }
  };

  return (
    <div className="sign-up-form">

      <h1> Welcome, please sign-up to continue</h1>
      {/* Render message */}
      <div className="name-field">
        <p>{message}</p>
        <input className="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="pass-field">
        <input className="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="password-confirmation" type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </div>

      <div className="btn-field">
        <button className="button" type="button" onClick={handleSignUp}>Sign Up</button>
        <Link to="/signin">Sign In</Link>
      </div>

    </div>
  );
};

export default SignUpComponent;
