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

        axios.get(`https://avocat-backend.onrender.com/api/appointment/${id}`, config)
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
                <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded ">
                    <h3> Détails Rendez-vous</h3>
                    <div className="mb-2">
                        <strong>Nom&Prénom:   <span style={{ color: '#808080' }}>  {appointment.fullName}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Email:<span style={{ color: '#808080' }}> {appointment.email}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Télèphone: <span style={{ color: '#808080' }}>{appointment.contactNumber}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Service Offer:<span style={{ color: '#808080' }}> {appointment.serviceOffered}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Type de service: <span style={{ color: '#808080' }}>{appointment.chosenService}</span></strong>
                    </div>
                    {/*<div className="mb-2">
                        <strong>Appointment Category: {appointment.appointmentCategory}</strong>
                    </div>*/}
                    {/*<div className="mb-2">
                        <strong>About the Appointment: {appointment.aboutAppointment}</strong>
                    </div>*/}
                    <div className="mb-2">
                        <strong>Documents: <span style={{ color: '#808080' }}>{appointment.documents}</span></strong>
                    </div>
                   
                    <div className="mb-2">
                        <strong>Date :<span style={{ color: '#808080' }}>{appointment.appointmentDetails && appointment.appointmentDetails.date ? new Date(appointment.appointmentDetails.date).toISOString().split('T')[0] : ''}</span></strong>
                    </div>

                    <div className="mb-2">
                        <strong>Heure:<span style={{ color: '#808080' }}>{appointment.appointmentDetails ? appointment.appointmentDetails.time : ''}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Localisation:<span style={{ color: '#808080' }}> {appointment.appointmentDetails ? appointment.appointmentDetails.location : ''}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Heure dispo: <span style={{ color: '#808080' }}>{appointment.appointmentDetails ? appointment.appointmentDetails.timeToReach : ''}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Consultation: <span style={{ color: '#808080' }}>{appointment.consultation}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Etat: <span style={{ color: '#808080' }}>{appointment.status}</span></strong>
                    </div><br/>
                    
                        <Link to="/apppoint" className="btn btn-primary ms-3 ">Retour</Link>
                    
                </div>
            </div>
        </div>
    );
}

export default ReadAppointment;
