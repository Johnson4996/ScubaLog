import React from "react"
import { Route, Routes } from "react-router-dom"
import { DiveLogProvider } from "./components/divelog/DiveLogProvider"
import { DiveLogList } from "./components/divelog/DiveLogList"
import { DiveLogAll } from "./components/divelog/DiveLogAll"
import { DiveLogDetail } from "./components/divelog/DiveLogDetail"
import { DiveLogForm } from "./components/divelog/DiveLogForm"
import { SuitTypeProvider } from "./components/suittype/SuitTypeProvider"
import { TankTypeProvider } from "./components/tanktype/TankTypeProvider"
import { WishlistProvider } from "./components/wishlist/WishlistProvider"
import { WishListRender } from "./components/wishlist/WishRender"
import { WishListForm } from "./components/wishlist/WishListForm"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const ApplicationViews = () => {

    const MapMarkerIcon = new L.DivIcon({
        className: 'map-marker',
        iconSize: [10, 10], // Adjust size to fit the SVG properly
        iconAnchor: [15, 42], // Position the "tip" of the marker
        popupAnchor: [0, -42], // Position the popup above the marker
    });

    return (
        <WishlistProvider>
            <DiveLogProvider>
                <SuitTypeProvider>
                    <TankTypeProvider>
                        <Routes>
                            <Route exact path="/" element={
                                <div className="dashboard-top">
                                    {/* <h2>Dashboard</h2>
                                    <div className="line"></div> */}
                                    <div className="container">
                                        <div className="top-content">
                                            <DiveLogList />
                                        </div>
                                        {/* <div className="bottom-content">
                                            <WishListRender />
                                        </div> */}
                                    </div>
                                    <div style={{ height: '100vh', width: '75vw' }}>
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

                            <Route path="/divelog/:diveLogId" element={<DiveLogDetail />} />
                            <Route path="/divelog/all" element={<DiveLogAll />} />
                            <Route path="/divelog/new" element={<DiveLogForm />} />
                            <Route path="/divelog/edit/:diveLogId" element={<DiveLogForm />} />

                            <Route path="/wishlist/new" element={<WishListForm />} />
                            <Route path="*" element={<div>Page Not Found</div>} />
                        </Routes>
                    </TankTypeProvider>
                </SuitTypeProvider>
            </DiveLogProvider>
        </WishlistProvider>
    )
}
