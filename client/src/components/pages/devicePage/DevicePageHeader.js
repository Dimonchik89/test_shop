import { Box, Typography } from "@mui/material";
import React from "react";

const DevicePageHeader = ({brand, title}) => {

    return (
            <Box className="device-page__header">
                <Typography
                    variant="h3"
                    component="h3"
                >
                    {`${brand} ${title}`}
                </Typography>
            </Box>
    )
}
export default DevicePageHeader;