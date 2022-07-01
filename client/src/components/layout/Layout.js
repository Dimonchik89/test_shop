import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import "../../style/layout.scss";

const Layout = () => {

    return (
        <Box className="layout">
            <Box>
                <Header/>
                <Box className="layout-content">
                    <Outlet/>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}
export default Layout;