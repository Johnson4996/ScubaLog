import React, { useEffect, useState } from "react"

export const LogContext = React.createContext()


export const DiveLogProvider = (props) => {
    const [diveLogs, setDiveLogs] = useState([])

    const getDiveLogs = () => {
        return fetch("http://localhost:8088/divelogs")
            .then(res => res.json)
            .then(setDiveLogs)
    }

    const addDiveLog = (divelog) => {
        return fetch("http://localhost:8088/divelogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(divelog)
        })
            .then(getDiveLogs)
    }

    useEffect(() => {
        getDiveLogs()
    }, [])

    useEffect(() => {

    }, [diveLogs])

    return (
        <LogContext.Provider value={{
            diveLogs, addDiveLog
        }}>
            {props.children}
        </LogContext.Provider>
    )

}