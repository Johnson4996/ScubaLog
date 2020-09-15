import React, { useEffect, useContext } from "react"
import {LogContext } from "./DiveLogProvider"
import { Link } from "react-router-dom"

export const DiveLogAll = () =>{
    const {diveLogs,getDiveLogs} = useContext(LogContext)

    useEffect(() => {
        getDiveLogs()
    }, [])

    return(
        <>
            <h2>All Dives</h2>
            <div className="allDiveLogs">
            {
                diveLogs.reverse().map(dl => {
                  
                        if(dl.userId === parseInt(localStorage.getItem("activeUser"))){
                            return(
                                <Link className="log-link"
                                to={{
                                    pathname: `/divelog/${dl.id}`,
                                    state: { chosenLog: dl }
                                }}>
                            <section className = {dl.id}>
                                <h3 className="logTitle">{dl.title}</h3>
                                <p className="log--date">{dl.date}</p>
                                <p className="log--location">{dl.location}</p>
                            </section>
                            </Link>
                                )
                        }
                    
                    
                })
            }
            </div>
        </>
    )


}