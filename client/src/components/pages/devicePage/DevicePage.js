import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { fetchDevice, device, loading, error } from "../../../store/device";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Spiner from "../../spiner/Spiner";
import ErrorPage from "../erroePage/ErrorPage";
import DevicePageHeader from "./DevicePageHeader";
import DevicePageContent from "./DevicePageContent";
import DevicePageBuy from "./DevicePageBuy";
import "../../../style/devicePage.scss";

const DevicePage = ({fetchDevice, device, loading, error}) => {
    const location = useLocation();

    useEffect(() => {
        fetchDevice(location.pathname)
    }, [])

    if(loading) {
        return <Spiner/>
    }

    if(error) {
        return <ErrorPage/>
    }

    return (
        <Container maxWidth="xl">
            <Box>
                <DevicePageHeader brand={device?.brand} title={device?.title}/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <DevicePageContent
                            img={device?.img}
                            title={device?.title}
                            description={device?.description}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DevicePageBuy
                            device={device}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    device,
    loading,
    error
})

const mapDispatchToProps = (dispatch) => ({
    fetchDevice: bindActionCreators(fetchDevice, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DevicePage);