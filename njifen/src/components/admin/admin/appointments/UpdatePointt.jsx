import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./update.css"; // Import CSS file
import Navadmin from '../Navadmin';
function UpdateAppointmentStatus() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const token = localStorage.getItem('token'); // Get token from local storage

    useEffect(() => {
        axios.get(`http://localhost:8080/api/appointment/${id}`, { // Send token with GET request
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setStatus(res.data.status);
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data.message || "An error occurred");
            });
    }, [id, token]);

    const handleConfirm = () => {
        axios.put(`http://localhost:8080/api/appointment/confirm/${id}`, null, { // Send token with PUT request
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                navigate('/AppPoint');
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data.message || "An error occurred");
            });
    };

    const handleDeny = () => {
        axios.put(`http://localhost:8080/api/appointment/deny/${id}`, null, { // Send token with PUT request
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                navigate('/AppPoint');
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data.message || "An error occurred");
            });
    };

    return (
        <div>
             <Navadmin />
        <div className='container'>
            <div className='moraba3'>
                <h1 className='title'>Update Appointment Status</h1>
                {error && <div className="error">{error}</div>}
                <div>
                    <h3>Status: {status}</h3>
                </div>
                <div className='button-group'>
                    <button onClick={handleConfirm} className='btn btn-success button'>Confirm</button>
                    <button onClick={handleDeny} className='btn btn-danger button'>Deny</button>
                    <Link to='/AppPoint' className='btn btn-primary button'>Back</Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UpdateAppointmentStatus;
