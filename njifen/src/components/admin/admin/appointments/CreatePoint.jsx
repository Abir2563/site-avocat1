import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CreateAppointment() {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        serviceOffered: '',
        chosenService: '',
        appointmentCategory: '',
        aboutAppointment: '',
        documents: '',
        chosenLawyer: '',
        appointmentDetails: {
            date: '',
            time: '',
            location: '',
            timeToReach: ''
        },
        consultation: '',
        status: '',
        statusMessage: ''
    });
    const [appointmentId, setAppointmentId] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/appointment/add', values) // Ensure the correct URL
            .then(res => {
                console.log(res);
                setAppointmentId(res.data._id); // Use the ID returned by the API
                navigate('/apppointment'); // Redirect to the appointment list
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Ajouter un rendez-vous</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2 '>
                        <label htmlFor='fullName'>Nom complet:</label>
                        <input type='text' name='fullName' className='form-control' placeholder='Enter Full Name'
                            value={values.fullName} onChange={e => setValues({ ...values, fullName: e.target.value })}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email'
                            value={values.email} onChange={e => setValues({ ...values, email: e.target.value })}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='contactNumber'>Numéro de contact:</label>
                        <input type='text' name='contactNumber' className='form-control' placeholder='Enter Contact Number'
                            value={values.contactNumber} onChange={e => setValues({ ...values, contactNumber: e.target.value })}></input>
                    </div>
                    {/* Add more fields here as needed */}
                    <button type='submit' className='btn btn-success'>Soumettre</button>
                    <Link to='/apppointment' className='btn btn-primary ms-3'>Retour</Link>
                </form>

                {/* Display the ID of the created appointment */}
                {appointmentId && <p>Appointment ID: {appointmentId}</p>}
            </div>
        </div>
    );
}

export default CreateAppointment;
