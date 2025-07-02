import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AppPoint.css';
import NavAdmin from '../Navadmin';

function AppPoint() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get token from localStorage
        const token = localStorage.getItem("token");

        // Check if token is missing
        if (!token) {
            console.error("Token is missing");
            // Return some error message or handle the absence of token as per your requirement
            setError("Token is missing");
            setLoading(false);
            return;
        }

        // Set authorization header with token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/appointment/', config);
                setAppointments(response.data);
            } catch (err) {
                setError("Erreur lors de la récupération des rendez-vous: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Souhaitez-vous supprimer ce rendez-vous ?");
        if (confirmDelete) {
            // Add token to delete request headers
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            axios
                .delete(`http://localhost:8080/api/appointment/${id}`, config)
                .then(() => {
                    setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment._id !== id));
                })
                .catch((err) => {
                    console.error("Erreur lors de la suppression du rendez-vous:", err);
                    setError("Erreur lors de la suppression du rendez-vous.");
                });
        }
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <NavAdmin />
            <div className="user-bk">
                <h1>Appointment List</h1>
                <div className="user-table">
                    {appointments.length === 0 ? (
                        <p>No Appointment Found</p>
                    ) : (
                        <table className="table-u">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>Proposed Service</th>
                                    <th>Chosen Service</th>
                                    <th>Category</th>
                                    <th>About</th>
                                    <th>Documents</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Arrival Time</th>
                                    <th>Consultation</th>
                                    <th>Status</th>
                                    <th>Status Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={appointment._id}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.fullName}</td>
                                        <td>{appointment.email}</td>
                                        <td>{appointment.contactNumber}</td>
                                        <td>{appointment.serviceOffered}</td>
                                        <td>{appointment.chosenService}</td>
                                        <td>{appointment.appointmentCategory}</td>
                                        <td>{appointment.aboutAppointment}</td>
                                        <td>{appointment.documents}</td>
                                        <td>{new Date(appointment.appointmentDetails.date).toLocaleDateString()}</td>
                                        <td>{appointment.appointmentDetails.time}</td>
                                        <td>{appointment.appointmentDetails.location}</td>
                                        <td>{appointment.appointmentDetails.timeToReach}</td>
                                        <td>{appointment.consultation}</td>
                                        <td>{appointment.status}</td>
                                        <td>{appointment.statusMessage}</td>
                                        <td className="option-l-m-s">
                                            <Link to={`/reada/${appointment._id}`}>
                                                <button className="btn-lire">Read</button>
                                            </Link>
                                            <Link to={`/updatea/${appointment._id}`}>
                                                <button className="btn-modifier">Edit</button>
                                            </Link>
                                            <button onClick={() => handleDelete(appointment._id)} className="btn-supprimer">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AppPoint;
