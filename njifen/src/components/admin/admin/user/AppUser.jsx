import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navadmin from '../Navadmin';
import '../liste.css';

function AppUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Get token from localStorage
        const token = localStorage.getItem("token");
    
        // Check if token is missing
        if (!token) {
            console.error("Token is missing");
            // Return or handle the absence of token as per your requirement
            return;
        }
    
        // Set authorization header with token
        const config = {
            headers: {
                Authorization:` Bearer ${token}`,
            },
        };
    
        axios.get('http://localhost:8080/api/admin/', config)
        .then(res => {
            // Check if res.data.users is an array
            if (Array.isArray(res.data.users)) {
                setUsers(res.data.users);
            } else {
                console.error("Received data.users is not an array:", res.data.users);
            }
        })
        .catch(err => console.error("Error fetching users:", err));
    
    }, []);
    
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Souhaitez-vous supprimer cet utilisateur ?");
        if (confirmDelete) {
            // Add token to delete request headers
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization:` Bearer ${token}`,
                },
            };

            axios.delete(`http://localhost:8080/api/admin/${id}`, config)
                .then(() => {
                    // Refresh the list of users after deletion
                    setUsers(users.filter(user => user._id !== id));
                })
                .catch(err => console.error("Error deleting user:", err));
        }
    };

    return (
        <div>
        <div>
        <Navadmin />
        </div>
        <div className='user-bk'>
            <h1 >Users List</h1>
            <div className='user-table'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Ajouter+</Link>
                </div>
                <table className='table-u '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
    {users.map((user) => (
        <tr key={user._id} >
            <td>{user._id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
          
                <div className='option-l-m-s'>
                <Link to={`/users/${user._id}`}>
                    <button className='btn-lire'>Read</button>
                </Link>
                <button onClick={() => handleDelete(user._id)} className='btn-supprimer'>Delete</button>
                </div>
            </td>
        </tr>
    ))}
</tbody>

                </table>
            </div>
        </div>
        </div>
    );
}

export default AppUser