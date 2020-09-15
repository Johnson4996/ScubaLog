import React,{useContext, useEffect} from "react"
import {LogContext} from "./DiveLogProvider"
import "./divelog.css"
import { Link } from "react-router-dom"



export const DiveLogList = () =>{
const {diveLogs,getDiveLogs} = useContext(LogContext)

useEffect(() => {
    getDiveLogs()
}, [])

return(
    <>
    <h2>Dashboard</h2>
    <div className="recentDives">
        <div className="recentDivesTop">
        <h4>Recent Dives</h4>
        <Link to={{
    pathname: `/divelog/all`,
        }}>
        <p className="viewAllBtn">View All</p>
        </Link>
        
        <p className="addLogBtn">+</p> 
        
        </div>
        <article className= "logListContainer">
            {
                diveLogs.reverse().map(dl => {
                    for(let i = 0;i<=5;i++){
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

                    }
                    
                    
                })
            }
        </article>
    </div>
    </>
)


}
