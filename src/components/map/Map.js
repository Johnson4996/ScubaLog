import React, { useContext, useEffect, useState } from "react"
import {LogContext} from "../divelog/DiveLogProvider"
import {Map} from "mapbox-gl"


export const MapRender = (props) =>{
    const {diveLogs} = useContext(LogContext)
    const [latLong, setLatLong] = useState([])
    const []
    
    let allLatLong = []

    useEffect(()=>{
        diveLogs.map(dl =>{
            // return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${dl.location}&key=7706b1cbc9874da9a15331f9bf55b3f2&limit=1`)
            //     .then(res => res.json())
            //     .then(parsedRes => setLatLong(parsedRes.results[0].geometry))
            
            
        })
    },[diveLogs])

   
    return (
        <Map>

        </Map>
    )
