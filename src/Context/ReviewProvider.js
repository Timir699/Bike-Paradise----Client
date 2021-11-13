import { createContext, useEffect, useState } from "react";


export const ReviewContext = createContext()

const ReviewProvider = ({ children }) => {
    const [Reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bike-paradise.herokuapp.com/api/reviews')
        .then( res => res.json())
        .then( data => setReviews(data))
    }, [])
    
    return (
        <ReviewContext.Provider value={{ Reviews, setReviews }} >
            {children}
        </ReviewContext.Provider>
    )
        
}

export default ReviewProvider