import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { closeCart, openLogUp } from "../../store/cart";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const CartDesign = ({ totalCost, closeCart, openLogUp }) => {
    const handleChangeModal = () => {
        closeCart();
        openLogUp()
    }

    return (
        <>
            <Box>
                <Typography
                    variant="h5"
                    component="h5"
                    align="right"
                >
                    {`К оплате ${totalCost}₴`}
                </Typography>
            </Box>
            <Box>
                <Button
                    variant="contained"
                    onClick={handleChangeModal}
                >
                    Оформить заказ
                </Button>
            </Box>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    closeCart: bindActionCreators(closeCart, dispatch),
    openLogUp: bindActionCreators(openLogUp, dispatch),
})

export default connect(null, mapDispatchToProps)(CartDesign);