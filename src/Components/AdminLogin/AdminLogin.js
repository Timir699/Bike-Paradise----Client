import React from 'react';
import { useForm } from 'react-hook-form';

const AdminLogin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = formResult => {
        const role = 'admin'
        const data = {...formResult, role}
        fetch('https://bike-paradise.herokuapp.com/api/users', {
            method: 'POST',
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} />
                <br />
                <input type="password" {...register("password")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AdminLogin;