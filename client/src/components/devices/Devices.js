import React, {useEffect, useState, memo} from "react";
import ErrorPage from "../pages/erroePage/ErrorPage";
import Spiner from "../spiner/Spiner";
import DeviceCard from "../deviceCard/DeviceCard";
import { fetchDevices, devices, countDevices, loading, error } from "../../store/devices";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "@reduxjs/toolkit";
import {connect} from "react-redux";
import { Grid } from "@mui/material";

const Devices = memo(({ fetchDevices, devices, countDevices, loading, error }) => {
    const [page, setPage] = useState(1)
    const [change, setChanget] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if(change) {
            if(devices?.length < countDevices) {
                fetchDevices(`?page=${page}`)
                setPage(prevPage => prevPage + 1);
                setChanget(false)
            }
        }
    }, [change])

    const handleScroll = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 5) {
            setChanget(true)
        }
    }

    if(!devices.length && loading) {
        return <Spiner/>
    }
    if(!devices.length && error) {
        return <ErrorPage/>
    }
    const content = devices?.map(device => <DeviceCard key={device.id} device={device}/>)

    return (
        <>
            <Grid container spacing={2}>
                {content}
            </Grid>
            {change && devices.length < countDevices ? <Spiner/> : null}
        </>

    )
})

const mapStateToProps = createStructuredSelector({
    devices,
    countDevices,
    loading,
    error
})

const mapDispatchToProps = (dispatch) => ({
    fetchDevices: bindActionCreators(fetchDevices, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Devices);