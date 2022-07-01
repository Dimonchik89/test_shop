import { Box, Typography } from "@mui/material";
import React from "react";

const DevicePageContent = ({img, title, description}) => {

    return (
        <>
            <Box className="device-page__img-wrapper ">
                <img src={img} alt={title} />
            </Box>
            <Box className="device-page__description-wrapper">
                <Typography
                    variant="body1"
                    component="span"
                >
                    {description}
                </Typography>
            </Box>
        </>
    )
}
export default DevicePageContent;