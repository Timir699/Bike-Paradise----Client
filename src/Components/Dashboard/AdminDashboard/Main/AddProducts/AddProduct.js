import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const { register, handleSubmit, reset  } = useForm();

    const onSubmit = formResult => {
        reset()
    };

    return (
        <div className="mt-5">
            <div className="MakeAdmin text-center">
                <h2>Add a new product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("title")} placeholder="Product Title you want to add" />
                            <br />
                            <input type="text" {...register("details")} placeholder="Product Details"/>
                            <br />
                            <input type="number" {...register("price")} placeholder="Product Price"/>
                            <br />
                            <input type="number" {...register("image")} placeholder="Product Image"/>
                            <br />
                            <input className="submit" type="submit" />
                        </form>
                </div>
            );
        </div>
        );
};

export default AddProduct;