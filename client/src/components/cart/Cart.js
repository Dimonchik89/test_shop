import React from "react";
import { closeCart, open, cart } from "../../store/cart";
import { bindActionCreators } from "@reduxjs/toolkit";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";
import CartItem from "./CartItem";
import CartDesign from "./CartDesign";
import { nanoid } from "@reduxjs/toolkit";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Cart = ({closeCart, open, cart}) => {

    const content = cart.length ?
        cart.map(device => <CartItem key={nanoid()} device={device}/>) :
        <Box className="cart-item__img-empty"><img src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg" alt="cart"/></Box>

    const totalCost = cart.reduce((acc, item) => {
        return acc += (item.price * item.quantity)
    }, 0)

    const design = cart.length ? <CartDesign totalCost={totalCost}/> : null;

    return (
        <Modal
            open={open}
            onClose={() => closeCart()}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Корзина
                </Typography>
                <Box className="cart-content">
                    {content}
                </Box>
                {design}
            </Box>
        </Modal>
    )
}

const mapStateToProps = createStructuredSelector({
    open,
    cart
})

const mapDispatchToProps = (dispatch) => ({
    closeCart: bindActionCreators(closeCart, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);