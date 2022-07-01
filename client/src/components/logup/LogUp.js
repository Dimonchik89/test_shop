import React, {useState} from "react";
import { logUp, closeLogUp, cart } from "../../store/cart";
import { bindActionCreators } from "@reduxjs/toolkit";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Box, Modal } from "@mui/material";
import FormCustom from "../formCustom/FormCustom";
import FormSuccess from "../formCustom/FormSuccess";
import useHttp from "../../hooks/useHttp";
import "../../style/logUp.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const LogUp = ({ logUp, closeLogUp, cart}) => {
    const [sendComplete, setSendComplete] = useState(false)
    const {postRequest} = useHttp();

    const onSubmit = () => {
        cart.map(item => {
            postRequest(item)

        })
        setSendComplete(true)
    }

    const content = sendComplete ? <FormSuccess/> : <FormCustom onSubmit={onSubmit} title="Введите свой email"/>

    return (
        <Modal
            open={logUp}
            onClose={() => closeLogUp()}
        >
            <Box sx={style}>
                {content}
            </Box>
        </Modal>
    )
}

const mapStateToProps = createStructuredSelector({
    logUp,
    cart
})

const mapDispatchToProps = (dispatch) => ({
    closeLogUp: bindActionCreators(closeLogUp, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LogUp);