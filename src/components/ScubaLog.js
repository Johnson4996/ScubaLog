import React from "react"
import { ApplicationViews } from "../ApplicationViews"
import { Route, Routes, Navigate } from "react-router-dom"
import logo from "./images/logo.png"
import "./scubalog.css"

export const ScubaLog = () => (
    <>
        <Routes>
            <Route path="*" element={<ApplicationViews />}/>
        </Routes>
    </>
)
