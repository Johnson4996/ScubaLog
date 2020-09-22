import React from "react"
import { Route } from "react-router-dom"
import { DiveLogProvider } from "./divelog/DiveLogProvider"
import { DiveLogList } from "./divelog/DiveLogList"
import { DiveLogAll } from "./divelog/DiveLogAll"
import { DiveLogDetail } from "./divelog/DiveLogDetail"
import { DiveLogForm } from "./divelog/DiveLogForm"
import { SuitTypeProvider } from "./suittype/SuitTypeProvider"
import { TankTypeProvider } from "./tanktype/TankTypeProvider"
import { WishlistProvider } from "./wishlist/WishlistProvider"
import { WishListRender } from "./wishlist/WishRender"
import { WishListForm } from "./wishlist/WishListForm"
import { MapRender } from "./map/Map"
import { GeoCodeProvider } from "./map/GeoCodeProvider"


export const ApplicationViews = () => {
    return (
        <>

            <GeoCodeProvider>
                <WishlistProvider>
                    <DiveLogProvider>
                        <SuitTypeProvider>
                            <TankTypeProvider>
                                <h2>Dashboard</h2>
                                <div className="container">
                                    <Route exact path="/">
                                        <DiveLogList />
                                        <MapRender />
                                        <WishListRender />
                                    </Route>
                                </div>
                                <Route path="/divelog/:diveLogId(\d+)" render={
                                    props => <DiveLogDetail {...props} />
                                } />
                                <Route exact path="/divelog/all">
                                    <DiveLogAll />
                                </Route>
                                <Route exact path="/divelog/new" render={(props) => {
                                    return <DiveLogForm {...props} />
                                }} />
                                <Route path="/divelog/edit/:diveLogId(\d+)" render={
                                    props => <DiveLogForm {...props} />
                                } />
                                <Route exact path="/wishlist/new" render={
                                    props => <WishListForm {...props} />
                                } />
                            </TankTypeProvider>
                        </SuitTypeProvider>
                    </DiveLogProvider>
                </WishlistProvider>
            </GeoCodeProvider>

        </>

    )
}
