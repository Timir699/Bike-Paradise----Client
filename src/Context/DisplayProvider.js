import { createContext, useEffect, useState } from "react";

export const DisplayContext = createContext()

const DisplayProvider = ({children}) => {
    const [displayBikes, setDisplayBikes] = useState([])

    useEffect(() => {
        fetch('https://bike-paradise.herokuapp.com/api/businessPackages')
        .then( res => res.json())
        .then(data => setDisplayBikes(data))
    }, [])

    return (
        <DisplayContext.Provider value={{displayBikes, setDisplayBikes}} >
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayProvider