import React,{useContext, useEffect} from "react"
import {LogContext} from "./DiveLogProvider"
import {DiveLog} from "./DiveLog"
import "./divelog.css"



export const DiveLogList = () =>{
const {diveLogs,getDiveLogs} = useContext(LogContext)

useEffect(() => {
    getDiveLogs()
}, [])

return(
    <div className="recentDives">
        <div className="recentDivesTop">
        <h4>Recent Dives</h4>
        <button className="viewAllBtn">View All</button>
        </div>
        
        <article className= "logListContainer">
            {
                diveLogs.map(dl => {
                    return(
                        <DiveLog key={dl.id} diveLog={dl}  />
                    )
                })
            }
        </article>
    </div>
)


}
