import React from "react"

export const DiveLog = ({diveLog}) =>{

    return(
        <section className = {diveLog.id}>
            <h3 className="logNumber">{diveLog.id}</h3>
            <p className="log--date">{diveLog.date}</p>
            <p className="log--location">{diveLog.location}</p>
        </section>
    )


}