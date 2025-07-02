import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../liste.css";
import Navbar from '../../../navbar/navbar';
import NavAdmin from '../Navadmin';

const ConsultationListe = () => {
    const [consultations, setConsultations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchConsultations = async () => {
            try {
                // Add token to request headers
                const token = localStorage.getItem("token");
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await axios.get('http://localhost:8080/api/consult', config); // Fetch consultations endpoint
                setConsultations(response.data);
            } catch (err) {
                console.error("Error fetching consultations:", err);
                setError("Connection error: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConsultations();
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Do you want to delete this consultation?");
        if (confirmDelete) {
            // Add token to delete request headers
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios.delete(`http://localhost:8080/api/consult/${id}`, config) // Delete consultation endpoint
                .then(res => {
                    console.log("Consultation deleted:", res);
                    setConsultations(consultations.filter(consultation => consultation._id !== id));
                })
                .catch(err => console.error("Error deleting consultation:", err));
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavAdmin />
            <div className="user-bk">
                <h1>List of Consultations</h1>
                <div className="user-table">
                    {consultations.length === 0 ? (
                        <p>No consultations found.</p>
                    ) : (
                        <table className="table-u">
                            <thead>
                                <tr>
                                    <th>Client Name</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consultations.map((consultation) => (
                                    <tr key={consultation._id}>
                                        <td>{consultation.clientName}</td>
                                        <td>{consultation.appointmentTime}</td>
                                        <td>{new Date(consultation.appointmentDate).toLocaleDateString()}</td>
                                        <td>{consultation.consultaiontype}</td>
                                        <td>{consultation.status}</td>
                                        <td className="option-l-m-s">
                                            <button onClick={() => handleDelete(consultation._id)} className="btn-supprimer">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <Link to="/appadmin" className="btn-success">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ConsultationListe;
