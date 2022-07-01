import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { removeGood } from "../../store/cart";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import "../../style/cart.scss";

const CartItem = ({device, removeGood}) => {
    const summa = device?.price * device?.quantity;

    return(
        <Box className="cart-item">
            <Box>
                <img className="cart-item__img" src={device?.img} alt={device?.title} />
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    component="span"
                >
                    {`${device?.brand} ${device?.title}`}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    component="span"
                >
                    {`${device?.price}₴`}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    component="span"
                >
                    {`${device?.quantity}шт`}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    component="span"
                >
                    {`итого: ${summa}₴` }
                </Typography>
            </Box>
            <Box>
                <IconButton
                    color="error"
                    component="span"
                    onClick={() => removeGood(device?.id)}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeGood: bindActionCreators(removeGood, dispatch)
})

export default connect(null, mapDispatchToProps)(CartItem);