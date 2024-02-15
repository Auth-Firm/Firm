// Register.js
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    // ... (existing state)
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data or perform further actions here
    console.log(formData);
  };

  return (
    <div className="container-wrapper">
      <div className="register-container">
        {/* ... (existing code) */}
        
        {/* Password field with eye button */}
        <div className="form-group">
          <label>Password</label>
          <div className="password-input-container">
            <input
              type={formData.showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="eye-button"
              onClick={handleTogglePassword}
            >
              {formData.showPassword ? '👁️' : '👁️'}
            </button>
          </div>
        </div>
        
        {/* ... (remaining form fields) */}
      </div>
      <div className="line-container"></div>
    </div>
  );
};

export default Register;
