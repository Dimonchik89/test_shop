import React from "react";
import { Box, Typography } from "@mui/material";
import BuyButton from "../../buyButton/BuyButton";

const DevicePageBuy = ({device}) => {

    return (
        <Box className="device-page__button-block">
            <BuyButton device={device}/>
            <Typography
                variant="h3"
                component="h3"
            >
                {`${device?.price}₴`}
            </Typography>
            {
                device?.count ?
                    <Typography>
                        {`Осталось: ${device?.count}шт`}
                    </Typography> :
                null
            }
        </Box>
    )
}
export default DevicePageBuy;