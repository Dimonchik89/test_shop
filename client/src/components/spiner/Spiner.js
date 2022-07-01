import React from "react";
import { Box } from "@mui/material";
import "../../style/spiner.scss"

const Spiner = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Box>

    )
}
export default Spiner;