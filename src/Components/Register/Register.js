import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import './Register.css'

const Register = () => {

    const firebase = useContext(AuthContext)

    const {setRegisterLogin, user, registerLogin, createWithEmail, setSuccess, success, error} = firebase

    const { register, handleSubmit, reset } = useForm();

    
    const onSubmit = data => {
        setSuccess('')
        setRegisterLogin({
           name: data.name,
           email: data.email,
           password: data.password,
        });
        if(registerLogin.name && registerLogin.email && registerLogin.password) {
            createWithEmail()
            setSuccess('registered successfully')
            reset()
        }
    }
    
    return (
        <div className="text-center mt-3">
            <Container>
                <h2>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-50 mt-2" type="text" {...register("name")} placeholder="Name" />
                    <br />
                    <input className="w-50 my-3" type="email" {...register("email")} placeholder="Email" require />
                    <br />
                    <input className="w-50" type="password" {...register("password")} placeholder="Password Must be 6 digits" require />
                    <br />
                    <p className="text-success"> {success}</p>
                    <p className="text-danger"> {error}</p>
                    <Button className="mt-2" type="submit">Register</Button>
                </form>
            </Container>
        </div>
    );
};

export default Register;