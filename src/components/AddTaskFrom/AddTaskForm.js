import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import {
    TextField,
    TextareaAutosize,
    withStyles,
    makeStyles,
    Container,
    Grid,
    Typography,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox,
    FormGroup,
} from '@material-ui/core'
import useStyles from "../Styles/addtaskform.styles"
import CreateBtn from '../FormsUI/CreateBtn/CreateBtn';
import CancelBtn from '../FormsUI/CancelBtn/CancelBtn';
import Select from "../FormsUI/Select/index"
import Priorities from "../../Data/Priorities.json"
// import Checkbox from '../FormsUI/Checkbox'

const INITIAL_FORM_STATE = {
    title: "",
    description: "",
    dueDate: "",
    label: [],
    priority: "",
    type: 1
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email.')
        .required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    addressLine1: Yup.string()
        .required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string()
        .required('Required'),
    state: Yup.string()
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    arrivealDate: Yup.date()
        .required('Required'),
    departureDate: Yup.date()
        .required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
});


const AddTaskForm = () => {
    const classes = useStyles();

    const configDateTimePicker = {
        type: 'data',
        variant: 'outlined',
        InputLabelProps: {
            shrink: true
        }
    };
    // const classes = addFormStyles();
    return (
        <Formik initialValues={ {
            ...INITIAL_FORM_STATE
        } }
            validationSchema={ FORM_VALIDATION }
            onSubmit={ values => {
                console.log(values);
            } }>
            <Form className={ classes.formContainer }>
                <Grid Container className={ classes.grid }>
                    <Typography className={ classes.textfieldTypography }>
                        Title
                    </Typography>
                    <TextField variant='outlined' size="small" name='description' className={ classes.textfield } />
                    <Typography className={ classes.textfieldTypography }>
                        Description
                    </Typography>
                    <TextareaAutosize
                        className={ classes.textarea }
                        maxRows={ 5 }
                        aria-label="maximum height"
                        style={ { width: "100%", height: "86px", background: "#2B2C41" } }
                    />

                    <Grid style={ { marginTop: "10px" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            <div>prabhat</div>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={ <Radio /> } label="Female" />
                                    <FormControlLabel value="male" control={ <Radio /> } label="Male" />
                                    <FormControlLabel value="other" control={ <Radio /> } label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid style={ { marginTop: "10px", } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            <Select
                                style={ { marginTop: "20px", width: 250 } }
                                name="Priority"
                                label="Priority"
                                options={ Priorities }
                            />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Label placement</FormLabel>
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                        value="end"
                                        control={ <Checkbox /> }
                                        label="Feature"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={ <Checkbox /> }
                                        label="Front end"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={ <Checkbox /> }
                                        label="Change request"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={ <Checkbox /> }
                                        label="Back end"
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid style={ { marginTop: "10px", justifyContent: "center" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 1, md: 3 } }>
                        <CancelBtn>Cancel</CancelBtn>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <CreateBtn>Create</CreateBtn>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}

export default AddTaskForm