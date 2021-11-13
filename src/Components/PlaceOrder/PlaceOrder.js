import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useDisplay from '../../Hooks/useDisplay';

const PlaceOrder = () => {
    const {} = useDisplay()

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if ( data.email === '' || data.address === '' || data.phone === '') {
            alert('enter valid shipping information')
        } else {
            console.log(data);
            reset()
            history.push('/orderConfirmed')
        }
    }
    return (

        <Container>
        <div className="text-center mt-3">
                <h2>Enter Your Shipping address</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-50 my-3" type="email" {...register("email")} placeholder="Email" required />
                    <br />
                    <input className="w-50 mt-2" type="text" {...register("address")} placeholder="Address" />
                    <br />
                    <br />
                    <input className="w-50" type="number" {...register("phone")} placeholder="Phone Number" require />
                    <br />
                    <Button className="mt-2" type="submit">Place Order</Button>
                </form>
            
        </div>

       
        </Container>
    );
};

export default PlaceOrder;