import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import useDisplay from "../../../../../Hooks/useDisplay"

const AddProduct = () => {
    const {displayBikes, setDisplayBikes} = useDisplay();

    const { register, handleSubmit, reset  } = useForm();

    const onSubmit = formResult => {
        fetch("http://localhost:5000/api/businessPackages", { 
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formResult)
        })
        .then (data => {
            fetch("http://localhost:5000/api/businessPackages")
            .then ( res => res.json())
            .then( data => {
                console.log(data);
                setDisplayBikes(data)
                reset()
            })
        })
    };

    return (
        <div className="mt-5">
            <div className="MakeAdmin text-center">
                <h2>Add a new product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("title")} placeholder="Product Title you want to add" />
                            <br />
                            <input type="text" {...register("description")} placeholder="Product Details"/>
                            <br />
                            <input type="number" {...register("price")} placeholder="Product Price"/>
                            <br />
                            <input type="text" {...register("image")} placeholder="Product Image"/>
                            <br />
                            <input className="submit" type="submit" />
                        </form>
                </div>
            );
        </div>
        );
};

export default AddProduct;