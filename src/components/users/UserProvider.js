
//handles users for tailored use in application

import React, { useEffect, useState } from "react"

export const UserContext = React.createContext()


export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch(`${process.env.REACT_APP_API_URL}/users`)
            .then(res => res.json)
            .then(setUsers)
    }

    const addUser = (user) => {
        return fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(getUsers)
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {

    }, [users])

    return (
        <UserContext.Provider value={{
            users, setUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )

}