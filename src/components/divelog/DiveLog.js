import React from "react"
import { Link } from "react-router-dom"

export const DiveLog = ({ diveLog }) => {
    return (
        <>
            <Link className="log-link"
                to={{ pathname: `/`, }}>
                <button>Dashboard</button>
            </Link>
            <article className="diveLogDetails">
                <p>{diveLog.title}</p>
                <p>{diveLog.date}</p>
                <p>{diveLog.location}</p>
                <p>{diveLog.surfaceInterval}</p>
                <p>{diveLog.pressureGroupEnter}</p>
                <p>{diveLog.pressureGroupExit}</p>
                <p>{diveLog.bottomTime}</p>
                <p>{diveLog.maxDepth}</p>
                <p>{diveLog.avgDepth}</p>
                <p>{diveLog.airEnter}</p>
                <p>{diveLog.airExit}</p>
                <p>{diveLog.tankSize}</p>
                <p>{diveLog.tankTypeId}</p>
                <p>{diveLog.weight}</p>
                <p>{diveLog.suitTypeId}</p>
                <p>{diveLog.weatherConditions}</p>
                <p>{diveLog.comments}</p>
                <p>{diveLog.verifyName}</p>
                <p>{diveLog.verifyCert}</p>
                <p>{diveLog.verifyType}</p>
            </article>
        </>
    )
}

