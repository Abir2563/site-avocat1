import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const CreateConsultation = () => {
    const [values, setValues] = useState({
        client: '',
        appointment: '',
        status: 'En attente', // Default status
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/consultation/add', values)
            .then((res) => {
                console.log(res);
                navigate('/consultations'); // Redirect to the list of consultations
            })
            .catch((err) => console.error("Error creating consultation:", err));
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Create a New Consultation</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="client">Client:</label>
                        <input
                            type="text"
                            name="client"
                            className="form-control"
                            placeholder="Enter client ID"
                            value={values.client}
                            onChange={(e) => setValues({ ...values, client: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="appointment">Appointment:</label>
                        <input
                            type="text"
                            name="appointment"
                            className="form-control"
                            placeholder="Enter appointment ID"
                            value={values.appointment}
                            onChange={(e) => setValues({ ...values, appointment: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                    <Link to="/consultations" className="btn btn-primary ms-3 mt-3">Back</Link> {/* Return link */}
                </form>
            </div>
        </div>
    );
};

export default CreateConsultation;
