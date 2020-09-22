import React, { useContext } from "react"
import {GeoCodeContext} from "./GeoCodeProvider"
import {LogContext} from "../divelog/DiveLogProvider"

export const MapRender = () =>{
    const {diveLogs} = useContext(LogContext)
    const {latLong, getLatLong} = useContext(GeoCodeContext)
    

    diveLogs.map(dl =>{
        //getLatLong(dl.location)
        //console.log(latLong) -- returns an endless log of api calls
    })

    

    return <h2>GeoCode Render</h2>
}