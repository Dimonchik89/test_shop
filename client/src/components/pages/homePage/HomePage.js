import React from "react";
import { Container, Grid } from "@mui/material";
import Devices from "../../devices/Devices";
import FilterBloc from "../../filterBloc/FilterBloc";

const HomePage = () => {

    return (
        <Container maxWidth="xl">
            <Grid container spacing="2">
                <Grid item xs={3}>
                    <FilterBloc/>
                </Grid>
                <Grid item xs={9}>
                    <Devices/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HomePage;