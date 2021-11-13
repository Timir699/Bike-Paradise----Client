import { createContext, useEffect, useState } from "react";


export const ReviewContext = createContext()

const ReviewProvider = ({ children }) => {
    const [Reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/reviews')
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