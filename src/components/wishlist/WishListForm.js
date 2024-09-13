import React, { useContext, useRef } from "react";
import { WishContext } from "./WishlistProvider";
import { useNavigate } from "react-router-dom";

export const WishListForm = () => {
    const { addWish } = useContext(WishContext);
    const location = useRef("");
    const navigate = useNavigate(); 

    const constructNewWish = () => {
        if (location.current.value === "") {
            window.alert("Please enter a location");
        } else {
            addWish({
                location: location.current.value,
                userId: parseInt(localStorage.getItem("activeUser")),
            }).then(() => navigate("/")); 
        }
    };

    return (
        <form>
            <h2 className="wishFormTitle">Where would you like to go?</h2>
            <div className="form-group">
                <input
                    placeholder="Enter the Location"
                    type="text"
                    id="wishLocation"
                    ref={location}
                    required
                    autoFocus
                    className="form-control"
                />
            </div>
            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();
                    constructNewWish();
                }}
                className="submitWish"
            >
                Add to Wishlist
            </button>
            <button
                onClick={(evt) => {
                    evt.preventDefault();
                    navigate("/"); 
                }}
                className="submitWish"
            >
                Cancel
            </button>
        </form>
    );
};
