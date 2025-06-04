import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavAdmin from '../Navadmin';

function Create() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token'); // Retrieve the token from local storage

        if (!token) {
            setError("No authentication token found.");
            return;
        }

        axios.post('http://localhost:8080/api/admin/add', formData, {
            headers: {
                Authorization: `Bearer ${token}` // Use the token in the Authorization header
            }
        })
        .then(res => {
            console.log("User created:", res.data);
            setUserId(res.data.userId);
            navigate('/appuser');
        })
        .catch(err => {
            console.error("Error creating user:", err);
            setError(err.response.data.message || "Error creating user. Please try again.");
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <NavAdmin/>
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/appuser" className="btn btn-primary ms-3">Back</Link>
                </form>

                {userId && <p>User ID created: {userId}</p>}
                {error && <p className="text-danger">{error}</p>}
            </div>
        </div>
    );
}

export default Create;
