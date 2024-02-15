// AdditionalFields.js
import React, { useState } from 'react';
import './AdditionalFields.css';

const AdditionalFields = () => {
  const [additionalFormData, setAdditionalFormData] = useState({
    firmName: '',
    address: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFormData({
      ...additionalFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the additional form data or perform further actions here
    console.log(additionalFormData);
  };

  return (
    <div className="additional-fields-container">
      <h2>Additional Fields</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Firm Name</label>
          <input
            type="text"
            name="firmName"
            value={additionalFormData.firmName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={additionalFormData.address}
            onChange={handleChange}
          />
        </div>

        {/* Add other fields as needed */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdditionalFields;
