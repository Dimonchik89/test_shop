import React, {useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import {fetchFiltersDevices,filtersDevices,loading,error} from "../../../store/filtersDevices";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import DeviceCard from "../../deviceCard/DeviceCard";
import Spiner from "../../spiner/Spiner";
import ErrorPage from "../erroePage/ErrorPage";
import { Container, Grid, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

const FilterPage = ({fetchFiltersDevices, filtersDevices, loading, error}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const quaryParams = searchParams.get("category")

    useEffect(() => {
        fetchFiltersDevices(`?category=${quaryParams}&limit=61`)
    }, [])

    if(loading) {
        return <Spiner/>
    }

    if(error) {
        return <ErrorPage/>
    }
    const content = filtersDevices?.map(device => <DeviceCard key={nanoid()} device={device}/>)

    return (
        <Container>
            <Typography
                component="h2"
                variant="h3"
                align="center"
            >
                Filter Page
            </Typography>
            <Grid container spacing={2}>
                {content}
            </Grid>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    filtersDevices,
    loading,
    error
})

const mapDispatchToProps = (dispatch) => ({
    fetchFiltersDevices: bindActionCreators(fetchFiltersDevices, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);