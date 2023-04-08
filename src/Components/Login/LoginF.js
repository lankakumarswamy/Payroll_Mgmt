import React, { useState } from 'react';
import './LandR.css';
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { toast, ToastContainer } from 'react-toastify';


const LoginForm = () => {

    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    function handleIDChange(event) {
        setID(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
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
            setError('id is required');
            return;
        }

        if (!password) {
            setError('Password is required');
            return;
        }
        if (!Email) {
            setError('Password is required');
            return;
        }
        axios.get('https://localhost:44332/api/Login', {
            params: {
                LoginId: id,
                LoginPassword: password,
                EmailId: Email,
                Users: userType
            }
        })
            .then(response => {
                console.log(response.data)
                
                if (response.data.LoginId == id && response.data.LoginPassword == password && response.data.Users === userType) {
                    
                    if (userType === 'Employee') {
                        navigate('/employee/');
                    } else if (userType === 'Admin') {
                        navigate('/admin/');
                    }
                } else {
                    setError('Incorrect username or password or invalid UserType');
                }
            })
            .catch(error => {
                console.log(error);
                // If user data is not found or the password does not match, display an error message to the user
                setError('Incorrect username or password');
            });
    }


    return (
        <div className="login-page">

            <div className="login-form">
                <h2> Login</h2>


                <form onSubmit={handleSubmit} >

                    <label>
                        ID:
                        <input type="text" value={id} placeholder='ID' onChange={handleIDChange} />
                    </label>

                    <label>
                        Password:
                        <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                    </label>

                    <label>
                        EmilId:
                        <input type="Email" value={Email} placeholder='Email' onChange={handleEmailChange} />
                    </label>

                    <label>
                        User Type:
                        <input
                            type="radio"
                            value="Employee"
                            checked={userType === 'Employee'}
                            onChange={handleUserTypeChange}
                        />
                        Employee
                        <input
                            type="radio"
                            value="Admin"
                            checked={userType === 'Admin'}
                            onChange={handleUserTypeChange}
                        />
                        Admin
                    </label>
                    <br />

                    <b />{error && <p>{error}</p>}
                    <button type="submit" onClick={handleSubmit}>Login</button>
                   <small>Dont have an account? <a href="/reg">Register</a></small>
                    

                </form>
            </div>
        </div>


    );
};
export default LoginForm;
