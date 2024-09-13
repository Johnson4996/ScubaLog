

//Renders the details page for a dive log

import React, { useContext } from "react"
import { LogContext } from "./DiveLogProvider"
import { DiveLog } from "./DiveLog"
import {Link} from "react-router-dom"



export const DiveLogDetail = (props) => {
    const { diveLogs, deleteLog } = useContext(LogContext)

    const chosenDiveLog = parseInt(props.match.params.diveLogId)
    const diveLog = diveLogs.find(l => l.id === chosenDiveLog) || {}


    //send dive log to HTML rep component and render buttons 
    return (
        <>
        <div className="backToDash">
        <Link className="log-link" to={{ pathname: `/`, }}>
                <p>back</p>
            </Link>
            <p>Dashboard</p>
            </div>
            <div className="editDelContainer">
            <p className="log-link editBtn" onClick={() => {props.history.push(`/divelog/edit/${diveLog.id}`)}}>Edit</p>
            <p className="log-link delBtn" onClick={() => deleteLog(diveLog.id).then(() => props.history.push("/divelog/all"))}>Delete</p>
            </div>
            <DiveLog key={diveLog.id} diveLog={diveLog} />
            
        </>
    )



}