import React, { useContext } from 'react';
import './MakeAdmin.css'
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, reset  } = useForm();

    const onSubmit = formResult => {
        const role = 'admin'
        const data = {...formResult, role}
        fetch('https://bike-paradise.herokuapp.com/api/users', {
            method: 'POST',
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        reset()
    };
    return (
        <div className="MakeAdmin text-center">
            <h2>make an admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="Email address of admin" />
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;