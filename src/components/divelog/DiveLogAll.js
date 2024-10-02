
//display all dive logs in the database for the current user

import React, { useEffect, useContext } from "react"
import { LogContext } from "./DiveLogProvider"
import { Link } from "react-router-dom"



export const DiveLogAll = () => {
    const { diveLogs, getDiveLogs } = useContext(LogContext)

    useEffect(() => {
        getDiveLogs()
    }, [])

    return (
        <>
            <Link className="log-link"
                to={{ pathname: `/`, }}>
                <p>back</p>
            </Link>
            <h2>All Dives</h2>
            <div className="line"></div>
            <div className="allDiveLogs">
                <Link className="add-log-link"
                    to={{ pathname: `/divelog/new`, }}>
                    <div className="plusIcon"><br/>Add New Dive Log Plus icon</div>
                </Link>
                {


                    diveLogs.reverse().map(dl => {
                            return (
                                <Link key={dl.id} className="log-link-all"
                                    to={{
                                        pathname: `/divelog/${dl.id}`,
                                        state: { chosenLog: dl }
                                    }}>
                                    <section className="logText">
                                        <h3 className="logTitle">{dl.title}</h3>
                                        <p className="log--date">{dl.date}</p>
                                        <p className="log--location">{dl.location}</p>
                                    </section>
                                </Link>
                            )
                    })
                }
            </div>
        </>
    )


}