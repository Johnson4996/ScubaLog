import React from "react"
import {Route} from "react-router-dom"
import { DiveLogProvider } from "./divelog/DiveLogProvider"
import { DiveLogList } from "./divelog/DiveLogList"
import { DiveLogAll } from "./divelog/DiveLogAll"


export const ApplicationViews = () =>{
    return (
        <>
        
            <DiveLogProvider>
                <Route exact path="/">
                    <DiveLogList />
                </Route>
                <Route path="/divelog/:diveLogId(\d+)" render={
                            props => <DiveLogDetail {...props} />
                        } />
                        <Route exact path="/divelog/all">
                            <DiveLogAll />
                        </Route>
            </DiveLogProvider>


        </>

    )
}
