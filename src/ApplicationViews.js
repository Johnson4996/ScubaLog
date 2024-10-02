import React from "react"
import { Route, Routes } from "react-router-dom"
import { DiveLogProvider } from "./components/divelog/DiveLogProvider"
import { DiveLogList } from "./components/divelog/DiveLogList"
import { DiveLogAll } from "./components/divelog/DiveLogAll"
import { DiveLogDetail } from "./components/divelog/DiveLogDetail"
import { DiveLogForm } from "./components/divelog/DiveLogForm"
import { SuitTypeProvider } from "./components/suittype/SuitTypeProvider"
import { TankTypeProvider } from "./components/tanktype/TankTypeProvider"

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const ApplicationViews = () => {

    const MapMarkerIcon = new L.DivIcon({
        className: 'map-marker',
        iconSize: [10, 10], 
        iconAnchor: [15, 42], 
        popupAnchor: [0, -42], 
    });

    return (
        
            <DiveLogProvider>
                <SuitTypeProvider>
                    <TankTypeProvider>
                        <Routes>
                            <Route path="/" element={
                                <div className="dashboard-top">
                                    <div className="container">
                                        <div className="top-content">
                                            <DiveLogList />
                                        </div>
                                    </div>
                                    <div style={{ height: '100vh', width: '100vw' }}>
                                        <MapContainer 
                                            center={[0, 0]} 
                                            zoom={3} 
                                            scrollWheelZoom={true} 
                                            style={{ height: '100%', width: '100%' }}>
                                            <TileLayer
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            />
                                            <Marker position={[25.0443,-77.3504]} icon={MapMarkerIcon}/>
                                            <Marker position={[-33.918861, 18.423300]} icon={MapMarkerIcon}/>
                                            <Marker position={[41.01472,-83.93444]} icon={MapMarkerIcon}/>
                                            <Marker position={[36.2225,-86.44]} icon={MapMarkerIcon}/>
                                        </MapContainer>
                                    </div>
                                </div>
                            } />

                            <Route exact path="/divelog" element={<DiveLogAll />} />

                            <Route path="/divelogs/:diveLogId" element={<DiveLogDetail />} />
                   
                            <Route path="/divelogs/new" element={<DiveLogForm />} />

                            <Route path="/divelogs/edit/:diveLogId" element={<DiveLogForm />} />

                            <Route path="*" element={<div>Page Not Found</div>} />

                        </Routes>
                    </TankTypeProvider>
                </SuitTypeProvider>
            </DiveLogProvider>
    )
}
