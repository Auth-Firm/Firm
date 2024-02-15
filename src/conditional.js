import React, { useState } from 'react';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, you can call an API or validate credentials
    // For simplicity, let's assume the login is successful
    handleLogin();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page!</h1>
    <p>You have successfully logged in.</p>
  </div>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform any necessary login actions
    // For simplicity, let's just set loggedIn to true
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <HomePage />
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
