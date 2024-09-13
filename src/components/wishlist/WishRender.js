
//renders wish list to the dashboard


import React, { useContext} from "react"
import { WishContext } from "./WishlistProvider"
import "./wishlist.css"
import { Link } from "react-router-dom"





export const WishListRender = (props) => {
    const { wishes, getWishes, deleteWish } = useContext(WishContext)

    return (
        <div className="wishList">
            <div className="wishlist--title">
            <h2>Wishlist</h2>
            <Link className="addWishLink"to={{
                        pathname: `/wishlist/new`,
                    }}>
                        <p className="wishBtn">Add new</p>
                    </Link>
            </div>
            <article className="wishListContainer">
                {
                    wishes.reverse().map(w => {
                        if (w.userId === parseInt(localStorage.getItem("activeUser"))) {
                            return (
                                <section className={`wish--${w.id}`}>
                                    <div className="wish--info">
                                        <h4>{w.location}</h4>
                                        <p className="wishBtn deleteWishBtn" onClick={()=> deleteWish(w.id)}>Delete</p>
                                    </div>
                                </section>
                            )
                        }
                    })
                }
            </article>


        </div>




    )


}