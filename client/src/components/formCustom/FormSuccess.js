import React from "react";
import { Box, Typography } from "@mui/material";

const FormSuccess = () => {

    return (
        <Box>
            <Typography
                variant="h5"
                component="h5"
                color="primary"
                align="center"
            >
                Заказ отправлен в обработку
            </Typography>
        </Box>
    )
}
export default FormSuccess;