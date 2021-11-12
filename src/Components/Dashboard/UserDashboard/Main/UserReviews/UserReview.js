import React from 'react';
import './UserReview.css'
import { useForm } from "react-hook-form";

const UserReview = () => {

    const { register, handleSubmit, reset  } = useForm();

    const onSubmit = formResult => {
        reset()
    };
    return (
        <div className="UserReview text-center">
            <h2>Add A Review here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Bike Name You want to review" />
                <br />
                <input type="text" {...register("reviewDetails")} placeholder="Review Description"/>
                <br />
                <input type="number" {...register("reviewDetails")} placeholder="Rating choose any number from 0-5"/>
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default UserReview;