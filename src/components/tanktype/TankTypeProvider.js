import React, { useEffect, useState } from "react"

export const TankContext = React.createContext()


export const TankTypeProvider = (props) => {
    const [tankTypes, setTankTypes] = useState([])

    const getTankTypes = () => {
        return fetch("http://localhost:8088/tanktypes")
            .then(res => res.json)
            .then(setTankTypes)
    }

    useEffect(() => {
        getTankTypes()
    }, [])

    useEffect(() => {

    }, [tankTypes])

    return (
        <TankContext.Provider value={{
            tankTypes
        }}>
            {props.children}
        </TankContext.Provider>
    )

}