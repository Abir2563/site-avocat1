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
        axios.get(`https://avocat-backend.onrender.com/api/admin/${id}`, config)
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
                    <h3>Détails de client</h3>
                    <div className="mb-2">
                        <strong>Nom & Prénom: <span style={{ color: '#808080' }}>{data.name}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Email: <span style={{ color: '#808080' }}>{data.email}</span></strong>
                    </div>
                    <div className="mb-2">
                        <strong>Rôle: <span style={{ color: '#808080' }}>{data.role}</span></strong>
                    </div>
                    {/* <Link to="/update" className="btn btn-success">Mettre à jour</Link> */}
                    <br/>
                    <Link to="/appuser" className="btn btn-primary ms-3">Retour</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;
