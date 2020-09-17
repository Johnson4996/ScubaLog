import React, { useContext } from "react"
import { Link } from "react-router-dom"
import {SuitContext} from "../suittype/SuitTypeProvider"
import {TankContext} from "../tanktype/TankTypeProvider"

export const DiveLog = ({ diveLog }) => {
    const {suitTypes} = useContext(SuitContext)
    const {tankTypes} = useContext(TankContext)

    const foundSuit = suitTypes.map(s =>  s.id === diveLog.suitTypeId ? s.name: "" )
    const foundTank = tankTypes.map(t =>  t.id === diveLog.tankTypeId ? t.name: "" )
    
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
                <p>{foundTank}</p>
                <p>{diveLog.weight}</p>
                <p>{foundSuit}</p>
                <p>{diveLog.weatherConditions}</p>
                <p>{diveLog.comments}</p>
                <p>{diveLog.verifyName}</p>
                <p>{diveLog.verifyCert}</p>
                <p>{diveLog.verifyType}</p>
            </article>
        </>
    )
}

