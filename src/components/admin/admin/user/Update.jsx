import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => {
                setValues({
                    name: res.data.name,
                    email: res.data.email
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Mettre à jour l'utilisateur</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor='name'>Nom:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter Name' value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email' value={values.email}
                            onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <button type='submit' className='btn btn-success'>Mettre à jour</button>
                    <Link to='/appuser' className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Update;
