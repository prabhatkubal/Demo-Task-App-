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
    label: [],
    priority: [1],
    type: [1],
};

const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string()
        .required('Required'),
    description: Yup.string()
        .required('Required'),
    label: Yup.array()
        .required('Required'),
    priority: Yup.number()
        .integer()
        .required('Required'),
    type: Yup.number()
        .integer()
        .required('Required'),
});


const AddTaskForm = () => {
    const classes = useStyles();
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
                    <TextField variant='outlined' size="small" name='title' className={ classes.textfield } />
                    <Typography className={ classes.textfieldTypography }>
                        Description
                    </Typography>
                    <TextareaAutosize
                        className={ classes.textarea }
                        maxRows={ 5 }
                        name="description"
                        style={ { width: "100%", height: "86px", background: "#2B2C41" } }
                    />

                    <Grid style={ { marginTop: "10px" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            <div>prabhat</div>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <RadioGroup
                                    row
                                    name="type"
                                >
                                    <FormControlLabel value="1" control={ <Radio /> } label="Task" />
                                    <FormControlLabel value="2" control={ <Radio /> } label="Story" />
                                    <FormControlLabel value="3" control={ <Radio /> } label="Bugs" />
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
                                        value="1"
                                        control={ <Checkbox /> }
                                        label="Feature"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={ <Checkbox /> }
                                        label="Front end"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={ <Checkbox /> }
                                        label="Change request"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="4"
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