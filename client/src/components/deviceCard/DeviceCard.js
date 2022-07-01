import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BuyButton from "../buyButton/BuyButton";
import {Link} from "react-router-dom";
import "../../style/deviceCard.scss";

const DeviceCard = ({device}) => {
    const {id, title, img, price} = device;

    return (
        <Grid item xs={3}>
            <Box className="device-card">
                <Link to={`/${id}`} className="device-card__link">
                    <Box>
                        <img
                            src={img}
                            alt={title}
                            className="device-card__img"
                        />
                    </Box>
                    <Box className="device-card__content">
                        <Typography
                            variant="h5"
                            components="h5"
                            className="device-card__title"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="h6"
                            className="device-card__price"
                        >
                            {`${price}₴`}
                        </Typography>
                    </Box>
                </Link>
                <BuyButton device={device}/>
            </Box>
        </Grid>
    )
}

export default DeviceCard;