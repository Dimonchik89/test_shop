import React from "react";
import {AppBar, Badge, Box, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { openCart } from "../../store/cart";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { cart } from "../../store/cart";
import { createStructuredSelector } from "reselect";

const Header = ({openCart, cart}) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{color: "white"}}>
                            Shop
                        </Link>
                    </Typography>
                    <IconButton
                        sx={{color: "white"}}
                        component="span"
                        onClick={() => openCart()}
                    >
                        <Badge badgeContent={cart.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    cart
})

const mapDispatchToProps = (dispatch) => ({
    openCart: bindActionCreators(openCart, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);