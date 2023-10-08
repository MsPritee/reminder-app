import React, { useState } from 'react';
import axios from 'axios';


function Signup() {
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
            const response = await axios.post('http://localhost:5000/signup', formData);
            if (response.status === 201) {
                console.log('Signup successful');

            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Signup failed:', error.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
