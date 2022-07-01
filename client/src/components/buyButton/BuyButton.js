import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { addGood } from "../../store/cart/cartSlice";
import { changeQuantity } from "../../store/device";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import useSort from "../../hooks/useSort";

const BuyButton = ({device, addGood, changeQuantity}) => {
    const buttonClass = device?.count ? "" : "device-card__button";
    const countedText = device?.count ? "" : "Товар закончился";
    const {sortGood} = useSort();

    const addDeviceToCart = () => {
        addGood(sortGood(device))
        changeQuantity()
    }

    return (
        <Box>
            <Button
                variant="contained"
                className={buttonClass}
                disabled={!device?.count}
                onClick={addDeviceToCart}
            >
                Купить
            </Button>
            <Typography
                variant="body2"
                component="span"
                mx={1}
            >
                {countedText}
            </Typography>
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addGood: bindActionCreators(addGood, dispatch),
    changeQuantity: bindActionCreators(changeQuantity, dispatch),
})

export default connect(null, mapDispatchToProps)(BuyButton)