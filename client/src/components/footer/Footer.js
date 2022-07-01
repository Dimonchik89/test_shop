import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "../../style/footer.scss";

const Footer = () => {
    return (
        <Box className="footer">
            <Container maxWidth="xl">
                <Typography
                    component="h3"
                    variant="h3"
                    color="white"
                    align="center"
                >
                    footer
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer;