import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


export const ScubaLog = () =>(

<>
<Route render={() => {
    if (localStorage.getItem("activeUser")) {
        return (
            <>
                <img alt="logo" />
                <h2>Dashboard</h2>
                <Route render={props => <ApplicationViews {...props} />} />
            </>
        )
    } else {
        return <Redirect to="/login" />
    }
}} />

<Route path="/login" render={props => <Login {...props} />} />
<Route path="/register" render={props => <Register {...props} />} />
</>

)


