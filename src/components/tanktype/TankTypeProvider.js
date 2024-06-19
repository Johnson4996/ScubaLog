
//provider for tank types

import React, { useEffect, useState } from "react"

export const TankContext = React.createContext()


export const TankTypeProvider = (props) => {
    const [tankTypes, setTankTypes] = useState([])

    const getTankTypes = () => {
        return fetch(`${process.env.REACT_APP_API_URL}/tanktypes`)
            .then(res => res.json())
            .then(setTankTypes)
    }

    useEffect(() => {
        getTankTypes()
    }, [])

    useEffect(() => {

    }, [tankTypes])

    return (
        <TankContext.Provider value={{
            tankTypes, getTankTypes
        }}>
            {props.children}
        </TankContext.Provider>
    )

}