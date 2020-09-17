import React, { useContext, useEffect } from "react"
import { WishContext } from "./WishlistProvider"
import "./wishlist.css"


export const WishListRender = () => {
    const { wishes, getWishes, deleteWish } = useContext(WishContext)

    return (
        <div className="wishList">
            <div className="wishlist--title">
            <h2>Wishlist</h2>
            <dialog>
                
            </dialog>
            <p id="addWishBtn">+</p>
            </div>
            <article className="wishListContainer">
                {
                    wishes.reverse().map(w => {
                        if (w.userId === parseInt(localStorage.getItem("activeUser"))) {
                            return (
                                <section className={`wish--${w.id}`}>
                                    <div className="wish--info">
                                        <h4>{w.location}</h4>
                                        <p id="deleteWishBtn" onClick={()=> deleteWish(w.id)}>x</p>
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