import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Protected() {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/protected', {
                    headers: {
                        Authorization: localStorage.getItem('token'), 
                    },
                });
                setMessage(response.data.message);
                setUser(response.data.user);
            } catch (error) {
                console.error('Access denied:', error.response.data.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Protected Page</h2>
            <p>{message}</p>
            {user && (
                <div>
                    <h3>User Information</h3>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                </div>
            )}
        </div>
    );
}

export default Protected;
