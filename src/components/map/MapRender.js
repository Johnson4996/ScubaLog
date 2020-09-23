import React from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import Settings from "../Settings"
import mapSyles from "./MapStyles"

export const MapRender =(props) => {

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
            ></GoogleMap>
        </div>
    )
  }
  
 