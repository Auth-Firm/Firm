// Register.js
import React, { useState } from 'react';
import './Register.css';
import EyeSlash from './eye-slash.svg';
import Eye from './eye.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    otp: '',
    isOtpVerified: false,
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOtpVerification = () => {
    // Simulate OTP verification logic
    // In a real application, you would send the OTP to a server for validation
    // and update isOtpVerified accordingly
    setFormData({
      ...formData,
      isOtpVerified: true,
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
    <>
    <div className="register-app">
      <div className="header-box">
        <img
          src={require("./logo.png")}
          alt=""
          className="firm-icon"
        />
        <h1>Firm</h1>
      </div> 
      <div className="header-register-button-box">
        <div className="column-div">
      <button className="login-button">
      <img
            src={require("./user.jpg")}
            alt="Login Icon"
            className="login-button-img"
          />
        </button>
        <span style={{ fontSize: 12, marginLeft: 5 }}>Login</span>
        </div>
        </div>
    </div>
    <div className="register-container">
        <div className='registeration-info-container' >
            <span style={{ fontSize: 20, fontWeight: 'bold'}}>Register for a Firm account</span>
            <p>Firm will collect your contact and account information to create your Firm account. We use your personal data to identify you and to provide you with information, support, and customer service.</p> 
        </div>
        <div className='login-information-container'>
        <div className="form-group">
          <label>
            Username
            <span className="required">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

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
              {formData.showPassword ? <img className='eye-image' src={EyeSlash} alt="" /> : <img className='eye-image' src={Eye} alt="" />}
            </button>
          </div>
        </div>
        </div>
        <div className="line-container"></div>
    <div className="personal-information-container">
      <form onSubmit={handleSubmit}>
        {/* Basic user information */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* OTP verification */}
        {!formData.isOtpVerified && (
          <div className="otp-group">
            <div className="form-group otp-input">
              <label>Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="otp-button"
              onClick={handleOtpVerification}
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Submit button */}
        <button className="submit-button" type="submit">Register</button>
      </form>
    </div>
    <div className="line-container"></div>
    </div>
    </>
  );
};

export default Register;
