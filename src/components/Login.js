

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css'
import Person from './Images/UN.png'
import Eye from './Images/eye1.png'
import Key from './Images/key.png'


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
        <>
            <div className='login-container mx-auto  '>
                <div className='login-box rounded  px-8 py-12 '>
                    <div className='items-center mt-3 flex flex-col'>
                        <h2>Sign In</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='input-container'>
                                <label className='mb-2'>Username</label>
                                <div className="email-input-container">
                                    <span className="person  h-5 w-5" >
                                        <img src={Person} />
                                    </span>
                                    <input className='username-input' type="text" name="username" onChange={handleChange} />
                                </div>
                            </div>

                            <div className='input-container'>
                                <label className='mb-2'>Password</label>
                                <div className='Password-container'>
                                    <span className="key h-5 w-5 ">
                                        <img src={Key} />
                                    </span>
                                    <input className='password-input' type="password" name="password" onChange={handleChange} />
                                    <span className="eye h-5 w-5 mr-3" >
                                        <img src={Eye} alt="Toggle Password" />
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 my-2 w-full'>
                                {/* <button className='forgot-btn cursor-pointer font-bold' >Forgot Password</button> */}
                                <button className='submit-btn cursor-pointer' type='submit' >Sign In</button>
                            </div>

                        </form>
                    </div>

                        <p className=' mt-3 font-bold'>Don't Have Verified Accout ?
                            <Link to="/signup">Sign Up Now</Link>
                        </p>
   
                </div>
            </div >
        </>
    );
}

export default Login;
