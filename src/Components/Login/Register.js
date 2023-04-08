import React, { useState } from 'react';
import './LandR.css';
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { message } from 'antd';
import swal from 'sweetalert';


const RegistrationForm = () => {

  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleIDChange(event) {
    setID(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUserTypeChange(event) {
    setUserType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validate the form fields
    if (!id) {
      setError('ID is required');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!userType) {
      setError('User type is required');
      return;
    }

    axios.post('https://localhost:44332/api/Login', {
      LoginId: id,
      LoginPassword: password,
      EmailId: email,
      Users: userType
    })
      .then(response => {
        console.log(response.data);
        if (response.status === 201) {
          navigate('/');
          swal("Created","User created successfully","success");
          
        } else {
          setError('Error creating user account');
        }
      })
      .catch(error => {
        console.log(error);
        setError('Error creating user account');
      });
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input type="text" value={id} placeholder="ID" onChange={handleIDChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPasswordChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
          </label>
          <label>
            User Type:
            <input type="radio" value="Employee" checked={userType === 'Employee'} onChange={handleUserTypeChange} />
            Employee
            <input type="radio" value="Admin" checked={userType === 'Admin'} onChange={handleUserTypeChange} />
            Admin
          </label>
          <br />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" onClick={handleSubmit}>Register</button>
          <br />
          <small>Already have an account? <a href="/">Login</a></small>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
