import React, { useEffect, useState } from "react"

export const WishlistContext = React.createContext()


export const WishlistProvider = (props) => {
    const [wishes, setWishes] = useState([])

    const getWishes = () => {
        return fetch("http://localhost:8088/wishlist")
            .then(res => res.json)
            .then(setWishes)
    }

    const addWish = (wish) => {
        return fetch("http://localhost:8088/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wish)
        })
            .then(getWishes)
    }

    useEffect(() => {
        getWishes()
    }, [])

    useEffect(() => {

    }, [wishes])

    return (
        <WishContext.Provider value={{
            wishes, setWishes
        }}>
            {props.children}
        </WishContext.Provider>
    )

}