import React from 'react'
import {useLocation} from "react-router-dom"

function Userdetails() {

    const location = useLocation();

    return (
        <div>
            <p>{location.state.location.city}</p>
            <p>{location.state.location.country}</p>
            <p>{location.state.phone}</p>
            
        </div>
    )
}

export default Userdetails
