import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signin.css';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState(null); // State to store authorization token
  const [message, setMessage] = useState(''); // State to store the latest message

  // Function to sign in
  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email,
          password,
        },
      });
      console.log('Sign in successful:', response.data);
      // Extract authorization token from response and store it locally
      const token = response.headers.authorization;
      console.log(token);
      setAuthToken(token);
      // Update message state with the latest message from response
      setMessage('Sign in successful' || '');
      // Do something with the response or redirect to a new page
    } catch (error) {
      console.error('Sign in failed:', error);
      setMessage('Sign in failed' || '');
    }
  };

  // Function to sign out
  const handleSignOut = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/users/sign_out', {
        headers: {
          Authorization: authToken,
        },
      });
      // Handle successful sign-out
      console.log('Sign out successful:', response.data);
      // Update message state with the latest message from response
      setMessage(response.data.message || '');
    } catch (error) {
      // Handle sign-out error
      console.error('Sign out failed:', error);
      // Update message state with the latest message from response
      setMessage('Sign out failed' || '');
    }
  };
  return (
    <div className="sign-in-form">
      <h1 className="sign-in-title"> Welcome, please sign in to continue</h1>
      <p>{message}</p>
      <div className="sign-in-inputs">
        <input className="email-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="password-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="btn">
        <button className="sign-in-button" type="button" onClick={handleSignIn}>Sign In</button>
        <button className="sign-out-button" type="button" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default SignInComponent;
