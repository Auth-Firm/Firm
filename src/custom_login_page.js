import React, { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowPassword(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCrossClick = () => {
    setShowPassword(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <label>Username:</label>
      <div className="username-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          readOnly={showPassword}
        />
        {showPassword && (
          <button className="cross-button" onClick={handleCrossClick}>
            &#10006;
          </button>
        )}
      </div>

      {showPassword && (
        <>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </>
      )}

      <button onClick={handleLoginClick}>
        {showPassword ? 'Login' : 'Show Password'}
      </button>
    </div>
  );
};

export default LoginForm;
