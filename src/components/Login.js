

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log(response.data);
            const { token } = response.data
            localStorage.setItem('token', token); 
            console.log('Login successful');
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>

            <div>
                <p className=' mt-3 font-bold'>Don't Have Verified Hiring Accout ?
                    <Link to="/signup">Sign Up Now</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
