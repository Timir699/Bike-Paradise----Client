import React from 'react';
import './UserReview.css'
import { useForm } from "react-hook-form";
import useReview from '../../../../../Hooks/useReview'
import useAuth from '../../../../../Hooks/useAuth';

const UserReview = () => {

    const { register, handleSubmit, reset  } = useForm();
    const { setReviews} = useReview();
    
    const {user} = useAuth()
    const email = user.email

    const onSubmit = data => {
        
        fetch("https://bike-paradise.herokuapp.com/api/reviews", { 
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...data, email})
        })
        .then (data => {
            fetch("https://bike-paradise.herokuapp.com/api/reviews")
            .then ( res => res.json())
            .then( data => {
                console.log(data);
                setReviews(data)
                reset()
            })
        })
        alert('review added successfully information')
    };

    return (
        <div className="UserReview text-center">
            <h2>Add A Review here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title")} placeholder="Bike Name You want to review" />
                <br />
                <input type="text" {...register("description")} placeholder="Review Description"/>
                <br />
                <input type="number" {...register("rating")} placeholder="Rating choose any number from 0-5"/>
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default UserReview;