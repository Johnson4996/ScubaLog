import React, { useContext } from "react"
import { LogContext } from "./DiveLogProvider"
import { DiveLog } from "./DiveLog"


export const DiveLogDetail = (props) => {
    const { diveLogs, deleteLog } = useContext(LogContext)

    const chosenDiveLog = parseInt(props.match.params.diveLogId)
    const diveLog = diveLogs.find(l => l.id === chosenDiveLog) || {}

    return (
        <>
            <DiveLog key={diveLog.id} diveLog={diveLog} />
            <button>Edit Log</button>
            <button onClick={() => deleteLog(diveLog.id).then(() => props.history.push("/divelog/all"))}>Delete Log</button>
        </>
    )



}