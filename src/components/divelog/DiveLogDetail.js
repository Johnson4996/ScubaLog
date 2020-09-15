import React,{useContext} from "react"
import {LogContext} from "./DiveLogProvider"
import { DiveLog } from "./DiveLog"


export const DiveLogDetail = (props) =>{
    const {diveLogs} = useContext(LogContext)

    const chosenDiveLog = parseInt(props.match.params.diveLogId)
    const diveLog = diveLogs.find(l => l.id === chosenDiveLog) || {}

    return(
        <DiveLog key={diveLog.id} diveLog={diveLog} />
    )
   


}