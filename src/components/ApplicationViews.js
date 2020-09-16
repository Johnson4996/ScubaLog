import React from "react"
import { Route } from "react-router-dom"
import { DiveLogProvider } from "./divelog/DiveLogProvider"
import { DiveLogList } from "./divelog/DiveLogList"
import { DiveLogAll } from "./divelog/DiveLogAll"
import { DiveLogDetail } from "./divelog/DiveLogDetail"
import { DiveLogForm } from "./divelog/DiveLogForm"
import { SuitTypeProvider } from "./suittype/SuitTypeProvider"
import { TankTypeProvider } from "./tanktype/TankTypeProvider"


export const ApplicationViews = () => {
    return (
        <>

            <DiveLogProvider>
                <SuitTypeProvider>
                    <TankTypeProvider>
                        <Route exact path="/">
                            <DiveLogList />
                        </Route>
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
                    </TankTypeProvider>
                </SuitTypeProvider>
            </DiveLogProvider>


        </>

    )
}
