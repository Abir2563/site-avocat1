import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavAdmin from '../Navadmin';
import './ReadAppointment.css';

function ReadAppointment() {
    const [appointment, setAppointment] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('No token found');
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.get(`http://localhost:8080/api/appointment/${id}`, config)
             .then(res => {
                console.log('Data received:', res.data);
                setAppointment(res.data);
             })
             .catch(err => {
                console.error('Error fetching data:', err);
             });
    }, [id]);

    return (
        <div>
            <NavAdmin />
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                    <h3>Appointment Details</h3>
                    <div className="mb-2">
                        <strong>Full Name: {appointment.fullName}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Email: {appointment.email}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Contact Number: {appointment.contactNumber}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Service Offered: {appointment.serviceOffered}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Chosen Service: {appointment.chosenService}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Appointment Category: {appointment.appointmentCategory}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>About the Appointment: {appointment.aboutAppointment}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Documents: {appointment.documents}</strong>
                    </div>
                   
                    <div className="mb-2">
                        <strong>Date :{appointment.appointmentDetails && appointment.appointmentDetails.date ? new Date(appointment.appointmentDetails.date).toISOString().split('T')[0] : ''}</strong>
                    </div>

                    <div className="mb-2">
                        <strong>Time: {appointment.appointmentDetails ? appointment.appointmentDetails.time : ''}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Location: {appointment.appointmentDetails ? appointment.appointmentDetails.location : ''}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Time to Reach: {appointment.appointmentDetails ? appointment.appointmentDetails.timeToReach : ''}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Consultation: {appointment.consultation}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Status: {appointment.status}</strong>
                    </div>
                  

                    <Link to="/apppoint" className="btn btn-primary ms-3">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default ReadAppointment;
