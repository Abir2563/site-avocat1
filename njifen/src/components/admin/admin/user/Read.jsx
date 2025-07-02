import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavAdmin from "../Navadmin";


function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        
            // Retrieve the token from local storage
            const token = localStorage.getItem('token');
    
            if (!token) {
                console.error('No token found');
                return; // Exit if no token is found
            }
    
            // Configure axios to send the token in the header of the request
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
        axios.get(`http://localhost:8080/api/admin/${id}`, config)
             .then(res => { 
                console.log("waaaa",res);
                setData(res.data.user); 
                // Access the user object in the response data
             })
             .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <NavAdmin />
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                    <h3>Détail de l'utilisateur</h3>
                    <div className="mb-2">
                        <strong>Nom: {data.name}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Email: {data.email}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Rôle: {data.role}</strong>
                    </div>
                    {/* <Link to="/update" className="btn btn-success">Mettre à jour</Link> */}
                    <Link to="/appuser" className="btn btn-primary ms-3">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;
