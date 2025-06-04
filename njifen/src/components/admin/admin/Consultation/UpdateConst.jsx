import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Generic input component
const TextInput = ({ label, name, type = "text", value, onChange }) => (
  <div className="mb-2">
    <label htmlFor={name}>{label}:</label>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={`Enter ${label}`}
      value={value}
      onChange={onChange}
    />
  </div>
);

function UpdateConsultation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        client: "",
        appointment: "",
        status: "",
    });

    useEffect(() => {
        console.log("Requesting consultation with ID:", id);
        axios
            .get(`http://localhost:8000/api/consultation/${id}`)
            .then((res) => {
                console.log("Server response:", res);
                if (res.data) {
                    console.log("Consultation data:", res.data);
                    setValues({
                        client: res.data.client || "",
                        appointment: res.data.appointment || "",
                        status: res.data.status || "",
                    });
                } else {
                    console.error("No data received");
                }
            })
            .catch((err) => console.error("Error fetching consultation:", err));
    }, [id]);
    

    const handleUpdate = (event) => {
        event.preventDefault();
        
        // Simple validation
        if (!values.client || !values.appointment) {
            console.error("Client and appointment IDs must not be empty");
            return;
        }

        axios.put(`http://localhost:8000/api/consultation/update/${id}`, values)
            .then(() => {
                navigate("/consultations"); // Return to the list of consultations
            })
            .catch((err) => console.error("Error updating consultation:", err));
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Update Consultation</h1>
                <form onSubmit={handleUpdate}>
                    <TextInput
                        label="Client"
                        name="client"
                        value={values.client}
                        onChange={(e) => setValues({ ...values, client: e.target.value })}
                    />
                    <TextInput
                        label="Appointment"
                        name="appointment"
                        value={values.appointment}
                        onChange={(e) => setValues({ ...values, appointment: e.target.value })}
                    />
                    <TextInput
                        label="Status"
                        name="status"
                        value={values.status}
                        onChange={(e) => setValues({ ...values, status: e.target.value })}
                    />
                    <button type="submit" className="btn btn-success">Update</button>
                    <Link to="/consultations" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    );
}

export default UpdateConsultation;
