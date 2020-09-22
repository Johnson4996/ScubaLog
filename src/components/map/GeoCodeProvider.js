import React, { useEffect, useState } from "react"


export const GeoCodeContext  = React.createContext()

export const GeoCodeProvider = (props) =>{
    const [latLong, setLatLong] = useState([])
   

    const getLatLong = (location) =>{
        
            return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=7706b1cbc9874da9a15331f9bf55b3f2&limit=1`)
                .then(res => res.json())
                .then(setLatLong)
                
        }

    
        return (
            <GeoCodeContext.Provider value={{
                latLong, getLatLong
            }}>
                {props.children}
            </GeoCodeContext.Provider>
        )
        
}
