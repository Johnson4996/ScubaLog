import React, { useContext, useState, useEffect } from "react";
import { LogContext } from "./DiveLogProvider";
import { SuitContext } from "../suittype/SuitTypeProvider";
import { TankContext } from "../tanktype/TankTypeProvider";
import { useParams, useNavigate } from "react-router-dom";

export const DiveLogForm = () => {
    const { diveLogs, getDiveLogs, editLog, addDiveLog } = useContext(LogContext);
    const { suitTypes, getSuitTypes } = useContext(SuitContext);
    const { getTankTypes, tankTypes } = useContext(TankContext);
    const [diveLog, setDiveLog] = useState({});
    
    const { diveLogId } = useParams(); 
    const navigate = useNavigate(); 

    // Determine if we are in edit mode
    const editMode = diveLogId ? true : false;

    // Handle user input changes
    const handleControlledInputChange = (event) => {
        const newDiveLog = { ...diveLog };
        newDiveLog[event.target.name] = event.target.value;
        setDiveLog(newDiveLog);
    };

    // Grab the log requested in edit mode
    const getLogInEditMode = () => {
        if (editMode) {
            const selectedLog = diveLogs.find((l) => l.id === parseInt(diveLogId)) || {};
            setDiveLog(selectedLog);
        }
    };

    useEffect(() => {
        getDiveLogs();
        getSuitTypes();
        getTankTypes();
    }, []);

    useEffect(() => {
        getLogInEditMode();
    }, [diveLogs]);

    // If in edit mode, PUT changes, otherwise POST a new log
    const constructNewLog = () => {
        const suitTypeId = parseInt(diveLog.suitTypeId);
        const tankTypeId = parseInt(diveLog.tankTypeId);

        if (suitTypeId === 0 || tankTypeId === 0) {
            window.alert("Please select a suit and tank type");
        } else {
            if (editMode) {
                editLog({
                    id: diveLog.id,
                    title: diveLog.title,
                    date: diveLog.date,
                    location: diveLog.location,
                    surfaceInterval: diveLog.surfaceInterval,
                    pressureGroupEnter: diveLog.pressureGroupEnter,
                    pressureGroupExit: diveLog.pressureGroupExit,
                    bottomTime: diveLog.bottomTime,
                    maxDepth: diveLog.maxDepth,
                    avgDepth: diveLog.avgDepth,
                    airEnter: diveLog.airEnter,
                    airExit: diveLog.airExit,
                    tankSize: diveLog.tankSize,
                    tankTypeId: tankTypeId,
                    weight: diveLog.weight,
                    suitTypeId: suitTypeId,
                    weatherConditions: diveLog.weatherConditions,
                    comments: diveLog.comments,
                    verifyName: diveLog.verifyName,
                    verifyCert: diveLog.verifyCert,
                    verifyType: diveLog.verifyType,
                    userId: parseInt(localStorage.getItem("activeUser")),
                }).then(() => navigate("/"));
            } else {
                addDiveLog({
                    title: diveLog.title,
                    date: diveLog.date,
                    location: diveLog.location,
                    surfaceInterval: diveLog.surfaceInterval,
                    pressureGroupEnter: diveLog.pressureGroupEnter,
                    pressureGroupExit: diveLog.pressureGroupExit,
                    bottomTime: diveLog.bottomTime,
                    maxDepth: diveLog.maxDepth,
                    avgDepth: diveLog.avgDepth,
                    airEnter: diveLog.airEnter,
                    airExit: diveLog.airExit,
                    tankSize: diveLog.tankSize,
                    tankTypeId: tankTypeId,
                    weight: diveLog.weight,
                    suitTypeId: suitTypeId,
                    weatherConditions: diveLog.weatherConditions,
                    comments: diveLog.comments,
                    verifyName: diveLog.verifyName,
                    verifyCert: diveLog.verifyCert,
                    verifyType: diveLog.verifyType,
                    userId: parseInt(localStorage.getItem("activeUser")),
                }).then(() => navigate("/"));
            }
        }
    };

    return (
        <>
            <h2 className="diveLogForm__title">{editMode ? "Update Log" : "New Log"}</h2>
            <form className="diveLogForm">
                {/* Form fields */}
                <button
                    type="submit"
                    onClick={(evt) => {
                        evt.preventDefault();
                        constructNewLog();
                    }}
                    className="btn btn-primary btnAddLog"
                >
                    {editMode ? "Save Changes" : "Create New Entry"}
                </button>
                <button
                    onClick={(evt) => {
                        evt.preventDefault();
                        navigate("/divelog/all");
                    }}
                    className="btn btn-primary btnCancel"
                >
                    Back to All Logs
                </button>
            </form>
        </>
    );
};
