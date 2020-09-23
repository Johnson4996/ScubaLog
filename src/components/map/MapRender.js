import React, { useContext, useEffect, useState } from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import Settings from "../Settings"
import mapSyles from "./MapStyles"
import { LogContext } from '../divelog/DiveLogProvider';

export const MapRender =(props) => {
    const {diveLogs} = useContext(LogContext)
    const [latLong, setLatLong] = useState([])
    
    useEffect(()=>{
        diveLogs.map(dl =>{
            return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${dl.location}&key=7706b1cbc9874da9a15331f9bf55b3f2&limit=1`)
                .then(res => res.json())
                .then(parsedRes => setLatLong([parsedRes.results[0].geometry]))
            
            
        })
    },[diveLogs])





   const {isLoaded, loadError} = useLoadScript({
       googleMapsApiKey: Settings.apiKey
   })

   const mapContainerStyle = {
       width:'31rem',
       height: '24rem'
   }

   const center = {
       lat: 0,
       lng: 0
   }

   const options = {
    styles: mapSyles,
    disableDefaultUI: true
   }

   
  
   if(loadError) console.log("error loading maps")
   if(!isLoaded) return "Loading..."
    
    return(
        <div>
            <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            options = {options}
             zoom={1}
             center={center}
            >
                {
                    latLong.map(l =>(
                     <Marker key={l.lat}
                         position ={{lat: l.lat, lng: l.lng}} 
                         />
                    ))
                }
            </GoogleMap>
        </div>
    )
  }
  
 