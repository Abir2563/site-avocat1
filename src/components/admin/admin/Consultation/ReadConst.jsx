import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ReadConsultation = () => {
    const [consultation, setConsultation] = useState(null);
    const { id } = useParams(); // Get the consultation ID from the URL

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/consultation/${id}`) // URL to fetch consultation details
            .then((res) => setConsultation(res.data)) // Update state with received data
            .catch((err) => console.error("Error fetching consultation:", err));
    }, [id]); // This effect hook runs when there's a change in ID

    if (!consultation) {
        return (
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                Loading...
            </div>
        ); // Show a loading message while data is being fetched
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h3>Consultation Details</h3>
                <div className="mb-2">
                    <strong>Client: {consultation.client}</strong> {/* Display client details */}
                </div>
                <div className="mb-2">
                    <strong>Status: {consultation.status}</strong> {/* Display consultation status */}
                </div>
                {/* You can display other details of the consultation similarly */}
                
                <Link to={`/updateconsultation/${id}`} className="btn btn-success">Update</Link>
                <Link to="/consultation" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    );
};

export default ReadConsultation;
