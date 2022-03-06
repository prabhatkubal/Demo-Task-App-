import React from 'react'
import { Formik, Form } from "formik";
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
    MenuItem,
    InputLabel,
    Select
} from '@material-ui/core'
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import useStyles from "../Styles/addtaskform.styles"
import CreateBtn from '../FormsUI/CreateBtn/CreateBtn';
import CancelBtn from '../FormsUI/CancelBtn/CancelBtn';
// import Select from "../FormsUI/Select/index"
import Priorities from "../../Data/Priorities.json";
// import Checkbox from '../FormsUI/Checkbox'

const stylesRadio = theme => ({
    radio: {
        '&$checked': {
            color: '#09A79E'
        }
    },
    checked: {}
})

const INITIAL_FORM_STATE = {
    title: "",
    description: "",
    dueDate: "",
    label: [],
    priority: "",
    type: "",
};

const FORM_VALIDATION = Yup.object().shape({
    // title: Yup.string()
    //     .required('Required'),
    // description: Yup.string()
    //     .required('Required'),
    // // label: Yup.array()
    // //     .required('Select atleast one'),
    // priority: Yup.string()
    //     .required('Required'),
    // type: Yup.string()
    // .required('Required'),
});

const AddTaskForm = (props) => {
    const classes = useStyles();
    const radioClasses = stylesRadio();
    const setOpenPopup = props.setOpenPopup;

    // const classes = addFormStyles();
    return (
        <Formik initialValues={ INITIAL_FORM_STATE }
            validationSchema={ FORM_VALIDATION }
            onSubmit={ (values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values);
                    setSubmitting(false);

                })
            } }>
            <Form className={ classes.formContainer }>
                <Grid Container className={ classes.grid }>
                    <Typography>
                        Title
                    </Typography>
                    <TextField variant='outlined' color='secondary' size="small" name='title' className={ classes.textfield } />
                    <Typography className={ classes.textfieldTypography }>
                        Description
                    </Typography>
                    <TextareaAutosize
                        className={ classes.textarea }
                        name='description'
                        maxRows={ 5 }
                        aria-label="maximum height"
                        style={ { width: "100%", height: "86px", background: "#2B2C41" } }
                    />

                    <Grid style={ { marginTop: "10px" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            <Typography color='secondary'>
                                Date
                            </Typography>
                            <TextField type="date" color='secondary' variant='outlined' size="small" name='dueDate' />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl>
                                <Typography color='secondary' >Type</Typography>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="type"
                                >
                                    <FormControlLabel
                                        value="1"
                                        control={ <Radio color='primary' /> }
                                        label="Task" />
                                    <FormControlLabel
                                        value="2"
                                        control={ <Radio color='primary' /> }
                                        label="Story" />
                                    <FormControlLabel
                                        value="3"
                                        control={ <Radio color='primary' /> }
                                        label="Bug" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid style={ { marginTop: "10px", } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                            {/* <Select
                                style={ { marginTop: "20px", width: 250 } }
                                name="Priority"
                                label="Priority"
                                options={ Priorities }
                            /> */}
                            <FormControl fullWidth>
                                <Typography color='secondary' >Priority</Typography>
                                <Select
                                    color='secondary'
                                    size="small"
                                    style={ { marginTop: "5px", width: 250 } }
                                    variant='outlined'
                                    fullWidth="true"
                                    name="priority"
                                    value={ 1 }
                                >
                                    <MenuItem value="1">High</MenuItem>
                                    <MenuItem value="2">Medium</MenuItem>
                                    <MenuItem value="3">Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl component="fieldset">
                                <Typography component="legend" color='secondary'>Label</Typography>
                                <FormGroup aria-label="position" row name="label">
                                    <FormControlLabel
                                        value="1"
                                        control={ <Checkbox color='primary' /> }
                                        label="Feature"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={ <Checkbox color='primary' /> }
                                        label="Front end"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={ <Checkbox color='primary' /> }
                                        label="Change request"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={ <Checkbox color='primary' /> }
                                        label="Back end"
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid style={ { marginTop: "10px", justifyContent: "center" } } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 1, md: 3 } }>
                        <CancelBtn onClick={ () => setOpenPopup(false) } >Cancel</CancelBtn>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <CreateBtn >Create</CreateBtn>
                    </Grid>
                </Grid>
            </Form>
        </Formik >
    )
}

export default AddTaskForm