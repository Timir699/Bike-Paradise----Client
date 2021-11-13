import { useContext } from "react"
import {DisplayContext} from '../Context/DisplayProvider'


const useDisplay = () => {
    return useContext(DisplayContext)
}

export default useDisplay