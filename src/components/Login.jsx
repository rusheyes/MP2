import React, { useState } from 'react';
import { useData } from './DataContext';
import '../styles/main.css';

const Login = () => {
  const { userData } = useData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., validate input, make API requests, etc.
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here, e.g., send reset email
  };

  return (
    <div className="login-container">
      {showForgotPasswordForm ? (
        <form onSubmit={handleForgotPasswordSubmit} className="login-form">
          {/* Implement Forgot Password Form */}
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          {/* Implement Login Form */}
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Log In</button>
          <p onClick={handleForgotPasswordClick} className="forgot-password-link">
            Forgot Password?
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;

