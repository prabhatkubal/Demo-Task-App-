import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: "#09A79E",
        '&:hover': {
            background: "#09A79E"
        },
        borderRadius: 2,
        marginTop: 30
    }
})

const CreateBtn = ({
    children,
    ...otherProps
}) => {
    const classes = useStyles();
    const { submitForm } = useFormikContext();

    const handelSubmit = () => {
        submitForm();
    }

    const configButton = {
        variant: 'contained',
        onClick: handelSubmit
    }

    return (
        <Button className={ classes.root } { ...configButton }>
            { children }
        </Button>
    );
};

export default CreateBtn;