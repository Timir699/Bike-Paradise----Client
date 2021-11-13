import { useContext } from "react"
import { ReviewContext } from "../Context/ReviewProvider"

const useReview = () => {
    return useContext(ReviewContext)
}

export default useReview