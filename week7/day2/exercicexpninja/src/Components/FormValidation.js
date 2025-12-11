//Exercice 2
import React, { useState } from 'react';

function FormValidation() {
  const [formData, setFormData] = useState({
   FirstName: '',
    LstName: '',
    Phone: '',
    Email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //expression reguliere pour la validation de email et phone
    const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {};
    if(formData.FirstName.trim() === '') {
      newErrors.FirstName = 'First Name is required';
    }
    if(formData.LstName.trim() === '') {
        newErrors.LstName = 'Last Name is required';
    }
    if(!phoneRegex.test(formData.Phone)) {
        newErrors.Phone = 'Phone number must be 10 digits';
    }
    if(!emailRegex.test(formData.Email)) {
        newErrors.Email = 'Invalid email format';
    }
    setErrors(newErrors);
    if(Object.keys(newErrors).length > 0) {
      return;
    }
    console.log(formData);
  };
    return (
        <form onSubmit={handleSubmit}>
      <label >First Name:</label>
        <input type="text" name="FirstName"
          value={formData.FirstName}  onChange={handleChange}/>
          {errors.FirstName && <p style={{color: 'red'}}>{errors.FirstName}</p>}
        <br />
        <label>Last Name:</label>
        <input
          type="text" name="LstName"
          value={formData.LstName} onChange={handleChange} />
            {errors.LstName && <p style={{color: 'red'}}>{errors.LstName}</p>}
        <br />
        <label>Phone:</label>
        <input
          type="text"name="Phone"
          value={formData.Phone}onChange={handleChange}/>
            {errors.Phone && <p style={{color: 'red'}}>{errors.Phone}</p>}
        <br />
        <label>Email:</label>
        <input 
          type="text" name="Email" value={formData.Email}  onChange={handleChange} />
            {errors.Email && <p style={{color: 'red'}}>{errors.Email}</p>}
        <br />
        <button type="submit">Submit</button>
        </form>
    );
}
export default FormValidation;