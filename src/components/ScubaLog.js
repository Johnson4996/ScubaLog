import React from "react"
import { ApplicationViews } from "../ApplicationViews"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import logo from "./images/logo.png"
import "./scubalog.css"

export const ScubaLog = () => (
    <>
        <Routes>
            {/* Conditional Route for authenticated users */}
            <Route path="*" element={
                localStorage.getItem("activeUser") ? (
                    <>
                        <div className="header">
                            <img src={logo} className="logo" alt="logo" />
                            <button
                                className="logout-btn"
                                onClick={() => {
                                    localStorage.clear("activeUser");
                                    window.location.reload();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                        <ApplicationViews />
                    </>
                ) : (
                    <Navigate to="/login" />
                )
            } />

            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Register Route */}
            <Route path="/register" element={<Register />} />
        </Routes>
    </>
)
