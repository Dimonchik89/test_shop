import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const FilterItem = ({label, name, handleChecked}) => {

    return (
        <>
            <FormControlLabel
                control={<Checkbox />}
                label={label}
                name={name}
                onChange={handleChecked}
            />
        </>
    )
}
export default FilterItem;