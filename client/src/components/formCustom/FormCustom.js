import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Form, Field } from 'react-final-form';

const required = value => (value ? undefined : 'Required');
const validateEmail = (email) => {
    if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
        return 'Invalid email address'
    } else {
        return undefined
    }
};
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


const FormCustom = ({onSubmit, title}) => {

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>
            <Form
            onSubmit={onSubmit}
            render={({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="firstName" validate={composeValidators(required, validateEmail)}>
                        {({ input, meta }) => (
                        <Box className="form-container">
                            <TextField
                                id="outlined-basic"
                                label={meta.error && meta.touched ? meta.error : "email"}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                {...input}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={submitting}
                                sx={{my: "1rem"}}
                            >
                                Заказать
                            </Button>
                        </Box>
                        )}
                    </Field>
                </form>
            )}
        />
        </>

    )
}
export default FormCustom;